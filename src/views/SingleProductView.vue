<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import Breadcrumbs from '../function/Breadcrumbs.vue'

import IconStar from '../assets/icon/IconStar.vue'
import IconPlaneSend from '../assets/icon/IconPlaneSend.vue'
import IconWishlist from '../assets/icon/IconWishlist.vue'

import { products } from '../function/GetProduct'

const route = useRoute()
const isClicked = ref(false)
const hoverRating = ref(0)

const productId = Number(route.params.id)
const product = computed(() => products.find((p) => p.id === productId) || null)

function setRating(rating: number) {
  hoverRating.value = rating
}

function setHoverRating(rating: number) {
  hoverRating.value = rating
}

function resetHoverRating() {
  hoverRating.value = 0
}

const toggleColor = () => {
  isClicked.value = !isClicked.value
}
</script>

<template>
  <main id="MainSingleProduct">
    <section class="SingleProduct">
      <div class="Container">
        <Breadcrumbs />
        <div class="SingleProductContent" v-if="product">
          <div class="LeftContent">
            <div class="ImageLayout-LeftContent">
              <div class="PrimaryImage-LeftContent">
                <img
                  :src="'../public/assets/image/popularproduct/' + product.images[0]"
                  :alt="product.name"
                />
              </div>
              <div class="ThumbnailImage-LeftContent">
                <div
                  class="BoxThumbnail-LeftContent"
                  v-for="(image, index) in product.images"
                  :key="index"
                >
                  <img
                    :src="'../public/assets/image/popularproduct/' + product.images[0]"
                    :alt="product.name"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="RightContent">
            <div class="InformationProduct-RightContent">
              <ul>
                <li>
                  <span class="Content-ProductCategoty">{{ product.category }}</span>
                  <h2 class="Content-ProductName">{{ product.name }}</h2>
                  <div class="Content-ProductRating">
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
                  <div class="Content-ProductPrice">
                    <h5 class="DiscountPrice">{{ product.priceNormal }}</h5>
                    <h5 class="NormalPrice">{{ product.discountPrice }}</h5>
                    <span class="BadgeDiscount">26% Off</span>
                  </div>
                </li>
                <div class="diver"></div>
                <li>
                  <div class="Content-SelectWeightProduct">
                    <button>250g</button>
                    <button>500g</button>
                    <button>1000g</button>
                  </div>
                  <div class="InputQuantity-CardBoxCheckoutProduct">
                    <form class="FormInputQuantity" action="">
                      <button
                        class="QuantityUp"
                        type="button"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                      >
                        -
                      </button>
                      <input min="1" name="quantity" value="1" type="number" />
                      <button
                        class="QuantityDown"
                        type="button"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                      >
                        +
                      </button>
                    </form>
                  </div>
                  <div class="Content-ButtonCallToAction">
                    <button class="ButtonAddToCart">Add To Cart</button>
                    <button class="ButtonShare Tooltip">
                      <IconPlaneSend class="IconButtonShare" />
                      <span class="TooltipText">Share</span>
                    </button>
                    <button class="ButtonWishlist Tooltip">
                      <IconWishlist
                        :class="['IconButtonWishlist', { clicked: isClicked }]"
                        @click="toggleColor"
                      />
                      <span class="TooltipText">Wishlist</span>
                    </button>
                  </div>
                </li>
                <div class="diver"></div>
                <li>
                  <div class="Content-SpecificationProduct">
                    <div class="Question">
                      <span>Product Code:</span>
                      <span>Availability:</span>
                      <span>Type:</span>
                      <span>Shipping:</span>
                    </div>
                    <div class="Answer">
                      <span>{{ product.productCode }}</span>
                      <span>{{ product.availability }}</span>
                      <span>{{ product.type }}</span>
                      <span>01 day shipping. ( Free pickup today)</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped src="../assets/style/Views/SingleProductView.css"></style>
