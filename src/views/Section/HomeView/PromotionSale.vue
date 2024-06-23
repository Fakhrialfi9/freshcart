<script lang="ts">
import { defineComponent } from 'vue'

// Start Import Router
import { RouterLink } from 'vue-router'
// End Import Router

// Start Import Image Banner
import grocerybanner from '../../../assets/image/promotionsale/grocerybanner.png'
import grocerybanner2 from '../../../assets/image/promotionsale/grocerybanner2.jpg'
// End Import Image Banner

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation, Autoplay } from 'swiper/modules'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    RouterLink
  },

  data() {
    return {
      grocerybanner,
      grocerybanner2
    }
  },

  setup() {
    const sliderSettings = {
      1600: { slidesPerView: 2, spaceBetween: 10 },
      1280: { slidesPerView: 2, spaceBetween: 10 },
      1024: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 1, spaceBetween: 10 },
      576: { slidesPerView: 1, spaceBetween: 10 },
      320: { slidesPerView: 1, spaceBetween: 10 }
    }

    return {
      sliderSettings,
      modules: [Pagination, Navigation, Autoplay]
    }
  }
})
</script>

<template>
  <main>
    <section class="PromotionSale">
      <swiper
        class="PromotionContent"
        :modules="modules"
        :space-between="10"
        :slides-per-view="2"
        :slides-per-group="1"
        :loop="true"
        :loop-fill-group-with-blank="true"
        :breakpoints="sliderSettings"
        :autoplay="{
          delay: 3540,
          disableOnInteraction: false
        }"
      >
        <swiper-slide>
          <div class="BoxPromotionContent">
            <img :src="grocerybanner" />
            <div class="BoxPromotionContent-Headline">
              <ul>
                <li><h1>Fruits & Vegetables</h1></li>
                <li><h5>Get Upto 30% Off</h5></li>
                <li>
                  <RouterLink to="/" class="RouterLink">
                    <button>Shop Now</button>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="BoxPromotionContent">
            <img :src="grocerybanner2" />
            <div class="BoxPromotionContent-Headline">
              <ul>
                <li><h1>Fruits & Vegetables</h1></li>
                <li><h5>Get Upto 30% Off</h5></li>
                <li>
                  <RouterLink to="/" class="RouterLink">
                    <button>Shop Now</button>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="BoxPromotionContent">
            <img :src="grocerybanner" />
            <div class="BoxPromotionContent-Headline">
              <ul>
                <li><h1>Fruits & Vegetables</h1></li>
                <li><h5>Get Upto 30% Off</h5></li>
                <li>
                  <RouterLink to="/" class="RouterLink">
                    <button>Shop Now</button>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="BoxPromotionContent">
            <img :src="grocerybanner2" />
            <div class="BoxPromotionContent-Headline">
              <ul>
                <li><h1>Fruits & Vegetables</h1></li>
                <li><h5>Get Upto 30% Off</h5></li>
                <li>
                  <RouterLink to="/" class="RouterLink">
                    <button>Shop Now</button>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </main>
</template>

<style scoped src="../../../assets/style/Views/HomeView.css"></style>
