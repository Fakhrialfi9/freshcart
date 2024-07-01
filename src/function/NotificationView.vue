<script lang="ts">
import { defineComponent, ref } from 'vue'

const visible = ref(false)
const message = ref('')
const type = ref<'success' | 'error'>('success')

// Ganti path audio notifikasi sesuai struktur proyek Anda
const notificationSound = new Audio('../assets/Sound/notification.mp3')

export function showNotification(newMessage: string, newType: 'success' | 'error') {
  message.value = newMessage
  type.value = newType
  visible.value = true
  console.log('Notification triggered:', newMessage, newType)
  setTimeout(hideNotification, 4500)

  // Play notification sound
  playNotificationSound()
}

function hideNotification() {
  visible.value = false
}

function playNotificationSound() {
  try {
    console.log('Attempting to play notification sound...')
    notificationSound.play()
    console.log('Notification sound played successfully.')
  } catch (err) {
    console.error('Failed to play notification sound:', err)
  }
}

export default defineComponent({
  name: 'NotificationView',

  setup() {
    return {
      visible,
      message,
      type,
      showNotification,
      hideNotification
    }
  }
})
</script>

<template>
  <transition name="notification-slide" mode="in-out">
    <div v-if="visible" :class="['NotificationIOS', type]" @click="hideNotification">
      <div class="ContentTop-NotificationIOS">
        <span>
          <div class="box" :class="[type]"></div>
          <h5>{{ type === 'success' ? 'Success' : 'Error' }}</h5>
        </span>
        <span>
          <h5>Now</h5>
        </span>
      </div>
      <div class="ContentBottom-NotificationIOS">
        <span>
          <h5>{{ message }} 🚀</h5>
        </span>
      </div>
    </div>
  </transition>
</template>

<style scoped src="../assets/style/Function/NotificationView.css"></style>
