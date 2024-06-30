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

import IconStar from '../../../assets/icon/IconStar.vue'
</script>

<template>
  <section class="ReviewView" v-if="product">
    <div class="LeftContent">
      <ul>
        <!-- Start Headline Content Review -->
        <li>
          <div class="Headline-Rating"><h5>Customer reviews</h5></div>
        </li>
        <!-- End Headline Content Review -->

        <!-- Start Count Rating Global -->
        <li>
          <div class="Count-Rating">
            <span> <IconStar class="IconStarRating" v-for="index in 5" :key="index" /></span>
            <h6 v-if="product.ratingsProduct && product.ratingsProduct.length > 0">
              {{ product.ratingsProduct[0].countRatingProduct }} out of 5
            </h6>
            <h6 v-if="product.ratingsProduct && product.ratingsProduct.length > 0">
              {{ product.ratingsProduct[0].globalCountRatingProduct }} global ratings
            </h6>
          </div>
        </li>
        <!-- End Count Rating Global -->

        <!-- Start Rating Bar Global  -->
        <li>
          <div
            class="RatingContent"
            v-if="product.ratingsProduct && product.ratingsProduct.length > 0"
          >
            <div class="Rating" v-for="(product, index) in product.ratingsProduct" :key="index">
              <span class="RatingLabel">
                <h5>{{ product.ratingBar }}</h5>
                <IconStar class="IconStarRating" />
              </span>
              <div class="RatingBar">
                <div class="RatingProgress" :style="{ width: product.percentageBar + '%' }"></div>
              </div>
              <span class="RatingPercentage">
                <h5>{{ product.percentageBar }}</h5>
                %</span
              >
            </div>
          </div>
        </li>
        <!-- End Rating Bar Global  -->

        <!-- Start Call To Action Get Review -->
        <li>
          <div class="CallToAction-Rating">
            <span
              ><h5>Review this product</h5>
              <p>Share your thoughts with other customers.</p></span
            >
            <button>Write The Review</button>
          </div>
        </li>
        <!-- End Call To Action Get Review -->
      </ul>
    </div>
    <div class="RightContent">
      <ul>
        <li>
          <div class="Headline-CommentReviews">
            <h5>Customer reviews</h5>
            <button>Top Review</button>
          </div>
        </li>
        <li>
          <div
            class="ProfileUser-Review-CommentReviews"
            v-for="(review, index) in product.reviewProduct"
            :key="index"
          >
            <div class="image-ProfileUser"></div>
            <div class="Information-ProfileUser">
              <div class="ProfileUserComment-CommentReviews">
                <div class="Name-ProfileUser">
                  <h6>{{ review.nameUserReview }}</h6>
                </div>
                <div class="DateComment-VerifiedPurchase-ProfileUser">
                  <span>{{ review.dateUserReview }}</span>
                  <strong>{{ review.passedPurchase }}</strong>
                </div>
              </div>
              <div class="RatingReview-ProfileUser">
                <div class="RatingStar">
                  <span>
                    <IconStar class="IconStarRating" v-for="index in 5" :key="index" />
                  </span>
                  <h6>{{ review.headlineReview }}</h6>
                </div>
                <div class="Description">
                  <p>{{ review.descriptionUserReview }}, {{ review.descriptionReview }}</p>
                </div>
                <div class="ImageProductReview">
                  <div
                    v-for="(image, imgIndex) in review.imageProductReview"
                    :key="imgIndex"
                    class="BoxImageProductReview"
                  >
                    <img :src="image" :alt="product.nameProduct" />
                  </div>
                </div>
              </div>
              <div class="ButtonCallToAction-RatingReview">
                <button>Helpful</button>
                <button>Report abuse</button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="ButtonReadMoreReview">
            <button>Read More Review</button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped src="../../../assets/style/Views/DetailProductView.css"></style>
<style scoped src="../../../assets/style/Views/ReviewView.css"></style>
