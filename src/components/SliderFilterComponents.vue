<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

// Start Import Icon
import IconArrowToLeft from '../assets/icon/IconArrowToLeft.vue'
import IconChevronDown from '../assets/icon/IconChevronDown.vue'
// End Import Icon

const props = defineProps({
  setMenuSliderFilter: Boolean
})

const emit = defineEmits(['setToggleOpenMenuSliderFilter'])
</script>

<template>
  <!-- Start Slider Filter Wishlist & Basket Cart -->
  <transition type="animation" name="SlideFadeToggleMenu" :duration="{ enter: 500, leave: 1500 }">
    <div v-if="setMenuSliderFilter" class="SliderFilterWishlistBasketCart">
      <ul>
        <li>
          <div class="HeadlineFilter">
            <h5>Filter Wishlist</h5>
            <h5 @click="$emit('setToggleOpenMenuSliderFilter')"><IconArrowToLeft /></h5>
          </div>
        </li>

        <div class="diver"></div>

        <li>
          <div class="FilterPriceProduct">
            <h5>Price</h5>
            <form class="InputPrice-FilterContent">
              <input type="text" placeholder="Lowest Price" />
              <input type="text" placeholder="Highest Price" />
              <button>Filter</button>
            </form>
          </div>
        </li>

        <div class="diver"></div>

        <li>
          <div class="FilterCategory">
            <h5>Categories</h5>
            <div class="MenuFilterCategory">
              <span>
                <a href="">Dairy, Bread & Eggs</a>
                <IconChevronDown class="IconChevronDown" />
              </span>
              <span>
                <a href="">Snacks & Munchies </a>
                <IconChevronDown class="IconChevronDown" />
              </span>
              <span>
                <a href="">Fruits & Vegetables </a>
                <IconChevronDown class="IconChevronDown"
              /></span>
              <span>
                <a href="">Cold Drinks & Juices</a>
                <IconChevronDown class="IconChevronDown"
              /></span>
              <span>
                <a href="">Breakfast & Instant Food</a>
                <IconChevronDown class="IconChevronDown"
              /></span>
              <span>
                <a href="">Bakery & Biscuits</a>
                <IconChevronDown class="IconChevronDown"
              /></span>
              <span>
                <a href="">Chicken, Meat & Fish</a>
                <IconChevronDown class="IconChevronDown"
              /></span>
            </div>
          </div>
        </li>

        <div class="diver"></div>

        <li>
          <div class="FilterInputSearchStores">
            <h5>Stores</h5>
            <form class="InputSearchStores-FilterContent">
              <input type="text" placeholder="Search By Stores" />
            </form>
            <span>
              <label>
                <input type="checkbox" id="AllSelectProductToCheckOut" />
                <p>E-Grocery</p>
              </label>
              <label>
                <input type="checkbox" id="AllSelectProductToCheckOut" />
                <p>DealShare</p>
              </label>
              <label>
                <input type="checkbox" id="AllSelectProductToCheckOut" />
                <p>DMart</p>
              </label>
              <label>
                <input type="checkbox" id="AllSelectProductToCheckOut" />
                <p>Blinkit</p>
              </label>
              <label>
                <input type="checkbox" id="AllSelectProductToCheckOut" />
                <p>BigBasket</p>
              </label>
              <label>
                <input type="checkbox" id="AllSelectProductToCheckOut" />
                <p>StoreFront</p>
              </label>
              <label>
                <input type="checkbox" id="AllSelectProductToCheckOut" />
                <p>Spencers</p>
              </label>
              <label>
                <input type="checkbox" id="AllSelectProductToCheckOut" />
                <p>Online Grocery</p>
              </label>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </transition>

  <div
    @click="$emit('setToggleOpenMenuSliderFilter')"
    :class="{ active: setMenuSliderFilter }"
    class="BlurEffect"
  ></div>
  <!-- End Slider Filter Wishlist & Basket Cart -->
</template>

<style scoped src="../assets/style/Components/SliderFilterComponent.css"></style>
