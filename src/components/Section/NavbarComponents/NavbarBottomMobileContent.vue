<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

import IconWishlist from '../../../assets/icon/IconWishlist.vue'
import IconUsers from '../../../assets/icon/IconUsers.vue'
import IconBagCart from '../../../assets/icon/IconBagCart.vue'
import IconGridSquare from '../../../assets/icon/IconGridSquare.vue'

import { add, store } from '../../../stores/add'

const emit = defineEmits(['ToggleOpenContentModalsBasketCart'])
</script>

<template>
  <div class="NavbarBottomMobile DisplayNone DisplayBlock-SM">
    <div class="Container">
      <div class="NavbarBottomMobileContent">
        <ul class="Left-NavbarBottomMobileContent">
          <li>
            <RouterLink to="/home" active-class="ActiveNavbarBottomMobile">
              <IconGridSquare class="IconGridSquareNavbarBottom" />
            </RouterLink>
          </li>
          <li>
            <a @click="$emit('ToggleOpenContentModalsBasketCart')">
              <IconBagCart class="IconBagCartNavbarBottom" />
            </a>
          </li>
        </ul>

        <ul class="Center-NavbarBottomMobileContent">
          <li class="CenterIconNavbarBottom">
            <RouterLink to="/signin" active-class="ActiveNavbarBottomMobileCenter">
              <IconUsers class="IconUsersNavbarBottom" />
            </RouterLink>
          </li>
        </ul>

        <ul class="Right-NavbarBottomMobileContent">
          <li>
            <RouterLink to="/wishlist" active-class="ActiveNavbarBottomMobile">
              <IconWishlist class="IconWishlistNavbarBottom"
            /></RouterLink>
            <span class="BadgeContentNavbarBottom">{{ store.count }}</span>
          </li>
          <li>
            <RouterLink to="/basketcart" active-class="ActiveNavbarBottomMobile">
              <IconBagCart class="IconBagCartNavbarBottom" />
            </RouterLink>
            <span class="BadgeContentNavbarBottom">{{ add.count }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style
  scoped
  src="../../../assets/style/Components/Section/NavbarComponents/NavbarBottomMobileContent.css"
></style>
