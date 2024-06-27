<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useProducts } from '../../../function/useProduct.js'

// Start Import Icon
import IconStar from '../../../assets/icon/IconStar.vue'
import IconArrowCompare from '../../../assets/icon/IconArrowCompare.vue'
import IconWishlistFill from '../../../assets/icon/IconWishlistFill.vue'
import IconEyePriview from '../../../assets/icon/IconEyePriview.vue'
import IconAddPlus from '../../../assets/icon/IconAddPlus.vue'
// End Import Icon

const { products } = useProducts()

const truncateText = (value: string, limit: number) => {
  if (value.length > limit) {
    return value.substring(0, limit) + '...'
  }
  return value
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
</script>

<template>
  <main>
    <section class="PopularProduct">
      <div class="ContentPopularProduct">
        <!-- Start Headline Section Home -->
        <ul class="HeadlineSection-Home">
          <li><h5>Popula Product</h5></li>
          <li>
            <button>All</button>
            <button>Hot Sale</button>
            <button>Years Sale</button>
            <button>Big Deals</button>
          </li>
        </ul>
        <!-- End Headline Section Home -->
        <div class="ContainerPopularProduct">
          <!-- Start Content Card Product -->
          <RouterLink
            v-for="(product, index) in products"
            :key="product.id"
            :to="'/detailproduct/' + product.id"
          >
            <div
              class="CardPopularProduct"
              @mouseover="showButtons(index)"
              @mouseleave="hideButtons(index)"
            >
              <!-- Start Badge & Image Card Box Product -->
              <span class="Badge-CardPopularProduct" v-if="product.badges.length > 0">{{
                product.badges[0]
              }}</span>
              <div class="Image-CardPopularProduct">
                <img :src="'' + product.images[0]" :alt="product.name" />
              </div>

              <!-- End Badge & Image Card Box Product -->

              <!-- Start Headline Card Box Product -->
              <ul class="Headline-CardPopularProduct">
                <li>
                  <span>{{ product.category }}</span>
                </li>
                <li>
                  <h5>{{ truncateText(product.name, 18) }}</h5>
                </li>
                <li>
                  <div class="RatingProduct">
                    <span
                      v-for="StarRatingProduct in 5"
                      :key="StarRatingProduct"
                      :class="[
                        'StarRatingProduct',
                        {
                          SelectedRating: StarRatingProduct <= product.rating,
                          HoverRatingProduct: StarRatingProduct <= hoverRating
                        }
                      ]"
                      @click="setRating(StarRatingProduct)"
                      @mouseover="setHoverRating(StarRatingProduct)"
                      @mouseleave="resetHoverRating"
                    >
                      <IconStar class="IconStar" />
                    </span>
                    <p>{{ product.rating }}</p>
                  </div>
                </li>
              </ul>
              <!-- End Headline Card Box Product -->

              <!-- Start Price & Button Card Box Product -->
              <ul class="PriceCart-CardPopularProduct">
                <li>
                  <p class="Promo">{{ product.discountPrice }}</p>
                  <p class="Price">{{ product.priceNormal }}</p>
                </li>
                <li>
                  <button><IconAddPlus class="IconButtonAddCart" /> Cart</button>
                </li>
              </ul>
              <!-- End Price & Button Card Box Product -->

              <!-- Start Hover Component -->
              <transition name="SlideFadeDropdown">
                <div class="HoverButtonProduct" v-if="hoverIndex === index && showButtonsFlag">
                  <div class="ContainerHoverButtonProduct">
                    <RouterLink :to="'/detailproduct/' + product.id">
                      <button class="Tooltip">
                        <IconEyePriview class="IconHoverButtonProduct" />
                        <span class="TooltipText">Priview</span>
                      </button>
                    </RouterLink>
                    <button class="Tooltip">
                      <IconWishlistFill class="IconHoverButtonProduct" />
                      <span class="TooltipText">Wishlist</span>
                    </button>

                    <button class="Tooltip">
                      <IconArrowCompare class="IconHoverButtonProduct" />
                      <span class="TooltipText">Compare</span>
                    </button>
                  </div>
                </div>
              </transition>
              <!-- End Hover Component -->
            </div>
          </RouterLink>
          <!-- End Content Card Product -->
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped src="../../../assets/style/Views/HomeView.css"></style>
