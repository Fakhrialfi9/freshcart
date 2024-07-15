<!-- App.vue -->

<script setup lang="ts">
import { RouterView } from 'vue-router'
import InstallApps from '../../components/InstallAppsComponents.vue'
import NotificationView from '../../components/NotificationComponents.vue'

// Import style global
import '../../main/style/Framework.css'
import '../../main/style/Root.css'
import '../../main/style/Responsive.css'
</script>

<template>
  <!-- Komponen InstallApps -->
  <InstallApps />

  <!-- Router View untuk menampilkan komponen sesuai dengan route -->
  <RouterView />

  <!-- Komponen NotificationView -->
  <NotificationView />
</template>
