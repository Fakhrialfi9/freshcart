// FunctionAddToCart.ts
import { addToCart, type CartItem } from '../stores/AddToCart'
import { showNotification } from '../components/NotificationView.vue'

export function handleAddToCart(product: any) {
  if (product) {
    const cartItem: CartItem = {
      id: product.id,
      imagesProduct: product.imagesProduct,
      nameProduct: product.nameProduct,
      priceProduct: product.priceProduct,
      availabilityProduct: product.availabilityProduct,
      quantity: 1,
      badgesDiscountProduct: [],
      nameCategory: '',
      codeProduct: '',
      typeProduct: '',
      promoProduct: false,
      shippingProduct: '',
      promoGlobalProduct: [],
      timestamp: new Date().getTime() // Add timestamp here
    }
    addToCart(cartItem)
    showNotification(
      `${product.nameProduct} - ${product.id} successfully added to cart.`,
      'success',
      `/freshcart/#/basketcart`,
      'cart'
    )
  } else {
    showNotification('Failed to add product to cart.', 'error')
  }
}
