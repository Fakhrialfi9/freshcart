<script setup lang="ts">
import { ref, watchEffect } from 'vue'

// Definisikan tipe BeforeInstallPromptEvent
// Event ini akan dipanggil ketika browser mendeteksi bahwa aplikasi dapat diinstal sebagai PWA
interface BeforeInstallPromptEvent extends Event {
  prompt(): void // Memunculkan prompt instalasi
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }> // Hasil pilihan pengguna (diterima atau ditolak)
}

// Variabel reaktif
const deferredPrompt = ref<BeforeInstallPromptEvent | null>(null) // Menyimpan event sebelum instalasi
const showCard = ref(false) // Menentukan apakah card ditampilkan atau tidak
const currentTime = ref(formatTime(new Date())) // Menyimpan waktu saat ini yang diformat

// Fungsi untuk memunculkan prompt Add to Home Screen
const addToHomeScreen = () => {
  if (deferredPrompt.value) {
    deferredPrompt.value.prompt() // Tampilkan prompt instalasi
    deferredPrompt.value.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        // Pengguna menerima prompt
        console.log('User accepted the install prompt')
      } else {
        // Pengguna menolak prompt
        console.log('User dismissed the install prompt')
      }
      deferredPrompt.value = null // Reset deferredPrompt setelah pengguna membuat pilihan
    })
  }
}

// Fungsi Untuk Menutup Card
const closeCard = () => {
  showCard.value = false // Menyembunyikan card
}

// Fungsi Format Waktu
// Fungsi ini mengambil objek Date dan mengembalikan waktu dalam format HH:mm
function formatTime(date: Date): string {
  const hours = date.getHours() // Mendapatkan jam
  const minutes = date.getMinutes() // Mendapatkan menit
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}` // Mengembalikan string waktu dengan format HH:mm
}

// Perbarui waktu saat ini setiap detik
setInterval(() => {
  currentTime.value = formatTime(new Date()) // Mengatur currentTime dengan waktu saat ini setiap detik
}, 1000)

// Listener untuk event beforeinstallprompt
// Event ini akan dipanggil ketika aplikasi dapat diinstal sebagai PWA
window.addEventListener('beforeinstallprompt', (e: Event) => {
  e.preventDefault() // Mencegah prompt default agar kita bisa mengatur sendiri
  deferredPrompt.value = e as BeforeInstallPromptEvent // Menyimpan event untuk digunakan nanti
})

// Observe perubahan pada showCard
watchEffect(() => {
  // Log perubahan nilai showCard (opsional, bisa disesuaikan dengan kebutuhan)
  // console.log('showCard value changed:', showCard.value);
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
