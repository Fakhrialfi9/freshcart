<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { showAlert, alertBox } from '../../../function/FunctionAlert'
import { useAuthUserStores } from '../../../stores/AuthUserStores'
import { sendOtpByMessage, sendOtpByEmail, verifyOtpByEmail } from '../../../services/OtpServices'
import router from '../../../main/router/github'
import LogoFreshCart from '../../../assets/logo/logo-company/freshcart-logo.svg'
import AlertBoxComponents from '../../../components/AlertBoxComponents.vue'

// State management
const selectedMethod = ref('')
const setShowMethod = ref(false)
const email = ref('')
const otpCode = ref('')
const showOtpEmail = ref(false)
const showOtpMessage = ref(false)
const serverOtp = ref('')
const phoneNumber = ref('')
const isDisabled = ref(true)

// Input data
const inputData = reactive({
  verifyotp: ''
})

// Auth store
const authSignin = useAuthUserStores()
const { signUpauthentication } = authSignin

// Show OTP input for message
const otpMessage = () => {
  showOtpMessage.value = true
}

// Show OTP input for email
const otpEmail = () => {
  showOtpEmail.value = true
}

// Send OTP via email
const handleSendOtp = async () => {
  try {
    const response = await sendOtpByEmail(email.value, '')
    serverOtp.value = response.otp // Assuming the server returns the OTP in the response
    showAlert('OTP sent to your email', 'success')
    showOtpEmail.value = true
    otpEmail()
  } catch (error) {
    console.error('Failed to send OTP:', error)
    showAlert('Failed to send OTP. Please try again.', 'error')
  }
}

// Reset input data
const DataSignup = () => {
  inputData.verifyotp = ''
}

// Verify OTP
const handleVerifyOtp = async () => {
  try {
    const response = await verifyOtpByEmail(email.value, otpCode.value)
    if (response.success) {
      showAlert('OTP Verified Successfully', 'success')

      setTimeout(async () => {
        await signUpauthentication(inputData)
        console.log(inputData)
        DataSignup()

        setTimeout(() => {
          router.push('/createaccount/finalconfirmation')
        }, 1350)
      }, 500)
    } else {
      showAlert('Invalid OTP', 'error')
    }
  } catch (error) {
    console.error('Error verifying OTP:', error)
    showAlert('Failed to verify OTP. Please try again.', 'error')
  }
}

// Select OTP method (email or message)
const selectMethod = (method: string) => {
  selectedMethod.value = method
}

// Toggle method dropdown
const toggleSelectMethod = () => {
  closeAllDropdowns()
  setShowMethod.value = !setShowMethod.value
}

// Close all dropdowns
const closeAllDropdowns = () => {
  setShowMethod.value = false
}

// Handle click outside dropdown
const handleClickOutside = (event: MouseEvent) => {
  const dropdowns = document.querySelectorAll('.ContentSelectOption')
  const isClickOutside = Array.from(dropdowns).every(
    (dropdown) => !dropdown.contains(event.target as Node)
  )

  if (isClickOutside) {
    closeAllDropdowns()
  }
}

// Mount and unmount lifecycle hooks
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
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
          <h5>Two-Factor Authentication</h5>
          <p>Setup 2FA using SMS, email, or authenticator app</p>
        </div>
        <div class="TwoFactorAuthenticationContent">
          <form @submit.prevent="handleVerifyOtp">
            <!-- Start Select Method Auth -->
            <div class="ContainerInput">
              <!-- Start Select Methode OTP -->
              <div class="ContainerSelectMethod">
                <div class="SelectMethod" @click.stop="toggleSelectMethod">
                  <h6>Select Method</h6>
                </div>

                <transition
                  name="SlideFadeDropdown"
                  mode="in-out"
                  :duration="{ enter: 400, leave: 400 }"
                >
                  <div v-if="setShowMethod" class="CardSelectMethod" ref="dropdown">
                    <ul>
                      <li @click="selectMethod('sms')">
                        <option value="sms">Message</option>
                      </li>
                      <li @click="selectMethod('email')">
                        <option value="email">Email</option>
                      </li>
                    </ul>
                  </div>
                </transition>
              </div>
              <!-- End Select Methode OTP -->

              <!-- Start Select Method SMS -->
              <label v-if="selectedMethod === 'sms'" for="sms">
                <h6>Phone Number* | "Currently in testing."</h6>
                <div class="FormButtonOtpCheck">
                  <input
                    v-model="phoneNumber"
                    id="phoneNumber"
                    type="tel"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    placeholder="eg: 0896"
                    autocomplete="off"
                    required
                    :disabled="isDisabled"
                  />
                  <button disabled type="button" @click="handleSendOtp">Send</button>
                </div>
              </label>
              <!-- End Select Method SMS -->

              <!-- Start OTP Input if SMS Method is Selected -->
              <label v-if="showOtpMessage && selectedMethod === 'sms'" for="otp">
                <h6>Enter OTP*</h6>
                <input
                  v-model="otpCode"
                  id="otp"
                  name="verifyotp"
                  type="tel"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  placeholder="eg: 0000"
                  autocomplete="off"
                  required
                />
                />
              </label>
              <!-- End OTP Input if SMS Method is Selected -->

              <!-- Start Select Method Email -->
              <label v-if="selectedMethod === 'email'" for="email">
                <h6>Email*</h6>
                <div class="FormButtonOtpCheck">
                  <input
                    v-model="email"
                    id="email"
                    type="email"
                    placeholder="eg: example@example.com"
                    autocomplete="off"
                    required
                  />
                  <button type="button" @click="handleSendOtp">Send</button>
                </div>
              </label>
              <!-- End Select Method Email -->

              <!-- Start OTP Input if Email Method is Selected -->
              <label v-if="showOtpEmail && selectedMethod === 'email'" for="email">
                <h6>Enter OTP*</h6>
                <input
                  v-model="inputData.verifyotp"
                  v-model.number="otpCode"
                  id="verifyotp"
                  name="verifyotp"
                  type="tel"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  placeholder="eg: 0000"
                  autocomplete="off"
                  required
                />
              </label>
              <!-- End OTP Input if Email Method is Selected -->
            </div>
            <!-- End Select Method Auth -->
            <div class="ButtonCallToAction">
              <RouterLink to="/createaccount/profilesetup">
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
