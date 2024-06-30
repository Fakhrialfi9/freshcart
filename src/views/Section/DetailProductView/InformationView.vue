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
  <section class="Informations" v-if="product">
    <table>
      <tbody>
        <tr>
          <th>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                />
              </svg>
              Weight</span
            >
          </th>
          <td v-if="product.InformationProduct && product.InformationProduct">
            {{ product.InformationProduct.Weight }}
          </td>
        </tr>
        <tr>
          <th>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                /></svg
              >Ingredient Type</span
            >
          </th>
          <td v-if="product.InformationProduct && product.InformationProduct">
            {{ product.InformationProduct.IngredientType }}
          </td>
        </tr>
        <tr>
          <th>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                /></svg
              >Brand</span
            >
          </th>
          <td v-if="product.InformationProduct && product.InformationProduct">
            {{ product.InformationProduct.Brand }}
          </td>
        </tr>
        <tr>
          <th>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                /></svg
              >Item Package Quantity</span
            >
          </th>
          <td v-if="product.InformationProduct && product.InformationProduct">
            {{ product.InformationProduct.ItemPackageQuantity }}
          </td>
        </tr>
        <tr>
          <th>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                /></svg
              >Form</span
            >
          </th>
          <td v-if="product.InformationProduct && product.InformationProduct">
            {{ product.InformationProduct.Form }}
          </td>
        </tr>
        <tr>
          <th>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                /></svg
              >Manufacturer</span
            >
          </th>
          <td v-if="product.InformationProduct && product.InformationProduct">
            {{ product.InformationProduct.Manufacturer }}
          </td>
        </tr>
        <tr>
          <th>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                /></svg
              >Net Quantity
            </span>
          </th>
          <td v-if="product.InformationProduct && product.InformationProduct">
            {{ product.InformationProduct.NetQuantity }}
          </td>
        </tr>
      </tbody>
    </table>

    <table>
      <tbody>
        <tr>
          <th>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                /></svg
              >Product Dimensions
            </span>
          </th>
          <td v-if="product.InformationProduct && product.InformationProduct">
            {{ product.InformationProduct.ProductDimensions }}
          </td>
        </tr>
        <tr>
          <th>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                /></svg
              >ASIN</span
            >
          </th>
          <td v-if="product.InformationProduct && product.InformationProduct">
            {{ product.InformationProduct.ASIN }}
          </td>
        </tr>
        <tr>
          <th>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                /></svg
              >Best Sellers Rank
            </span>
          </th>
          <td v-if="product.InformationProduct && product.InformationProduct">
            {{ product.InformationProduct.BestSellersRank }}
          </td>
        </tr>
        <tr>
          <th>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                /></svg
              >Date First Available
            </span>
          </th>
          <td v-if="product.InformationProduct && product.InformationProduct">
            {{ product.InformationProduct.Weight }}
          </td>
        </tr>
        <tr>
          <th>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                /></svg
              >Item Weight
            </span>
          </th>
          <td v-if="product.InformationProduct && product.InformationProduct">
            {{ product.InformationProduct.ItemWeight }}
          </td>
        </tr>
        <tr>
          <th>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                /></svg
              >Generic Name
            </span>
          </th>
          <td v-if="product.InformationProduct && product.InformationProduct">
            {{ product.InformationProduct.GenericName }}
          </td>
        </tr>
        <tr>
          <th>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                /></svg
              >Expired Date</span
            >
          </th>
          <td v-if="product.InformationProduct && product.InformationProduct">
            {{ product.InformationProduct.expiredDate }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped src="../../../assets/style/Views/DetailProductView.css"></style>
<style scoped src="../../../assets/style/Views/InformationView.css"></style>
