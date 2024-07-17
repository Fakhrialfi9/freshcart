<script setup lang="ts">
import { ref, reactive } from 'vue'
import { alertBox, showAlert } from '../../../function/FunctionAlert'
import { validatePassword } from '../../../function/FunctionPasswordValidate'
import { useAuthUserStores } from '../../../stores/AuthUserStores'
import LogoFreshCart from '../../../assets/logo/logo-company/freshcart-logo.svg'
import AlertBoxComponents from '../../../components/AlertBoxComponents.vue'
import router from '../../../main/router'

// Reactive state for input data
const inputData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

// Reset input data
const DataSignup = () => {
  inputData.firstName = ''
  inputData.lastName = ''
  inputData.email = ''
  inputData.password = ''
  inputData.confirmPassword = ''
}

// Error state
const error = ref<string | null>(null)

// Show/hide password states
const showPassword = ref(false)
const showConfirmPassword = ref(false)

// Access auth user store
const authSignin = useAuthUserStores()
const { signUpbasicinformation } = authSignin

// Handle submit form basic information
const handleSubmitBasicInformation = async () => {
  if (!validatePassword(inputData.password)) {
    showAlert('Password does not meet the requirements.', 'error')
    return
  }

  if (inputData.password !== inputData.confirmPassword) {
    showAlert('Passwords do not match.', 'error')
    return
  }

  try {
    await signUpbasicinformation({
      firstName: inputData.firstName,
      lastName: inputData.lastName,
      email: inputData.email,
      password: inputData.password
    })

    DataSignup()

    // Delayed navigation to the next step
    setTimeout(() => {
      if (!error.value) {
        router.push('/createaccount/contactinformation')
      }
    }, 1500)
  } catch (error: any) {
    console.error('Signup error:', error)

    // Handling errors
    if (
      error.response &&
      error.response.status === 400 &&
      error.response.data.message === 'Email already exists'
    ) {
      showAlert('Email already exists. Please use a different email address.', 'error')
    } else {
      showAlert('Sign-up failed. Please try again later.', 'error')
    }
  }
}
</script>

<template>
  <main class="MainCreateAccountContent">
    <div class="Container">
      <section class="CreateAccountContent">
        <!-- Start Logo Content -->
        <div class="LogoFreshCart DisplayNone DisplayBlock-SM DisplayBlock-MD DisplayBlock-LG">
          <img :src="LogoFreshCart" alt="" />
          <p>|</p>
          <h6>Create Account</h6>
        </div>

        <div class="HeadingContentCreateAccount">
          <h5>Basic Information</h5>
          <p>Please provide your full name, valid email, and create a strong password</p>
        </div>
        <div class="BasicInformationContent">
          <form @submit.prevent="handleSubmitBasicInformation">
            <!-- Start Input Full Name -->
            <div class="ContainerInput">
              <label for="Full Name">
                <h6>Full Name*</h6>
                <div class="InputGroup">
                  <input
                    id="firstName"
                    type="text"
                    v-model="inputData.firstName"
                    placeholder="eg: Muhammad Fakhri"
                    required
                  />
                  <input
                    id="lastName"
                    type="text"
                    v-model="inputData.lastName"
                    placeholder="eg: Alfi Syahrin"
                    required
                  />
                </div>
              </label>
            </div>
            <!-- End Input Full Name -->

            <!-- Start Input Email -->
            <div class="ContainerInput">
              <label for="E - Mail">
                <h6>E-Mail*</h6>

                <input
                  id="email"
                  type="email"
                  v-model="inputData.email"
                  placeholder="fakhrialfi9@gmail.com"
                  required
                />
              </label>
            </div>
            <!-- End Input Email -->

            <!-- Start Input Password & Confirm Password -->
            <div class="ContainerInput">
              <label for="Password">
                <h6>Password*</h6>

                <div class="ContainerInputPassword">
                  <input
                    id="password"
                    v-model="inputData.password"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="••••••••••••"
                    required
                  />
                  <div class="IconUnhide" @click="showPassword = !showPassword">
                    {{ showPassword ? 'Hide' : 'Show' }}
                  </div>
                </div>
              </label>

              <label for="Confirm Password">
                <h6>Confirm Password*</h6>

                <div class="ContainerInputPassword">
                  <input
                    id="confirmPassword"
                    v-model="inputData.confirmPassword"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    placeholder="••••••••••••"
                    required
                  />
                  <div class="IconUnhide" @click="showConfirmPassword = !showConfirmPassword">
                    {{ showConfirmPassword ? 'Hide' : 'Show' }}
                  </div>
                </div>
                <p
                  v-if="inputData.password && !validatePassword(inputData.password)"
                  style="color: red"
                >
                  Password must be at least 8 characters long and include at least one uppercase
                  letter, one lowercase letter, one number, and one special character.
                </p>
              </label>
            </div>
            <!-- End Input Password & Confirm Password -->

            <div class="ButtonCallToAction">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
    <AlertBoxComponents ref="alertBox" />
  </main>
</template>

<style scoped src="../../../assets/style/Views/CreateAccountView.css"></style>
