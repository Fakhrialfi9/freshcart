<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

import { WishlistItems } from '../../../stores/AddToWishlist'
import { CartItems } from '../../../stores/AddToCart'
import { user, getUser } from '../../../stores/AuthGetUserStores'

// Start Import Icon
import { LayoutGrid, ShoppingCart, Heart, ShoppingBag } from 'lucide-vue-next'
import IconUsers from '../../../assets/icon/IconUsers.vue'
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
              <LayoutGrid />
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/shopping" active-class="ActiveNavbarBottomMobile">
              <ShoppingCart />
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
              <Heart />
            </RouterLink>
            <span class="BadgeContentNavbarBottom">{{ WishlistItems.length }}</span>
          </li>
          <li>
            <RouterLink to="/basketcart" active-class="ActiveNavbarBottomMobile">
              <ShoppingBag />
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
