// stores/AddToCart.ts

import { ref } from 'vue'

// Definisikan struktur data untuk item dalam keranjang belanja
export interface CartItem {
  id: number // ID produk
  badgesDiscountProduct: string[] // Array label diskon produk
  imagesProduct: string[] // Array URL gambar produk
  nameCategory: string // Nama kategori produk
  nameProduct: string // Nama produk
  priceProduct: number // Harga produk
  codeProduct: string // Kode produk
  availabilityProduct: boolean // Ketersediaan produk
  typeProduct: string // Tipe produk
  promoProduct: boolean // Status promo produk
  shippingProduct: string // Informasi pengiriman produk
  quantity: number // Jumlah produk dalam keranjang
  promoGlobalProduct: {
    // Detail diskon global produk
    discountPrice: number // Harga diskon
    percentageDiscount: number // Persentase diskon
  }[]
  selected?: boolean // Status item terpilih
  timestamp: number // Timestamp penambahan produk
}

// Inisialisasi CartItems dari localStorage
const initialCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]') as CartItem[]
export const CartItems = ref<CartItem[]>(initialCartItems)

/**
 * Fungsi untuk menambahkan item ke dalam keranjang belanja
 * @param product - Produk yang akan ditambahkan
 */
export function addToCart(product: CartItem) {
  const existingItem = CartItems.value.find((item) => item.id === product.id)
  if (existingItem) {
    existingItem.quantity += product.quantity // Tambahkan jumlah produk jika sudah ada dalam keranjang
  } else {
    CartItems.value.push({ ...product, timestamp: new Date().getTime() }) // Tambahkan produk baru ke dalam keranjang
  }
  // Simpan keranjang yang diperbarui ke localStorage
  localStorage.setItem('cartItems', JSON.stringify(CartItems.value))
}

/**
 * Fungsi untuk menghapus item dari keranjang berdasarkan productId
 * @param productId - ID produk yang akan dihapus
 */
export function deleteFromCart(productId: number) {
  CartItems.value = CartItems.value.filter((item) => item.id !== productId) // Filter item dengan productId tertentu
  // Simpan keranjang yang diperbarui ke localStorage
  localStorage.setItem('cartItems', JSON.stringify(CartItems.value))
}

/**
 * Fungsi untuk menghapus produk yang dipilih dari keranjang
 */
export function deleteSelectedProducts() {
  CartItems.value = CartItems.value.filter((item) => !item.selected) // Filter item yang tidak terpilih
  // Simpan keranjang yang diperbarui ke localStorage
  localStorage.setItem('cartItems', JSON.stringify(CartItems.value))
}

/**
 * Fungsi untuk memilih atau tidak memilih semua item dalam keranjang
 * @param selected - Status terpilih
 */
export function toggleSelectAll(selected: boolean) {
  CartItems.value.forEach((item) => (item.selected = selected)) // Atur status terpilih semua item
}

/**
 * Fungsi untuk memilih atau tidak memilih item produk berdasarkan productId
 * @param productId - ID produk
 */
export function toggleSelectProduct(productId: number) {
  const product = CartItems.value.find((item) => item.id === productId)
  if (product) {
    product.selected = !product.selected // Toggle status terpilih produk
  }
}

/**
 * Fungsi untuk membersihkan item dalam keranjang yang lebih tua dari satu tahun
 */
export function cleanUpCartItems() {
  const now = new Date().getTime()
  const oneYearAgo = now - 365 * 24 * 60 * 60 * 1000 // Hitung satu tahun dalam milidetik
  CartItems.value = CartItems.value.filter((item) => {
    return item.timestamp > oneYearAgo // Filter item yang lebih muda dari satu tahun
  })
  // Simpan keranjang yang diperbarui ke localStorage
  localStorage.setItem('cartItems', JSON.stringify(CartItems.value))
}
