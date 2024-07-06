<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import LogoFreshCart from '../../../assets/logo/logo-company/freshcart-logo.svg'
import { dataSteps } from '../../../function/FunctionDataNavigationStep'
import { updateCurrentStep } from '../../../function/FunctionUpdateProgressSteps'
import AlertBoxComponents from '../../../components/AlertBoxComponents.vue'
import { alertBox } from '../../../function/FunctionAlert'
import {
  handleSubmitProfileSetup,
  handleFileChange
} from '../../../function/FunctionHandleSubmitFormCreateAccount'
import { isStepCompleteProfileSetup } from '../../../function/FunctionStepIsComplete'
import { userName, bio, textareaHeight } from '../../../function/FunctionDataState'

const router = useRouter()
const data = ref(dataSteps)

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
            StepsDone: index < data.currentStep && isStepCompleteProfileSetup(index),
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
          <h5>Profile Setup</h5>
          <p>
            Upload your profile picture, set your display name and username, and write a short bio
          </p>
        </div>
        <div class="ProfileSetupContent">
          <form @submit.prevent="handleSubmitProfileSetup">
            <!-- Start Upload Avatar Profile -->
            <div class="ContainerInput">
              <label for="profile-picture">
                <h6>Profile Picture*</h6>
                <input
                  id="profile-picture"
                  type="file"
                  accept="image/*"
                  @change="handleFileChange"
                  required
                />
              </label>
            </div>
            <!-- End Upload Avatar Profile -->

            <!-- Start Input Username Profile -->
            <div class="ContainerInput">
              <label for="user-name">
                <h6>User Name*</h6>
                <input
                  id="userName"
                  type="text"
                  v-model="userName"
                  placeholder="eg: JohnDoe123"
                  required
                />
              </label>
            </div>
            <!-- End Input Username Profile -->

            <!-- Start Input Bio Profile -->
            <div class="ContainerInput">
              <label for="bio">
                <h6>Bio</h6>
                <textarea
                  id="PersonalBiography"
                  type="text"
                  :style="{ height: `${textareaHeight}px` }"
                  v-model="bio"
                  placeholder="Write a short bio about yourself"
                ></textarea>
              </label>
            </div>
            <!-- End Input Bio Profile -->
            <div class="ButtonCallToAction">
              <RouterLink to="/createaccount/contactinformation">
                <button type="submit">Back</button>
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
