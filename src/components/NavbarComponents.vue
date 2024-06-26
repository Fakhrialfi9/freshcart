<script setup lang="ts">
// Start Section Navbar Content
import NavbarTopContent from '../components/Section/NavbarComponents/NavbarTopContent.vue'
import NavbarBottomContent from '../components/Section/NavbarComponents/NavbarBottomContent.vue'
import ModalsBasketCartContent from '../components/Section/NavbarComponents/ModalsBasketCartContent.vue'
import MenuMobileSlider from '../components/Section/NavbarComponents/MenuMobileSlider.vue'
import NavbarBottomMobileContent from '../components/Section/NavbarComponents/NavbarBottomMobileContent.vue'

// End Section Navbar Content

import { ref } from 'vue'

const setModalsBasketCart = ref(false)

function setToggleOpenContentModalsBasketCart() {
  setModalsBasketCart.value = !setModalsBasketCart.value

  if (setModalsBasketCart.value) {
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
  } else {
    document.documentElement.style.overflow = 'auto'
    document.body.style.overflow = 'auto'
  }
}

const setMenuMobileSlider = ref(false)

function setToggleOpenMenuMobileSlider() {
  setMenuMobileSlider.value = !setMenuMobileSlider.value

  if (setMenuMobileSlider.value) {
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
  } else {
    document.documentElement.style.overflow = 'auto'
    document.body.style.overflow = 'auto'
  }
}
</script>

<template>
  <main id="Navbar">
    <nav class="Navbar">
      <div class="Container">
        <div class="NavbarContent">
          <!-- Start Navbar Top Content -->
          <NavbarTopContent
            :setOpenModalsBasketCart="setModalsBasketCart"
            @ToggleOpenContentModalsBasketCart="setToggleOpenContentModalsBasketCart"
            :setOpenMenuMobileSlider="setMenuMobileSlider"
            @ToggleOpenContentMenuMobileSlider="setToggleOpenMenuMobileSlider"
          />
          <!-- End Navbar Top Content -->

          <!-- Start Navbar Bottom Content -->
          <NavbarBottomContent />
          <!-- End Navbar Bottom Content -->

          <!-- Start Menu Mobile Slider -->
          <MenuMobileSlider
            :setOpenMenuMobileSlider="setMenuMobileSlider"
            @ToggleOpenContentMenuMobileSlider="setToggleOpenMenuMobileSlider"
          />
          <!-- End Menu Mobile Slider -->

          <!-- Start Modals Basket Cart Content -->
          <ModalsBasketCartContent
            :setOpenModalsBasketCart="setModalsBasketCart"
            @ToggleOpenContentModalsBasketCart="setToggleOpenContentModalsBasketCart"
          />
          <!-- End Modals Basket Cart Content -->

          <!-- Start Navbar Bottom Mobile Content -->
          <NavbarBottomMobileContent
            :setOpenModalsBasketCart="setModalsBasketCart"
            @ToggleOpenContentModalsBasketCart="setToggleOpenContentModalsBasketCart"
          />
          <!-- End Navbar Bottom Mobile Content -->

          <!-- Start Mobile Section -->
        </div>
      </div>
    </nav>
  </main>
</template>

<style scoped src="../assets/style/Components/NavbarComponents.css"></style>
<style scoped src="../assets/style/Components/ModalsCart.css"></style>
