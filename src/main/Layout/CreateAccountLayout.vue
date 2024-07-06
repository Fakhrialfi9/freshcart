<script setup lang="ts">
import { RouterView } from 'vue-router'

// Start Style Global
import '../../main/style/MainLayout.css'
import '../../main/style/Framework.css'
import '../../main/style/Root.css'
import '../../main/style/Responsive.css'
// End Style Global

import NavbarCreateAccount from '../../components/NavbarCreateAccount.vue'
</script>

<template>
  <main id="MainCreateAccountLayout">
    <!-- Start Layout Navbar Create Account Content -->
    <div class="NavbarCreateAccount DisplayNone-SM DisplayNone-MD DisplayNone-LG">
      <NavbarCreateAccount />
    </div>
    <!-- End Layout Navbar Create Account Content -->

    <!-- Start Layout Create Account Content -->
    <div class="MainCreateAccountContent">
      <transition name="slide" mode="out-in">
        <RouterView :key="$route.fullPath" />
      </transition>
    </div>
    <!-- End Layout Create Account Content -->
  </main>
</template>

<style scoped src="../style/CreateAccountLayout.css"></style>
