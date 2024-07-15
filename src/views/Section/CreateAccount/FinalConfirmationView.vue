<script setup lang="ts">
import LogoFreshCart from '../../../assets/logo/logo-company/freshcart-logo.svg'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleSubmit = () => {
  setTimeout(() => {
    router.push('/home')
  }, 1500)
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
          <h5>Final Confirmation</h5>
          <p>Please confirm your account creation</p>
        </div>
        <div class="FinalConfirmationContent">
          <form @submit.prevent="handleSubmit">
            <div class="ConfirmationMessage">
              <p>Thank you for creating your account!</p>
              <p>You will now be redirected to the login page.</p>
            </div>
            <div class="ButtonCallToAction">
              <RouterLink to="/createaccount/securityquestions">
                <button type="button">Back</button>
              </RouterLink>
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped src="../../../assets/style/Views/CreateAccountView.css"></style>
