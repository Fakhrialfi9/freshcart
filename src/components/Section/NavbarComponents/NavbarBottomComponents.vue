<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

// Start Import Router Link
import { RouterLink } from 'vue-router'
// End Import Router Link

import IconGridSquare from '../../../assets/icon/IconGridSquare.vue'
import IconChevronDown from '../../../assets/icon/IconChevronDown.vue'

const AllDepartmentDropdown = ref(false)
const ShopDropdown = ref(false)
const StoresDropdown = ref(false)
const CategoryDropdown = ref(false)
const ArticleDropdown = ref(false)
const ProductDropdown = ref(false)
const BrandDropdown = ref(false)
const PromoDropdown = ref(false)

const closeAllDropdowns = () => {
  AllDepartmentDropdown.value = false
  ShopDropdown.value = false
  StoresDropdown.value = false
  CategoryDropdown.value = false
  ArticleDropdown.value = false
  ProductDropdown.value = false
  BrandDropdown.value = false
  PromoDropdown.value = false
}

const toggleAllDepartmentDropdown = () => {
  closeAllDropdowns()
  AllDepartmentDropdown.value = !AllDepartmentDropdown.value
}

const toggleShopDropdown = () => {
  closeAllDropdowns()
  ShopDropdown.value = !ShopDropdown.value
}

const toggleStoresDropdown = () => {
  closeAllDropdowns()
  StoresDropdown.value = !StoresDropdown.value
}

const toggleCategoryDropdown = () => {
  closeAllDropdowns()
  CategoryDropdown.value = !CategoryDropdown.value
}

const toggleArticleDropdown = () => {
  closeAllDropdowns()
  ArticleDropdown.value = !ArticleDropdown.value
}

const toggleProductDropdown = () => {
  closeAllDropdowns()
  ProductDropdown.value = !ProductDropdown.value
}

const toggleBrandDropdown = () => {
  closeAllDropdowns()
  BrandDropdown.value = !BrandDropdown.value
}

const togglePromoDropdown = () => {
  closeAllDropdowns()
  PromoDropdown.value = !PromoDropdown.value
}

