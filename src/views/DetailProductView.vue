<!-- SingleProduct.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProducts, type Product } from '../function/useProduct'
import Breadcrumbs from '../function/Breadcrumbs.vue'
import AlertBoxError from '../function/AlertBoxError.vue'

// Start Import Section Detail Product
import LeftContent from '../views/Section/DetailProductView/LeftContent.vue'
import RightContent from '../views/Section/DetailProductView/RightContent.vue'
import BottomContent from '../views/Section/DetailProductView/BottomContent.vue'
import PopularProduct from '../views/Section/HomeView/PopularProduct.vue'
// End Import Section Detail Product

defineProps<{
  errorMessage: string
}>()

const route = useRoute()
const { fetchProductById, loading } = useProducts()
const productId = Number(route.params.id)
const product = ref<Product | null>(null)

onMounted(async () => {
  product.value = await fetchProductById(productId)
})
</script>

<template>
  <main id="MainSingleProduct">
    <section class="SingleProduct">
      <div class="Container">
        <Breadcrumbs />
        <!-- Loading state -->
        <div v-if="loading">Loading...</div>
        <div v-else>
          <div v-if="errorMessage"></div>
          <div class="SingleProductContent" v-if="product">
            <div class="SingleProductTopContent">
              <!-- Start Left Content -->
              <LeftContent />
              <!-- End Left Content -->

              <!-- Start Right Content -->
              <RightContent />
              <!-- End Right Content -->
            </div>

            <!-- Start Bottom Content -->
            <BottomContent />
            <!-- End Bottom Content -->

            <!-- Start Bottom Content -->
            <PopularProduct />
            <!-- End Bottom Content -->

            <!-- Next Content -->
          </div>
          <AlertBoxError v-else>Data tidak ditemukan.</AlertBoxError>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped src="../assets/style/Views/DetailProductView.css">
@import '@/styles/variables.scss';
@import '@/styles/mixins.scss';
@import './style.scss';
</style>
