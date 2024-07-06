<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import LogoFreshCart from '../../../assets/logo/logo-company/freshcart-logo.svg'
import AlertBoxComponents from '../../../components/AlertBoxComponents.vue'
import { alertBox } from '../../../function/FunctionAlert'
import { dataSteps } from '../../../function/FunctionDataNavigationStep'
import { updateCurrentStep } from '../../../function/FunctionUpdateProgressSteps'
import { handleSubmitAuthentication } from '../../../function/FunctionHandleSubmitFormCreateAccount'
import { isStepCompleteAuthentication } from '../../../function/FunctionStepIsComplete'
import { selectedMethod, message, email, authenticator } from '../../../function/FunctionDataState'

// State management
const router = useRouter()

// Computed properties
const styleSteps = computed(() => ({
  '--Active-Color': dataSteps.value.activeStep,
  '--Passive-Color': dataSteps.value.passiveStep
}))

const filteredSteps = computed(() => [dataSteps.value.Steps[dataSteps.value.currentStep]])

// Lifecycle hooks
onMounted(() => {
  updateCurrentStep()
})

watch(
  () => router.currentRoute.value.path,
  () => updateCurrentStep()
)

// Methods
</script>

<template>
  <main class="MainCreateAccountContent">
    <div class="Container">
      <section class="CreateAccountContent" :style="styleSteps">
        <div class="LogoFreshCart DisplayNone DisplayBlock-SM DisplayBlock-MD DisplayBlock-LG">
          <img :src="LogoFreshCart" alt="" />
          <p>|</p>
          <h6>Create Account</h6>
        </div>
        <!-- Start Step Progress Content -->
        <div
          class="ContainerStepBullet DisplayNone DisplayBlock-SM DisplayBlock-MD DisplayBlock-LG"
          v-for="(step, index) in filteredSteps"
          :key="index"
          :class="{
            StepsActive: index === dataSteps.currentStep,
            StepsDone: index < dataSteps.currentStep && isStepCompleteAuthentication(index),
            StepsDoneClear: index === 0 && dataSteps.currentStep === 0
          }"
        >
          <div class="StepsBullet">
            <div class="StepsBulletFill"></div>
          </div>
          <div class="StepsLine">
            <div class="StepsLineFill"></div>
          </div>
        </div>
        <!-- End Step Progress Content -->
        <div class="HeadingContentCreateAccount">
          <h5>Two-Factor Authentication</h5>
          <p>Setup 2FA using SMS, email, or authenticator app</p>
        </div>
        <div class="TwoFactorAuthenticationContent">
          <form @submit.prevent="handleSubmitAuthentication">
            <!-- Start Select Methode Auth -->
            <div class="ContainerInput">
              <label for="method">
                <h6>Choose Method*</h6>
                <select id="method" v-model="selectedMethod" required>
                  <option value="">Select Method</option>
                  <option value="sms">SMS</option>
                  <option value="email">Email</option>
                  <option value="app">Authenticator App</option>
                </select>
              </label>

              <!-- Start Select Methode Message -->
              <label v-if="selectedMethod === 'sms'" for="phone-number">
                <h6>Phone Number*</h6>
                <input
                  v-model="message"
                  id="phone-number"
                  type="tel"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  placeholder="eg: 0896"
                  required
                />
              </label>
              <!-- End Select Methode Message -->

              <!-- Start Select Methode Email -->
              <label v-if="selectedMethod === 'email'" for="email">
                <h6>Email Address*</h6>
                <input
                  v-model="email"
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  required
                />
              </label>
              <!-- End Select Methode Email -->

              <!-- Start Select Methode Google Authenticator -->
              <label v-if="selectedMethod === 'app'" for="app">
                <h6>Authenticator App*</h6>
                <input
                  v-model="authenticator"
                  id="app"
                  type="text"
                  placeholder="eg: Google Authenticator"
                  required
                />
              </label>
              <!-- End Select Methode Google Authenticator -->
            </div>
            <!-- End Select Methode Auth -->
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
