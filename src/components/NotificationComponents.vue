<!-- NotificationView.vue -->

<script lang="ts">
import { defineComponent, ref } from 'vue'

// Interface untuk Notification
interface Notification {
  id: number
  message: string
  type: 'success' | 'error'
  url?: string
  destination?: 'wishlist' | 'cart'
}

// Inisialisasi ID notifikasi berikutnya
let nextNotificationId = 1

// Referensi untuk waktu saat ini
let currentTime = ref(formatTime(new Date()))

// Referensi untuk daftar notifikasi
const notifications = ref<Notification[]>([])

/**
 * Menampilkan notifikasi baru
 * @param newMessage - Pesan notifikasi
 * @param newType - Tipe notifikasi ('success' atau 'error')
 * @param url - URL tujuan (opsional)
 * @param destination - Tujuan notifikasi ('wishlist' atau 'cart', opsional)
 */
export function showNotification(
  newMessage: string,
  newType: 'success' | 'error',
  url?: string,
  destination?: 'wishlist' | 'cart'
) {
  const id = nextNotificationId++
  notifications.value.push({ id, message: newMessage, type: newType, url, destination })
  setTimeout(() => hideNotification(id), 4500)
}

/**
 * Menyembunyikan notifikasi berdasarkan ID
 * @param id - ID notifikasi yang akan disembunyikan
 */
function hideNotification(id: number) {
  const index = notifications.value.findIndex((notification) => notification.id === id)
  if (index !== -1) {
    notifications.value.splice(index, 1)
  }
}

// Memperbarui waktu saat ini setiap detik
setInterval(() => {
  currentTime.value = formatTime(new Date())
}, 1000)

/**
 * Memformat waktu menjadi string dengan format HH:mm
 * @param date - Objek Date yang akan diformat
 * @returns - String waktu dalam format HH:mm
 */
function formatTime(date: Date) {
  let hours = date.getHours()
  let minutes = date.getMinutes()
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}

export default defineComponent({
  name: 'NotificationView',

  setup() {
    /**
     * Navigasi ke URL yang diberikan
     * @param url - URL tujuan
     */
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
  <main>
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
  </main>
</template>

<style scoped src="../assets/style/Function/NotificationView.css"></style>
