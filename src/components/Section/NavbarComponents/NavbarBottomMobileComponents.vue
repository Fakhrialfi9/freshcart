<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

import { WishlistItems } from '../../../stores/AddToWishlist'
import { CartItems } from '../../../stores/AddToCart'
import { user, getUser } from '../../../stores/AuthGetUserStores'

// Start Import Icon
import IconWishlist from '../../../assets/icon/IconWishlist.vue'
import IconUsers from '../../../assets/icon/IconUsers.vue'
import IconBagCart from '../../../assets/icon/IconBagCart.vue'
import IconGridSquare from '../../../assets/icon/IconGridSquare.vue'
// End Import Icon

onMounted(() => {
  getUser()
})
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
            <RouterLink to="/shopping" active-class="ActiveNavbarBottomMobile">
              <IconGridSquare class="IconGridSquareNavbarBottom" />
            </RouterLink>
          </li>
        </ul>

        <ul class="Center-NavbarBottomMobileContent">
          <li class="CenterIconNavbarBottom">
            <RouterLink
              v-if="user"
              :to="`/profileuser/${user.userName}/detailaccount`"
              active-class="ActiveNavbarBottomMobileCenter"
            >
              <IconUsers class="IconUsersNavbarBottom" />
            </RouterLink>

            <RouterLink v-else to="/signin" active-class="ActiveNavbarBottomMobileCenter">
              <IconUsers class="IconUsersNavbarBottom" />
            </RouterLink>
          </li>
        </ul>

        <ul class="Right-NavbarBottomMobileContent">
          <li>
            <RouterLink to="/wishlist" active-class="ActiveNavbarBottomMobile">
              <IconWishlist class="IconWishlistNavbarBottom"
            /></RouterLink>
            <span class="BadgeContentNavbarBottom">{{ WishlistItems.length }}</span>
          </li>
          <li>
            <RouterLink to="/basketcart" active-class="ActiveNavbarBottomMobile">
              <IconBagCart class="IconBagCartNavbarBottom" />
            </RouterLink>
            <span class="BadgeContentNavbarBottom">{{ CartItems.length }}</span>
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
