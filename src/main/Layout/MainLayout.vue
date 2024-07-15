<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'

// Start Style Global
import '../../main/style/MainLayout.css'
import '../../main/style/Framework.css'
import '../../main/style/Root.css'
import '../../main/style/Responsive.css'

// Start Import Component
import NavbarComponents from '../../components/NavbarComponents.vue'
import FooterComponents from '../../components/FooterComponents.vue'
import { user, getUser } from '../../stores/AuthGetUserStores'

const route = useRoute()

onMounted(() => {
  getUser()
})

const slide = computed(() => {
  if (user.value && user.value.userName) {
    const Dashboard = [
      `/profileuser/${user.value.userName}/dashboarduser`,
      `/profileuser/${user.value.userName}/detailaccount`,
      '/path3'
    ]
    return Dashboard.includes(route.path) ? '' : 'slide'
  }
  return 'slide'
})
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
      <transition :name="slide" mode="out-in">
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

<style scoped src="../../main/style/MainLayout.css"></style>
