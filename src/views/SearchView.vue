<!-- SearchView.vue -->

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useSearch } from '../stores/SearchStore'
import type { Product } from '@/function/useProduct'
import SliderFilterComponents from '../components/SliderFilterComponents.vue'
import Breadcrumbs from '../components/BreadcrumbsComponents.vue'
import { handleAddToCart } from '../function/FunctionAddToCart'
import { handleAddToWishlist } from '../function/FunctionAddToWishlist'
import AlertBoxError from '../components/AlertBoxErrorComponents.vue'
import LoadingComponents from '../components/LoadingComponents.vue'

// Import Icons
import IconGrid3x3 from '../assets/icon/IconGrid3x3.vue'
import IconGrid2x2 from '../assets/icon/IconGrid2x2.vue'
import IconList from '../assets/icon/IconList.vue'
import IconChevronDown from '../assets/icon/IconChevronDown.vue'
import IconStar from '../assets/icon/IconStar.vue'
import IconWishlistFill from '../assets/icon/IconWishlistFill.vue'
import IconEyePriview from '../assets/icon/IconEyePriview.vue'
import IconAddPlus from '../assets/icon/IconAddPlus.vue'

// Menggunakan useRoute dari vue-router untuk mendapatkan informasi rute saat ini
const route = useRoute()

// Membuat referensi reaktif untuk kata kunci pencarian
const keyword = ref<string>((route.query.q as string) || '')

// Menggunakan useSearch untuk mengakses data produk dan status pencarian
const { products, loading, error, searchProducts } = useSearch()

// Membuat referensi reaktif untuk produk yang sudah difilter
const filteredProducts = ref<Product[]>([])

// Membuat referensi reaktif untuk status apakah produk sudah dimuat
const isLoaded = ref(false)

// Fungsi untuk memuat produk berdasarkan kata kunci pencarian
const fetchProducts = async () => {
  loading.value = true
  try {
    // Simulasi penundaan saat memuat
    await new Promise((resolve) => setTimeout(resolve, 2500))
    if (keyword.value) {
      await searchProducts(keyword.value)
    } else {
      // Jika tidak ada kata kunci, produk yang difilter dikosongkan
      filteredProducts.value = []
    }
  } catch (err) {
    // Tangani kesalahan saat memuat produk
    error.value = `Error fetching products: ${(err as Error).message}`
  } finally {
    // Setelah selesai memuat, atur status loading dan isLoaded
    loading.value = false
    isLoaded.value = true
  }
}

// Panggil fetchProducts saat komponen dimuat
onMounted(() => {
  fetchProducts()
})

// Pantau perubahan pada data produk dan filter ulang berdasarkan kata kunci
watch(products, () => {
  filterProducts(keyword.value)
})

// Fungsi untuk melakukan filter terhadap produk berdasarkan kata kunci
const filterProducts = (query: string) => {
  if (!query) {
    // Jika tidak ada kata kunci, tampilkan semua produk
    filteredProducts.value = products.value
    return
  }
  // Ubah query menjadi lowercase untuk pencocokan yang tidak bersifat case-sensitive
  const lowerQuery = query.toLowerCase()
  filteredProducts.value = products.value.filter(
    (product) =>
      product.nameProduct.toLowerCase().includes(lowerQuery) ||
      product.nameCategory.toLowerCase().includes(lowerQuery) ||
      product.priceProduct.toString().includes(query)
  )
}

// Handler untuk menambahkan produk ke keranjang belanja
const addToCartHandler = (product: any) => {
  handleAddToCart(product)
}

// Handler untuk menambahkan produk ke daftar keinginan
const addToWishlistHandler = (product: any) => {
  handleAddToWishlist(product)
}

// Mengelola state hover untuk tombol aksi produk
const hoverIndex = ref(-1)
const showButtonsFlag = ref(false)
const hoverRating = ref(0)

// Tampilkan tombol aksi produk saat mouse hover pada produk tertentu
const showButtons = (index: number) => {
  hoverIndex.value = index
  showButtonsFlag.value = true
}

// Sembunyikan tombol aksi produk saat mouse meninggalkan area produk
const hideButtons = () => {
  hoverIndex.value = -1
  showButtonsFlag.value = false
}

