<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useProducts } from '../../../function/useProduct'

import ProductDetails from './ProductDetails.vue'
import InformationView from './InformationView.vue'
import ReviewView from './ReviewView.vue'

const currentTab = ref<'Product Details' | 'Information Product' | 'Reviews Product'>(
  'Product Details'
)

const tabs: Record<string, typeof ProductDetails | typeof InformationView | typeof ReviewView> = {
  'Product Details': ProductDetails,
  'Information Product': InformationView,
  'Reviews Product': ReviewView
}

const { fetchProductById } = useProducts()

const isLoaded = ref(false)

onMounted(async () => {
  const route = useRoute()
  const productId = Number(route.params.id)

  const start = Date.now()
  await fetchProductById(productId)
  const elapsed = Date.now() - start
  const delay = Math.max(2000 - elapsed, 0)
  setTimeout(() => {
    isLoaded.value = true
    moveMarker()
  }, delay)
})

const setActiveTab = async (tab: string) => {
  currentTab.value = tab as typeof currentTab.value
  await nextTick()
  moveMarker()
}

const moveMarker = () => {
  const activeNav = document.querySelector('.MainTabs .active a')
  if (!activeNav) return

  const activeMarker = document.querySelector('.MainTabs .active-marker') as HTMLElement
  const activeNavElement = activeNav as HTMLElement

  const activeWidth = activeNavElement.offsetWidth
  const activeLeft = activeNavElement.offsetLeft

  activeMarker.style.width = `${activeWidth}px`
  activeMarker.style.left = `${activeLeft}px`
}
</script>

<template>
  <section class="BottomContent">
    <div v-if="!isLoaded">
      <h6>Loading Content...</h6>
    </div>
    <div class="ProductDetail-BottomContent" v-else>
      <div class="MainTabs">
        <ul>
          <li
            v-for="(tab, name) in tabs"
            :key="name"
            :class="['tab-button', { active: currentTab === name }]"
            @click="setActiveTab(name)"
          >
            <a
              :class="['tab-button', { active: currentTab === name }]"
              @click.prevent="setActiveTab(name)"
              >{{ name }}</a
            >
          </li>
        </ul>
        <i class="active-marker"></i>
      </div>
      <div class="ContentProductDetail-BottomContent">
        <transition name="slide-left" mode="out-in">
          <component :is="tabs[currentTab]"></component>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped src="../../../assets/style/Views/DetailProductView.css"></style>
<style scoped src="../../../assets/style/Views/DetailProductView.css"></style>
