<template>
  <div class="wrap">
    <div class="box">
      <h1 class="titulo">Un último paso</h1>
      <p class="sub">Confirma si la siguiente información es correcta para agendar la cita:</p>
      <p class="fecha">
        {{ days[date.getDay() - 1] }}
        {{ date.getDate() }} {{ months[date.getMonth()] }} {{ date.getFullYear() }} {{ hora }}:00 hs
      </p>
      <div class="information">
        <p class="item">Name: {{ client.name }}</p>
        <p class="item">Apellido: {{ client.last }}</p>
        <p class="item">Telefono: {{ client.cell }}</p>
        <p class="item">Email: {{ client.email }}</p>
        <p class="item">Cédula: {{ client.id }}</p>
        <p class="item">Carro: {{ client.patente }}</p>
      </div>
      <div class="botones">
        <button class="boton" @click="$emit('cancel')">Cancelar</button>
        <button class="boton" @click.once="$emit('submit')">Confirmar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FinalScreen",
  props: {
    client: Object,
    date: Date,
    hora: String,
  },
  data() {
    return {
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      days: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    };
  },
};
</script>

<style scoped>
.wrap {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: whitesmoke;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  height: 800px;
  width: 700px;

  padding: 20px;
}
.titulo {
  margin-top: 50px;
  font-weight: 300;
}
.sub {
  margin-top: 10px;
  font-size: 18px;
}
.information {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
}
.fecha {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
.item {
  color: rgb(36, 36, 36);
  font-weight: 300;
  margin-bottom: 15px;
}
.botones {
  display: flex;
  gap: 10px;
  margin-top: 50px;
}
.boton {
  height: 40px;
  width: 150px;
  border: none;
  background: white;
  border: 1px solid black;
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px;
}
.boton:hover {
  background: whitesmoke;
}
</style>
