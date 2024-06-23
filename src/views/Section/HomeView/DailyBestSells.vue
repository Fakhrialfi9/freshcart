<script lang="ts">
import { defineComponent, reactive } from 'vue'

// Start Import Image Banner
import BannerCardImage from '../../../assets/image/dailybestsells/bannerdeal.jpg'
import categorydairybreadeggs from '../../../assets/image/category/categorydairybreadeggs.jpg'
// End Import Image Banner

// Start Import Icon
import IconShortArrow from '../../../assets/icon/IconShortArrow.vue'
import IconStar from '../../../assets/icon/IconStar.vue'
import IconArrowCompare from '../../../assets/icon/IconArrowCompare.vue'
import IconWishlistFill from '../../../assets/icon/IconWishlistFill.vue'
import IconEyePriview from '../../../assets/icon/IconEyePriview.vue'
// End Import Icon

export default defineComponent({
  components: {
    IconStar,
    IconShortArrow,
    IconArrowCompare,
    IconWishlistFill,
    IconEyePriview
  },

  props: {
    value: {
      type: Number,
      required: false,
      default: 0
    }
  },

  data() {
    return {
      BannerCardImage,
      categorydairybreadeggs,
      currentRating: this.value,
      hoverRating: 0,
      stars: [1, 2, 3, 4, 5],
      hoverIndex: -1,
      showButtonsFlag: false
    }
  },

  methods: {
    setRating(rating: number) {
      this.currentRating = rating
      this.$emit('input', rating)
    },

    setHoverRating(rating: number) {
      this.hoverRating = rating
    },

    resetHoverRating() {
      this.hoverRating = 0
    },

    showButtons(index: number) {
      this.hoverIndex = index
      this.showButtonsFlag = true
    },

    hideButtons(index: number) {
      this.hoverIndex = -1
      this.showButtonsFlag = false
    }
  },

  setup() {
    const products = reactive([
      {
        link: '/',
        badge: 'Hot Sale',
        image: categorydairybreadeggs,
        category: 'Snack & Munchies',
        name: "Haldiram's Sev Bhujia",
        currentRating: 4.5,
        rating: 4.5,
        reviews: 149,
        promoPrice: '$18',
        price: '$24'
      },
      {
        link: '/',
        badge: 'New Arrival',
        image: categorydairybreadeggs,
        category: 'Beverages',
        name: 'Fresh Apples',
        currentRating: 4.2,
        rating: 4.2,
        reviews: 89,
        promoPrice: '$1',
        price: '$2'
      },
      {
        link: '/',
        badge: 'Best Seller',
        image: categorydairybreadeggs,
        category: 'Dairy',
        name: 'Amul Butter',
        currentRating: 4.8,
        rating: 4.8,
        reviews: 200,
        promoPrice: '$4',
        price: '$5'
      },
      {
        link: '/',
        badge: 'Best Seller',
        image: categorydairybreadeggs,
        category: 'Dairy',
        name: 'Amul Butter',
        currentRating: 4.8,
        rating: 4.8,
        reviews: 200,
        promoPrice: '$4',
        price: '$5'
      },
      {
        link: '/',
        badge: 'Best Seller',
        image: categorydairybreadeggs,
        category: 'Dairy',
        name: 'Amul Butter',
        currentRating: 4.8,
        rating: 4.8,
        reviews: 200,
        promoPrice: '$4',
        price: '$5'
      },
      {
        link: '/',
        badge: 'Best Seller',
        image: categorydairybreadeggs,
        category: 'Dairy',
        name: 'Amul Butter',
        currentRating: 4.8,
        rating: 4.8,
        reviews: 200,
        promoPrice: '$4',
        price: '$5'
      },
      {
        link: '/',
        badge: 'Best Seller',
        image: categorydairybreadeggs,
        category: 'Dairy',
        name: 'Amul Butter',
        currentRating: 4.8,
        rating: 4.8,
        reviews: 200,
        promoPrice: '$4',
        price: '$5'
      }
    ])

    return {
      products
    }
  }
})
</script>

<template>
  <main>
    <section class="DailyBestSells">
      <div class="ContentDailyBestSells">
        <!-- Start Content Headline -->
        <ul class="ContainerHeadlineContent-DailyBestSells">
          <li class="HeadlineContent-DailyBestSells">
            <span>Daily Best Sells</span>
          </li>
        </ul>
        <!-- End Content Headline -->

        <div class="ContainerCardBoxDailyBestSells">
          <!-- Start Content Card Box Banner -->
          <div class="CardBoxBannerDailyBestSells">
            <img src="../../../assets/image/dailybestsells/bannerdeal.jpg" />
            <div class="ContentBannerCardBoxDailyBestSells">
              <h5>100% Organic Coffee Beans.</h5>
              <span>Get the best deal before close. </span>
              <button>Shop Now <IconShortArrow class="IconShortArrow" /></button>
            </div>
          </div>
          <!-- End Content Card Box Banner -->

          <!-- Start Content Card Box Product -->
          <RouterLink v-for="(product, index) in products" :key="index" :to="product.link">
            <div
              class="CardBoxProductDailyBestSells"
              @mouseover="showButtons(index)"
              @mouseleave="hideButtons(index)"
            >
              <div class="Image-CardBoxDailyBestSells">
                <img :src="product.image" />
              </div>

              <!-- Start Headline Content Card Box Product -->
              <ul class="Headline-CardBoxDailyBestSells">
                <li>
                  <span>{{ product.category }}</span>
                </li>
                <li>
                  <h5>{{ product.name }}</h5>
                </li>
              </ul>
              <!-- End Headline Content Card Box Product -->

              <!-- Start Price & Ratting Card Box Product -->
              <ul class="PriceRating">
                <li>
                  <p class="Promo">{{ product.promoPrice }}</p>
                  <p class="Price">{{ product.price }}</p>
                </li>
                <li>
                  <div class="RatingProduct">
                    <span
                      v-for="StarRatingProduct in stars"
                      :key="StarRatingProduct"
                      :class="[
                        'StarRatingProduct',
                        {
                          SelectedRating: StarRatingProduct <= product.currentRating,
                          HoverRatingProduct: StarRatingProduct <= hoverRating
                        }
                      ]"
                      @click="setRating(StarRatingProduct)"
                      @mouseover="setHoverRating(StarRatingProduct)"
                      @mouseout="resetHoverRating"
                    >
                      <IconStar class="IconStar" />
                    </span>
                    <p>{{ product.rating }}({{ product.reviews }})</p>
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
                    <button class="Tooltip">
                      <IconEyePriview class="IconHoverButtonProduct" />
                      <span class="TooltipText">Priview</span>
                    </button>

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