const handleClickOutside = (event: MouseEvent) => {
  const dropdowns = document.querySelectorAll('.DropdownMenu, .DropdownMenuMegaMenu')
  const isClickOutside = Array.from(dropdowns).every(
    (dropdown) => !dropdown.contains(event.target as Node)
  )

  if (isClickOutside) {
    closeAllDropdowns()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="NavbarBottomContent DisplayNone-SM DisplayNone-MD DisplayNone-LG">
    <ul>
      <!-- Start All Departement Menu & Dropdown -->
      <li @click.stop="toggleAllDepartmentDropdown">
        <button>
          <IconGridSquare class="IconButtonAllDepartement" />
          All Departement
        </button>

        <transition name="SlideFadeDropdown">
          <div v-if="AllDepartmentDropdown" class="DropdownMenu" ref="dropdown">
            <ul>
              <li><RouterLink to="/">Dairy, Bread & Eggs</RouterLink></li>
              <li><RouterLink to="/">Snacks & Munchies</RouterLink></li>
              <li><RouterLink to="/">Fruits & Vegetables</RouterLink></li>
              <li><RouterLink to="/">Cold Drinks & Juices</RouterLink></li>
              <li><RouterLink to="/">Breakfast & Instant Food</RouterLink></li>
            </ul>
          </div>
        </transition>
      </li>
      <!-- End All Departement Menu & Dropdown -->

      <!-- Start Home Menu  -->
      <li>
        <RouterLink to="/home" active-class="ActiveLinkNavbar">Home</RouterLink>
      </li>
      <!-- End Home Menu  -->

      <!-- Start Shop Menu & Dropdown -->
      <li @click.stop="toggleShopDropdown">
        <RouterLink to="/shopping" active-class="ActiveLinkNavbar">
          Shopping
          <IconChevronDown class="IconDropdown" />
        </RouterLink>

        <transition name="SlideFadeDropdown">
          <div v-if="ShopDropdown" class="DropdownMenu" ref="dropdown">
            <ul>
              <li><RouterLink to="/">Fruits & Vegetables</RouterLink></li>
              <li><RouterLink to="/">Meat & Poultry</RouterLink></li>
              <li><RouterLink to="/">Dairy & Eggs</RouterLink></li>
              <li><RouterLink to="/">Bakery & Bread</RouterLink></li>
              <li><RouterLink to="/">Pantry Staples</RouterLink></li>
            </ul>
          </div>
        </transition>
      </li>
      <!-- End Shop Menu & Dropdown -->

      <!-- Start Stores Menu & Dropdown -->
      <li @click.stop="toggleStoresDropdown">
        <a>
          Stores
          <IconChevronDown class="IconDropdown" />
        </a>

        <transition name="SlideFadeDropdown">
          <div v-if="StoresDropdown" class="DropdownMenu" ref="dropdown">
            <ul>
              <li><RouterLink to="/">Tokyo, Jepang</RouterLink></li>
              <li><RouterLink to="/">Paris, Prancis</RouterLink></li>
              <li><RouterLink to="/">New York City, Amerika Serikat</RouterLink></li>
              <li><RouterLink to="/">Sydney, Australia</RouterLink></li>
              <li><RouterLink to="/">Cairo, Mesir</RouterLink></li>
            </ul>
          </div>
        </transition>
      </li>
      <!-- End Stores Menu & Dropdown -->

      <!-- Start Category Menu & Dropdown -->
      <li @click.stop="toggleCategoryDropdown">
        <a>
          Category
          <IconChevronDown class="IconDropdown" />
        </a>

        <transition name="SlideFadeDropdownMegaMenu">
          <div v-if="CategoryDropdown" class="DropdownMenuMegaMenu" ref="dropdown">
            <ul>
              <ol>
                <span>Dairy, Bread and Eggs</span>
                <li><RouterLink to="/">Condiments & Sauces</RouterLink></li>
                <li><RouterLink to="/">Seafood</RouterLink></li>
                <li><RouterLink to="/">Health Foods</RouterLink></li>
                <li><RouterLink to="/">Grains & Pasta</RouterLink></li>
                <li><RouterLink to="/">Canned & Packaged Foods</RouterLink></li>
              </ol>
              <ol>
                <span>Dairy, Bread and Eggs</span>
                <li><RouterLink to="/">Condiments & Sauces</RouterLink></li>
                <li><RouterLink to="/">Seafood</RouterLink></li>
                <li><RouterLink to="/">Health Foods</RouterLink></li>
                <li><RouterLink to="/">Grains & Pasta</RouterLink></li>
                <li><RouterLink to="/">Canned & Packaged Foods</RouterLink></li>
              </ol>
              <ol>
                <span>Dairy, Bread and Eggs</span>
                <li><RouterLink to="/">Condiments & Sauces</RouterLink></li>
                <li><RouterLink to="/">Seafood</RouterLink></li>
                <li><RouterLink to="/">Health Foods</RouterLink></li>
                <li><RouterLink to="/">Grains & Pasta</RouterLink></li>
                <li><RouterLink to="/">Canned & Packaged Foods</RouterLink></li>
              </ol>
            </ul>
          </div>
        </transition>
      </li>
      <!-- End Category Menu & Dropdown -->

      <!-- Start Article Menu & Dropdown -->
      <li @click.stop="toggleArticleDropdown">
        <a>
          Article
          <IconChevronDown class="IconDropdown" />
        </a>

        <transition name="SlideFadeDropdown">
          <div v-if="ArticleDropdown" class="DropdownMenu" ref="dropdown">
            <ul>
              <li><RouterLink to="/">Fresh Fruits</RouterLink></li>
              <li><RouterLink to="/">Fresh Vegetables</RouterLink></li>
              <li><RouterLink to="/">Dairy Products</RouterLink></li>
              <li><RouterLink to="/">Fresh Meat & Poultry</RouterLink></li>
              <li><RouterLink to="/">Seafood</RouterLink></li>
            </ul>
          </div>
        </transition>
      </li>
      <!-- End Article Menu & Dropdown -->

      <!-- Start Product Menu & Dropdown -->
      <li @click.stop="toggleProductDropdown">
        <a>
          Product
          <IconChevronDown class="IconDropdown" />
        </a>

        <transition name="SlideFadeDropdown">
          <div v-if="ProductDropdown" class="DropdownMenu" ref="dropdown">
            <ul>
              <li><RouterLink to="/">Snacks & Sweets</RouterLink></li>
              <li><RouterLink to="/">Beverages</RouterLink></li>
              <li><RouterLink to="/">Frozen Foods</RouterLink></li>
              <li><RouterLink to="/">Organic & Specialty</RouterLink></li>
              <li><RouterLink to="/">International Cuisine</RouterLink></li>
            </ul>
          </div>
        </transition>
      </li>
      <!-- End Product Menu & Dropdown -->

      <!-- Start Brand Menu & Dropdown -->
      <li @click.stop="toggleBrandDropdown">
        <a>
          Brand
          <IconChevronDown class="IconDropdown" />
        </a>

        <transition name="SlideFadeDropdown">
          <div v-if="BrandDropdown" class="DropdownMenu" ref="dropdown">
            <ul>
              <li><RouterLink to="/">Tech Brands</RouterLink></li>
              <li><RouterLink to="/">Fashion Brands</RouterLink></li>
              <li><RouterLink to="/">Book Publishers</RouterLink></li>
              <li><RouterLink to="/">Gardening Brands</RouterLink></li>
              <li><RouterLink to="/">Outdoor Brands</RouterLink></li>
            </ul>
          </div>
        </transition>
      </li>
      <!-- End Brand Menu & Dropdown -->

      <!-- Start Promo Menu & Dropdown -->
      <li @click.stop="togglePromoDropdown" class="PromoBadge">
        <a>
          Promo
          <IconChevronDown class="IconDropdown" />
        </a>

        <transition name="SlideFadeDropdown">
          <div v-if="PromoDropdown" class="DropdownMenu" ref="dropdown">
            <ul>
              <li><RouterLink to="/">Fresh Fruit Deals</RouterLink></li>
              <li><RouterLink to="/">Vegetable Discounts</RouterLink></li>
              <li><RouterLink to="/">Dairy Product Sales</RouterLink></li>
              <li><RouterLink to="/">Meat & Poultry Offers</RouterLink></li>
              <li><RouterLink to="/">Seafood Specials</RouterLink></li>
            </ul>
          </div>
        </transition>
      </li>
      <!-- End Promo Menu & Dropdown -->
    </ul>
  </div>
</template>

<style scoped src="../../../assets/style/Components/NavbarComponents.css"></style>
<style
  scoped
  src="../../../assets/style/Components/Section/NavbarComponents/NavbarBottomContent.css"
></style>
