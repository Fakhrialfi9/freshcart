<script setup lang="ts">
import { ref, watchEffect } from 'vue'

// Define the BeforeInstallPromptEvent type
interface BeforeInstallPromptEvent extends Event {
  prompt(): void
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

// Reactive variables
let deferredPrompt = ref<BeforeInstallPromptEvent | null>(null)
let showCard = ref(false)
let currentTime = ref(formatTime(new Date()))

// Methods
const addToHomeScreen = () => {
  if (deferredPrompt.value) {
    deferredPrompt.value.prompt()
    deferredPrompt.value.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt')
      } else {
        console.log('User dismissed the install prompt')
      }
      deferredPrompt.value = null
    })
  }
}

const closeCard = () => {
  showCard.value = false // Close the card when close button is clicked
}

// Update current time every second
setInterval(() => {
  currentTime.value = formatTime(new Date())
}, 1000)

// Format time function
function formatTime(date: Date) {
  let hours = date.getHours()
  let minutes = date.getMinutes()
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}

// Event listener for beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e: Event) => {
  e.preventDefault()
  deferredPrompt.value = e as BeforeInstallPromptEvent
})

// Watch for changes in showCard
watchEffect(() => {
  console.log('showCard value changed:', showCard.value)
})
</script>

<template>
  <main id="MainInstallApps" v-if="deferredPrompt">
    <section class="InstallApps">
      <div class="Container">
        <div class="ContentInstallApps">
          <!-- Card -->
          <transition name="fade">
            <div class="Card-ContentInstallApps" v-if="showCard">
              <div class="Card-TopContentInstallApps">
                <span>
                  <div class="box"></div>
                  <h5>Install Fresh Cart</h5>
                </span>
                <span>
                  <h5>{{ currentTime }}</h5>
                </span>
              </div>
              <div class="Card-BottomontentInstallApps">
                <span>
                  <h5>Temukan Product Makanan Terbaik se-Indonesia di <b>Fresh Cart</b></h5>
                </span>
                <div class="ButtonInstall">
                  <button @click="closeCard">Close</button>
                  <button @click="addToHomeScreen">Install Now</button>
                </div>
              </div>
            </div>
          </transition>
          <!-- Card -->
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  position: fixed;
  top: 9rem;
  left: 0;
  display: flex;
  flex-direction: row;
  width: 100vw;
  max-width: 100vw;
  height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-left: calc(0.5rem * 0.5) !important;
  padding-right: calc(0.5rem * 0.5) !important;
  margin: 0 auto !important;
  box-sizing: border-box !important;
  -webkit-text-size-adjust: 100% !important;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.InstallApps {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
}

.ContentInstallApps {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
}
.Card-ContentInstallApps {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 95%;
  height: auto;
  max-height: auto;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 1rem;
  background-color: rgb(255, 255, 255, 0.85);
  backdrop-filter: blur(2rem);
  border-radius: var(--border-radius-lg);
  border: 0.05rem solid var(--border-color);
  gap: 0.85rem;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.Card-ContentInstallApps > .Card-TopContentInstallApps {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: auto;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
}

.Card-ContentInstallApps > .Card-TopContentInstallApps > span {
  display: flex;
  flex-direction: row;
  width: auto;
  max-width: auto;
  height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
}

.Card-ContentInstallApps > .Card-TopContentInstallApps > span > .box {
  display: flex;
  flex-direction: row;
  width: 1rem;
  max-width: 1rem;
  height: 1rem;
  max-height: 1rem;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0;
  padding: 0;
  background-color: var(--primary-color);
  border-radius: var(--border-radius-sm);
}

.Card-ContentInstallApps > .Card-TopContentInstallApps > span > h5 {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--gray-700);
}

.Card-ContentInstallApps > .Card-BottomontentInstallApps {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: auto;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
  gap: 0.5rem;
}

.Card-ContentInstallApps > .Card-BottomontentInstallApps > span {
  display: flex;
  flex-direction: row;
  width: auto;
  max-width: auto;
  height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
}

.Card-ContentInstallApps > .Card-BottomontentInstallApps > span > h5 {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--gray-700);
}

.Card-ContentInstallApps > .Card-BottomontentInstallApps > .ButtonInstall {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: auto;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
  gap: 0.7rem;
}

.Card-ContentInstallApps > .Card-BottomontentInstallApps > .ButtonInstall > button {
  display: flex;
  flex-direction: row;
  font-size: 0.75rem;
  background-color: transparent;
  border: 0.075rem solid var(--border-color);
  color: var(--gray-700);
  font-weight: 600;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
}
</style>
