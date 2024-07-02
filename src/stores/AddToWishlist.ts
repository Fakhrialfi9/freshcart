// stores/AddToWishlist.ts

import { ref } from 'vue'

// Definisikan interface untuk item dalam Wishlist
export interface WishlistItem {
  id: number // ID produk dalam wishlist
  nameProduct: string // Nama produk
  nameCategory: string // Nama kategori produk
  badgesDiscountProduct: string[] // Array label diskon produk
  imagesProduct: string[] // Array URL gambar produk
  priceProduct: number // Harga produk
  codeProduct: string // Kode produk
  availabilityProduct: boolean // Ketersediaan produk
  typeProduct: string // Tipe produk
  promoProduct: boolean // Status promo produk
  shippingProduct: string // Informasi pengiriman produk
  promoGlobalProduct: {
    // Detail diskon global produk
    discountPrice: number // Harga diskon
    percentageDiscount: number // Persentase diskon
  }[]
  selected?: boolean // Opsional: status terpilih atau tidak
  timestamp: number // Timestamp untuk waktu pembuatan atau pembaruan item
}

// Inisialisasi WishlistItems dari localStorage
const initialWishlistItems = JSON.parse(
  localStorage.getItem('wishlistItems') || '[]'
) as WishlistItem[]
export const WishlistItems = ref<WishlistItem[]>(initialWishlistItems)

/**
 * Fungsi untuk menambahkan item ke dalam wishlist
 * @param product - Produk yang akan ditambahkan ke wishlist
 */
export function addToWishlist(product: WishlistItem) {
  // Periksa apakah item sudah ada dalam wishlist
  const existingItem = WishlistItems.value.find((item) => item.id === product.id)
  if (!existingItem) {
    // Jika belum ada, tambahkan produk ke WishlistItems dengan timestamp saat ini
    WishlistItems.value.push({ ...product, timestamp: new Date().getTime() })
  }
  // Simpan wishlist yang diperbarui ke localStorage
  localStorage.setItem('wishlistItems', JSON.stringify(WishlistItems.value))
}

/**
 * Fungsi untuk menghapus item dari wishlist berdasarkan productId
 * @param productId - ID produk yang akan dihapus dari wishlist
 */
export function deleteFromWishlist(productId: number) {
  // Filter item dengan productId yang sesuai dari WishlistItems
  WishlistItems.value = WishlistItems.value.filter((item) => item.id !== productId)

  // Simpan wishlist yang diperbarui ke localStorage
  localStorage.setItem('wishlistItems', JSON.stringify(WishlistItems.value))
}

/**
 * Fungsi untuk menghapus semua produk yang terpilih dari wishlist
 */
export function deleteSelectedProducts() {
  // Filter item yang tidak terpilih (item.selected === false)
  WishlistItems.value = WishlistItems.value.filter((item) => !item.selected)

  // Simpan wishlist yang diperbarui ke localStorage
  localStorage.setItem('wishlistItems', JSON.stringify(WishlistItems.value))
}

/**
 * Fungsi untuk memilih atau tidak memilih semua item dalam wishlist
 * @param selected - Status terpilih
 */
export function toggleSelectAll(selected: boolean) {
  // Toggle status terpilih untuk semua item dalam WishlistItems
  WishlistItems.value.forEach((item) => (item.selected = selected))
}

/**
 * Fungsi untuk memilih atau membatalkan pemilihan produk tertentu dalam wishlist berdasarkan productId
 * @param productId - ID produk
 */
export function toggleSelectProduct(productId: number) {
  // Temukan produk dalam WishlistItems dan toggle status terpilihnya
  const product = WishlistItems.value.find((item) => item.id === productId)
  if (product) {
    product.selected = !product.selected
  }
}

/**
 * Fungsi untuk membersihkan item wishlist yang lebih tua dari satu tahun
 */
export function cleanUpWishlistItems() {
  const now = new Date().getTime()
  const oneYearAgo = now - 365 * 24 * 60 * 60 * 1000 // Hitung timestamp satu tahun yang lalu
  // Filter item dengan timestamp lebih besar dari oneYearAgo
  WishlistItems.value = WishlistItems.value.filter((item) => item.timestamp > oneYearAgo)
  // Simpan wishlist yang diperbarui ke localStorage
  localStorage.setItem('wishlistItems', JSON.stringify(WishlistItems.value))
}
