<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, reactive } from 'vue'
import { useAuthUserStores } from '../../../stores/AuthUserStores'
import { alertBox, showAlert } from '../../../function/FunctionAlert'
import LogoFreshCart from '../../../assets/logo/logo-company/freshcart-logo.svg'
import AlertBoxComponents from '../../../components/AlertBoxComponents.vue'
import router from '../../../main/router'

const setShowSecurityQuestion1 = ref(false)
const setShowSecurityQuestion2 = ref(false)
const answers = ref([
  { question: '', answer: '' }, // Pertanyaan 1
  { question: '', answer: '' } // Pertanyaan 2
])

const toggleSecurityQuestion1 = () => {
  closeAllDropdowns()
  setShowSecurityQuestion1.value = !setShowSecurityQuestion1.value
}

const toggleSecurityQuestion2 = () => {
  closeAllDropdowns()
  setShowSecurityQuestion2.value = !setShowSecurityQuestion2.value
}

const closeAllDropdowns = () => {
  setShowSecurityQuestion1.value = false
  setShowSecurityQuestion2.value = false
}

const selectQuestion1 = (type: string) => {
  switch (type) {
    case 'mother':
      inputData.securityQuestions[0].question = "What is your mother's maiden name?"
      break
    case 'city':
      inputData.securityQuestions[0].question = 'What city were you born in?'
      break
    case 'book':
      inputData.securityQuestions[0].question = 'What is your favorite book?'
      break
  }
}

const selectQuestion2 = (type: string) => {
  switch (type) {
    case 'pet':
      inputData.securityQuestions[1].question = 'What was the name of your first pet?'
      break
    case 'teacher':
      inputData.securityQuestions[1].question = 'What is the name of your favorite teacher?'
      break
    case 'spouse/partner':
      inputData.securityQuestions[1].question = 'In what city did you meet your spouse/partner?'
      break
  }
}

const handleClickOutside = (event: MouseEvent) => {
  const dropdowns = document.querySelectorAll('.ContentSelectOption')
  const isClickOutside = Array.from(dropdowns).every(
    (dropdown) => !dropdown.contains(event.target as Node)
  )

  if (isClickOutside) {
    closeAllDropdowns()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

// Reactive state for input data
const inputData = reactive({
  securityQuestions: [
    { question: '', answer: '' },
    { question: '', answer: '' }
  ]
})

// Accessing authentication methods
const authSignin = useAuthUserStores()
const { signUpsecurityquestion } = authSignin

// Handle Submit Form Contact Information
const handleSubmitQuestionSecurity = async () => {
  try {
    await signUpsecurityquestion(inputData)
    setTimeout(() => {
      router.push('/createaccount/authentication')
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
          <h5>Security Questions</h5>
          <p>Answer security questions to enhance account security</p>
        </div>
        <div class="SecurityQuestionsContent">
          <form @submit.prevent="handleSubmitQuestionSecurity">
            <!-- Start Select Question Security 1 -->
            <div class="ContainerSelectMethod">
              <div class="SelectMethod" @click.stop="toggleSecurityQuestion1">
                <h6>Security Question 1*</h6>
              </div>

              <transition
                name="SlideFadeDropdown"
                mode="in-out"
                :duration="{ enter: 400, leave: 400 }"
              >
                <div v-if="setShowSecurityQuestion1" class="CardSelectMethod" ref="dropdown">
                  <ul>
                    <li @click="selectQuestion1('mother')">
                      <option value="What is your mother's maiden name?">
                        What is your mother's maiden name?
                      </option>
                    </li>
                    <li @click="selectQuestion1('city')">
                      <option value="What city were you born in?">
                        What city were you born in?
                      </option>
                    </li>
                    <li @click="selectQuestion1('book')">
                      <option value="What is your favorite book?">
                        What is your favorite book?
                      </option>
                    </li>
                  </ul>
                </div>
              </transition>
              <input
                v-if="inputData.securityQuestions[0].question !== ''"
                type="text"
                v-model="inputData.securityQuestions[0].answer"
                placeholder="Answer*"
                required
              />
            </div>
            <!-- End Select Question Security 1 -->

            <!-- Start Select Question Security 2 -->
            <div class="ContainerSelectMethod">
              <div class="SelectMethod" @click.stop="toggleSecurityQuestion2">
                <h6>Security Question 2*</h6>
              </div>

              <transition
                name="SlideFadeDropdown"
                mode="in-out"
                :duration="{ enter: 400, leave: 400 }"
              >
                <div v-if="setShowSecurityQuestion2" class="CardSelectMethod" ref="dropdown">
                  <ul>
                    <li @click="selectQuestion2('pet')">
                      <option value="What was the name of your first pet?">
                        What was the name of your first pet?
                      </option>
                    </li>
                    <li @click="selectQuestion2('teacher')">
                      <option value="What is the name of your favorite teacher?">
                        What is the name of your favorite teacher?
                      </option>
                    </li>
                    <li @click="selectQuestion2('spouse/partner')">
                      <option value="In what city did you meet your spouse/partner?">
                        In what city did you meet your spouse/partner?
                      </option>
                    </li>
                  </ul>
                </div>
              </transition>
              <input
                v-if="inputData.securityQuestions[1].question !== ''"
                type="text"
                v-model="inputData.securityQuestions[1].answer"
                placeholder="Answer*"
                required
              />
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
