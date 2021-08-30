<template>
  <div className="App">
    <div className="title">
      <h1 className="Bigtext">Formulario de contacto</h1>
    </div>
    <div className="main">
      <div className="subtitle">
        <h2>Datos Personales</h2>
      </div>
      <form action="" @submit.prevent="formSubmit">
        <p class="err">{{ error }}</p>
        <div className="section">
          <input type="text" className="input-data" placeholder=" " v-model="name" />
          <label className="data">*Nombre</label>
        </div>
        <div className="section">
          <input type="text" className="input-data" placeholder=" " v-model="last" />
          <label className="data">*Apellido</label>
        </div>
        <div className="section">
          <input type="text" className="input-data" placeholder=" " v-model="cell" />
          <label className="data">*Número Telefónico</label>
        </div>
        <div className="section">
          <input type="text" className="input-data" placeholder=" " v-model="email" />
          <label className="data">*Email</label>
        </div>
        <div className="section">
          <input type="text" className="input-data" placeholder=" " v-model="patente" />
          <label className="data">*Placa del vehiculo</label>
        </div>
        <div className="section">
          <input type="text" className="input-data" placeholder=" " v-model="id" />
          <label className="data">*Cédula(id)</label>
        </div>
        <div className="section">
          <input type="text" className="input-data" placeholder=" " v-model="message" />
          <label className="data">Mensaje</label>
        </div>
        <div className="button-container">
          <input className="button" type="submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Swal from "sweetalert2";
export default {
  name: "Information",
  components: {},
  data() {
    return {
      name: "",
      last: "",
      cell: "",
      email: "",
      message: "",
      personalInfo: {},
      error: "",
      id: "",
      patente: "",
    };
  },
  methods: {
    formSubmit() {
      this.error = "";
      if (
        this.name.length > 1 &&
        this.last.length > 1 &&
        this.cell.length > 5 &&
        this.email.includes("@") &&
        this.patente.length > 4 &&
        this.id.length > 5
      ) {
        const data = {
          name: this.name,
          last: this.last,
          cell: this.cell,
          email: this.email,
          message: this.message,
          id: this.id,
          patente: this.patente,
        };
        this.personalInfo = data;
        this.$emit("infoSubmited", this.personalInfo);
      } else {
        Swal.fire({
          title: "Error!",
          text: "Missing information",
          icon: "error",
          confirmButtonText: "Close",
        });
      }
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  align-items: center;
  background-color: black;
  height: 100px;
  padding-left: 50px;
}
.Bigtext {
  color: white;
  margin: 0;
  padding: 0;
  padding: 0px;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 50px;
}
.subtitle {
  width: 90%;
  display: flex;
  align-content: center;
  justify-content: center;
  padding-left: 40px;
}
h2 {
  font-size: 30px;
}
form {
  position: relative;
}

.section {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.data {
  position: absolute;
  left: 0;
  font-size: 20px;
  margin-bottom: 30px;
  /* min-width: 100px; */
  padding: 0px 10px;
  transition: transform 0.2s ease-in-out;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.input-data {
  min-width: 60vmin;
  height: 70px;
  outline: none;
  padding: 0px 10px;
  font-size: 16px;
  padding-top: 14px;
}
.button {
  width: 100px;
  height: 40px;
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: white;
  color: black;
  outline: none;
  border: none;
  border: solid lightgray 1px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
}
.button:hover {
  background-color: whitesmoke;
}
.button-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.input-data:focus + .data,
.input-data:not(:placeholder-shown) + .data {
  transform: translateY(-1em);
  font-size: 14px;
}

.input-data::placeholder {
  color: transparent;
}
.err {
  position: relative;
  top: 30px;
  color: red;
}
</style>
