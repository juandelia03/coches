<template>
  <div :id="loading">
    <div id="loading-center">
      <div id="loading-center-absolute" v-if="loading != ''">
        <div class="object" id="object_one"></div>
        <div class="object" id="object_two"></div>
        <div class="object" id="object_three"></div>
        <div class="object" id="object_four"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      loading: "loading",
    };
  },
  mounted() {
    setTimeout(() => (this.loading = ""), 1000);
    this.tableOne = "";
    this.one = "active";
  },
};
</script>

<style>
@import "../assets/css/style.css";
@import "../assets/css/prettyMenu.css";
@import "../assets/css/owl.carousel.css";
@import "../assets/css/magnific-popup.css";
@import "../assets/css/hover.css";
@import "../assets/css/hamburgers.css";
@import "../assets/css/font-awesome.css";
@import "../assets/css/flatpickr.css";
@import "../assets/css/animate.css";
</style>
