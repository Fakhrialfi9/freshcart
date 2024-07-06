<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import LogoFreshCart from '../assets/logo/logo-company/freshcart-logo.svg'

// Ref to access the text element
const typingText = ref<string>('')

// Initial text for typing animation
const initialText = `
  Hello, Welcome to Fresh Cart, <br />
  If You're Interested in Proceeding to Create an Account, <br />
  Continue by Clicking the "Create Account" Button
`

// Function to simulate typing animation
const typeWriter = () => {
  let i = 0
  const speed = 100 // Typing speed in milliseconds

  function type() {
    if (i < initialText.length) {
      typingText.value += initialText.charAt(i)
      i++
      setTimeout(type, speed)
    } else {
      // When typing animation completes, show the button
      showButton.value = true
    }
  }

  type()
}

// Ref to track when to show the button
const showButton = ref<boolean>(false)

// Trigger typing animation when component is mounted
onMounted(() => {
  typeWriter()
})
</script>

<template>
  <main id="MainSignupUser">
    <section class="Signup">
      <div class="Container">
        <div class="SignupContent">
          <div class="CardBoxSignupContent">
            <div class="LogoFreshCart">
              <img :src="LogoFreshCart" alt="Fresh Cart Logo" />
            </div>
            <!-- Bind HTML to v-html to render HTML from typingText -->
            <div class="TextWelcome">
              <h5 v-html="typingText"></h5>
            </div>
            <!-- Conditional rendering for the button -->
            <div class="ButtonCallToAction">
              <RouterLink to="/createaccount/basicinformation" class="ButtonCreateAccount">
                <button v-if="showButton">Create Account</button>
              </RouterLink>
              <RouterLink to="/home" class="ButtonBackToHome">
                <button v-if="showButton">Back</button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped src="../assets/style/Views/UserSignupView.css"></style>
