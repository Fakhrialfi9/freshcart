<script lang="ts">
// Start Import Router
import { RouterLink } from 'vue-router'
// End Import Router

import LogoFreshCart from '../assets/logo/logo-company/freshcart-logo.svg'
import BannerSignin from '../assets/image/banner-home/slide2.jpg'

export default {
  component: {
    RouterLink
  },

  data() {
    return {
      LogoFreshCart,
      BannerSignin
    }
  }
}
</script>

<script setup lang="ts">
import IconEmail from '../assets/icon/IconEmail.vue'
import IconPassword from '../assets/icon/IconPassword.vue'
import IconShortArrowToRight from '../assets/icon/IconShortArrowToRight.vue'
import IconArrowToLeft from '../assets/icon/IconArrowToLeft.vue'
</script>

<template>
  <main id="MainUser">
    <section class="User">
      <div class="LeftContent">
        <div class="Container-SigninUsers">
          <div class="FormContent">
            <!-- Start Image Content Form Signin -->
            <div class="Image-FormContent">
              <RouterLink to="/home">
                <img :src="LogoFreshCart" alt="" />
              </RouterLink>
              <RouterLink to="home">
                <button><IconArrowToLeft /> Back Home</button>
              </RouterLink>
            </div>
            <!-- End Image Content Form Signin -->

            <!-- Start Heading Content Signin -->
            <div class="Heading-FormContent">
              <h4>Signin Into Your Account</h4>
              <p>Welcom Back! Select Method to Log in:</p>
            </div>
            <!-- End Heading Content Signin -->

            <!-- Start Signin Option Google Or Facebook -->
            <div class="SigninOption-FormContent">
              <button>Google</button>
              <button>Facebook</button>
            </div>
            <!-- End Signin Option Google Or Facebook -->

            <!-- Start Content Diver or Email Login  -->
            <div className="SigninWithEmail-FormContent">
              <p>Or Continue With Email</p>
            </div>
            <!-- End Content Diver or Email Login  -->

            <div class="SignWithEmail-FormContent">
              <form action="">
                <!-- Start Content Input Email & Password -->
                <div class="InputEmail">
                  <IconEmail class="IconInputSignin" />
                  <input type="email" placeholder="Email Address" />
                </div>
                <div class="InputPassword">
                  <IconPassword class="IconInputSignin" />
                  <input type="password" placeholder="Password" />
                </div>
                <!-- End Content Input Email & Password -->

                <!-- Start Content Checkbox Remember Me -->
                <div className="CheckBoxRememberMe">
                  <label>
                    <input type="checkbox" id="rememberMe" />
                    <p>Remember Me</p>
                  </label>
                  <RouterLink class="ForgotPassword" to="/login/forgotpassword">
                    <a>Forgot Password?</a>
                  </RouterLink>
                </div>
                <!-- End Content Checkbox Remember Me -->

                <!-- Start Button Signin -->
                <div class="ButtonSignin">
                  <button>Sign In <IconShortArrowToRight /></button>
                </div>
                <!-- End Button Signin -->
              </form>
            </div>

            <!-- Start Signup Content  -->
            <div class="SignUp-FormContent">
              <h6>
                Dont Have an Accout?
                <RouterLink class="CreateAccout" to="/user/createaccount">Create Accout</RouterLink>
              </h6>
            </div>
            <!-- End Signup Content  -->
          </div>
        </div>
      </div>
      <div class="RightContent DisplayNone-SM DisplayNone-MD DisplayNone-LG">
        <img :src="BannerSignin" alt="" />
      </div>
    </section>
  </main>
</template>

<style scoped src="../assets/style/Views/UserSigninView.css"></style>
