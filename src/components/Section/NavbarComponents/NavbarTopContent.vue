<script setup lang="ts">
import { defineEmits } from 'vue'
import { RouterLink } from 'vue-router'
import LogoNavbar from '../../../assets/logo/logo-company/freshcart-logo.svg'
import IconSearch from '../../../assets/icon/IconSearch.vue'
import IconPinLocation from '../../../assets/icon/IconPinLocation.vue'
import IconWishlist from '../../../assets/icon/IconWishlist.vue'
import IconUsers from '../../../assets/icon/IconUsers.vue'
import IconBagCart from '../../../assets/icon/IconBagCart.vue'
import IconHamburgerMenu from '../../../assets/icon/IconHamburgerMenu.vue'

const emit = defineEmits(['ToggleOpenContentModalsBasketCart', 'ToggleOpenContentMenuMobileSlider'])
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
        <form>
          <i className="IconInputSearch">
            <IconSearch class="IconSearch" />
          </i>
          <input type="text" placeholder="Search For Product" />
        </form>
        <button><IconPinLocation class="IconPinLocation" /> Location</button>
      </div>
    </div>
    <div class="RightContent">
      <RouterLink to="/wishlist" active-class="ActiveIconNavbar" class="DisplayNone-SM Tooltip">
        <IconWishlist class="IconNavbar" />
        <span class="BadgeContentNavbar">21</span>
        <span class="TooltipText">Wishlist</span>
      </RouterLink>

      <RouterLink to="/signin" active-class="ActiveIconNavbar" class="DisplayNone-SM Tooltip">
        <IconUsers class="IconNavbar" />
        <span class="TooltipText">User Login</span>
      </RouterLink>

      <a @click="$emit('ToggleOpenContentModalsBasketCart')" class="DisplayNone-SM Tooltip">
        <IconBagCart class="IconNavbar" />
        <span class="BadgeContentNavbar">20</span>
        <span class="TooltipText"> Cart</span>
      </a>

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
