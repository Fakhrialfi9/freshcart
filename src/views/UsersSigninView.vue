<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useAuthSignin } from '../stores/AuthSigninStores'
import { reactive, ref } from 'vue'
import IconEmail from '../assets/icon/IconEmail.vue'
import IconPassword from '../assets/icon/IconPassword.vue'
import IconShortArrowToRight from '../assets/icon/IconShortArrowToRight.vue'
import IconArrowToLeft from '../assets/icon/IconArrowToLeft.vue'
import LogoFreshCart from '../assets/logo/logo-company/freshcart-logo.svg'
import BannerSignin from '../assets/image/banner-home/slide2.jpg'
import AlertBoxComponent from '../components/AlertBoxComponents.vue'
import { alertBox, showAlert } from '../function/FunctionAlert'

const authSignin = useAuthSignin()
const { signIn } = authSignin

const inputData = reactive({
  email: '',
  password: ''
})

const handlesubmit = async () => {
  // Validate if email or password is empty
  if (!inputData.email.trim() || !inputData.password.trim()) {
    showAlert('Email and password are required.', 'error')
    return
  }

  signIn(inputData)
}
</script>

<template>
  <main id="MainSigninUser">
    <section class="Signin">
      <div class="LeftContent">
        <div class="Container-SigninUsers">
          <div class="FormContent">
            <!-- Start Image Content Form Signin -->
            <div class="Image-FormContent">
              <RouterLink to="/home">
                <img :src="LogoFreshCart" alt="Logo FreshCart" />
              </RouterLink>
              <RouterLink to="/home">
                <button><IconArrowToLeft /> Back Home</button>
              </RouterLink>
            </div>
            <!-- End Image Content Form Signin -->

            <!-- Start Heading Content Signin -->
            <div class="Heading-FormContent">
              <h4>Sign in to Your Account</h4>
              <p>Welcome Back! Select a method to log in:</p>
            </div>
            <!-- End Heading Content Signin -->

            <!-- Start Signin Option Google or Facebook -->
            <div class="SigninOption-FormContent">
              <button>Google</button>
              <button>Facebook</button>
            </div>
            <!-- End Signin Option Google or Facebook -->

            <!-- Start Content Divider or Email Login -->
            <div class="SigninWithEmail-FormContent">
              <p>Or Continue With Email</p>
            </div>
            <!-- End Content Divider or Email Login -->

            <!-- Start Email Sign In Form -->
            <div class="SignWithEmail-FormContent">
              <form @submit.prevent="handlesubmit">
                <!-- Start Content Input Email & Password -->
                <div class="InputEmail">
                  <IconEmail class="IconInputSignin" />
                  <input
                    id="email"
                    v-model="inputData.email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div class="InputPassword">
                  <IconPassword class="IconInputSignin" />
                  <input
                    id="password"
                    v-model="inputData.password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <!-- End Content Input Email & Password -->

                <!-- Start Content Checkbox Remember Me -->
                <div class="CheckBoxRememberMe">
                  <label>
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <p>Remember Me</p>
                  </label>
                  <RouterLink class="ForgotPassword" to="/login/forgotpassword">
                    <a>Forgot Password?</a>
                  </RouterLink>
                </div>
                <!-- End Content Checkbox Remember Me -->

                <!-- Start Button Signin -->
                <div class="ButtonSignin">
                  <button
                    type="submit"
                    :disabled="
                      !inputData.email.trim() || !inputData.password.trim() || authSignin.loading
                    "
                  >
                    <template v-if="authSignin.loading">Signing In...</template>
                    <template v-else>Sign In <IconShortArrowToRight /></template>
                  </button>
                </div>
                <!-- End Button Signin -->
              </form>
            </div>
            <!-- End Email Sign In Form -->

            <!-- Start Signup Content -->
            <div class="SignUp-FormContent">
              <h6>
                Don't Have an Account?
                <RouterLink class="CreateAccount" to="/signup">Sign Up</RouterLink>
              </h6>
            </div>
            <!-- End Signup Content -->
          </div>
        </div>
      </div>
      <div class="RightContent DisplayNone-SM DisplayNone-MD DisplayNone-LG">
        <img :src="BannerSignin" alt="Sign in Banner" />
      </div>
    </section>
    <AlertBoxComponent ref="alertBox" />
  </main>
</template>

<style scoped src="../assets/style/Views/UserSigninView.css"></style>
