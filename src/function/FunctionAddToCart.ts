// FunctionAddToCart.ts

// Import modul dan komponen yang diperlukan
import { addToCart, type CartItem } from '../stores/AddToCart' // Import fungsi addToCart dan tipe CartItem dari store AddToCart
import { showNotification } from '../components/NotificationComponents.vue' // Import fungsi showNotification dari komponen NotificationComponents.vue

/**
 * Function untuk menangani penambahan produk ke dalam keranjang belanja (cart).
 * @param product Data produk yang akan ditambahkan ke dalam cart.
 */
export function handleAddToCart(product: any) {
  // Memeriksa apakah produk valid
  if (product) {
    // Membuat objek cartItem berdasarkan data produk
    const cartItem: CartItem = {
      id: product.id, // ID produk yang akan ditambahkan ke cart
      imagesProduct: product.imagesProduct, // Gambar produk
      nameProduct: product.nameProduct, // Nama produk
      priceProduct: product.priceProduct, // Harga produk
      availabilityProduct: product.availabilityProduct, // Ketersediaan produk
      quantity: 1, // Jumlah produk diinisialisasi dengan 1 saat ditambahkan ke cart
      badgesDiscountProduct: [], // Daftar badge diskon produk (kosong untuk saat ini)
      nameCategory: '', // Kategori produk (diinisialisasi dengan string kosong)
      codeProduct: '', // Kode produk (diinisialisasi dengan string kosong)
      typeProduct: '', // Tipe produk (diinisialisasi dengan string kosong)
      promoProduct: false, // Status promo produk (diinisialisasi dengan false)
      shippingProduct: '', // Metode pengiriman produk (diinisialisasi dengan string kosong)
      promoGlobalProduct: [], // Daftar promo global produk (diinisialisasi dengan array kosong)
      timestamp: new Date().getTime() // Timestamp saat produk ditambahkan ke cart
    }

    // Memanggil fungsi addToCart untuk menambahkan produk ke cart
    addToCart(cartItem)

    // Menampilkan notifikasi sukses setelah menambahkan produk ke cart
    showNotification(
      `${product.nameProduct} - ${product.id} successfully added to cart.`, // Pesan notifikasi sukses dengan nama produk dan ID
      'success', // Jenis notifikasi sukses
      `/freshcart/#/basketcart`, // Link menuju halaman keranjang belanja dalam aplikasi
      'cart' // Jenis notifikasi untuk cart
    )
  } else {
    // Menampilkan notifikasi gagal jika produk tidak valid
    showNotification('Failed to add product to cart.', 'error') // Pesan notifikasi gagal
  }
}
