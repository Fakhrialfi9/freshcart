<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import SliderFilterComponents from '../components/SliderFilterComponents.vue'
import Breadcrumbs from '../components/BreadcrumbsComponents.vue'
import { user, getUser } from '../stores/AuthGetUserStores'
import {
  CartItems,
  deleteFromCart,
  deleteSelectedProducts,
  toggleSelectAll,
  toggleSelectProduct
} from '../stores/AddToCart'

onMounted(() => {
  getUser()
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
    deleteFromCart(DeleteId as number) // Menggunakan as number untuk memastikan DeleteId adalah number
    deleteSelectedProducts() // Menjalankan fungsi untuk menghapus produk terpilih
  }
}

// Fungsi untuk mengupdate jumlah produk dalam keranjang
function updateQuantity(productId: number, newQuantity: number) {
  const product = CartItems.value.find((item) => item.id === productId)
  if (product && newQuantity >= 1) {
    product.quantity = newQuantity
  }
}

// Fungsi untuk menangani input perubahan jumlah produk
function handleInput(event: Event, productId: number) {
  const inputElement = event.target as HTMLInputElement
  updateQuantity(productId, parseInt(inputElement.value) || 1)
}

// Variabel reaktif untuk pencarian produk
const searchQuery = ref('')

// Komputed property untuk produk dalam keranjang yang sudah difilter
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

// Watcher untuk memantau perubahan pada pencarian produk
watch(searchQuery, () => {
  // Lakukan sesuatu jika nilai searchQuery berubah
})
</script>

<template v-if="user">
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
          </div>
          <div class="NavigationBasketCartContent">
            <button @click="setToggleOpenMenuSliderFilter">Filter Product</button>
            <button class="Button-NavigationBasketCartContent">
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
          <div class="ContainerCardBoxBasketCartContent">
            <div class="ContentCardBoxBasketCartContent" v-if="filteredCartItems">
              <!-- Start Card Content Cart -->
              <transition-group name="list">
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
                      <RouterLink :to="'/shopping/' + product.id">
                        <img :src="'' + product.imagesProduct[0]" :alt="product.nameProduct" />
                      </RouterLink>
                    </div>
                    <ul class="Information-CardBoxBasketCartContentTop">
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
                    @click="setToggleOpenModalDeleteConfirm(product.id)"
                  >
                    Remove
                  </button>
                </div>
              </transition-group>
              <!-- Start Card Content Cart -->
            </div>

            <!-- Start Search Not Found Product -->
            <div class="ProductNotFound" v-else>
              <h6>No Product Found</h6>
            </div>
            <!-- End Search Not Found Product -->

            <!-- Start Product Cart Empty  -->
            <div class="ProductEmpty" v-if="filteredCartItems && filteredCartItems.length === 0">
              <h6>Your Cart Is Empty</h6>
            </div>
            <!-- End Product Cart Empty  -->
          </div>

          <!-- Start Modal Delete Confirm -->
          <transition name="SlideToggleMenu">
            <div class="ModalDeleteConfirm" v-if="setOpenModalDeleteConfirm">
              <ul>
                <li><h5>Delete Cart?</h5></li>
                <div class="diver"></div>
                <li>
                  <p>
                    Are you sure you want to delete this cart? If yes, click the continue button if
                    not, click the cancel button.
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

<style scoped src="../assets/style/Views/BasketCartView.css"></style>
