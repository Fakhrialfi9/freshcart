<script setup lang="ts">
import { RouterLink } from 'vue-router'

import IconWishlist from '../../../assets/icon/IconWishlist.vue'
import IconUsers from '../../../assets/icon/IconUsers.vue'
import IconBagCart from '../../../assets/icon/IconBagCart.vue'
import IconGridSquare from '../../../assets/icon/IconGridSquare.vue'

const emit = defineEmits(['ToggleOpenContentModalsBasketCart'])
</script>

<template>
  <div class="NavbarBottomMobile DisplayNone DisplayBlock-SM">
    <div class="Container">
      <div class="NavbarBottomMobileContent">
        <ul>
          <li>
            <RouterLink to="/home" active-class="ActiveNavbarBottomMobile">
              <IconGridSquare class="IconGridSquareNavbarBottom" />
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/signin" active-class="ActiveNavbarBottomMobile">
              <IconUsers class="IconUsersNavbarBottom" />
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/wishlist" active-class="ActiveNavbarBottomMobile">
              <IconWishlist class="IconWishlistNavbarBottom" />
            </RouterLink>
          </li>
          <li>
            <span @click="$emit('ToggleOpenContentModalsBasketCart')">
              <IconBagCart class="IconBagCartNavbarBottom" />
            </span>
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
