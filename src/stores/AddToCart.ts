// stores/AddToCart.ts
import { ref } from 'vue'

export interface CartItem {
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

export const CartItems = ref<CartItem[]>([])

export function addToCart(product: CartItem) {
  const existingItem = CartItems.value.find((item) => item.id === product.id)
  if (existingItem) {
    existingItem.quantity += product.quantity
  } else {
    CartItems.value.push({ ...product, quantity: 1, selected: false })
  }
}

export function deleteFromCart(productId: number) {
  CartItems.value = CartItems.value.filter((item) => item.id !== productId)
}

export function deleteSelectedProducts() {
  CartItems.value = CartItems.value.filter((item) => !item.selected)
}

export function toggleSelectAll(selected: boolean) {
  CartItems.value.forEach((item) => (item.selected = selected))
}

export function toggleSelectProduct(productId: number) {
  const product = CartItems.value.find((item) => item.id === productId)
  if (product) {
    product.selected = !product.selected
  }
}
