<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'

// Start Import Components
import SliderFilterComponents from '../components/SliderFilterComponents.vue'
import DisplayProductView from '../views/DisplayProductView.vue'
import Breadcrumbs from '../components/BreadcrumbsComponents.vue'
// End Import Components

// Start Import Icon
import IconGrid3x3 from '../assets/icon/IconGrid3x3.vue'
import IconGrid2x2 from '../assets/icon/IconGrid2x2.vue'
import IconList from '../assets/icon/IconList.vue'
import IconChevronDown from '../assets/icon/IconChevronDown.vue'
// End Import Icon

const setShowColumn = ref(false)
const setShowSort = ref(false)

const toggleSelectColumn = () => {
  setShowColumn.value = !setShowColumn.value
}

const toggleSelectSort = () => {
  setShowSort.value = !setShowSort.value
}

const handleClickOutside = (event: MouseEvent) => {
  const select = document.querySelector('.ContentSelectOption')
  if (select && !select.contains(event.target as Node)) {
    setShowColumn.value = false
    setShowSort.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

// Variabel reaktif untuk slider filter
const setMenuSliderFilter = ref(false)

// Fungsi toggle untuk membuka/menutup slider filter
function setToggleOpenMenuSliderFilter() {
  setMenuSliderFilter.value = !setMenuSliderFilter.value

  // Mengatur overflow body saat slider filter dibuka/tutup
  const overflowValue = setMenuSliderFilter.value ? 'hidden' : 'auto'
  document.documentElement.style.overflow = overflowValue
  document.body.style.overflow = overflowValue
}
</script>

<template>
  <main id="MainShopping">
    <section class="Shopping">
      <div class="Container">
        <Breadcrumbs />
        <div class="ShoppingContent">
          <div class="HeadlineShoppingContent">
            <h5>My Shopping</h5>
            <span>Temukan Product Kualitas Terbaik di <a>Fresh Cart</a></span>
          </div>
          <div class="NavigationShoppingContent">
            <div class="Left-NavigationShoppingContent">
              <button @click="setToggleOpenMenuSliderFilter">Filter Product</button>
              <div class="ContainerIconGridOptions DisplayNone DisplayBlock-SM">
                <span><IconList class="iconGridOption" /></span>
                <span><IconGrid2x2 class="iconGridOption" /></span>
                <span><IconGrid3x3 class="iconGridOption" /></span>
              </div>
            </div>
            <div class="Right-NavigationShoppingContent">
              <div class="ContainerIconGridOptions DisplayNone-SM">
                <span><IconList class="iconGridOption" /></span>
                <span><IconGrid2x2 class="iconGridOption" /></span>
                <span><IconGrid3x3 class="iconGridOption" /></span>
              </div>
              <div class="FormSelectRight-NavigationShoppingContent">
                <div class="ContainerSelectOption" @click.stop="toggleSelectColumn">
                  <button>Display Column <IconChevronDown class="IconSelectDown" /></button>

                  <transition
                    name="SlideFadeDropdown"
                    mode="in-out"
                    :duration="{ enter: 400, leave: 1850 }"
                  >
                    <div v-if="setShowColumn" class="ContentSelectOption">
                      <ul>
                        <li>
                          <a href="">10 Column</a>
                        </li>
                        <li>
                          <a href="">20 Column</a>
                        </li>
                        <li>
                          <a href="">30 Column</a>
                        </li>
                      </ul>
                    </div>
                  </transition>
                </div>

                <div class="ContainerSelectOption" @click.stop="toggleSelectSort">
                  <button>Sort By Featured <IconChevronDown class="IconSelectDown" /></button>

                  <transition
                    name="SlideFadeDropdown"
                    mode="in-out"
                    :duration="{ enter: 400, leave: 1850 }"
                  >
                    <div v-if="setShowSort" class="ContentSelectOption" ref="dropdown">
                      <ul>
                        <li><a href="">Price: Low to High</a></li>
                        <li><a href="">Price: High to Low</a></li>
                        <li><a href="">Release Date</a></li>
                        <li><a href="">Avg. Rating</a></li>
                      </ul>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>

          <div class="ContainerDisplayProduct">
            <div class="ContentDisplayProduct">
              <!-- Start Bottom Content -->
              <transition>
                <DisplayProductView />
              </transition>
              <!-- End Bottom Content -->
            </div>
          </div>
        </div>
      </div>
      <!-- Start Slider Filter Wishlist & Basket Cart -->
      <SliderFilterComponents
        :setMenuSliderFilter="setMenuSliderFilter"
        @setToggleOpenMenuSliderFilter="setToggleOpenMenuSliderFilter"
      />
      <!-- End Slider Filter Wishlist & Basket Cart -->
    </section>
  </main>
</template>

<style scoped src="../assets/style/Views/ShoppingView.css"></style>
