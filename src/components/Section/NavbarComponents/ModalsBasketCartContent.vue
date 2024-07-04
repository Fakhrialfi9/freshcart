<script setup lang="ts">
import { ref, defineEmits, defineProps, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { countries, getCountriesData } from '../../../services/APi/GetRestCountries' // Impor fungsi dan state

// Start Input Icon
import IconClose from '../../../assets/icon/IconClose.vue'
import IconSearch from '../../../assets/icon/IconSearch.vue'
// End Input Icon

// Fungsi untuk memotong teks menjadi maksimal 10 suku kata
const truncateText = (text: string, maxWords: number) => {
  const words = text.split(' ')
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...'
  }
  return text
}

// State untuk menyimpan kata kunci pencarian
const searchTerm = ref('')

// Computed property untuk memfilter negara berdasarkan kata kunci pencarian
const filteredCountries = computed(() => {
  if (!searchTerm.value) {
    return countries.value
  }
  return countries.value.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})

// Panggil fungsi untuk mengambil data negara saat komponen di-mount
onMounted(() => {
  getCountriesData()
})

const props = defineProps({
  setOpenModalsBasketCart: Boolean
})

const emit = defineEmits(['ToggleOpenContentModalsBasketCart'])
</script>

<template>
  <transition name="SlideFadeToggleModalBasketCart">
    <div v-if="setOpenModalsBasketCart" class="ModalBasketCart">
      <div class="ContentCardModalBasketCart">
        <!-- Start Content Heading -->
        <div class="ContentHeading">
          <ul class="HeadingContent-ModalBasketCart">
            <li>
              <h5>Choose your Delivery Location</h5>
              <p>Enter your address and we will specify the offer you area.</p>
            </li>
            <li>
              <span @click="$emit('ToggleOpenContentModalsBasketCart')">
                <IconClose class="IconCloseToggle" />
              </span>
            </li>
          </ul>
        </div>
        <!-- End Content Heading -->

        <!-- Start Content Input -->
        <div class="ContentFormInputSearch">
          <form @submit.prevent>
            <i class="IconInputSearch">
              <IconSearch class="IconSearch" />
            </i>
            <input type="text" placeholder="Search products..." v-model="searchTerm" />
          </form>
        </div>
        <!-- End Content Input -->

        <!-- Start Content Select Country -->
        <div class="ContentSelectHeadingContent">
          <div class="SelectLocation">
            <h5>Select Location</h5>
            <button @click="searchTerm = ''">Clear All</button>
          </div>
        </div>
        <!-- End Content Select Country -->

        <!-- Start Content Name Country -->
        <div class="ContainerCountry">
          <button class="ContentCountry" v-for="country in filteredCountries" :key="country.cca3">
            <div class="NameCountry">
              <h6>{{ truncateText(country.name.common, 1) }}</h6>
            </div>
            <div class="ShippingCost">
              <!-- Contoh biaya pengiriman -->
              <h6>Rp 20.000</h6>
            </div>
          </button>
        </div>
        <!-- End Content Name Country -->
      </div>
    </div>
  </transition>

  <div
    @click="$emit('ToggleOpenContentModalsBasketCart')"
    :class="{ active: setOpenModalsBasketCart }"
    class="BlurEffect"
  ></div>
</template>

<style scoped src="../../../assets/style/Components/NavbarComponents.css"></style>
<style scoped src="../../../assets/style/Components/ModalsCart.css"></style>
