<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useProducts } from '@/function/useProduct'

const { products } = useProducts()

const swiperInstance = ref(null)

function onSwiper(swiper) {
  swiperInstance.value = swiper
}

function slideNext() {
  if (swiperInstance.value && swiperInstance.value.swiper) {
    swiperInstance.value.swiper.slideNext()
  }
}

function slidePrev() {
  if (swiperInstance.value && swiperInstance.value.swiper) {
    swiperInstance.value.swiper.slidePrev()
  }
}
</script>

<template>
  <main>
    <section class="FeaturedCategories">
      <div class="ContentFeaturedCategories">
        <ul class="HeadlineSection-Home">
          <li><h5>Featured Categories</h5></li>
          <li>
            <button @click="slidePrev">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c-12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                />
              </svg>
            </button>
            <button @click="slideNext">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                />
              </svg>
            </button>
          </li>
        </ul>

        <div class="ContainerBoxProductFeaturedCategories">
          <Swiper
            v-if="products.length > 0"
            :modules="[Navigation, Pagination, A11y]"
            :slides-per-view="6"
            :space-between="10"
            ref="swiperRef"
            @swiper="onSwiper"
          >
            <SwiperSlide v-for="product in products" :key="product.id">
              <div class="BoxProductFeaturedCategories">
                <RouterLink :to="'/shopping/' + product.id">
                  <img :src="product.imagesProduct[0]" :alt="product.nameProduct" />
                  <h5>{{ product.nameCategory }}</h5>
                </RouterLink>
              </div>
            </SwiperSlide>
          </Swiper>
          <p v-else>No products available.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped src="../../../assets/style/Views/HomeView.css"></style>