// Mengelola sistem rating produk
const setRating = (rating: number) => {
  hoverRating.value = rating
}

// Atur rating saat mouse hover pada bintang rating
const setHoverRating = (rating: number) => {
  hoverRating.value = rating
}

// Reset rating saat mouse meninggalkan area bintang rating
const resetHoverRating = () => {
  hoverRating.value = 0
}

// Fungsi untuk memotong teks jika melebihi batas karakter tertentu
const truncateText = (value: string, limit: number) => {
  if (value.length > limit) {
    return value.substring(0, limit) + '...'
  }
  return value
}

// State untuk mengontrol tampilan kolom dan opsi pengurutan
const setShowColumn = ref(false)
const setShowSort = ref(false)

// Toggle untuk menampilkan atau menyembunyikan pilihan kolom
const toggleSelectColumn = () => {
  setShowColumn.value = !setShowColumn.value
}

// Toggle untuk menampilkan atau menyembunyikan opsi pengurutan
const toggleSelectSort = () => {
  setShowSort.value = !setShowSort.value
}

// Fungsi untuk menangani klik di luar area dropdown untuk menutup dropdown
const handleClickOutside = (event: MouseEvent) => {
  const select = document.querySelector('.ContentSelectOption')
  if (select && !select.contains(event.target as Node)) {
    setShowColumn.value = false
    setShowSort.value = false
  }
}

// Tambahkan event listener saat komponen dimuat untuk menangani klik di luar dropdown
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

// Hapus event listener saat komponen di-unmount
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

// State reaktif untuk slider filter menu
const setMenuSliderFilter = ref(false)

// Toggle untuk membuka atau menutup slider filter
const setToggleOpenMenuSliderFilter = () => {
  setMenuSliderFilter.value = !setMenuSliderFilter.value

  // Sesuaikan overflow pada body dan document saat slider filter dibuka atau ditutup
  const overflowValue = setMenuSliderFilter.value ? 'hidden' : 'auto'
  document.documentElement.style.overflow = overflowValue
  document.body.style.overflow = overflowValue
}
</script>

