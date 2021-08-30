<template>
  <div class="header header-absolute-not-top scroll_header">
    <div class="container">
      <div class="row">
        <div class="head-white-bg flex space-between">
          <a href="http://car-service.aa-xx.com/html/demo/" class="logo">
            <img src="@/assets/img/logo-black.png" class="black-logo" alt="" />
          </a>

          <div id="menu" class="prettyMenu white animation pm_no_dividers">
            <div class="pm_main_mobile">
              <a class="pm_toggle"
                ><span class="hamburger hamburger--slider"
                  ><div class="hamburger-box"><div class="hamburger-inner"></div></div></span
              ></a>
            </div>
            <div class="pm_menu_container pm_left" id="query">
              <ul class="main">
                <li class="toggle up">
                  <a
                    @mouseover="fToggleHome"
                    @mouseleave="antiToggle"
                    href="#top"
                    class="current hvr-shutter-out-horizontal"
                    >Home<i class="fa fa-angle-down arrow"></i><span class="arrow_click"></span
                  ></a>
                  <ul :class="toggleHome">
                    <li>
                      <a class="extra hvr-shutter-out-horizontal" href="index.html">Default</a>
                    </li>
                    <li>
                      <a class="extra hvr-shutter-out-horizontal" href="absolute.html"
                        >Header Absolute</a
                      >
                    </li>
                    <li>
                      <a class="extra hvr-shutter-out-horizontal" href="header-relative.html"
                        >Header Relative</a
                      >
                    </li>
                    <li>
                      <a class="extra hvr-shutter-out-horizontal" href="boxed.html">Boxed Layont</a>
                    </li>
                    <li>
                      <a class="extra hvr-shutter-out-horizontal" href="sub-header.html"
                        >Sub Header</a
                      >
                    </li>
                  </ul>
                </li>
                <li class=""><a href="#service3" class="hvr-shutter-out-horizontal">Service</a></li>
                <li class="">
                  <a href="#content_section11" class="hvr-shutter-out-horizontal">About us</a>
                </li>
                <li><a href="#action4" class="hvr-shutter-out-horizontal">Discount</a></li>
                <li><a href="#testimonials3" class="hvr-shutter-out-horizontal">Reviews</a></li>
                <li><a href="#pricing_table2" class="hvr-shutter-out-horizontal">Price</a></li>
                <li class="toggle up">
                  <a
                    href="#contact"
                    class="menu-btn hvr-shutter-out-horizontal"
                    @mouseover="fToggleContact"
                    @mouseleave="antiToggleContact"
                    >Contact<i class="fa fa-angle-down arrow"></i><span class="arrow_click"></span
                  ></a>
                  <ul :class="toggleContact">
                    <li class="toggle up">
                      <a class="extra hvr-shutter-out-horizontal" href="#"
                        >Sub Menu Extra Link<i class="fa fa-angle-right arrow"></i
                        ><span class="arrow_click"></span
                      ></a>
                      <ul>
                        <li>
                          <a
                            class="extra hvr-shutter-out-horizontal"
                            href="#"
                            style="padding-left: 20%"
                            >Sub Menu Extra Link 2</a
                          >
                        </li>
                        <li>
                          <a
                            class="extra hvr-shutter-out-horizontal"
                            href="#"
                            style="padding-left: 20%"
                            >Sub Menu Extra Link 2</a
                          >
                        </li>
                        <li>
                          <a
                            class="extra hvr-shutter-out-horizontal"
                            href="#"
                            style="padding-left: 20%"
                            >Sub Menu Extra Link 2</a
                          >
                        </li>
                        <li>
                          <a
                            class="extra hvr-shutter-out-horizontal"
                            href="#"
                            style="padding-left: 20%"
                            >Sub Menu Extra Link 2</a
                          >
                        </li>
                        <li>
                          <a
                            class="extra hvr-shutter-out-horizontal"
                            href="#"
                            style="padding-left: 20%"
                            >Sub Menu Extra Link 2</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="extra hvr-shutter-out-horizontal" href="#">Sub Menu Extra Link</a>
                    </li>
                    <li>
                      <a class="extra hvr-shutter-out-horizontal" href="#">Sub Menu Extra Link</a>
                    </li>
                    <li>
                      <a class="extra hvr-shutter-out-horizontal" href="#">Sub Menu Extra Link</a>
                    </li>
                    <li>
                      <a class="extra hvr-shutter-out-horizontal" href="#">Sub Menu Extra Link</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div class="header-right-top-block hide-on-mobile">
            <a href="#" class="toggle-cart">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="30px"
                height="18px"
                viewBox="0 0 510 510"
                style="position: relative; top: 3px; right: 3px"
                xml:space="preserve"
              >
                <g>
                  <g id="shopping-cart">
                    <path
                      d="M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,408,153,408z M0,0v51h51l91.8,193.8L107.1,306    c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7    c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z M408,408    c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <span>0</span>
            </a>
            <a href="#" class="popup-search">
              <i class="fa fa-search" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="home home-car-repair">
    <div class="home-content">
      <div class="container">
        <div class="row">
          <div class="six"></div>
          <div class="six">
            <div class="title-white text-left">Professional repair of cars of all brands</div>
            <div class="subtitle-white text-left">
              The largest <b>autotechnical center</b> in <b class="count">2350</b> cities with
              modern equipment and <b>qualified</b> personnel.
            </div>
            <div style="display: flex">
              <div class="bts text-left">
                <a @click="order" href="#order-time" class="btn popup-modal">Online Order</a>
              </div>
              <div class="bts text-left">
                <a @click="$emit('reserv')" href="#order-time" class="btn popup-modal"
                  >Make a reservation</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="content-section6 text-white" id="content-section6">
    <div class="container">
      <div class="col-3 color-3 no-padding no-margin" style="height: 164.8px">
        <div class="text-center">
          <i class="fa fa-map-marker maine" aria-hidden="true"></i>
          <div class="icon-title">
            <i class="fa fa-angle-right" aria-hidden="true"></i> Found dealer
          </div>
        </div>
      </div>
      <div class="col-3 color-3 no-padding no-margin">
        <div class="text-center">
          <i class="fa fa-shopping-bag maine" aria-hidden="true"></i>
          <div class="icon-title">
            <i class="fa fa-angle-right" aria-hidden="true"></i> Online order
          </div>
        </div>
      </div>
      <div class="col-3 color-3 no-padding no-margin">
        <div class="text-center">
          <i class="fa fa-envelope-open maine" aria-hidden="true"></i>
          <div class="icon-title">
            <i class="fa fa-angle-right" aria-hidden="true"></i> Contact Us
          </div>
        </div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      toggleHome: "",
      toggleContact: "",
      hide: true,
    };
  },
  methods: {
    fToggleHome() {
      this.toggleHome = "fadeInDown animated";
    },
    antiToggle() {
      this.toggleHome = "";
    },
    fToggleContact() {
      this.toggleContact = "fadeInDown animated";
    },
    antiToggleContact() {
      this.toggleContact = "";
    },
    order() {
      this.$emit("order");
      this.hide = true;
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
@keyframes ani1 {
  from {
    background-color: #2194e0;
  }
  to {
    background-red: red;
  }
}

.color-1::before {
  content: "";

  height: 100%;
  width: 3em;
  display: block;
  position: absolute;
  top: 0;
  left: -4.5em;
  transform: skewX(-45deg) translateX(0);
  transition: none;
}
.color-1:hover.color-1::before {
  left: 121%;
  transition: left 0.6s ease;
  background-color: rgba(255, 255, 255, 0.5);
}
.color-1:hover {
  color: #fff;
  background: #2e9fe8;
}
.color-2::before {
  content: "";
  height: 100%;
  width: 3em;
  display: block;
  position: absolute;
  top: 0;
  left: 0em;
  transform: skewX(-45deg) translateX(0);
  transition: none;
}
.color-2:hover.color-2::before {
  left: 121%;
  transition: left 0.6s ease;
  background-color: rgba(255, 255, 255, 0.5);
}
.color-2:hover {
  color: #fff;
  background: #2e9fe8;
}
.color-3::before {
  content: "";
  height: 100%;
  width: 3em;
  display: block;
  position: absolute;
  top: 0;
  left: 0em;
  transform: skewX(180deg) translateX(0);
  transition: none;
}
.color-3:hover.color-3::before {
  left: 88.2%;
  transition: left 0.6s ease;
  background-color: rgba(255, 255, 255, 0.5);
}
.color-3:hover {
  color: #fff;
  background: #2e9fe8;
}
</style>
