<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import Loading from '../../components/LazyLoading.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})

// Start Style Global
import '../../main/style/Framework.css'
import '../../main/style/Root.css'
import '../../main/style/Responsive.css'
// End Style Global
</script>

<template>
  <!-- Start LazyLoading -->
  <div v-if="isLoading">
    <Loading />
  </div>
  <!-- End LazyLoading -->

  <!-- Start Default Page Website -->
  <div v-else>
    <Suspense>
      <!-- Start RouteView -->
      <template #default>
        <RouterView />
      </template>
      <!-- End RouteView -->
    </Suspense>
  </div>
  <!-- End Default Page Website -->
</template>

<style scoped src="../../main/style/Main.css"></style>
