<script lang="ts">
// Start Import Router Link & Router View
import { RouterLink } from 'vue-router'
// End Import Router Link & Router View

export default {
  components: {
    RouterLink
  },
  data() {
    return {
      AllDepartmentDropdown: false,
      ShopDropdown: false,
      StoresDropdown: false,
      CategoryDropdown: false,
      ArticleDropdown: false,
      ProductDropdown: false,
      BrandDropdown: false,
      PromoDropdown: false
    }
  },
  methods: {
    toggleDropdown() {
      ;(this.AllDepartmentDropdown = !this.AllDepartmentDropdown),
        (this.ShopDropdown = !this.ShopDropdown),
        (this.StoresDropdown = !this.StoresDropdown),
        (this.CategoryDropdown = !this.CategoryDropdown),
        (this.ArticleDropdown = !this.ArticleDropdown),
        (this.ProductDropdown = !this.ProductDropdown),
        (this.BrandDropdown = !this.BrandDropdown),
        (this.PromoDropdown = !this.PromoDropdown)
    },

    toggleAllDepartmentDropdown() {
      this.AllDepartmentDropdown = !this.AllDepartmentDropdown
    },

    toggleShopDropdown() {
      this.ShopDropdown = !this.ShopDropdown
    },

    toggleStoresDropdown() {
      this.StoresDropdown = !this.StoresDropdown
    },

    toggleCategoryDropdown() {
      this.CategoryDropdown = !this.CategoryDropdown
    },

    toggleArticleDropdown() {
      this.ArticleDropdown = !this.ArticleDropdown
    },

    toggleProductDropdown() {
      this.ProductDropdown = !this.ProductDropdown
    },

    toggleBrandDropdown() {
      this.BrandDropdown = !this.BrandDropdown
    },

    togglePromoDropdown() {
      this.PromoDropdown = !this.PromoDropdown
    }
  }
}
</script>

<script setup lang="ts">
import IconGridSquare from '../../../assets/icon/IconGridSquare.vue'
import IconChevronDown from '../../../assets/icon/IconChevronDown.vue'
</script>

<template>
  <div class="NavbarBottomContent DisplayNone-SM DisplayNone-MD DisplayNone-LG">
    <ul>
      <!-- Start All Departement Menu & Dropdown -->
      <li @mouseenter="AllDepartmentDropdown = true" @mouseleave="AllDepartmentDropdown = false">
        <button>
          <IconGridSquare class="IconButtonAllDepartement" />
          All Departement
        </button>

        <transition name="SlideFadeDropdown">
          <div v-if="AllDepartmentDropdown" class="DropdownMenu">
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
        <RouterLink to="/home">Home</RouterLink>
      </li>
      <!-- End Home Menu  -->

      <!-- Start Shop Menu & Dropdown -->
      <li @mouseenter="ShopDropdown = true" @mouseleave="ShopDropdown = false">
        <a>
          Shopping
          <IconChevronDown class="IconDropdown" />
        </a>

        <transition name="SlideFadeDropdown">
          <div v-if="ShopDropdown" class="DropdownMenu">
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
      <li @mouseenter="StoresDropdown = true" @mouseleave="StoresDropdown = false">
        <a>
          Stores
          <IconChevronDown class="IconDropdown" />
        </a>

        <transition name="SlideFadeDropdown">
          <div v-if="StoresDropdown" class="DropdownMenu">
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
      <li @mouseenter="CategoryDropdown = true" @mouseleave="CategoryDropdown = false">
        <a>
          Category
          <IconChevronDown class="IconDropdown" />
        </a>

        <transition name="SlideFadeDropdown">
          <div v-if="CategoryDropdown" class="DropdownMenuMegaMenu">
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
      <li @mouseenter="ArticleDropdown = true" @mouseleave="ArticleDropdown = false">
        <a>
          Article
          <IconChevronDown class="IconDropdown" />
        </a>

        <transition name="SlideFadeDropdown">
          <div v-if="ArticleDropdown" class="DropdownMenu">
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
      <li @mouseenter="ProductDropdown = true" @mouseleave="ProductDropdown = false">
        <a>
          Product
          <IconChevronDown class="IconDropdown" />
        </a>

        <transition name="SlideFadeDropdown">
          <div v-if="ProductDropdown" class="DropdownMenu">
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
      <li @mouseenter="BrandDropdown = true" @mouseleave="BrandDropdown = false">
        <a>
          Brand
          <IconChevronDown class="IconDropdown" />
        </a>

        <transition name="SlideFadeDropdown">
          <div v-if="BrandDropdown" class="DropdownMenu">
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
      <li class="PromoBadge" @mouseenter="PromoDropdown = true" @mouseleave="PromoDropdown = false">
        <a>
          Promo
          <IconChevronDown class="IconDropdown" />
        </a>

        <transition name="SlideFadeDropdown">
          <div v-if="PromoDropdown" class="DropdownMenu">
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
