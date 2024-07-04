<!-- NavbarTopComponents.vue -->

<script setup lang="ts">
import { defineEmits, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useSearch } from '../../../stores/SearchStore'
import { useProducts, type Product } from '../../../function/useProduct' // Pastikan mengimpor useProducts dan Product dari useProduct.ts

// Start Import Function Wishlist & Cart
import { CartItems } from '../../../stores/AddToCart'
import { WishlistItems } from '../../../stores/AddToWishlist'
// End Import Function Wishlist & Cart

// Start Import Logo Fresh Cart
import LogoNavbar from '../../../assets/logo/logo-company/freshcart-logo.svg'
// End Import Logo Fresh Cart

// Start Import Icon
import IconSearch from '../../../assets/icon/IconSearch.vue'
import IconPinLocation from '../../../assets/icon/IconPinLocation.vue'
import IconWishlist from '../../../assets/icon/IconWishlist.vue'
import IconUsers from '../../../assets/icon/IconUsers.vue'
import IconBagCart from '../../../assets/icon/IconBagCart.vue'
import IconHamburgerMenu from '../../../assets/icon/IconHamburgerMenu.vue'
// End Import Icon

const router = useRouter()
const searchQuery = ref<string>('') // State untuk menyimpan nilai input pencarian
const showAutofill = ref(false) // State untuk menampilkan atau menyembunyikan autofill
const autofillProducts = ref<Product[]>([]) // State untuk daftar produk autofill

const { products: allProducts, loading, error } = useProducts() // Menggunakan hook useProducts untuk mendapatkan data produk

// Fungsi untuk menangani pencarian produk
const handleSearch = () => {
  if (searchQuery.value) {
    router.push({ path: '/search', query: { q: searchQuery.value } }) // Redirect ke halaman pencarian dengan query
  }
}

// Fungsi untuk menangani autofill saat input berubah
const handleAutofill = () => {
  if (!searchQuery.value) {
    showAutofill.value = false // Sembunyikan autofill jika input kosong
    return
  }

  // Filter produk berdasarkan input pencarian
  const lowerQuery = searchQuery.value.toLowerCase()
  autofillProducts.value = allProducts.value
    .filter((product: Product) => product.nameProduct.toLowerCase().includes(lowerQuery))
    .slice(0, 4) // Batasi hingga 4 hasil maksimal

  showAutofill.value = true // Tampilkan daftar autofill
}

// Fungsi untuk memilih produk dari daftar autofill
const selectAutofill = (product: Product) => {
  searchQuery.value = product.nameProduct // Set nilai input dengan nama produk yang dipilih
  showAutofill.value = false // Sembunyikan autofill setelah memilih produk
  handleSearch() // Lakukan pencarian setelah memilih produk
}

const emit = defineEmits(['ToggleOpenContentModalsBasketCart', 'ToggleOpenContentMenuMobileSlider']) // Mendefinisikan event untuk emit
</script>

<template>
  <div class="NavbarTopContent">
    <div class="LeftContent">
      <div class="LogoNavbarContent">
        <RouterLink to="/home">
          <img :src="LogoNavbar" alt="Local Image" />
        </RouterLink>
      </div>
      <div class="FormSearchNavbarContent DisplayNone-SM DisplayNone-MD DisplayNone-LG">
        <form @submit.prevent="handleSearch">
          <i class="IconInputSearch">
            <IconSearch class="IconSearch" />
          </i>
          <input v-model="searchQuery" placeholder="Search products..." @input="handleAutofill" />
          <div class="ShowAutofillCard" v-if="showAutofill && autofillProducts.length > 0">
            <ul>
              <li
                v-for="(product, index) in autofillProducts"
                :key="index"
                @click="selectAutofill(product)"
              >
                <a> {{ product.nameProduct }}</a>
              </li>
            </ul>
          </div>
          <div class="ShowAutofillCard" v-else-if="showAutofill && autofillProducts.length === 0">
            <p>No products found.</p>
          </div>
        </form>
        <button @click="$emit('ToggleOpenContentModalsBasketCart')">
          <IconPinLocation class="IconPinLocation" /> Location
        </button>
      </div>
    </div>
    <div class="RightContent">
      <RouterLink to="/signin" active-class="ActiveIconNavbar" class="DisplayNone-SM Tooltip">
        <IconUsers class="IconNavbar" />
        <span class="TooltipText">User Login</span>
      </RouterLink>

      <RouterLink to="/wishlist" active-class="ActiveIconNavbar" class="DisplayNone-SM Tooltip">
        <IconWishlist class="IconNavbar" />
        <span class="BadgeContentNavbar">{{ WishlistItems.length }}</span>
        <span class="TooltipText">Wishlist</span>
      </RouterLink>

      <RouterLink to="/basketcart" active-class="ActiveIconNavbar" class="DisplayNone-SM Tooltip">
        <IconBagCart class="IconNavbar" />
        <span class="BadgeContentNavbar">{{ CartItems.length }}</span>
        <span class="TooltipText">Basket Cart</span>
      </RouterLink>

      <!-- <a @click="$emit('ToggleOpenContentModalsBasketCart')" class="DisplayNone-SM Tooltip">
        <IconBagCart class="IconNavbar" />
        <span class="BadgeContentNavbar">{{ add.count }}</span>
        <span class="TooltipText"> Cart</span>
      </a> -->

      <a
        @click="$emit('ToggleOpenContentMenuMobileSlider')"
        class="DisplayNone DisplayBlock-SM DisplayBlock-MD DisplayBlock-LG"
      >
        <IconHamburgerMenu class="IconHamburgerMenu" />
      </a>
    </div>
  </div>
</template>

<style scoped src="../../../assets/style/Components/NavbarComponents.css"></style>
<style
  scoped
  src="../../../assets/style/Components/Section/NavbarComponents/NavbarTopContent.css"
></style>
