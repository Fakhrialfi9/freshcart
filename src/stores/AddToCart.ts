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
  timestamp: number // Add timestamp property
}

// Initialize CartItems from localStorage
const initialCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]') as CartItem[]
export const CartItems = ref<CartItem[]>(initialCartItems)

// Function to add item to cart
export function addToCart(product: CartItem) {
  const existingItem = CartItems.value.find((item) => item.id === product.id)
  if (existingItem) {
    existingItem.quantity += product.quantity
  } else {
    CartItems.value.push({ ...product, timestamp: new Date().getTime() })
  }
  // Save updated cart to localStorage
  localStorage.setItem('cartItems', JSON.stringify(CartItems.value))
}

// Function Delete & Selected
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

// Function to clean up cart items older than one year
export function cleanUpCartItems() {
  const now = new Date().getTime()
  const oneYearAgo = now - 365 * 24 * 60 * 60 * 1000 // Count Years (365 Days)
  CartItems.value = CartItems.value.filter((item) => {
    return item.timestamp > oneYearAgo
  })
  localStorage.setItem('cartItems', JSON.stringify(CartItems.value))
}
