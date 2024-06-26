<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import IconClose from '../../../assets/icon/IconClose.vue'
import categorydairybreadeggs from '../../../assets/image/category/categorydairybreadeggs.jpg'

const props = defineProps({
  setOpenModalsBasketCart: Boolean
})

const emit = defineEmits(['ToggleOpenContentModalsBasketCart'])
</script>

<template>
  <transition name="SlideFadeToggleModalBasketCart">
    <div v-if="setOpenModalsBasketCart" class="ModalBasketCart">
      <div class="ContentTopModalBasketCart">
        <ul class="HeadingContent-ModalBasketCart">
          <li>
            <h5>Shop Cart</h5>
            <p>Location in 382480</p>
          </li>
          <li>
            <span @click="$emit('ToggleOpenContentModalsBasketCart')">
              <IconClose class="IconCloseToggle" />
            </span>
          </li>
        </ul>
      </div>

      <div class="ContentCardModalBasketCart">
        <div class="AlertModalBasketCart">
          <div class="ContentAlertModalBasketCart">
            <h5>
              You’ve got FREE delivery. Start
              <RouterLink class="LinkColor" to="">checkout now!</RouterLink>
            </h5>
          </div>
        </div>

        <div class="diver"></div>

        <ul class="CardBoxCheckoutProduct" v-for="index in 20" :key="index">
          <li>
            <div class="ImageInformasi-CardBoxCheckoutProduct">
              <div class="ImageContent">
                <img :src="categorydairybreadeggs" alt="" />
              </div>
              <div class="InformationContent">
                <h6>Haldiram's Sev Bhujia</h6>
                <span>250g</span>
                <button>Remove</button>
              </div>
            </div>

            <div class="InputQuantity-CardBoxCheckoutProduct">
              <form class="FormInputQuantity" action="">
                <button
                  class="QuantityUp"
                  type="button"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                >
                  -
                </button>
                <input min="1" name="quantity" value="10" type="number" />
                <button
                  class="QuantityDown"
                  type="button"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                >
                  +
                </button>
              </form>
            </div>

            <div class="PriceContent-CardBoxCheckoutProduct">
              <span>$5.00 </span>
            </div>
          </li>
        </ul>
      </div>

      <div class="ContentBottomModalBasketCart">
        <ul class="HeadingContent-ModalBasketCart">
          <li>
            <b>Total</b>
            <h5>$354</h5>
          </li>
          <li>
            <span>
              <button>Checkout</button>
              <button @click="$emit('ToggleOpenContentModalsBasketCart')">Cancel</button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </transition>

  <div
    @click="$emit('ToggleOpenContentModalsBasketCart')"
    :class="{ active: setOpenModalsBasketCart }"
    class="BlurEffect"
  ></div>
</template>

<style scoped src="../../../assets/style/Components/NavbarComponents.css"></style>
<style scoped src="../../../assets/style/Components/ModalsCart.css"></style>
