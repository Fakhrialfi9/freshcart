<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue'
import { alertBox, showAlert } from '../../../function/FunctionAlert'
import { useAuthUserStores } from '../../../stores/AuthUserStores'
import LogoFreshCart from '../../../assets/logo/logo-company/freshcart-logo.svg'
import AlertBoxComponents from '../../../components/AlertBoxComponents.vue'
import router from '../../../main/router'

const inputData = reactive({
  phoneNumber: '',
  address: '',
  city: '',
  state: '',
  country: '',
  postalCode: ''
})

const DataSignup = () => {
  inputData.phoneNumber = ''
  inputData.address = ''
  inputData.city = ''
  inputData.state = ''
  inputData.country = ''
  inputData.postalCode = ''
}

const authSignin = useAuthUserStores()
const { signUpcontactinformation } = authSignin

// Handle Submit Form Contact Information
const handleSubmitContactInformation = async () => {
  try {
    await signUpcontactinformation(inputData)
    DataSignup()
    setTimeout(() => {
      router.push('/createaccount/profilesetup')
    }, 1500)
  } catch (error) {
    showAlert('Sign-up failed. Please try again later.', 'error')
    console.error('Signup error:', error)
  }
}
</script>

<template>
  <main class="MainCreateAccountContent">
    <div class="Container">
      <section class="CreateAccountContent">
        <div class="LogoFreshCart DisplayNone DisplayBlock-SM DisplayBlock-MD DisplayBlock-LG">
          <img :src="LogoFreshCart" alt="" />
          <p>|</p>
          <h6>Create Account</h6>
        </div>

        <div class="HeadingContentCreateAccount">
          <h5>Contact Information</h5>
          <p>
            Please provide your contact details including phone number, address, and postal code.
          </p>
        </div>
        <div class="ContactInformationContent">
          <form @submit.prevent="handleSubmitContactInformation">
            <!-- Start Input Phone Number -->
            <div class="ContainerInput">
              <label for="phone-number">
                <h6>Phone Number*</h6>
                <input
                  id="phone-number"
                  type="tel"
                  inputmode="numeric"
                  placeholder="eg: 0896"
                  required
                  v-model="inputData.phoneNumber"
                />
              </label>
            </div>
            <!-- End Input Phone Number -->

            <!-- Start Input Group Address, State, City, Country -->
            <div class="ContainerInput">
              <label for="address">
                <h6>Location*</h6>
                <div class="InputGroup">
                  <input
                    id="address"
                    type="text"
                    placeholder="eg: Pulo Asem"
                    required
                    v-model="inputData.address"
                  />
                  <input
                    id="city"
                    type="text"
                    placeholder="eg: Jakarta Timur"
                    required
                    v-model="inputData.city"
                  />
                  <input
                    id="state"
                    type="text"
                    placeholder="eg: DKI Jakarta"
                    required
                    v-model="inputData.state"
                  />
                  <input
                    id="country"
                    type="text"
                    placeholder="eg: Indonesia"
                    required
                    v-model="inputData.country"
                  />
                </div>
              </label>
            </div>
            <!-- End Input Group Address, State, City, Country -->

            <!-- Start Input Postal Code -->
            <div class="ContainerInput">
              <label for="postal-code">
                <h6>Postal Code*</h6>
                <input
                  id="postal-code"
                  type="text"
                  placeholder="eg: 12345"
                  required
                  v-model="inputData.postalCode"
                />
              </label>
            </div>
            <!-- End Input Postal Code -->
            <div class="ButtonCallToAction">
              <RouterLink to="/createaccount/basicinformation">
                <button type="button">Back</button>
              </RouterLink>
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
      </section>
    </div>
    <AlertBoxComponents ref="alertBox" />
  </main>
</template>

<style scoped src="../../../assets/style/Views/CreateAccountView.css"></style>
