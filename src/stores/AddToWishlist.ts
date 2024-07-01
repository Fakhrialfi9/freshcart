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
}

export const WishlistItems = ref<WishlistItem[]>([])

export function addToWishlist(product: WishlistItem) {
  const existingItem = WishlistItems.value.find((item) => item.id === product.id)
  if (!existingItem) {
    WishlistItems.value.push({ ...product })
    return true
  }
  return false
}

export function deleteFromCart(productId: number) {
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
