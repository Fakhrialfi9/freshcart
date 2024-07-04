<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useProducts } from '../../../function/useProduct'

// Start Import SwiperJs
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type SwiperClass from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css'
// End Import SwiperJs

const { products } = useProducts()

const sliderSettings = {
  1600: { slidesPerView: 6, spaceBetween: 10 },
  1280: { slidesPerView: 5, spaceBetween: 10 },
  1024: { slidesPerView: 4, spaceBetween: 10 },
  768: { slidesPerView: 3, spaceBetween: 10 },
  576: { slidesPerView: 3, spaceBetween: 10 },
  320: { slidesPerView: 2, spaceBetween: 10 }
}

let vSwiperRef: SwiperClass | null = null
const setVSwiperRef = (swiper: SwiperClass) => {
  vSwiperRef = swiper
}
const vSwiperIndex = ref<number>()
const updateVSwiperIndex = () => {
  vSwiperIndex.value = vSwiperRef?.activeIndex
}

const prevVSwiperSlide = () => vSwiperRef?.slidePrev()
const nextVSwiperSlide = () => vSwiperRef?.slideNext()

const modules = [Navigation, Pagination, Autoplay]
</script>

<template>
  <main>
    <!-- Start Featured Categories -->
    <section class="FeaturedCategories">
      <div class="ContentFeaturedCategories">
        <!-- Start Headline Section Home -->
        <ul class="HeadlineSection-Home">
          <li><h5>Featured Categories</h5></li>
          <li>
            <button @click="nextVSwiperSlide">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c-12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                />
              </svg>
            </button>
            <button @click="prevVSwiperSlide">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                />
              </svg>
            </button>
          </li>
        </ul>
        <!-- End Headline Section Home -->

        <ul>
          <li><span></span></li>
        </ul>
        <div class="ContainerBoxProductFeaturedCategories">
          <swiper
            :slides-per-view="6"
            :slides-per-group="1"
            :spaceBetween="10"
            :centered-slides="false"
            :loop="true"
            :loop-fill-group-with-blank="true"
            :modules="modules"
            :navigation="false"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: false
            }"
            @swiper="setVSwiperRef"
            @slide-change="updateVSwiperIndex"
            :breakpoints="sliderSettings"
          >
            <!-- Start Content Slider  -->
            <swiper-slide v-for="product in products" :key="product.id">
              <div class="BoxProductFeaturedCategories">
                <RouterLink :to="'/shopping/' + product.id">
                  <img :src="'' + product.imagesProduct[0]" :alt="product.nameProduct" />
                  <h5>{{ product.nameCategory }}</h5>
                </RouterLink>
              </div>
            </swiper-slide>
            <!-- End Content Slider  -->
          </swiper>
        </div>
      </div>
    </section>
    <!-- End Featured Categories -->
  </main>
</template>

<style scoped src="../../../assets/style/Views/HomeView.css"></style>
