<template>
  <div class="select_transparent pricing_table2" id="pricing_table2">
    <div class="container">
      <div class="subtitle-black">We take money only for a quality work done.</div>
      <div class="title-black">Price of our services</div>
      <div class="text-center">
        <ul class="tabs">
          <li :class="one" rel="tab1" @click="selectTable(1)">
            <img :src="require('@/assets/img/brands-4.png')" alt="" />
          </li>
          <li :class="two" rel="tab2" @click="selectTable(2)">
            <img :src="require('@/assets/img/brands-1.png')" alt="" />
          </li>
          <li :class="three" rel="tab3" @click="selectTable(3)">
            <img :src="require('@/assets/img/brands-2.png')" alt="" />
          </li>
        </ul>
      </div>
      <div class="tab_container">
        <div class="d_active tab_drawer_heading" rel="tab1">
          <img src="assets/img/brands-1.png" alt="" />
        </div>
        <div id="tab1" :class="tableOne" style="padding: 20px" class="fade-in">
          <table>
            <thead>
              <tr>
                <th>Name</th>

                <th>Description</th>

                <th>Price ($)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="d_active tab_drawer_heading" rel="tab2">
          <img src="assets/img/brands-2.png" alt="" />
        </div>
        <div id="tab2" :class="tableTwo" style="padding: 20px" class="fade-in">
          <table>
            <thead>
              <tr>
                <th>Name</th>

                <th>Description</th>

                <th>Price ($)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="d_active tab_drawer_heading"
          rel="tab3"
          style="
             {
              padding: 20px;
            }
          "
        >
          <img src="assets/img/brands-3.png" alt="" />
        </div>
        <div id="tab3" :class="tableThree" style="padding: 20px" class="fade-in">
          <table>
            <thead>
              <tr>
                <th>Name</th>

                <th>Description</th>

                <th>Price ($)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>Replace</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tables",
  data() {
    return {
      loading: "loading",
      tableOne: "tab_content",
      tableTwo: "tab_content",
      tableThree: "tab_content",
      one: "",
      two: "",
      three: "",
      animationOne: {},
    };
  },
  mounted() {
    this.tableOne = "";
    this.one = "active";
  },

  methods: {
    selectTable(n) {
      if (n == 1) {
        this.tableOne = "";
        this.one = "active";
        this.tableTwo = "tab_content";
        this.tableThree = "tab_content";
        this.two = "";
        this.three = "";
      }
      if (n == 2) {
        this.tableTwo = "";
        this.two = "active";
        this.tableThree = "tab_content";
        this.tableOne = "tab_content";
        this.one = "";
        this.three = "";
      }
      if (n == 3) {
        this.tableThree = "";
        this.three = "active";
        this.tableTwo = "tab_content";
        this.tableOne = "tab_content";
        this.two = "";
        this.one = "";
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-in {
  animation: fadeIn 0.6s;
}
</style>
