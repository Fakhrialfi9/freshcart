// stores/AddToWishlist.ts
import { ref } from 'vue'

export interface WishlistItem {
  id: number
  nameProduct: string
  badgesDiscountProduct: string[]
  imagesProduct: string[]
  priceProduct: number
  codeProduct: string
  availabilityProduct: boolean
  typeProduct: string
  promoProduct: boolean
  shippingProduct: string
  promoGlobalProduct: {
    discountPrice: number
    percentageDiscount: number
  }[]

  selected?: boolean
  timestamp: number
}

// Initialize WishlistItems from localStorage
const initialWishlistItems = JSON.parse(
  localStorage.getItem('wishlistItems') || '[]'
) as WishlistItem[]
export const WishlistItems = ref<WishlistItem[]>(initialWishlistItems)

// Function to add item to wishlist
export function addToWishlist(product: WishlistItem) {
  const existingItem = WishlistItems.value.find((item) => item.id === product.id)
  if (!existingItem) {
    WishlistItems.value.push({ ...product, timestamp: new Date().getTime() })
  }
  // Save updated wishlist to localStorage
  localStorage.setItem('wishlistItems', JSON.stringify(WishlistItems.value))
}

// Function Delete & Selected
export function deleteFromWishlist(productId: number) {
  WishlistItems.value = WishlistItems.value.filter((item) => item.id !== productId)
}

export function deleteSelectedProducts() {
  WishlistItems.value = WishlistItems.value.filter((item) => !item.selected)
}

export function toggleSelectAll(selected: boolean) {
  WishlistItems.value.forEach((item) => (item.selected = selected))
}

export function toggleSelectProduct(productId: number) {
  const product = WishlistItems.value.find((item) => item.id === productId)
  if (product) {
    product.selected = !product.selected
  }
}

// Function to clean up wishlist items older than one year
export function cleanUpWishlistItems() {
  const now = new Date().getTime()
  const oneYearAgo = now - 365 * 24 * 60 * 60 * 1000 // Count Years (365 Days)
  WishlistItems.value = WishlistItems.value.filter((item) => {
    return item.timestamp > oneYearAgo
  })
  localStorage.setItem('wishlistItems', JSON.stringify(WishlistItems.value))
}
