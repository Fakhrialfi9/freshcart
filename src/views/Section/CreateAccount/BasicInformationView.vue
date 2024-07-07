<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import LogoFreshCart from '../../../assets/logo/logo-company/freshcart-logo.svg'
import AlertBoxComponents from '../../../components/AlertBoxComponents.vue'
import { alertBox } from '../../../function/FunctionAlert'
import { dataSteps, data } from '../../../function/FunctionDataNavigationStep'
import { updateCurrentStep } from '../../../function/FunctionUpdateProgressSteps'
import { handleSubmitBasicInformation } from '../../../function/FunctionHandleSubmitFormCreateAccount'
import { isStepCompleteBasicInformation } from '../../../function/FunctionStepIsComplete'
import {
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  showPassword,
  showConfirmPassword
} from '../../../function/FunctionDataState'
import { validatePassword } from '../../../function/FunctionPasswordValidate'

const router = useRouter()

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
  '--Active-Color': dataSteps.value.activeStep,
  '--Passive-Color': dataSteps.value.passiveStep
}))

const filteredSteps = computed(() => [dataSteps.value.Steps[dataSteps.value.currentStep]])
</script>

<template>
  <main class="MainCreateAccountContent">
    <div class="Container">
      <section class="CreateAccountContent" :style="styleSteps">
        <!-- Start Logo Content -->
        <div class="LogoFreshCart DisplayNone DisplayBlock-SM DisplayBlock-MD DisplayBlock-LG">
          <img :src="LogoFreshCart" alt="" />
          <p>|</p>
          <h6>Create Account</h6>
        </div>
        <!-- End Logo Content -->

        <!-- Start Step Progress Content -->
        <div
          class="ContainerStepBullet DisplayNone DisplayBlock-SM DisplayBlock-MD DisplayBlock-LG"
          v-for="(step, index) in filteredSteps"
          :key="index"
          :class="{
            StepsActive: index === data.currentStep,
            StepsDone: index < data.currentStep && isStepCompleteBasicInformation(index),
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
                    id="first-name"
                    type="text"
                    v-model="firstName"
                    placeholder="eg: Muhammad Fakhri"
                    required
                  />
                  <input
                    id="last-name"
                    type="text"
                    v-model="lastName"
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
                  v-model="email"
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
                    v-model="password"
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
                    v-model="confirmPassword"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    placeholder="••••••••••••"
                    required
                  />
                  <div class="IconUnhide" @click="showConfirmPassword = !showConfirmPassword">
                    {{ showConfirmPassword ? 'Hide' : 'Show' }}
                  </div>
                </div>
                <p v-if="password && !validatePassword(password)" style="color: red">
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