<template>
  <main>
    <section class="SearchResults">
      <div class="Container">
        <Breadcrumbs />
        <div class="SearchResultsContent">
          <div class="HeadlineSearchResultsContent">
            <h5>Search Results</h5>
            <span>Temukan Product Kualitas Terbaik di <a>Fresh Cart</a></span>
          </div>
          <div class="NavigationSearchResultsContent">
            <div class="Left-NavigationSearchResultsContent">
              <button @click="setToggleOpenMenuSliderFilter">Filter Product</button>
              <div class="ContainerIconGridOptions DisplayNone DisplayBlock-SM">
                <span><IconList class="iconGridOption" /></span>
                <span><IconGrid2x2 class="iconGridOption" /></span>
                <span><IconGrid3x3 class="iconGridOption" /></span>
              </div>
            </div>
            <div class="Right-NavigationSearchResultsContent">
              <div class="ContainerIconGridOptions DisplayNone-SM">
                <span><IconList class="iconGridOption" /></span>
                <span><IconGrid2x2 class="iconGridOption" /></span>
                <span><IconGrid3x3 class="iconGridOption" /></span>
              </div>
              <div class="FormSelectRight-NavigationSearchResultsContent">
                <div class="ContainerSelectOption" @click.stop="toggleSelectColumn">
                  <button>Display Column <IconChevronDown class="IconSelectDown" /></button>

                  <transition
                    name="SlideFadeDropdown"
                    mode="in-out"
                    :duration="{ enter: 400, leave: 1850 }"
                  >
                    <div v-if="setShowColumn" class="ContentSelectOption">
                      <ul>
                        <li><a href="">10 Column</a></li>
                        <li><a href="">20 Column</a></li>
                        <li><a href="">30 Column</a></li>
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

          <!-- Start Loading Statement -->
          <div class="MainLoading" v-if="loading || !isLoaded">
            <div class="LoadingContainer">
              <div class="LoadingContent">
                <LoadingComponents />
                <h6>Loading Product...</h6>
              </div>
            </div>
          </div>
          <!-- End Loading Statement -->

          <!-- Product Display Container -->
          <div class="ContainerDisplayProduct" v-else-if="isLoaded">
            <!-- Error state -->
            <div v-if="error" class="ContentDisplayProduct">
              <AlertBoxError>{{ error }}</AlertBoxError>
            </div>
            <!-- Product list -->
            <div class="ContentDisplayProduct">
              <div class="SearchResultsCardProduct">
                <div class="ContentSearchResultsCardProduct" v-if="filteredProducts.length > 0">
                  <div class="ContainerSearchResultsCardProduct">
                    <div
                      class="CardSearchResultsCardProduct"
                      v-for="(product, index) in filteredProducts"
                      :key="product.id"
                      @mouseover="showButtons(index)"
                      @mouseleave="hideButtons"
                    >
                      <span
                        class="Badge-CardSearchResultsCardProduct"
                        v-if="product.badgesDiscountProduct.length > 0"
                      >
                        {{ product.badgesDiscountProduct[0] }}
                      </span>
                      <div class="Image-CardSearchResultsCardProduct">
                        <img :src="product.imagesProduct[0]" :alt="product.nameProduct" />
                      </div>

                      <ul class="Headline-CardSearchResultsCardProduct">
                        <li>
                          <span>{{ product.nameCategory }}</span>
                        </li>
                        <li>
                          <h5>{{ truncateText(product.nameProduct, 18) }}</h5>
                        </li>
                        <li>
                          <div class="RatingProduct">
                            <span
                              v-for="StarRatingProduct in 5"
                              :key="StarRatingProduct"
                              :class="[
                                'StarRatingProduct',
                                {
                                  SelectedRating:
                                    StarRatingProduct <=
                                    product.ratingsProduct[StarRatingProduct - 1]
                                      .countRatingProduct,
                                  HoverRatingProduct: StarRatingProduct <= hoverRating
                                }
                              ]"
                              @click="setRating(StarRatingProduct)"
                              @mouseover="setHoverRating(StarRatingProduct)"
                              @mouseleave="resetHoverRating"
                            >
                              <IconStar class="IconStar" />
                            </span>
                            <p v-if="product.ratingsProduct && product.ratingsProduct.length > 0">
                              {{ product.ratingsProduct[0].countRatingProduct }}
                            </p>
                          </div>
                        </li>
                      </ul>

                      <ul class="PriceCart-CardSearchResultsCardProduct">
                        <li>
                          <p
                            v-if="
                              product.promoGlobalProduct && product.promoGlobalProduct.length > 0
                            "
                            class="Promo"
                          >
                            {{ product.promoGlobalProduct[0].discountPrice }}
                          </p>
                          <p class="Price">{{ product.priceProduct }}</p>
                        </li>
                        <li>
                          <button @click="addToCartHandler(product)">
                            <IconAddPlus class="IconButtonAddCart" /> Add
                          </button>
                        </li>
                      </ul>

                      <transition name="SlideCardBox">
                        <div
                          class="HoverButtonProduct"
                          v-if="hoverIndex === index && showButtonsFlag"
                        >
                          <div class="ContainerHoverButtonProduct">
                            <RouterLink :to="'/shopping/' + product.id">
                              <button class="Tooltip">
                                <IconEyePriview class="IconHoverButtonProduct" />
                                <span class="TooltipText">Priview</span>
                              </button>
                            </RouterLink>
                            <button class="Tooltip" @click="addToWishlistHandler(product)">
                              <IconWishlistFill class="IconHoverButtonProduct" />
                              <span class="TooltipText">Wishlist</span>
                            </button>
                          </div>
                        </div>
                      </transition>
                    </div>
                  </div>
                </div>
              </div>
              <AlertBoxError v-if="filteredProducts.length === 0">
                Sorry, the product you are looking for does not exist
              </AlertBoxError>
            </div>
          </div>
          <!-- No data found -->
          <AlertBoxError v-else
            >Sorry, the product you are looking for does not exist</AlertBoxError
          >
        </div>
      </div>

      <!-- Slider Filter Wishlist & Basket Cart -->
      <SliderFilterComponents
        :setMenuSliderFilter="setMenuSliderFilter"
        @setToggleOpenMenuSliderFilter="setToggleOpenMenuSliderFilter"
      />
    </section>
  </main>
</template>

<style scoped src="../assets/style/Views/SearchView.css"></style>
