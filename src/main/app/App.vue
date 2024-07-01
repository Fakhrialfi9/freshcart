<script setup lang="ts">
import { RouterView } from 'vue-router'

import InstallApps from '../../components/InstallApps.vue'
import NotificationView from '../../components/NotificationView.vue'

// Start Style Global
import '../../main/style/Framework.css'
import '../../main/style/Root.css'
import '../../main/style/Responsive.css'
// End Style Global
</script>

<template>
  <!-- Start InstallApps -->
  <InstallApps />
  <!-- End InstallApps -->

  <!-- Start Router View -->
  <RouterView />
  <!-- End Router View -->

  <!-- Start Notification -->
  <NotificationView />
  <!-- End Notification -->
</template>

<style scoped src="../../main/style/Main.css"></style>
