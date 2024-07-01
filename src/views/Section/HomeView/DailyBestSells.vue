<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useProducts } from '../../../function/useProduct.js'
import { addToCart, type CartItem } from '../../../stores/AddToCart'

// Import Icons
import IconShortArrowToRight from '../../../assets/icon/IconShortArrowToRight.vue'
import IconStar from '../../../assets/icon/IconStar.vue'
import IconArrowCompare from '../../../assets/icon/IconArrowCompare.vue'
import IconWishlistFill from '../../../assets/icon/IconWishlistFill.vue'
import IconEyePriview from '../../../assets/icon/IconEyePriview.vue'
import IconAddPlus from '../../../assets/icon/IconAddPlus.vue'
import { showNotification } from '../../../function/NotificationView.vue'

const { products } = useProducts()

const itemsPerPage = 7
const currentPage = ref(1)

const paginatedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  return products.value.slice(startIndex, startIndex + itemsPerPage)
})

const totalPages = computed(() => {
  return Math.ceil(products.value.length / itemsPerPage)
})

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

function changePage(page: number) {
  currentPage.value = page
}

const handleAddToCart = (product: any) => {
  if (product) {
    const cartItem: CartItem = {
      id: product.id,
      imagesProduct: product.imagesProduct,
      nameProduct: product.nameProduct,
      priceProduct: product.priceProduct,
      availabilityProduct: product.availabilityProduct,
      quantity: 1,
      badgesDiscountProduct: product.badgesDiscountProduct || [],
      nameCategory: product.nameCategory || '',
      codeProduct: product.codeProduct || '',
      typeProduct: product.typeProduct || '',
      promoProduct: product.promoProduct || false,
      shippingProduct: product.shippingProduct || '',
      promoGlobalProduct: product.promoGlobalProduct || []
    }

    addToCart(cartItem)

    showNotification(
      `${product.nameProduct} - ${product.id}, successfully added to cart.`,
      'success'
    )
  } else {
    showNotification('Failed to add product to cart.', 'error')
  }
}
</script>

<template>
  <main>
    <section class="DailyBestSells">
      <div class="ContentDailyBestSells">
        <!-- Headline Section Home -->
        <ul class="HeadlineSection-Home">
          <li><h5>Daily Best Sells</h5></li>
        </ul>
        <!-- End Headline Section Home -->

        <div class="ContainerCardBoxDailyBestSells">
          <!-- Content Card Box Banner -->
          <div class="CardBoxBannerDailyBestSells">
            <img src="../../../assets/image/dailybestsells/bannerdeal.jpg" />
            <div class="ContentBannerCardBoxDailyBestSells">
              <h5>100% Organic Coffee Beans.</h5>
              <span>Get the best deal before close. </span>
              <button>Shop Now <IconShortArrowToRight class="IconShortArrowToRight" /></button>
            </div>
          </div>
          <!-- End Content Card Box Banner -->

          <!-- Content Card Box Product -->
          <div
            class="CardBoxProductDailyBestSells"
            v-for="(product, index) in paginatedProducts"
            :key="product.id"
            @mouseover="showButtons(index + (currentPage - 1) * itemsPerPage)"
            @mouseleave="hideButtons(index + (currentPage - 1) * itemsPerPage)"
          >
            <div class="Image-CardBoxDailyBestSells">
              <img :src="'' + product.imagesProduct[0]" :alt="product.nameProduct" />
            </div>

            <!-- Headline Content Card Box Product -->
            <ul class="Headline-CardBoxDailyBestSells">
              <li>
                <span>{{ product.nameCategory }}</span>
              </li>
              <li>
                <h5>{{ truncateText(product.nameProduct, 20) }}</h5>
              </li>
            </ul>
            <!-- End Headline Content Card Box Product -->

            <!-- Price & Ratting Card Box Product -->
            <ul class="PriceRating">
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
            <!-- End Price & Ratting Card Box Product -->

            <!-- Button Card Box Product -->
            <ul class="ButtonAddCart">
              <li>
                <button @click="handleAddToCart(product)">
                  <IconAddPlus class="IconButtonAddCart" /> Cart
                </button>
              </li>
            </ul>
            <!-- End Button Card Box Product -->

            <!-- Count Down Card Box Product -->
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

            <!-- Hover Component -->
            <transition name="SlideFadeDropdown" mode="in-out">
              <div
                class="HoverButtonProduct"
                v-if="hoverIndex === index + (currentPage - 1) * itemsPerPage && showButtonsFlag"
              >
                <div class="ContainerHoverButtonProduct">
                  <RouterLink :to="'/detailproduct/' + product.id">
                    <button class="Tooltip">
                      <IconEyePriview class="IconHoverButtonProduct" />
                      <span class="TooltipText">Preview</span>
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
        </div>
        <!-- Pagination -->
        <div class="Pagination">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="changePage(page)"
            :class="{ ActivePage: page === currentPage }"
          >
            {{ page }}
          </button>
        </div>
        <!-- End Pagination -->
      </div>
    </section>
  </main>
</template>

<style scoped src="../../../assets/style/Views/HomeView.css"></style>
