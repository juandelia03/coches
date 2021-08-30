<template>
  <div class="row">
    <h1 class="patente">{{ patente }}</h1>
    <h2 style="width: 500px">Fecha: {{ date }} {{ time }}:00hs</h2>
    <div style="width: 400px">
      <h3>Nombre Completo: {{ name }} {{ lastName }}</h3>
      <br />
      <h3>Email: {{ mail }}</h3>
    </div>
    <div style="width: 400px">
      <h3>Número de Teléfono: {{ cell }}</h3>
      <br />
      <h3>Cédula: {{ id }}</h3>
    </div>
    <div class="delete" @click="$emit('dlt', patente, id)">
      <h1 class="x">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"
          />
        </svg>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    lastName: String,
    patente: String,
    mail: String,
    cell: String,
    id: String,
    date: String,
    time: String,
  },
  methods: {},
};
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
  padding: 0px 50px;
  width: 100%;
  min-height: 150px;
  border-bottom: 1px solid darkgray;
  gap: 50px;
  background-color: whitesmoke;
}
.patente {
  width: 150px;
}
.delete {
  margin-left: auto;
  margin-right: 100px;
  cursor: pointer;
}
.x:hover {
  fill: red;
}
</style>
