<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Breadcrumbs from '../function/Breadcrumbs.vue'
import {
  CartItems,
  deleteFromCart,
  deleteSelectedProducts,
  toggleSelectAll,
  toggleSelectProduct
} from '../stores/AddToCart'

function updateQuantity(productId: number, newQuantity: number) {
  const product = CartItems.value.find((item) => item.id === productId)
  if (product && newQuantity >= 1) {
    product.quantity = newQuantity
  }
}

function handleInput(event: Event, productId: number) {
  const inputElement = event.target as HTMLInputElement
  updateQuantity(productId, parseInt(inputElement.value) || 1)
}

function filterProducts() {
  // Logika Filter
}

const searchQuery = ref('')

const filteredCartItems = computed(() => {
  if (!searchQuery.value.trim()) {
    return CartItems.value
  } else {
    const filtered = CartItems.value.filter((product) =>
      product.nameProduct.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    return filtered.length > 0 ? filtered : null
  }
})

watch(searchQuery, () => {})
</script>

<template>
  <main id="MainBasketCart">
    <section class="BasketCart">
      <div class="Container">
        <Breadcrumbs />
        <div class="BasketCartContent">
          <div class="HeadlineBasketCartContent">
            <h5>My Cart</h5>
            <span>There are {{ CartItems.length }} products in this BasketCart.</span>
          </div>
          <div class="NavigationBasketCartContent">
            <form class="InputSearch-NavigationBasketCartContent">
              <input type="text" placeholder="Search Your Product" v-model="searchQuery" />
            </form>

            <button
              class="CheckAllDelete DisplayNone-SM DisplayNone-MD DisplayNone-LG"
              @click="deleteSelectedProducts"
            >
              Delete All
            </button>
          </div>
          <div
            class="NavigationBasketCartContent DisplayNone DisplayBlock-LG DisplayBlock-MD DisplayBlock-SM"
          >
            <button class="Button-NavigationBasketCartContent">
              <input
                type="checkbox"
                id="AllSelectProductToCheckOut"
                @change="toggleSelectAll(($event.target as HTMLInputElement)?.checked || false)"
              />

              <p>Select All</p>
            </button>
            <button @click="filterProducts">Filter Product</button>
            <button class="CheckAllDelete" @click="deleteSelectedProducts">Delete All</button>
          </div>
          <div class="ContainerCardBoxBasketCartContent">
            <div v-if="filteredCartItems">
              <div
                class="CardBoxBasketCartContent"
                v-for="product in filteredCartItems"
                :key="product.id"
              >
                <div class="CardBoxBasketCartContentTop">
                  <input
                    class="CheckBox-CardBoxBasketCartContentTop"
                    type="checkbox"
                    :checked="product.selected"
                    @change="toggleSelectProduct(product.id)"
                  />
                  <div class="Image-CardBoxBasketCartContentTop">
                    <img :src="'' + product.imagesProduct[0]" :alt="product.nameProduct" />
                  </div>
                  <ul class="Information-CardBoxBasketCartContentTop">
                    <li>
                      <h6>Name:</h6>
                      <h5>{{ product.nameProduct }}</h5>
                    </li>
                    <li>
                      <h6>Price:</h6>
                      <h5>{{ product.priceProduct }}</h5>
                    </li>
                  </ul>
                </div>
                <div class="CardBoxBasketCartContentBottom">
                  <ul>
                    <li>
                      <p>Status</p>
                      <button class="StatusColor">
                        {{ product.availabilityProduct ? 'Available' : 'Out of Stock' }}
                      </button>
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
                            @click="updateQuantity(product.id, product.quantity - 1)"
                          >
                            -
                          </button>
                          <input
                            min="1"
                            name="quantity"
                            :value="product.quantity"
                            type="number"
                            @input="handleInput($event, product.id)"
                          />
                          <button
                            class="QuantityDown"
                            type="button"
                            @click="updateQuantity(product.id, product.quantity + 1)"
                          >
                            +
                          </button>
                        </form>
                      </div>
                    </li>
                    <li>
                      <p>Total Price</p>
                      <button class="TotalPrice">
                        {{ product.priceProduct * product.quantity }}
                      </button>
                    </li>
                  </ul>
                </div>
                <button
                  class="RemoveButtonCardBoxBasketCartContent"
                  @click="deleteFromCart(product.id)"
                >
                  Remove
                </button>
              </div>
            </div>

            <!-- Start Search Not Found Product -->
            <div v-else>
              <h6>No products found</h6>
            </div>
            <!-- End Search Not Found Product -->

            <!-- Start Product Cart Empty  -->
            <div class="ProductEmpty" v-if="filteredCartItems && filteredCartItems.length === 0">
              <h6>No products found</h6>
            </div>
            <!-- End Product Cart Empty  -->
          </div>
          <div
            class="NavigationButtonShortCut DisplayNone-LG DisplayNone-MD DisplayNone-SM"
            ref="navShortcut"
          >
            <button class="Button-NavigationBasketCartContent" @click="toggleSelectAll(true)">
              <input
                type="checkbox"
                id="AllSelectProductToCheckOut"
                @change="
                  $event.target && toggleSelectAll(($event.target as HTMLInputElement).checked)
                "
              />

              <p>Select All</p>
            </button>
            <button @click="filterProducts">Filter Product</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped src="../assets/style/Views/BasketCartView.css"></style>
