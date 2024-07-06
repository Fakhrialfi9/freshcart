<script setup lang="ts">
import { onMounted, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import LogoFreshCart from '../../../assets/logo/logo-company/freshcart-logo.svg'
import AlertBoxComponents from '../../../components/AlertBoxComponents.vue'
import { alertBox } from '../../../function/FunctionAlert'
import { data } from '../../../function/FunctionDataNavigationStep'
import { updateCurrentStep } from '../../../function/FunctionUpdateProgressSteps'
import { handleSubmitContactInformation } from '../../../function/FunctionHandleSubmitFormCreateAccount'
import { isStepCompleteContactInformation } from '../../../function/FunctionStepIsComplete'
import {
  phoneNumber,
  address,
  city,
  state,
  country,
  postalCode
} from '../../../function/FunctionDataState'

const router = useRouter()

// Perbarui currentStep saat komponen dimounted dan route berubah
onMounted(() => {
  updateCurrentStep()
})

watch(
  () => router.currentRoute.value.path,
  () => {
    updateCurrentStep()
  }
)

const styleSteps = computed(() => ({
  '--Active-Color': data.value.activeStep,
  '--Passive-Color': data.value.passiveStep
}))

const filteredSteps = computed(() => [data.value.Steps[data.value.currentStep]])
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
            StepsActive: index === data.currentStep,
            StepsDone: index < data.currentStep && isStepCompleteContactInformation(index),
            StepsDoneClear: index === 0 && data.currentStep === 0
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
                  v-model="phoneNumber"
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
                    v-model="address"
                  />
                  <input
                    id="city"
                    type="text"
                    placeholder="eg: Jakarta Timur"
                    required
                    v-model="city"
                  />
                  <input
                    id="state"
                    type="text"
                    placeholder="eg: DKI Jakarta"
                    required
                    v-model="state"
                  />
                  <input
                    id="country"
                    type="text"
                    placeholder="eg: Indonesia"
                    required
                    v-model="country"
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
                  v-model="postalCode"
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
