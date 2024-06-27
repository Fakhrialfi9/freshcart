<script lang="ts">
import { defineComponent } from 'vue'
// Start Import Router
import { RouterLink } from 'vue-router'
// End Import Router

// Start Import Image Banner
import ImageSliderBanner1 from '../../../assets/image/banner-home/slide1.jpg'
import ImageSliderBanner2 from '../../../assets/image/banner-home/slide2.jpg'
// End Import Image Banner

// Import Swiper Vue.js components & Style
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    RouterLink
  },
  data() {
    return {
      ImageSliderBanner1,
      ImageSliderBanner2
    }
  },
  setup() {
    return {
      modules: [Pagination]
    }
  }
})
</script>

<template>
  <main>
    <!-- Start Content Slider Banner -->
    <section class="BannerHome">
      <swiper
        :spaceBetween="10"
        :loop="true"
        :pagination="{
          clickable: true
        }"
        :modules="modules"
        class="BannerSlider"
      >
        <SwiperSlide>
          <div class="ContentBannerSlider">
            <img :src="ImageSliderBanner1" />
            <div class="ContentBannerSlider-Headline">
              <ul>
                <li><span>Opening Sale Discount 50%</span></li>
                <li>
                  <h1>
                    SuperMarket For <br />
                    Fresh Grocery
                  </h1>
                </li>
                <li>
                  <p>
                    Introduced a new model for online grocery shopping <br />
                    and convenient home delivery.
                  </p>
                </li>
                <li>
                  <RouterLink to="" class="RouterLink">
                    <button type="button">
                      Shop Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        color="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path
                          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                        />
                      </svg>
                    </button>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="ContentBannerSlider">
            <img :src="ImageSliderBanner2" />
            <div class="ContentBannerSlider-Headline">
              <ul>
                <li><span>Opening Sale Discount 50%</span></li>
                <li>
                  <h1>
                    SuperMarket For <br />
                    Fresh Grocery
                  </h1>
                </li>
                <li>
                  <p>
                    Introduced a new model for online grocery shopping <br />
                    and convenient home delivery.
                  </p>
                </li>
                <li>
                  <RouterLink to="" class="RouterLink">
                    <button type="button">
                      Shop Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        color="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path
                          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                        />
                      </svg>
                    </button>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </swiper>
    </section>
    <!-- End Content Slider Banner -->
  </main>
</template>

<style scoped src="../../../assets/style/Views/HomeView.css"></style>
