<template>
  <div class="clients3 gray_bg">
    <div class="container">
      <div class="col-6">
        <img :src="brandImages.one" class="aligncenter" alt="" />
      </div>
      <div class="col-6">
        <img :src="brandImages.two" class="aligncenter" alt="" />
      </div>
      <div class="col-6">
        <img :src="brandImages.three" class="aligncenter" alt="" />
      </div>
      <div class="col-6">
        <img :src="brandImages.four" class="aligncenter" alt="" />
      </div>
      <div class="col-6">
        <img :src="brandImages.five" class="aligncenter" alt="" />
      </div>
      <div class="col-6">
        <img :src="brandImages.six" class="aligncenter" alt="" />
      </div>
      <div class="col-6">
        <img :src="brandImages.seven" class="aligncenter" alt="" />
      </div>
      <div class="col-6">
        <img :src="brandImages.eight" class="aligncenter" alt="" />
      </div>
      <div class="col-6">
        <img :src="brandImages.nine" class="aligncenter" alt="" />
      </div>
      <div class="col-6">
        <img :src="brandImages.ten" class="aligncenter" alt="" />
      </div>
      <div class="col-6">
        <img :src="brandImages.eleven" class="aligncenter" alt="" />
      </div>
      <div class="col-6">
        <img :src="brandImages.twelve" class="aligncenter" alt="" />
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Clients",

  setup() {
    const brandImages = {
      one: require("@/assets/img/brands-1.png"),
      two: require("@/assets/img/brands-2.png"),
      three: require("@/assets/img/brands-3.png"),
      four: require("@/assets/img/brands-4.png"),
      five: require("@/assets/img/brands-5.png"),
      six: require("@/assets/img/brands-6.png"),
      seven: require("@/assets/img/brands-7.png"),
      eight: require("@/assets/img/brands-8.png"),
      nine: require("@/assets/img/brands-9.png"),
      ten: require("@/assets/img/brands-10.png"),
      eleven: require("@/assets/img/brands-14.png"),
      twelve: require("@/assets/img/brands-15.png"),
    };

    return { brandImages };
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
