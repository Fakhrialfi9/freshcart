<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Breadcrumbs from '../function/Breadcrumbs.vue'

const navShortcut = ref<HTMLElement | null>(null)
const footer = ref<HTMLElement | null>(null)

const handleScroll = () => {
  if (!navShortcut.value || !footer.value) return

  const navShortcutElement = navShortcut.value
  const footerElement = footer.value

  const footerTop = footerElement.getBoundingClientRect().top
  const navShortcutHeight = navShortcutElement.offsetHeight

  if (footerTop <= navShortcutHeight) {
    navShortcutElement.classList.add('NavigationButtonShortCut--absolute')
  } else {
    navShortcutElement.classList.remove('NavigationButtonShortCut--absolute')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <main id="MainBasketCart">
    <section class="BasketCart">
      <div class="Container">
        <Breadcrumbs />
        <div class="BasketCartContent">
          <div class="HeadlineBasketCartContent">
            <h5>My Cart</h5>
            <span>There are 21 products in this BasketCart. </span>
          </div>
          <div class="NavigationBasketCartContent">
            <form class="InputSearch-NavigationBasketCartContent">
              <input type="text" placeholder="Search Your Product" />
            </form>
            <button class="CheckAllDelete DisplayNone-SM DisplayNone-MD DisplayNone-LG">
              Delete All
            </button>
          </div>
          <div
            class="NavigationBasketCartContent DisplayNone DisplayBlock-LG DisplayBlock-MD DisplayBlock-SM"
          >
            <button class="Button-NavigationBasketCartContent">
              <input type="checkbox" id="AllSelectProductToCheckOut" />
              <p>Select All</p>
            </button>
            <button>Filter Product</button>
            <button class="CheckAllDelete">Delete All</button>
          </div>
          <div class="ContainerCardBoxBasketCartContent">
            <div class="CardBoxBasketCartContent" v-for="index in 21" :key="index">
              <div class="CardBoxBasketCartContentTop">
                <input
                  class="CheckBox-CardBoxBasketCartContentTop"
                  type="checkbox"
                  id="SelectProductToCheckOut"
                />
                <div class="Image-CardBoxBasketCartContentTop"></div>
                <ul class="Information-CardBoxBasketCartContentTop">
                  <li>
                    <h6>Name:</h6>
                    <h5>Organic Banana</h5>
                  </li>
                  <li>
                    <h6>Price:</h6>
                    <h5>$.98 / lb</h5>
                  </li>
                </ul>
              </div>
              <div class="CardBoxBasketCartContentBottom">
                <ul>
                  <li>
                    <p>Status</p>
                    <button class="StatusColor">In Stock</button>
                  </li>
                  <li>
                    <p>Actions</p>
                    <button class="ActionColor">Add To Cart</button>
                  </li>
                  <li>
                    <p>Quantity</p>
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
                  </li>
                  <li>
                    <p>Total Price</p>
                    <button class="TotalPrice">$400</button>
                  </li>
                </ul>
              </div>
              <button class="RemoveButtonCardBoxBasketCartContent">Remove</button>
            </div>
          </div>

          <!-- NavigationButtonShortCut yang ingin diatur posisinya -->
          <div
            class="NavigationButtonShortCut DisplayNone-LG DisplayNone-MD DisplayNone-SM"
            ref="navShortcut"
          >
            <button class="Button-NavigationBasketCartContent">
              <input type="checkbox" id="AllSelectProductToCheckOut" />
              <p>Select All</p>
            </button>
            <button>Filter Product</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped src="../assets/style/Views/BasketCartView.css"></style>
