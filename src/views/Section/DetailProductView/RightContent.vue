<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProducts, type Product } from '../../../function/useProduct'
import { handleAddToCart } from '../.../../../../function/FunctionAddToCart'
import { handleAddToWishlist } from '../.../../../../function/FunctionAddToWishlist'

import IconStar from '../../../assets/icon/IconStar.vue'
import IconPlaneSend from '../../../assets/icon/IconPlaneSend.vue'
import IconWishlist from '../../../assets/icon/IconWishlist.vue'

const route = useRoute()
const { fetchProductById } = useProducts()
const productId = Number(route.params.id)
const product = ref<Product | null>(null)

onMounted(async () => {
  product.value = await fetchProductById(productId)
})

const addToCartHandler = () => {
  handleAddToCart(product.value)
}

const addToWishlistHandler = () => {
  handleAddToWishlist(product.value)
}

const hoverRating = ref(1)

function setRating(rating: number) {
  hoverRating.value = rating
}

function setHoverRating(rating: number) {
  hoverRating.value = rating
}

function resetHoverRating() {
  hoverRating.value = 0
}

const open = ref(false)
</script>

<template>
  <section class="RightContent" v-if="product">
    <div class="InformationProduct-RightContent">
      <ul>
        <li>
          <span class="Content-ProductCategory">{{ product.nameCategory }}</span>
          <h3 class="Content-ProductName">{{ product.nameProduct }}</h3>
          <div class="Container-ProductRating">
            <div class="Content-ProductRating">
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
                <small> <IconStar class="IconStar" /></small>
              </span>
            </div>
            <p v-if="product.ratingsProduct && product.ratingsProduct.length > 0">
              {{ product.ratingsProduct[0].countRatingProduct }}
            </p>
          </div>
          <div class="Content-ProductPrice">
            <h5 class="DiscountPrice">{{ product.priceProduct }}</h5>
            <h5
              v-if="product.promoGlobalProduct && product.promoGlobalProduct.length > 0"
              class="NormalPrice"
            >
              {{ product.promoGlobalProduct[0].discountPrice }}
            </h5>
            <span
              v-if="product.promoGlobalProduct && product.promoGlobalProduct.length > 0"
              class="BadgeDiscount"
            >
              {{ product.promoGlobalProduct[0].percentageDiscount }}% Off</span
            >
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
            <button class="ButtonAddToCart" @click="addToCartHandler">Add To Cart</button>
            <button @click="open = true" class="ButtonShare Tooltip">
              <IconPlaneSend class="IconButtonShare" />
              <span class="TooltipText">Share</span>
            </button>
            <button class="ButtonWishlist Tooltip" @click="addToWishlistHandler">
              <IconWishlist />
              <span class="TooltipText">Like</span>
            </button>
            <Transition name="slide-up" mode="out-in">
              <div v-if="open" class="ModalButtonShare">
                <div class="ContentModalButtonShare">
                  <h5>Share This Product</h5>
                  <ul>
                    <li><a href="#">WhatsApp</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                  </ul>
                  <button @click="open = false">Close</button>
                </div>
              </div>
            </Transition>
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
              <span>{{ product.codeProduct }}</span>
              <span>{{ product.availabilityProduct }}</span>
              <span>{{ product.typeProduct }}</span>
              <span>{{ product.shippingProduct }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped src="../../../assets/style/Views/DetailProductView.css"></style>
