<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProducts, type Product } from '../../../function/useProduct'

import { add, store } from '../../../stores/add'

import IconStar from '../../../assets/icon/IconStar.vue'
import IconPlaneSend from '../../../assets/icon/IconPlaneSend.vue'
import IconWishlist from '../../../assets/icon/IconWishlist.vue'

const route = useRoute()
const { fetchProductById, loading } = useProducts()
const productId = Number(route.params.id)
const product = ref<Product | null>(null)

onMounted(async () => {
  product.value = await fetchProductById(productId)
})

const hoverRating = ref(0)
const isClicked = ref(false)

function setRating(rating: number) {
  hoverRating.value = rating
}

function setHoverRating(rating: number) {
  hoverRating.value = rating
}

function resetHoverRating() {
  hoverRating.value = 0
}

const count = ref(100)
const open = ref(false)
const docState = ref('saved')

const toggleColor = () => {
  isClicked.value = !isClicked.value
}

const handleClick = () => {
  toggleColor()
  if (isClicked.value) {
    count.value++
  } else {
    count.value--
  }
  store.increment()
}

function useStore() {
  throw new Error('Function not implemented.')
}
</script>

<template>
  <section class="RightContent" v-if="product">
    <div class="InformationProduct-RightContent">
      <ul>
        <li>
          <span class="Content-ProductCategoty">{{ product.nameCategory }}</span>
          <h2 class="Content-ProductName">{{ product.nameProduct }}</h2>
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
              <IconStar class="IconStar" />
            </span>
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
            <div class="ContainerButtonAddToCart">
              <Transition name="slide-up" mode="out-in">
                <button
                  class="ButtonAddToCart"
                  v-if="docState === 'saved'"
                  @click="add.increment()"
                >
                  Add To Cart
                </button>
                <button
                  class="ButtonCheckoutNow"
                  v-else-if="docState === 'edited'"
                  @click="docState = 'saved'"
                >
                  Checkout Now
                </button>
              </Transition>
            </div>

            <div class="ContainerButtonAddToCart">
              <button @click="open = true" class="ButtonShare Tooltip">
                <IconPlaneSend class="IconButtonShare" />
                <span class="TooltipText">Share</span>
              </button>
            </div>

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

            <div class="ContainerButtonAddToCart">
              <button class="ButtonWishlist Tooltip">
                <IconWishlist
                  :class="['IconButtonWishlist', { clicked: isClicked }]"
                  @click="handleClick"
                />
                <h6>{{ count }}</h6>
                <span class="TooltipText">Like</span>
              </button>
            </div>
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
valueOfvalueOfvalueOfvalueOfvalueOfvalueOf
