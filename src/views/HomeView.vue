<script setup lang="ts">
// Start Import Section Home Page
import BannerHome from './Section/HomeView/BannerHome.vue'
import FeaturedCategories from './Section/HomeView/FeaturedCategories.vue'
import PromotionSale from './Section/HomeView/PromotionSale.vue'
import PopularProduct from './Section/HomeView/PopularProduct.vue'
import DailyBestSells from './Section/HomeView/DailyBestSells.vue'
import AdvantageServices from './Section/HomeView/AdvantageServices.vue'
// Start Import Section Home Page

import { products } from '../function/GetProduct'
</script>

<template>
  <main id="MainHome">
    <section class="Home">
      <div class="Container">
        <div class="HomeContent">
          <!-- Start Content Slider Banner -->
          <BannerHome />
          <!-- End Content Slider Banner -->

          <!-- Start Featured Categories -->
          <FeaturedCategories :products="products" />
          <!-- End Featured Categories -->

          <!-- Start Promotion Sale -->
          <PromotionSale />
          <!-- End Promotion Sale -->

          <!-- Start Promotion Sale -->
          <PopularProduct :products="products" />
          <!-- End Promotion Sale -->

          <!-- Start Daily Best Sells -->
          <DailyBestSells :products="products" />
          <!-- End Daily Best Sells -->

          <!-- Start Daily Best Sells -->
          <AdvantageServices />
          <!-- End Daily Best Sells -->
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped src="../assets//style//Views/HomeView.css"></style>
