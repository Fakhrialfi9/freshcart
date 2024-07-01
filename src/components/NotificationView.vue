<!-- NotificationView.vue -->

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface Notification {
  id: number
  message: string
  type: 'success' | 'error'
  url?: string
  destination?: 'wishlist' | 'cart'
}

let nextNotificationId = 1
let currentTime = ref(formatTime(new Date()))

const notifications = ref<Notification[]>([])

export function showNotification(
  newMessage: string,
  newType: 'success' | 'error',
  url?: string,
  destination?: 'wishlist' | 'cart'
) {
  const id = nextNotificationId++
  notifications.value.push({ id, message: newMessage, type: newType, url, destination })
  console.log('Notification triggered:', newMessage, newType)
  setTimeout(() => hideNotification(id), 4500)
}

function hideNotification(id: number) {
  const index = notifications.value.findIndex((notification) => notification.id === id)
  if (index !== -1) {
    notifications.value.splice(index, 1)
  }
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

export default defineComponent({
  name: 'NotificationView',

  setup() {
    function goToUrl(url: string) {
      window.location.href = url
    }

    return {
      notifications,
      showNotification,
      hideNotification,
      currentTime,
      goToUrl
    }
  }
})
</script>

<template>
  <div class="MainNotification">
    <transition-group name="notification-slide" mode="out-in">
      <div
        v-for="notification in notifications"
        :key="notification.id"
        :class="['NotificationIOS', notification.type]"
        @click="hideNotification(notification.id)"
      >
        <div class="ContentTop-NotificationIOS">
          <span>
            <div class="box" :class="[notification.type]"></div>
            <h5>{{ notification.type === 'success' ? 'Success' : 'Error' }}</h5>
          </span>
          <span>
            <h5>{{ currentTime }}</h5>
          </span>
        </div>
        <div class="ContentBottom-NotificationIOS">
          <span>
            <h5>{{ notification.message }} 🚀</h5>
            <button
              v-if="notification.url"
              @click="goToUrl(notification.url)"
              class="notification-link"
            >
              View {{ notification.destination === 'wishlist' ? 'Wishlist' : 'Cart' }}
            </button>
          </span>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<style scoped src="../assets/style/Function/NotificationView.css"></style>
