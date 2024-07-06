<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const dataSteps = {
  Steps: [
    {
      title: 'Basic Information',
      description: 'Name, email, create password',
      route: '/createaccount/basicinformation'
    },
    {
      title: 'Contact Information',
      description: 'Phone number, address, postal code',
      route: '/createaccount/contactinformation'
    },
    {
      title: 'Profile Setup',
      description: 'Upload picture, set display name',
      route: '/createaccount/profilesetup'
    },
    {
      title: 'Two-Factor Authentication',
      description: 'Setup 2FA: SMS, email, app',
      route: '/createaccount/authentication'
    },
    {
      title: 'Security Questions',
      description: 'Answer security questions',
      route: '/createaccount/securityquestions'
    },
    {
      title: 'FinalConfirmation',
      description: 'Confirmation message, redirect to login',
      route: '/createaccount/finalconfirmation'
    }
  ],
  currentStep: 0,
  activeStep: '',
  passiveStep: ''
}

const data = ref(dataSteps)

// Fungsi untuk memperbarui currentStep berdasarkan route yang aktif
function updateCurrentStep() {
  const currentPath = router.currentRoute.value.path
  const index = data.value.Steps.findIndex((step) => step.route === currentPath)
  if (index !== -1) {
    data.value.currentStep = index
  }
}

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

const styleSteps = computed(() => {
  return {
    '--Active-Color': data.value.activeStep,
    '--Passive-Color': data.value.passiveStep
  }
})
</script>

<template>
  <main class="NavbarCreateAccount">
    <nav class="Navbar">
      <div class="Container">
        <div class="NavbarContent" :style="styleSteps">
          <ul class="StepsList">
            <li
              class="Steps"
              v-for="(step, index) in data.Steps"
              :key="index"
              :class="{
                StepsActive: index === data.currentStep,
                StepsDone: index < data.currentStep,
                StepsDoneClear: index === 0 && data.currentStep === 0
              }"
            >
              <RouterLink :to="step.route">
                <div class="StepsBullet">
                  <div class="StepsBulletFill"></div>
                </div>

                <div class="StepsLine">
                  <div class="StepsLineFill"></div>
                </div>

                <span>
                  <h6>{{ step.title }}</h6>
                  <p>{{ step.description }}</p>
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </main>
</template>

<style scoped src="../assets/style/Components/NavbarCreateAccount.css"></style>
