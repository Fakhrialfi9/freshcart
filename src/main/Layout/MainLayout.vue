<script setup lang="ts">
import { RouterView } from 'vue-router'

// Start Style Global
import '../../main/style/Main.css'
import '../../main/style/Framework.css'
import '../../main/style/Root.css'
import '../../main/style/Responsive.css'
// End Style Global

// Start Import Component
import NavbarComponents from '../../components/NavbarComponents.vue'
// End Import Component

// Start Import Component
import FooterComponents from '../../components/FooterComponents.vue'
// End Import Component
</script>

<template>
  <main id="Main">
    <!-- Start Main Navbar -->
    <div class="MainNavbar">
      <NavbarComponents />
    </div>
    <!-- End Main Navbar -->

    <!-- Main Content with Transition -->
    <div class="MainContent">
      <transition name="slide" mode="out-in">
        <RouterView :key="$route.fullPath" />
      </transition>
    </div>
    <!-- End Main Content -->

    <!-- Start Footer -->
    <div class="MainFooter">
      <FooterComponents />
    </div>
    <!-- End Footer -->
  </main>
</template>

<style scoped src="../../main/style/Main.css"></style>
