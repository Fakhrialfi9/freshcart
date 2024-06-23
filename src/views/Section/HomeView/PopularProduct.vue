<script lang="ts">
import { reactive } from 'vue'

// Start Import Image Banner
import Product1 from '../../../assets/image/popularproduct/product1.jpg'
import Product2 from '../../../assets/image/popularproduct/product2.jpg'
// End Import Image Banner

// Start Import Icon
import IconStar from '../../../assets/icon/IconStar.vue'
import IconArrowCompare from '../../../assets/icon/IconArrowCompare.vue'
import IconWishlistFill from '../../../assets/icon/IconWishlistFill.vue'
import IconEyePriview from '../../../assets/icon/IconEyePriview.vue'
// End Import Icon

export default {
  components: {
    IconStar,
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
      Product1,
      Product2,
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
        image: Product1,
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
        image: Product2,
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
        image: Product1,
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
        badge: 'Limited Offer',
        image: Product2,
        category: 'Bakery',
        name: 'Whole Wheat Bread',
        currentRating: 4.3,
        rating: 4.3,
        reviews: 120,
        promoPrice: '$3',
        price: '$4'
      },
      {
        link: '/',
        badge: 'Discount',
        image: Product1,
        category: 'Fruits',
        name: 'Fresh Apples',
        currentRating: 4.7,
        rating: 4.7,
        reviews: 180,
        promoPrice: '$2',
        price: '$3'
      },
      {
        link: '/',
        badge: 'Hot Sale',
        image: Product1,
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
        image: Product2,
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
        image: Product1,
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
        badge: 'Limited Offer',
        image: Product2,
        category: 'Bakery',
        name: 'Whole Wheat Bread',
        currentRating: 4.3,
        rating: 4.3,
        reviews: 120,
        promoPrice: '$3',
        price: '$4'
      },
      {
        link: '/',
        badge: 'Discount',
        image: Product1,
        category: 'Fruits',
        name: 'Fresh Apples',
        currentRating: 4.7,
        rating: 4.7,
        reviews: 180,
        promoPrice: '$2',
        price: '$3'
      }
    ])

    return {
      products
    }
  }
}
</script>

<template>
  <main>
    <section class="PopularProduct">
      <div class="ContentPopularProduct">
        <div class="NavsPopularProduct">
          <ul>
            <li><span>Popula Product</span></li>
            <li>
              <button>All</button>
              <button>Hot Sale</button>
              <button>Years Sale</button>
              <button>Big Deals</button>
            </li>
          </ul>
        </div>
        <div class="ContainerPopularProduct">
          <!-- Start Content Card Product -->
          <RouterLink v-for="(product, index) in products" :key="index" :to="product.link">
            <div
              class="CardPopularProduct"
              @mouseover="showButtons(index)"
              @mouseleave="hideButtons(index)"
            >
              <!-- Start Badge & Image Card Box Product -->
              <span class="Badge-CardPopularProduct">{{ product.badge }}</span>
              <div class="Image-CardPopularProduct">
                <img :src="product.image" />
              </div>
              <!-- End Badge & Image Card Box Product -->

              <!-- Start Headline Card Box Product -->
              <ul class="Headline-CardPopularProduct">
                <li>
                  <span>{{ product.category }}</span>
                </li>
                <li>
                  <h5>{{ product.name }}</h5>
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
              <!-- End Headline Card Box Product -->

              <!-- Start Price & Button Card Box Product -->
              <ul class="PriceCart-CardPopularProduct">
                <li>
                  <p class="Promo">{{ product.promoPrice }}</p>
                  <p class="Price">{{ product.price }}</p>
                </li>
                <li><button>Add To Cart</button></li>
              </ul>
              <!-- End Price & Button Card Box Product -->

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
          <!-- End Content Card Product -->
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped src="../../../assets/style/Views/HomeView.css"></style>
