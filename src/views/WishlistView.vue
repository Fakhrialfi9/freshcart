<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import SliderFilterComponents from '../components/SliderFilterComponents.vue'
import Breadcrumbs from '../components/BreadcrumbsComponents.vue'
import {
  WishlistItems,
  deleteFromWishlist,
  deleteSelectedProducts,
  toggleSelectAll,
  toggleSelectProduct
} from '../stores/AddToWishlist'
import { RouterLink } from 'vue-router'

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

// Variabel reaktif untuk modal konfirmasi penghapusan
const setOpenModalDeleteConfirm = ref(false)
let DeleteId: number | null = null

// Fungsi toggle untuk membuka/menutup modal konfirmasi penghapusan
function setToggleOpenModalDeleteConfirm(productId: any) {
  DeleteId = productId
  setOpenModalDeleteConfirm.value = !setOpenModalDeleteConfirm.value

  // Mengatur overflow body saat modal konfirmasi dibuka/tutup
  const overflowValue = setOpenModalDeleteConfirm.value ? 'hidden' : 'auto'
  document.documentElement.style.overflow = overflowValue
  document.body.style.overflow = overflowValue
}

// Fungsi untuk mengkonfirmasi penghapusan produk yang dipilih
const confirmDeleteSelectedProducts = () => {
  if (DeleteId !== null) {
    setToggleOpenModalDeleteConfirm(DeleteId)
    // deleteSelectedProducts(); // Uncomment if you have defined this function
    deleteFromWishlist(DeleteId as number) // Menggunakan as number untuk memastikan DeleteId adalah number
    deleteSelectedProducts() // Menjalankan fungsi untuk menghapus produk terpilih
  }
}

// Variabel reaktif untuk pencarian produk
const searchQuery = ref('')

// Komputed property untuk produk dalam wishlist yang sudah difilter
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

// Watcher untuk memantau perubahan pada pencarian produk
watch(searchQuery, () => {
  // Lakukan sesuatu jika nilai searchQuery berubah
})
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
          </div>
          <div class="NavigationWishlistContent">
            <button @click="setToggleOpenMenuSliderFilter">Filter Product</button>
            <button class="Button-NavigationWishlistContent">
              <input
                type="checkbox"
                id="AllSelectProductToCheckOut"
                @change="toggleSelectAll(($event.target as HTMLInputElement)?.checked || false)"
              />
              <p>Select All</p>
            </button>
            <button class="CheckAllDelete" @click="setToggleOpenModalDeleteConfirm">
              Delete All
            </button>
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
                    <RouterLink :to="'/shopping/' + product.id">
                      <img :src="'' + product.imagesProduct[0]" :alt="product.nameProduct" />
                    </RouterLink>
                  </div>
                  <ul class="Information-CardBoxWishlistContentTop">
                    <RouterLink :to="'/shopping/' + product.id">
                      <li>
                        <h6>Name:</h6>
                        <h5>{{ product.nameProduct }}</h5>
                      </li>
                      <li>
                        <h6>Price:</h6>
                        <h5>{{ product.priceProduct }}</h5>
                      </li>
                    </RouterLink>
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
                  class="RemoveButtonCardBoxWishlistContent"
                  @click="setToggleOpenModalDeleteConfirm(product.id)"
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

          <!-- Start Modal Delete Confirm -->
          <transition name="SlideToggleMenu">
            <div class="ModalDeleteConfirm" v-if="setOpenModalDeleteConfirm">
              <ul>
                <li><h5>Delete Wishlist?</h5></li>
                <div class="diver"></div>
                <li>
                  <p>
                    Are you sure you want to delete this wishlist? If yes, click the continue button
                    if not, click the cancel button.
                  </p>
                </li>
                <li>
                  <div class="ButtonCallToAction">
                    <button @click="setToggleOpenModalDeleteConfirm">Cancel</button>
                    <button @click="confirmDeleteSelectedProducts">Delete</button>
                  </div>
                </li>
              </ul>
            </div>
          </transition>
          <!-- End Modal Delete Confirm -->

          <!-- Start Effect Blur Saat Active Modal -->
          <div
            @click="setToggleOpenModalDeleteConfirm"
            :class="{ active: setOpenModalDeleteConfirm }"
            class="BlurEffect"
          ></div>
          <!-- End Effect Blur Saat Active Modal -->

          <!-- Start Slider Filter Wishlist & Basket Cart -->
          <SliderFilterComponents
            :setMenuSliderFilter="setMenuSliderFilter"
            @setToggleOpenMenuSliderFilter="setToggleOpenMenuSliderFilter"
          />
          <!-- End Slider Filter Wishlist & Basket Cart -->
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped src="../assets/style/Views/WishlistView.css"></style>
