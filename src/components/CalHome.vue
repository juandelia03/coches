<template>
  <div class="cal">
    <Information @infoSubmited="personalInfo" v-if="steps.step1" />
    <div class="view" v-if="steps.step2">
      <CalendarComponent
        @dateSelected="newDate"
        @backToForm="
          () => {
            steps.step1 = true;
            steps.step2 = false;
          }
        "
        @nextToEnd="end"
        @check="checkAvailabilty"
      />
    </div>
    <FinalScreen
      v-if="steps.step3"
      :client="clientInformation"
      :date="fecha"
      :hora="hour"
      @cancel="
        () => {
          steps.step1 = true;
          steps.step2 = false;
          steps.step3 = false;
        }
      "
      @submit="pushToDb"
    />
  </div>
  <router-view />
</template>

<script>
/* eslint-disable */

import CalendarComponent from "../components/Calendar.vue";
import Information from "../components/Information.vue";
import FinalScreen from "../components/FinalScreen.vue";
import firebase from "firebase/app";
import firestore from "firebase/firestore";
import Swal from "sweetalert2";
export default {
  name: "App",
  components: {
    CalendarComponent,
    Information,
    FinalScreen,
  },
  data() {
    return {
      db: [],
      fecha: new Date(),
      hour: "",
      clientInformation: {
        name: "",
        last: "",
        cell: "",
        email: "",
        message: "",
      },
      steps: {
        step1: true,
        step2: false,
        step3: false,
      },
    };
  },
  methods: {
    //guarda la fecha
    newDate(e) {
      this.fecha = e;
      this.hour = this.fecha.getHours().toString();
    },
    //personalInfo guarda la data del usuario y pasa al calendario
    personalInfo(e) {
      this.clientInformation = e;
      this.steps.step1 = false;
      this.steps.step2 = true;
      window.scrollTo(0, 0);
    },
    //pushToDb corre las funciones necesarias al momento de hacer una reserva
    async pushToDb() {
      this.add();
      this.idCounter();
      Swal.fire({
        title: "Done!",
        text: "Your appointment was booked",
        icon: "success",
        confirmButtonText: "Close",
      });
      setTimeout(() => {
        location.reload();
      }, 3000);
    },
    //add pushea a la db cada objeto de reserva (pseudo func)
    add() {
      let each = this.fecha.toString().split(" ");
      each = [each[0], each[1], each[2], each[3]];
      each = each.join("-");
      firebase
        .firestore()
        .collection("appointments")
        .doc(this.clientInformation.patente.toUpperCase().replace(/[^\w\s!?]/g, ""))
        .set({
          ClientsInfo: this.clientInformation,
          date: this.fecha,
          parsedDate: each,
          hour: this.hour,
        })
        .then(() => {
          Swal.fire({
            title: "Done!",
            text: "Your appointment was booked",
            icon: "success",
            confirmButtonText: "Close",
          });
          setTimeout(() => {
            location.reload();
          }, 1000);
        })
        .catch(() => {
          Swal.fire({
            title: "Error!",
            text: "An error ocurred",
            icon: "error",
            confirmButtonText: "Close",
          });
          setTimeout(() => {
            location.reload();
          }, 1000);
        });
    },
    //Id counter actualiza el contador de id al final de cada pedido (pseudo func)
    idCounter() {
      const id = this.clientInformation.id.trim().replace(/[^0-9]/g, "");
      let counter = 0;
      let alreadyIs = false;
      this.db.forEach((item) => {
        if (item.ClientsInfo.id == id) {
          counter++;
          if (
            item.ClientsInfo.patente.toUpperCase().replace(/[^\w\s!?]/g, "") ==
            this.clientInformation.patente.toUpperCase().replace(/[^\w\s!?]/g, "")
          ) {
            alreadyIs = true;
          }
        }
      });
      if (alreadyIs == false) {
        counter++;
      }
      firebase
        .firestore()
        .collection("idCounter")
        .doc(id)
        .update({ counter: counter })
        .catch((e) => {
          firebase
            .firestore()
            .collection("idCounter")
            .doc(id.replace(/\s/g, ""))
            .set({ counter: counter });
        });
    },
    // End es la funcion que pasa a la pantalla de fin (main func)
    async end() {
      let count = 0;
      let times = [];
      firebase
        .firestore()
        .collection("idCounter")
        .doc(this.clientInformation.id.trim().replace(/[^0-9]/g, ""))
        .get()
        .then((doc) => {
          if (doc) {
            count = doc.data().counter;
          } else {
            count = 1;
          }
        })
        .then(() => {
          let dayRepeated = 0;
          let each = this.fecha.toString().split(" ");
          each = [each[0], each[1], each[2], each[3]];
          each = each.join("-");
          this.db.forEach((item) => {
            if (each == item.parsedDate) {
              dayRepeated++;
              times.push(item.hour);
            }
          });
          //variable a cambiar para maximo de reservas por dia
          if (dayRepeated >= 3) {
            Swal.fire({
              title: "Día ocupado!",
              text: "Lo sentimos no hay más turnos para este día",
              icon: "error",
              confirmButtonText: "Cerrar",
            });
          } else {
            if (times.includes(this.hour)) {
              Swal.fire({
                title: "Horario no disponible!",
                text: "Lo sentimos el horario seleccionado no se encuantra disponible",
                icon: "error",
                confirmButtonText: "Cerrar",
              });
            } else {
              //El valor que hay que cambiar para el maximo de carros por id
              if (count < 3) {
                if (this.fecha >= new Date()) {
                  this.steps.step2 = false;
                  this.steps.step3 = true;
                } else {
                  Swal.fire({
                    title: "Error!",
                    text: "No puedes elegir una fecha del pasado",
                    icon: "error",
                    confirmButtonText: "Close",
                  });
                }
              } else {
                this.checkbyId();
              }
            }
          }
        });
    },
    //checkbyId chequea si un id tiene mas de 3 reservas y administra el delete de la deseada
    async checkbyId() {
      let options = [];
      let dlt = "";
      this.db.forEach((item) => {
        if (item.ClientsInfo.id == this.clientInformation.id.trim().replace(/[^0-9]/g, "")) {
          options.push(item.ClientsInfo.patente.toUpperCase());
        }
      });
      Swal.fire({
        title: "Error!",
        icon: "error",
        text: "Tienes demasiadas citas elimina una para crear una nueva",
        input: "select",
        inputPlaceholder: "Citas",
        confirmButtonText: "Eliminar",
        inputOptions: { 0: options[0], 1: options[1], 2: options[2] },
      }).then((e) => {
        dlt = options[e.value];
        firebase.firestore().collection("appointments").doc(dlt).delete();
        firebase
          .firestore()
          .collection("idCounter")
          .doc(this.clientInformation.id.trim().replace(/[^0-9]/g, ""))
          .update({
            counter: firebase.firestore.FieldValue.increment(-1),
          });
        firebase
          .firestore()
          .collection("appointments")
          .orderBy("date")
          .get()
          .then((query) => {
            this.db = [];
            query.forEach((doc) => {
              this.db.push(doc.data());
            });
          });
      });
    },
    checkAvailabilty() {
      firebase
        .firestore()
        .collection("idCounter")
        .doc(this.clientInformation.id.trim().replace(/[^0-9]/g, ""))
        .get()
        .then(() => {
          let dayRepeated = 0;
          let each = this.fecha.toString().split(" ");
          each = [each[0], each[1], each[2], each[3]];
          each = each.join("-");
          this.db.forEach((item) => {
            if (each == item.parsedDate) {
              dayRepeated++;
            }
          });
          //variable a cambiar para maximo de reservas por dia
          if (dayRepeated >= 3) {
            Swal.fire({
              title: "Día ocupado!",
              text: "Lo sentimos no hay más turnos para este día",
              icon: "error",
              confirmButtonText: "Cerrar",
              position: "top-right",
              toast: true,
            });
          } else {
            Swal.fire({
              title: "Día Libre",
              text: "",
              icon: "success",
              confirmButtonText: "Aceptar",
              position: "top-right",
              toast: true,
            });
          }
        });
    },
  },
  created() {
    Swal.fire({
      title: "Información",
      text: "Solo se puede hacer una reserva por vehiculo, si intentas reservar el mismo vehiculo dos veces la reserva será reemplazada",
      icon: "info",
      confirmButtonText: "Cerrar",
    });
    firebase
      .firestore()
      .collection("appointments")
      .orderBy("date")
      .get()
      .then((query) => {
        query.forEach((doc) => {
          this.db.push(doc.data());
        });
      });
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
* {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}
.cal {
  background-color: white;
  height: 700px;
  overflow: auto;
}
.view {
  /* margin: 100px; */
  display: flex;
  justify-content: center;
  min-height: 50vh;
  height: 50%;
}
</style>
