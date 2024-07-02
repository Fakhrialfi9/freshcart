<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, defineProps, defineEmits } from 'vue'
import { RouterLink } from 'vue-router'
import IconClose from '../../../assets/icon/IconClose.vue'
import IconChevronDown from '../../../assets/icon/IconChevronDown.vue'
import IconSearch from '../../../assets/icon/IconSearch.vue'
import IconPinLocation from '../../../assets/icon/IconPinLocation.vue'
import LogoNavbar from '../../../assets/logo/logo-company/freshcart-logo.svg'

const props = defineProps({
  setOpenMenuMobileSlider: Boolean
})

const emit = defineEmits(['ToggleOpenContentMenuMobileSlider'])

const AllDepartmentDropdown = ref(false)
const ShopDropdown = ref(false)
const StoresDropdown = ref(false)
const CategoryDropdown = ref(false)
const ArticleDropdown = ref(false)
const ProductDropdown = ref(false)
const BrandDropdown = ref(false)
const PromoDropdown = ref(false)

function toggleAllDepartmentDropdown() {
  AllDepartmentDropdown.value = !AllDepartmentDropdown.value
}

function toggleShopDropdown() {
  ShopDropdown.value = !ShopDropdown.value
}

function toggleStoresDropdown() {
  StoresDropdown.value = !StoresDropdown.value
}

function toggleCategoryDropdown() {
  CategoryDropdown.value = !CategoryDropdown.value
}

function toggleArticleDropdown() {
  ArticleDropdown.value = !ArticleDropdown.value
}

function toggleProductDropdown() {
  ProductDropdown.value = !ProductDropdown.value
}

function toggleBrandDropdown() {
  BrandDropdown.value = !BrandDropdown.value
}

function togglePromoDropdown() {
  PromoDropdown.value = !PromoDropdown.value
}
</script>

<template>
  <!-- Start Slider Menu Mobile -->
  <transition name="SlideFadeToggleMenu">
    <div v-if="setOpenMenuMobileSlider" class="MobileMenu">
      <ul>
        <!-- Start Logo Image Mobile -->
        <li>
          <a
            ><img :src="LogoNavbar" alt="Local Image" />
            <div @click="$emit('ToggleOpenContentMenuMobileSlider')">
              <IconClose class="IconCloseToggle" />
            </div>
          </a>
        </li>
        <!-- End Logo Image Mobile -->

        <!-- Start Form & Button Mobile -->
        <li>
          <form>
            <i className="IconInputSearchMobile">
              <IconSearch class="IconSearch" />
            </i>
            <input type="text" placeholder="Search For Product" />
          </form>
          <button><IconPinLocation class="IconPinLocation" /> Pick Location</button>
        </li>
        <!-- End Form & Button Mobile -->

        <!-- Start Menu Button All Departement Mobile -->
        <li>
          <button @click="toggleAllDepartmentDropdown" @mouseleave="AllDepartmentDropdown = false">
            All Departement
          </button>

          <transition name="SlideFadeDropdown">
            <div v-if="AllDepartmentDropdown" class="DropdownMenuMobile">
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
        <!-- End Menu Button All Departement Mobile -->

        <!-- Start Menu Home Mobile -->
        <!-- <li><a>Home</a></li> -->
        <!-- End Menu Home Mobile -->

        <div class="diver"></div>

        <!-- Start Menu Shop Mobile -->
        <li>
          <a @click="toggleShopDropdown" @mouseleave="ShopDropdown = false">
            Shop
            <IconChevronDown class="IconDropdown" />
          </a>

          <transition name="SlideFadeDropdown">
            <div v-if="ShopDropdown" class="DropdownMenuMobile">
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
        <!-- End Menu Shop Mobile -->

        <div class="diver"></div>

        <!-- Start Menu Stores Mobile -->
        <li>
          <a @click="toggleStoresDropdown" @mouseleave="StoresDropdown = false">
            Stores
            <IconChevronDown class="IconDropdown" />
          </a>

          <transition name="SlideFadeDropdown">
            <div v-if="StoresDropdown" class="DropdownMenuMobile">
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
        <!-- End Menu Stores Mobile -->

        <div class="diver"></div>

        <!-- Start Menu Category Mobile -->
        <li>
          <a @click="toggleCategoryDropdown" @mouseleave="CategoryDropdown = false">
            Category
            <IconChevronDown class="IconDropdown" />
          </a>

          <transition name="SlideFadeDropdown">
            <div v-if="CategoryDropdown" class="DropdownMenuMobile">
              <ul>
                <li><RouterLink to="/">Condiments & Sauces</RouterLink></li>
                <li><RouterLink to="/">Seafood</RouterLink></li>
                <li><RouterLink to="/">Health Foods</RouterLink></li>
                <li><RouterLink to="/">Grains & Pasta</RouterLink></li>
                <li><RouterLink to="/">Canned & Packaged Foods</RouterLink></li>
              </ul>
            </div>
          </transition>
        </li>
        <!-- End Menu Category Mobile -->

        <div class="diver"></div>

        <!-- Start Menu Article Mobile -->
        <li>
          <a @click="toggleArticleDropdown" @mouseleave="ArticleDropdown = false">
            Article
            <IconChevronDown class="IconDropdown" />
          </a>

          <transition name="SlideFadeDropdown">
            <div v-if="ArticleDropdown" class="DropdownMenuMobile">
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
        <!-- End Menu Article Mobile -->

        <div class="diver"></div>

        <!-- Start Menu Product Mobile -->
        <li>
          <a @click="toggleProductDropdown" @mouseleave="ProductDropdown = false">
            Product
            <IconChevronDown class="IconDropdown" />
          </a>

          <transition name="SlideFadeDropdown">
            <div v-if="ProductDropdown" class="DropdownMenuMobile">
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
        <!-- End Menu Product Mobile -->

        <div class="diver"></div>

        <!-- Start Menu Brand Mobile -->
        <li>
          <a @click="toggleBrandDropdown" @mouseleave="BrandDropdown = false">
            Brand
            <IconChevronDown class="IconDropdown" />
          </a>

          <transition name="SlideFadeDropdown">
            <div v-if="BrandDropdown" class="DropdownMenuMobile">
              <ul>
                <li><RouterLink to="/">Condiments & Sauces</RouterLink></li>
                <li><RouterLink to="/">Seafood</RouterLink></li>
                <li><RouterLink to="/">Health Foods</RouterLink></li>
                <li><RouterLink to="/">Grains & Pasta</RouterLink></li>
                <li><RouterLink to="/">Canned & Packaged Foods</RouterLink></li>
              </ul>
            </div>
          </transition>
        </li>
        <!-- End Menu Brand Mobile -->

        <div class="diver"></div>

        <!-- Start Menu Promo Mobile -->
        <li>
          <a @click="togglePromoDropdown" @mouseleave="PromoDropdown = false">
            Promo
            <IconChevronDown class="IconDropdown" />
          </a>

          <transition name="SlideFadeDropdown">
            <div v-if="PromoDropdown" class="DropdownMenuMobile">
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

        <!-- End Menu Promo Mobile -->
      </ul>
    </div>
  </transition>
  <!-- End Slider Menu Mobile -->

  <div
    @click="$emit('ToggleOpenContentMenuMobileSlider')"
    :class="{ active: setOpenMenuMobileSlider }"
    class="BlurEffect"
  ></div>
</template>

<style
  scoped
  src="../../../assets/style/Components/Section/NavbarComponents/MenuMobileSlider.css"
></style>
