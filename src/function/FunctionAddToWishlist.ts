// FunctionAddToWishlist.ts
import { addToWishlist, type WishlistItem } from '../stores/AddToWishlist'
import { showNotification } from '../components/NotificationView.vue'

export function handleAddToWishlist(product: any) {
  if (product) {
    const wishlistItem: WishlistItem = {
      id: product.id,
      nameProduct: product.nameProduct,
      badgesDiscountProduct: [],
      imagesProduct: product.imagesProduct,
      priceProduct: product.priceProduct,
      codeProduct: product.codeProduct,
      availabilityProduct: product.availabilityProduct,
      typeProduct: product.typeProduct,
      promoProduct: product.promoProduct,
      shippingProduct: product.shippingProduct,
      promoGlobalProduct: product.promoGlobalProduct,
      timestamp: new Date().getTime() // Add timestamp here
    }
    addToWishlist(wishlistItem)
    showNotification(
      `${product.nameProduct} - ${product.id} successfully added to wishlist.`,
      'success',
      `/freshcart/#/wishlist`,
      'wishlist'
    )
  } else {
    showNotification('Failed to add product to wishlist.', 'error')
  }
}
