<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProducts, type Product } from '../../../function/useProduct'

const route = useRoute()
const { fetchProductById, loading } = useProducts()
const productId = Number(route.params.id)
const product = ref<Product | null>(null)

onMounted(async () => {
  product.value = await fetchProductById(productId)
})
</script>

<template>
  <section class="ProductDetail" v-if="product">
    <ul>
      <li>
        <h5 v-if="product.ProductDetails && product.ProductDetails">
          {{ product.ProductDetails.BenefitProduct }}
        </h5>
        <p v-if="product.ProductDetails && product.ProductDetails">
          {{ product.ProductDetails.descriptionBenefitProduct }}
        </p>
      </li>
      <li>
        <h5 v-if="product.ProductDetails && product.ProductDetails">
          {{ product.ProductDetails.StorageTips }}
        </h5>
        <p v-if="product.ProductDetails && product.ProductDetails">
          {{ product.ProductDetails.descriptionStorageTips }}
        </p>
      </li>
      <li>
        <h5 v-if="product.ProductDetails && product.ProductDetails">
          {{ product.ProductDetails.Unit }}
        </h5>
        <p v-if="product.ProductDetails && product.ProductDetails">
          {{ product.ProductDetails.descriptionUnit }}
        </p>
      </li>
      <li>
        <h5 v-if="product.ProductDetails && product.ProductDetails">
          {{ product.ProductDetails.Seller }}
        </h5>
        <p v-if="product.ProductDetails && product.ProductDetails">
          {{ product.ProductDetails.descriptionSeller }}
        </p>
      </li>
      <li>
        <h5 v-if="product.ProductDetails && product.ProductDetails">
          {{ product.ProductDetails.Disclaimer }}
        </h5>
        <p v-if="product.ProductDetails && product.ProductDetails">
          {{ product.ProductDetails.descriptionDisclaimer }}
        </p>
      </li>
    </ul>
  </section>
</template>

<style scoped src="../../../assets/style/Views/DetailProductView.css"></style>
<style scoped src="../../../assets/style/Views/ProductDetail.css"></style>
