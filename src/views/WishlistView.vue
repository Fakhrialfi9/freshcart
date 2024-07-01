<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import {
  WishlistItems,
  deleteFromWishlist,
  deleteSelectedProducts,
  toggleSelectAll,
  toggleSelectProduct
} from '../stores/AddToWishlist'

function filterProducts() {
  // Logika Filter
}

const searchQuery = ref('')
const filteredWishlistItems = computed(() => {
  if (!searchQuery.value.trim()) {
    return WishlistItems.value
  } else {
    const filtered = WishlistItems.value.filter((product) =>
      product.nameProduct.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    return filtered.length > 0 ? filtered : null
  }
})

watch(searchQuery, () => {})
</script>

<template>
  <main id="MainWishlist">
    <section class="Wishlist">
      <div class="Container">
        <Breadcrumbs />
        <div class="WishlistContent">
          <div class="HeadlineWishlistContent">
            <h5>My Wishlist</h5>
            <span>There are {{ WishlistItems.length }} products in this wishlist. </span>
          </div>
          <div class="NavigationWishlistContent">
            <form class="InputSearch-NavigationWishlistContent">
              <input type="text" placeholder="Search Your Product" v-model="searchQuery" />
            </form>
            <!-- <button
              class="CheckAllDelete DisplayNone-SM DisplayNone-MD DisplayNone-LG"
              @click="deleteSelectedProducts"
            >
              Delete All
            </button> -->
          </div>
          <div class="NavigationWishlistContent">
            <button class="Button-NavigationWishlistContent">
              <input
                type="checkbox"
                id="AllSelectProductToCheckOut"
                @change="toggleSelectAll(($event.target as HTMLInputElement)?.checked || false)"
              />
              <p>Select All</p>
            </button>
            <button>Filter Product</button>
            <button class="CheckAllDelete" @click="deleteSelectedProducts">Delete All</button>
          </div>
          <div class="ContainerCardBoxWishlistContent">
            <div class="ContentCardBoxWishlistContent" v-if="filteredWishlistItems">
              <!-- Start Card Content Wishlist -->
              <div
                class="CardBoxWishlistContent"
                v-for="product in filteredWishlistItems"
                :key="product.id"
              >
                <div class="CardBoxWishlistContentTop">
                  <input
                    class="CheckBox-CardBoxWishlistContentTop"
                    type="checkbox"
                    :checked="product.selected"
                    @change="toggleSelectProduct(product.id)"
                  />
                  <div class="Image-CardBoxWishlistContentTop">
                    <img :src="'' + product.imagesProduct[0]" :alt="product.nameProduct" />
                  </div>
                  <ul class="Information-CardBoxWishlistContentTop">
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
                <div class="CardBoxWishlistContentBottom">
                  <ul>
                    <li>
                      <p>Status</p>
                      <button class="StatusColor">
                        {{ product.availabilityProduct ? 'In Stock' : 'Out of Stock' }}
                      </button>
                    </li>
                    <li>
                      <p>Actions</p>
                      <button class="ActionColor">Add To Cart</button>
                    </li>
                    <li>
                      <p>Total Price</p>
                      <button class="TotalPrice">{{ product.priceProduct }}</button>
                    </li>
                  </ul>
                </div>
                <button
                  @click="deleteFromWishlist(product.id)"
                  class="RemoveButtonCardBoxWishlistContent"
                >
                  Remove
                </button>
              </div>
              <!-- End Card Content Wishlist -->
            </div>

            <!-- Start Search Not Found Product -->
            <div class="ProductNotFound" v-else>
              <h6>No Product Found</h6>
            </div>
            <!-- End Search Not Found Product -->

            <!-- Start Product Cart Empty  -->
            <div
              class="ProductEmpty"
              v-if="filteredWishlistItems && filteredWishlistItems.length === 0"
            >
              <h6>Your Cart Is Empty</h6>
            </div>
            <!-- End Product Cart Empty  -->
          </div>

          <!-- Start Optional Navigasi Select & Filter -->
          <!-- <div class="NavigationButtonShortCut DisplayNone-LG DisplayNone-MD DisplayNone-SM">
            <button class="Button-NavigationWishlistContent">
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
          </div> -->
          <!-- End Optional Navigasi Select & Filter -->
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped src="../assets/style/Views/WishlistView.css"></style>
