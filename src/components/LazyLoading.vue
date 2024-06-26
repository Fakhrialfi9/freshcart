<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const logo = new URL('../assets/logo/logo-company/freshcart-logo.svg', import.meta.url).href

onMounted(() => {
  setTimeout(() => {
    console.log('Navigating to HomeView...')
    router.push({ name: 'home' }) // Ubah menjadi 'home' jika itu nama rute yang benar
  }, 1500)
})
</script>

<template>
  <div class="LazyLoading">
    <img :src="logo" alt="Wayflayer Logo" />
    <h5>Taste the Freshness, Every Day at Fresh Market</h5>

    <div class="CopyRight">
      <span>Developed By</span>
      <button>
        <a href="https://www.instagram.com/fakhrialvi9/">Muhammad Fakhri Alfi Syahrin H</a>
      </button>
    </div>
  </div>
</template>

<style scoped>
.LazyLoading {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
  align-content: center !important;
  margin: 0 auto;
  padding: 1.5rem 2rem !important;
  gap: 1rem;
  background-color: var(--white-color);
  box-sizing: border-box !important;
  overflow: hidden !important;
}

.LazyLoading img {
  width: 40%;
}

.LazyLoading h5 {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--gray-500);
}

.CopyRight {
  position: absolute;
  bottom: 3.5rem;
  display: flex;
  flex-direction: column;
  width: auto;
  max-width: auto;
  height: auto;
  max-height: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
  gap: 0.85rem;
}

.CopyRight > span {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--dark-color);
}

.CopyRight > button {
  display: flex;
  width: auto;
  max-width: auto;
  height: auto;
  max-height: auto;
  flex-direction: row;
  padding: 1rem 1.5rem;
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.CopyRight > button > a {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--white-color) !important;
}

@media screen and (max-width: 768px) {
  .LazyLoading img {
    width: 80%;
  }

  .LazyLoading h5 {
    font-size: 0.9rem;
  }
}
</style>
