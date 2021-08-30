<template>
  <div class="serteficat2 gallery gray_bg" id="serteficat2">
    <div class="container">
      <div class="subtitle-black space-50">Our company is the best because:</div>
      <div class="title-black">Сertificate</div>
      <div class="clear space50"></div>
      <div class="col-4">
        <div class="wrapp">
          <a href="assets/img/certificate2.png">
            <img class="aligncenter" :src="certificate" style="width: 164px; height: 234px" />
          </a>
        </div>
      </div>
      <div class="col-4">
        <div class="wrapp">
          <a href="assets/img/certificate2.png">
            <img class="aligncenter" :src="certificate" style="width: 164px; height: 234px" />
          </a>
        </div>
      </div>
      <div class="col-4">
        <div class="wrapp">
          <a href="assets/img/certificate2.png">
            <img class="aligncenter" :src="certificate" style="width: 164px; height: 234px" />
          </a>
        </div>
      </div>
      <div class="col-4">
        <div class="wrapp" style="background: url('assets/img/sert2.png')">
          <a href="assets/img/certificate2.png">
            <img class="aligncenter" :src="certificate" style="width: 164px; height: 234px" />
          </a>
        </div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: "Certificates",
  setup() {
    const certificate = require("@/assets/img/certificate2.png");
    return { certificate };
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
