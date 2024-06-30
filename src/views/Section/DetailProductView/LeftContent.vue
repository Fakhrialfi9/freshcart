<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProducts, type Product } from '../../../function/useProduct'

import { Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type SwiperClass from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { counter } from './../../../stores/counter'

const route = useRoute()
const { fetchProductById, loading } = useProducts()
const productId = Number(route.params.id)
const product = ref<Product | null>(null)

onMounted(async () => {
  product.value = await fetchProductById(productId)
})

const modules = [Navigation, Thumbs]
const thumbsSwiper = ref<SwiperClass>()
const activeIndex = ref<number | null>(null)

const setThumbsSwiper = (swiper: SwiperClass) => {
  thumbsSwiper.value = swiper
}

const handleThumbnailClick = (index: number) => {
  activeIndex.value = index
}
</script>

<template>
  <section class="LeftContent" v-if="product">
    <div class="ImageLayout-LeftContent">
      <div class="PrimaryImage-LeftContent">
        <swiper
          class="BoxPrimaryImage-LeftContent"
          :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff'
          }"
          :modules="modules"
          :space-between="10"
          :navigation="true"
          :thumbs="{ swiper: thumbsSwiper }"
        >
          <swiper-slide
            class="ImagePrimaryImage-LeftContent"
            v-for="(image, index) in product.imagesProduct"
            :key="index"
          >
            <img :src="image" :alt="product.nameProduct" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="Thumbnail-LeftContent">
        <swiper
          class="BoxThumbnail-LeftContent"
          :modules="modules"
          :space-between="10"
          :slides-per-view="4"
          :watch-slides-progress="true"
          :prevent-clicks="false"
          :prevent-clicks-propagation="false"
          @swiper="setThumbsSwiper"
        >
          <swiper-slide
            v-for="(image, index) in product.imagesProduct"
            :key="index"
            @click="handleThumbnailClick(index)"
            :class="{ 'ImageThumbnail-LeftContent': true, active: activeIndex === index }"
            tabindex="0"
          >
            <img :src="image" :alt="product.nameProduct" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style scoped src="../../../assets/style/Views/DetailProductView.css"></style>
