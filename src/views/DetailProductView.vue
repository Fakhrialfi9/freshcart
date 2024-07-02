<!-- SingleProduct.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProducts, type Product } from '../function/useProduct'
import Breadcrumbs from '../components/BreadcrumbsComponents.vue'
import AlertBoxError from '../components/AlertBoxErrorComponents.vue'
import LoadingComponents from '../components/LoadingComponents.vue'

// Start Import Section Detail Product
import LeftContent from '../views/Section/DetailProductView/LeftContent.vue'
import RightContent from '../views/Section/DetailProductView/RightContent.vue'
import BottomContent from '../views/Section/DetailProductView/BottomContent.vue'
import RelatedItemsView from '../views/Section/DetailProductView/RelatedItemsView.vue'
// End Import Section Detail Product

defineProps<{
  errorMessage: string
}>()

const route = useRoute()
const { fetchProductById, loading } = useProducts()
const productId = Number(route.params.id)
const product = ref<Product | null>(null)
const hasError = ref(false)
const isLoaded = ref(false)

onMounted(async () => {
  const start = Date.now()
  try {
    product.value = await fetchProductById(productId)
    hasError.value = false
  } catch (error) {
    hasError.value = true
  } finally {
    const elapsed = Date.now() - start
    const delay = Math.max(2500 - elapsed, 0)
    setTimeout(() => {
      isLoaded.value = true
    }, delay)
  }
})
</script>

<template>
  <main id="MainSingleProduct">
    <section class="SingleProduct">
      <!-- Start Loading Statement -->
      <div class="MainLoading" v-if="loading || !isLoaded">
        <div class="LoadingContainer">
          <div class="LoadingContent">
            <LoadingComponents />
            <h6>Loading Product...</h6>
          </div>
        </div>
      </div>
      <!-- End Loading Statement -->

      <div class="Container" v-else>
        <!-- Start Breadcrumbs Statement  -->
        <Breadcrumbs />
        <!-- End Breadcrumbs Statement  -->

        <!-- Start Error Statement  -->
        <div v-if="isLoaded && hasError">
          <AlertBoxError>{{ errorMessage }}</AlertBoxError>
        </div>
        <!-- End Error Statement  -->

        <!-- Start Main Content Detail Product -->
        <div class="SingleProductContent" v-if="product">
          <div class="SingleProductTopContent">
            <!-- Start Left Content -->
            <transition name="slide-up" mode="in-out">
              <LeftContent />
            </transition>
            <!-- End Left Content -->

            <!-- Start Right Content -->
            <transition name="slide-up" mode="in-out">
              <RightContent />
            </transition>
            <!-- End Right Content -->
          </div>

          <!-- Start Bottom Content -->
          <BottomContent />
          <!-- End Bottom Content -->

          <!-- Start Bottom Content -->
          <transition name="slide-up" mode="out-in">
            <RelatedItemsView />
          </transition>
          <!-- End Bottom Content -->
        </div>
        <!-- End Main Content Detail Product -->

        <AlertBoxError v-else>Data tidak ditemukan.</AlertBoxError>
      </div>
    </section>
  </main>
</template>

<style scoped src="../assets/style/Views/DetailProductView.css"></style>
