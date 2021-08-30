<template>
  <div class="footer_up">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <h4 class="toggle-next-div">About us</h4>
          <div class="footer-desc">
            <p>Donec vel sapien augue. Integer urna turpis cursus porta, mauris molestie</p>
            <p>
              Cursus sodales vitae suscipit egestas lobortis aliquam quaerat hendrerit sapien undo
              euismod blandit. nulla at sodales mollis in hendrerit tellus
            </p>
          </div>
        </div>
        <div class="col-4">
          <h4 class="toggle-next-div">Repair services</h4>
          <div class="footer-desc">
            <ul class="circle white">
              <li><a href="#">Repair Car Engine</a></li>
              <li><a href="#">Repair Car Suspension</a></li>
              <li><a href="#">Auto Brake System</a></li>
              <li><a href="#">Change of oil</a></li>
              <li><a href="#">Alternator </a></li>
            </ul>
          </div>
        </div>
        <div class="col-4">
          <h4 class="toggle-next-div">Social Icon</h4>
          <div class="footer-desc">
            <ul class="footer-icons">
              <li>
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-behance" aria-hidden="true"></i> Behance</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i> Linkedin</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i> Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-4">
          <h4 class="toggle-next-div">Subscribe</h4>
          <div class="footer-desc">
            <p>
              Let me know more when you publick some intresting: news, ideas, updates and latest
              features
            </p>
            <form class="subscribe margin-top-20">
              <input
                type="email"
                placeholder="Email Address"
                required=""
                id="s-email"
                name="EMAIL"
              />
              <input type="submit" class="subscribe_btn" /><i
                class="fa fa-envelope-o"
                aria-hidden="true"
              ></i>
            </form>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
  <div class="footer-copyright">
    <div class="container">
      <div class="col-2">
        <div class="copyright">© 2017. All rights reserved.</div>
      </div>
      <div class="col-2">
        <ul class="social-network social-circle">
          <li>
            <a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="#" class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i></a>
          </li>
          <li>
            <a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- popup modal -->
  <!--noindex-->
  <div v-if="didOrder === true">
    <div class="mfp-bg mfp-ready"></div>
    <div
      class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
      tabindex="-1"
      style="overflow: hidden auto"
    >
      <div class="mfp-container mfp-inline-holder">
        <div class="mfp-content">
          <div id="order-time" class="white-popup-block">
            --
            <div class="form-style" id="contact_form">
              <div id="contact_body">
                <div class="popup_title">Online order</div>
                <div class="popup_subtitle">
                  Leave the online application form and our manager will provide a free consultation
                </div>

                <div class="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    class="input-field"
                    placeholder="Name *"
                  />
                  <i class="fa fa-user-o form-icon" aria-hidden="true"></i>
                </div>

                <div class="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    class="input-field"
                    placeholder="E-mail *"
                  />
                  <i class="fa fa-envelope-o form-icon" aria-hidden="true"></i>
                </div>

                <div class="relative">
                  <input
                    type="text"
                    name="phone"
                    maxlength="19"
                    required
                    placeholder="Phone *"
                    class="tel-number-field long"
                  />
                  <i class="fa fa-phone form-icon" aria-hidden="true"></i>
                </div>

                <div class="relative">
                  <textarea
                    name="message"
                    id="message"
                    class="textarea-field"
                    required
                    placeholder="Message *"
                  ></textarea>
                  <i class="fa fa-commenting-o form-icon" aria-hidden="true"></i>
                </div>

                <input type="submit" id="submit_btn" class="btn btn100" value="Submit" />
              </div>
              <div id="contact_results"></div>
            </div>
            <button
              title="Close (Esc)"
              type="button"
              class="mfp-close"
              style="color: black"
              @click="$emit('out')"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--/noindex-->
  <a href="#top">
    <p id="back-top"><i class="fa fa-chevron-up"></i></p>
  </a>
</template>

<script>
export default {
  name: "footer",
  props: {
    didOrder: Boolean,
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
