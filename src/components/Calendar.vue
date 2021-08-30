<template>
  <div class="calendar" @click="test">
    <h1 class="title">Select a date</h1>
    <div style="width: 90%">
      <DatePicker
        v-model="date"
        color="green"
        mode="dateTime"
        :is-expanded="stretch"
        :rows="2"
        style="margin-top: 40px"
      />
    </div>
    <div class="buttons">
      <button class="back" @click="$emit('backToForm')">Back</button>
      <button class="button" @click="$emit('check')">Check</button>
      <button class="button" @click="$emit('nextToEnd', date)">Next</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { Calendar, DatePicker } from "v-calendar";
export default {
  name: "CalendarComponent",
  components: {
    Calendar,
    DatePicker,
  },
  data() {
    return {
      date: "",
      stretch: true,
    };
  },
  methods: {
    test() {
      this.$emit("dateSelected", this.date);
    },
  },
  created() {
    if (window.innerWidth < 560) {
      this.stretch = false;
    }
  },
};
</script>

<style scoped>
.calendar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}
.buttons {
  margin: 100px;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
}
.button {
  height: 30px;
  width: 100px;
  background-color: white;
  border: none;
  border: solid 1px black;
  border-radius: 25px;
  cursor: pointer;
}
.button:hover {
  background: whitesmoke;
}
.error {
  position: relative;
  bottom: 30px;
  left: 90%;
  color: red;
}
.succes {
  position: relative;
  bottom: 30px;
  left: 90%;
  color: #67d82e;
}
.backButton {
  display: flex;
  width: 100%;
}
.back {
  height: 30px;
  width: 100px;
  background-color: white;
  border: none;
  border: solid 1px black;
  border-radius: 25px;
  cursor: pointer;
}
.back:hover {
  background: whitesmoke;
}
</style>
