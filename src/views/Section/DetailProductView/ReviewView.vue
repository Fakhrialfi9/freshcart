<script setup lang="ts">
import { ref } from 'vue'
import IconStar from '../../../assets/icon/IconStar.vue'

// Data rating
const ratings = ref([
  { rating: 5, percentage: 90 },
  { rating: 4, percentage: 76 },
  { rating: 3, percentage: 67 },
  { rating: 2, percentage: 30 },
  { rating: 1, percentage: 10 }
])
</script>

<template>
  <section class="ReviewView">
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
            <h6>4.1 out of 5</h6>
            <h6>11,130 global ratings</h6>
          </div>
        </li>
        <!-- End Count Rating Global -->

        <!-- Start Rating Bar Global  -->
        <li>
          <div class="RatingContent">
            <div class="Rating" v-for="rate in ratings" :key="rate.rating">
              <span class="RatingLabel"
                ><h5>{{ rate.rating }}</h5>
                <IconStar class="IconStarRating" />
              </span>
              <div class="RatingBar">
                <div class="RatingProgress" :style="{ width: rate.percentage + '%' }"></div>
              </div>
              <span class="RatingPercentage"
                ><h5>{{ rate.percentage }}</h5>
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
    <div class="RightContent"></div>
  </section>
</template>

<style scoped src="../../../assets/style/Views/DetailProductView.css"></style>
<style scoped src="../../../assets/style/Views/ReviewView.css"></style>
