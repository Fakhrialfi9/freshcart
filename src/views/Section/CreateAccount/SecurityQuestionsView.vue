<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import LogoFreshCart from '../../../assets/logo/logo-company/freshcart-logo.svg'
import AlertBoxComponents from '../../../components/AlertBoxComponents.vue'
import { alertBox } from '../../../function/FunctionAlert'
import { dataSteps } from '../../../function/FunctionDataNavigationStep'
import { updateCurrentStep } from '../../../function/FunctionUpdateProgressSteps'
import { handleSubmitQuestionSecurity } from '../../../function/FunctionHandleSubmitFormCreateAccount'
import { isStepCompleteQuestionSecurity } from '../../../function/FunctionStepIsComplete'
import { answers } from '../../../function/FunctionDataState'

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

const styleSteps = computed(() => {
  return {
    '--Active-Color': data.value.activeStep,
    '--Passive-Color': data.value.passiveStep
  }
})

const filteredSteps = computed(() => {
  return [data.value.Steps[data.value.currentStep]]
})
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
            StepsDone: index < data.currentStep && isStepCompleteQuestionSecurity(index),
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
          <h5>Security Questions</h5>
          <p>Answer security questions to enhance account security</p>
        </div>
        <div class="SecurityQuestionsContent">
          <form @submit.prevent="handleSubmitQuestionSecurity">
            <!-- Start Select Question Security 1 -->
            <div class="ContainerInput">
              <label for="question1">
                <h6>Security Question 1*</h6>
                <select id="question1" v-model="answers[0].question" required>
                  <option value="">Select Question</option>
                  <option value="What is your mother's maiden name?">
                    What is your mother's maiden name?
                  </option>
                  <option value="What city were you born in?">What city were you born in?</option>
                  <option value="What is your favorite book?">What is your favorite book?</option>
                  <!-- Add more security questions as needed -->
                </select>
                <input
                  v-if="answers[0].question !== ''"
                  type="text"
                  v-model="answers[0].answer"
                  placeholder="Answer*"
                  required
                />
              </label>
            </div>
            <!-- End Select Question Security 1 -->

            <!-- Start Select Question Security 2 -->
            <div class="ContainerInput">
              <label for="question2">
                <h6>Security Question 2*</h6>
                <select id="question2" v-model="answers[1].question" required>
                  <option value="">Select Question</option>
                  <option value="What was the name of your first pet?">
                    What was the name of your first pet?
                  </option>
                  <option value="What is the name of your favorite teacher?">
                    What is the name of your favorite teacher?
                  </option>
                  <option value="In what city did you meet your spouse/partner?">
                    In what city did you meet your spouse/partner?
                  </option>
                  <!-- Add more security questions as needed -->
                </select>
                <input
                  v-if="answers[1].question !== ''"
                  type="text"
                  v-model="answers[1].answer"
                  placeholder="Answer*"
                  required
                />
              </label>
            </div>
            <!-- End Select Question Security 2 -->
            <div class="ButtonCallToAction">
              <RouterLink to="/createaccount/authentication">
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
