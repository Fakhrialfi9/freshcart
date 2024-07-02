// FunctionAddToWishlist.ts

// Import modul dan komponen yang diperlukan
import { addToWishlist, type WishlistItem } from '../stores/AddToWishlist' // Import fungsi addToWishlist dan tipe WishlistItem dari store AddToWishlist
import { showNotification } from '../components/NotificationComponents.vue' // Import fungsi showNotification dari komponen NotificationComponents.vue

/**
 * Function untuk menangani penambahan produk ke dalam wishlist.
 * @param product Data produk yang akan ditambahkan ke wishlist.
 */
export function handleAddToWishlist(product: any) {
  // Memeriksa apakah produk valid
  if (product) {
    // Membuat objek wishlistItem berdasarkan data produk
    const wishlistItem: WishlistItem = {
      id: product.id, // ID produk yang akan ditambahkan ke wishlist
      nameProduct: product.nameProduct, // Nama produk
      nameCategory: product.nameCategory, // Kategori produk
      badgesDiscountProduct: [], // Daftar badge diskon produk (kosong untuk saat ini)
      imagesProduct: product.imagesProduct, // Gambar produk
      priceProduct: product.priceProduct, // Harga produk
      codeProduct: product.codeProduct, // Kode produk
      availabilityProduct: product.availabilityProduct, // Ketersediaan produk
      typeProduct: product.typeProduct, // Tipe produk
      promoProduct: product.promoProduct, // Promo produk (jika ada)
      shippingProduct: product.shippingProduct, // Metode pengiriman produk
      promoGlobalProduct: product.promoGlobalProduct, // Promo global produk (jika ada)
      timestamp: new Date().getTime() // Timestamp saat produk ditambahkan ke wishlist
    }

    // Memanggil fungsi addToWishlist untuk menambahkan produk ke wishlist
    addToWishlist(wishlistItem)

    // Menampilkan notifikasi sukses setelah menambahkan produk ke wishlist
    showNotification(
      `${product.nameProduct} - ${product.id} successfully added to wishlist.`, // Pesan notifikasi sukses dengan nama produk dan ID
      'success', // Jenis notifikasi sukses
      `/freshcart/#/wishlist`, // Link menuju halaman wishlist dalam aplikasi
      'wishlist' // Jenis notifikasi untuk wishlist
    )
  } else {
    // Menampilkan notifikasi gagal jika produk tidak valid
    showNotification('Failed to add product to wishlist.', 'error') // Pesan notifikasi gagal
  }
}
