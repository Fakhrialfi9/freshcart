// stores/AddToCart.ts
import { ref } from 'vue'

export interface WishlistItem {
  id: number
  badgesDiscountProduct: string[]
  imagesProduct: string[]
  nameCategory: string
  nameProduct: string
  priceProduct: number
  codeProduct: string
  availabilityProduct: boolean
  typeProduct: string
  promoProduct: boolean
  shippingProduct: string
  quantity: number
  promoGlobalProduct: {
    discountPrice: number
    percentageDiscount: number
  }[]
  selected?: boolean
}

export const WishlistItems = ref<WishlistItem[]>([])

export function addToCart(product: WishlistItem) {
  const existingItem = WishlistItems.value.find((item) => item.id === product.id)
  if (existingItem) {
    existingItem.quantity += product.quantity
  } else {
    WishlistItems.value.push({ ...product, quantity: 1, selected: false })
  }
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
