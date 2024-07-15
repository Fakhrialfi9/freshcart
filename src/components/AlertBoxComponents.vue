<script setup>
import { ref, computed } from 'vue'
import { alertBox } from '../function/FunctionAlert.ts'

const isVisible = ref(false)
const message = ref('')
const messageType = ref('error') // Default to 'error'
let timeoutId = null // Variable to store the timeout ID

// Function to show the alert with a message and type
function showAlert(msg, type = 'error') {
  message.value = msg
  messageType.value = type
  isVisible.value = true

  // Clear any existing timeout
  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  // Set timeout to hide the alert after 3 seconds
  timeoutId = setTimeout(() => {
    isVisible.value = false
  }, 850)
}

// Function to close the alert manually
function closeAlert() {
  isVisible.value = false

  // Clear the timeout when the alert is closed manually
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
}

// Computed class based on messageType
const alertClass = computed(() => {
  return {
    'MainAlert-Box': true,
    'MainAlert-error': messageType.value === 'error',
    'MainAlert-warning': messageType.value === 'warning',
    'MainAlert-info': messageType.value === 'info',
    'MainAlert-success': messageType.value === 'success'
  }
})

alertBox.value = { showAlert } // Assign showAlert to alertBox

defineExpose({ showAlert }) // Expose the showAlert method
</script>

<template>
  <transition name="Alert-Slide">
    <section class="Container" v-if="isVisible" :class="alertClass">
      <div class="MainAlert">
        <p>{{ message }}</p>
        <button @click="closeAlert">Close</button>
      </div>
    </section>
  </transition>
</template>

<style scoped src="../assets/style/Components/AlertBoxComponents.css"></style>
