<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useProducts, type Product } from '../function/useProduct'
import { handleAddToCart } from '../function/FunctionAddToCart'
import { handleAddToWishlist } from '../function/FunctionAddToWishlist'

// Start Import Icon
import IconStar from '../assets/icon/IconStar.vue'
import IconWishlistFill from '../assets/icon/IconWishlistFill.vue'
import IconEyePriview from '../assets/icon/IconEyePriview.vue'
import IconAddPlus from '../assets/icon/IconAddPlus.vue'
// End Import Icon

const { products } = useProducts()

const addToCartHandler = (product: Product) => {
  handleAddToCart(product)
}

const addToWishlistHandler = (product: Product) => {
  handleAddToWishlist(product)
}

const hoverIndex = ref(-1)
const showButtonsFlag = ref(false)
const hoverRating = ref(0)

function showButtons(index: number) {
  hoverIndex.value = index
  showButtonsFlag.value = true
}

function hideButtons(index: number) {
  hoverIndex.value = -1
  showButtonsFlag.value = false
}

function setRating(rating: number) {
  hoverRating.value = rating
}

function setHoverRating(rating: number) {
  hoverRating.value = rating
}

function resetHoverRating() {
  hoverRating.value = 0
}

const truncateText = (value: string, limit: number) => {
  if (value.length > limit) {
    return value.substring(0, limit) + '...'
  }
  return value
}
</script>

<template>
  <main>
    <section class="PopularProduct">
      <div class="ContentPopularProduct">
        <div class="ContainerPopularProduct">
          <!-- Start Content Card Product -->

          <div
            class="CardPopularProduct"
            v-for="(product, index) in products"
            :key="product.id"
            @mouseover="showButtons(index)"
            @mouseleave="hideButtons(index)"
          >
            <!-- Start Badge & Image Card Box Product -->
            <span
              class="Badge-CardPopularProduct"
              v-if="product.badgesDiscountProduct.length > 0"
              >{{ product.badgesDiscountProduct[0] }}</span
            >
            <div class="Image-CardPopularProduct">
              <img :src="'' + product.imagesProduct[0]" :alt="product.nameProduct" />
            </div>
            <!-- End Badge & Image Card Box Product -->

            <!-- Start Headline Card Box Product -->
            <ul class="Headline-CardPopularProduct">
              <li>
                <span>{{ product.nameCategory }}</span>
              </li>
              <li>
                <h5>{{ truncateText(product.nameProduct, 18) }}</h5>
              </li>
              <li>
                <div class="RatingProduct">
                  <span
                    v-for="StarRatingProduct in 5"
                    :key="StarRatingProduct"
                    :class="[
                      'StarRatingProduct',
                      {
                        SelectedRating:
                          StarRatingProduct <=
                          product.ratingsProduct[StarRatingProduct - 1].countRatingProduct,
                        HoverRatingProduct: StarRatingProduct <= hoverRating
                      }
                    ]"
                    @click="setRating(StarRatingProduct)"
                    @mouseover="setHoverRating(StarRatingProduct)"
                    @mouseleave="resetHoverRating"
                  >
                    <IconStar class="IconStar" />
                  </span>
                  <p v-if="product.ratingsProduct && product.ratingsProduct.length > 0">
                    {{ product.ratingsProduct[0].countRatingProduct }}
                  </p>
                </div>
              </li>
            </ul>
            <!-- End Headline Card Box Product -->

            <!-- Start Price & Button Card Box Product -->
            <ul class="PriceCart-CardPopularProduct">
              <li>
                <p
                  v-if="product.promoGlobalProduct && product.promoGlobalProduct.length > 0"
                  class="Promo"
                >
                  {{ product.promoGlobalProduct[0].discountPrice }}
                </p>
                <p class="Price">{{ product.priceProduct }}</p>
              </li>
              <li>
                <button @click="addToCartHandler(product)">
                  <IconAddPlus class="IconButtonAddCart" /> Add
                </button>
              </li>
            </ul>
            <!-- End Price & Button Card Box Product -->

            <!-- Start Hover Component -->
            <transition name="SlideFadeDropdown">
              <div class="HoverButtonProduct" v-if="hoverIndex === index && showButtonsFlag">
                <div class="ContainerHoverButtonProduct">
                  <RouterLink :to="'/shopping/' + product.id">
                    <button class="Tooltip">
                      <IconEyePriview class="IconHoverButtonProduct" />
                      <span class="TooltipText">Priview</span>
                    </button>
                  </RouterLink>
                  <button class="Tooltip" @click="addToWishlistHandler(product)">
                    <IconWishlistFill class="IconHoverButtonProduct" />
                    <span class="TooltipText">Wishlist</span>
                  </button>
                </div>
              </div>
            </transition>
            <!-- End Hover Component -->
          </div>

          <!-- End Content Card Product -->
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped src="../assets/style/Views/HomeView.css"></style>
