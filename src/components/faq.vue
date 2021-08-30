<template>
  <div class="extra7" id="faq">
    <div class="container">
      <div class="subtitle-black eight center-block">
        Aliquam a augue suscipit, bibendum luctus neque vestibulum laoreet rhoncus ipsum, bibendum
        tempor vulputate varius
      </div>
      <div class="title-black">FAQ</div>
      <div class="eight block-center">
        <div class="round accordion_title" @click="open(1)">
          Expensive Oil Changes Are Here to Stay
        </div>

        <div :class="plus1" :style="animation">
          Oil changes may be more expensive with the required 0W-20 weight oil compared to
          conventional oil, but only having to service the car once or twice a year keeps annual
          costs to nearly a wash.
        </div>
        <div class="round accordion_title" @click="open(2)">What's Included in a Tuneup?</div>
        <div :class="plus2" :style="animation2">
          Actually, there is no such thing as a tuneup in the traditional sense of replacing parts
          to bring the ignition and fuel systems up to specs for maximum performance and
          efficiency...
        </div>
        <div class="round accordion_title" @click="open(3)">Change Your Oil Every 3,000 Miles?</div>
        <div :class="plus3" :style="animation3">
          No, you don't, according to every auto manufacturer we've talked to. the main advocates of
          the 3,000-mile oil change schedule are those who would profit by it...
        </div>
        <div class="round accordion_title" @click="open(4)">
          Expensive Oil Changes Are Here to Stay
        </div>
        <div :class="plus4" :style="animation4" class="accordeon">
          Oil changes may be more expensive with the required 0W-20 weight oil compared to
          conventional oil, but only having to service the car once or twice a year keeps annual
          costs to nearly a wash.
        </div>
        <div class="round accordion_title" @click="open(5)">What's Included in a Tuneup?</div>
        <div :class="plus5" :style="animation5">
          Actually, there is no such thing as a tuneup in the traditional sense of replacing parts
          to bring the ignition and fuel systems up to specs for maximum performance and
          efficiency...
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "faq",
  data() {
    return {
      plus1: "accordion_hide",
      plus2: "accordion_hide",
      plus3: "accordion_hide",
      plus4: "accordion_hide",
      plus5: "accordion_hide",
      animation: {},
      animation2: {},
      animation3: {},
      animation4: {},
      animation5: {},
    };
  },
  methods: {
    open(n) {
      if (n == 1) {
        if (this.plus1 == "f") {
          this.animation = { animation: "up 0.6s", margin: "30px" };
          setTimeout(() => (this.plus1 = "accordion_hide"), 600);
        } else {
          this.plus1 = "f";
          this.animation = { animation: "down 0.6s", margin: "30px", height: "72px" };
        }
      } else if (n == 2) {
        if (this.plus2 == "f") {
          this.animation2 = { animation: "up 0.6s", margin: "30px" };
          setTimeout(() => (this.plus2 = "accordion_hide"), 600);
        } else {
          this.plus2 = "f";
          this.animation2 = { animation: "down 0.6s", margin: "30px", height: "72px" };
        }
      } else if (n == 3) {
        if (this.plus3 == "f") {
          this.animation3 = { animation: "up 0.6s", margin: "30px" };
          setTimeout(() => (this.plus3 = "accordion_hide"), 600);
        } else {
          this.plus3 = "f";
          this.animation3 = { animation: "down 0.6s", margin: "30px", height: "72px" };
        }
      } else if (n == 4) {
        if (this.plus4 == "f") {
          this.animation4 = { animation: "up 0.6s", margin: "30px" };
          setTimeout(() => (this.plus4 = "accordion_hide"), 600);
        } else {
          this.plus4 = "f";
          this.animation4 = { animation: "down 0.6s", margin: "30px", height: "72px" };
        }
      } else if (n == 5) {
        if (this.plus5 == "f") {
          this.animation5 = { animation: "up 0.6s", margin: "30px" };
          setTimeout(() => (this.plus5 = "accordion_hide"), 500);
        } else {
          this.plus5 = "f";
          this.animation5 = { animation: "down 0.6s", margin: "30px", height: "72px" };
        }
      }
    },
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

@keyframes down {
  from {
    height: 0px;
    margin: 0;
  }
  to {
    height: 72px;
    margin: 30px;
  }
}

@keyframes up {
  from {
    height: 72px;
    margin: 30px;
  }
  to {
    height: 0px;
    margin: 0px;
  }
}
</style>
