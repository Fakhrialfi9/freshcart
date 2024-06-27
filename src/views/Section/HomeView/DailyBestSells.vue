<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useProducts } from '../../../function/useProduct.js'

// Start Import Icon
import IconShortArrowToRight from '../../../assets/icon/IconShortArrowToRight.vue'
import IconStar from '../../../assets/icon/IconStar.vue'
import IconArrowCompare from '../../../assets/icon/IconArrowCompare.vue'
import IconWishlistFill from '../../../assets/icon/IconWishlistFill.vue'
import IconEyePriview from '../../../assets/icon/IconEyePriview.vue'
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
    <section class="DailyBestSells">
      <div class="ContentDailyBestSells">
        <!-- Start Headline Section Home -->
        <ul class="HeadlineSection-Home">
          <li><h5>Daily Best Sells</h5></li>
        </ul>
        <!-- End Headline Section Home -->

        <div class="ContainerCardBoxDailyBestSells">
          <!-- Start Content Card Box Banner -->
          <div class="CardBoxBannerDailyBestSells">
            <img src="../../../assets/image/dailybestsells/bannerdeal.jpg" />
            <div class="ContentBannerCardBoxDailyBestSells">
              <h5>100% Organic Coffee Beans.</h5>
              <span>Get the best deal before close. </span>
              <button>Shop Now <IconShortArrowToRight class="IconShortArrowToRight" /></button>
            </div>
          </div>
          <!-- End Content Card Box Banner -->

          <!-- Start Content Card Box Product -->
          <RouterLink
            v-for="(product, index) in products"
            :key="product.id"
            :to="'/detailproduct/' + product.id"
          >
            <div
              class="CardBoxProductDailyBestSells"
              @mouseover="showButtons(index)"
              @mouseleave="hideButtons(index)"
            >
              <div class="Image-CardBoxDailyBestSells">
                <img :src="'' + product.images[0]" :alt="product.name" />
              </div>

              <!-- Start Headline Content Card Box Product -->
              <ul class="Headline-CardBoxDailyBestSells">
                <li>
                  <span>{{ product.category }}</span>
                </li>
                <li>
                  <h5>{{ truncateText(product.name, 20) }}</h5>
                </li>
              </ul>
              <!-- End Headline Content Card Box Product -->

              <!-- Start Price & Ratting Card Box Product -->
              <ul class="PriceRating">
                <li>
                  <p class="Promo">{{ product.discountPrice }}</p>
                  <p class="Price">{{ product.priceNormal }}</p>
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
              <!-- End Price & Ratting Card Box Product -->

              <!-- Start Button Card Box Product -->
              <button>Add To Cart</button>
              <!-- End Button Card Box Product -->

              <!-- Start Count Down Card Box Product -->
              <ul class="CountDownPromo-CardBoxDailyBestSells">
                <li>
                  <span>
                    <h6>3000</h6>
                    <p>Days</p>
                  </span>
                </li>
                <li>
                  <span>
                    <h6>3000</h6>
                    <p>Hours</p>
                  </span>
                </li>
                <li>
                  <span>
                    <h6>3000</h6>
                    <p>Mins</p>
                  </span>
                </li>
                <li>
                  <span>
                    <h6>3000</h6>
                    <p>Sec</p>
                  </span>
                </li>
              </ul>
              <!-- End Count Down Card Box Product -->

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
          <!-- End Content Card Box Product -->
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped src="../../../assets/style/Views/HomeView.css"></style>
_index
