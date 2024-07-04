// ../services/APi/useGlobalSearch.ts

import axios from 'axios'
import type { Product } from '../function/useProduct'

// URL tempat data produk tersedia
const BASE_URL = 'https://fakhrialfi9.github.io/APifreshcart/dataproduct.json'

/**
 * Mencari produk berdasarkan kata kunci yang diberikan.
 * @param keyword Kata kunci untuk pencarian produk
 * @returns Array produk yang difilter berdasarkan kata kunci
 * @throws Error jika terjadi kesalahan dalam melakukan pencarian produk
 */
const searchProducts = async (keyword: string): Promise<Product[]> => {
  try {
    // Mengambil data produk dari BASE_URL menggunakan Axios
    const response = await axios.get(BASE_URL)
    const products: Product[] = response.data.products // Mengasumsikan 'products' adalah array yang berisi data produk

    // Melakukan filter berdasarkan kata kunci pada nama produk, kategori, atau harga produk
    const filteredProducts = products.filter(
      (product: Product) =>
        product.nameProduct.toLowerCase().includes(keyword.toLowerCase()) ||
        product.nameCategory.toLowerCase().includes(keyword.toLowerCase()) ||
        product.priceProduct.toString().includes(keyword)
    )

    return filteredProducts
  } catch (error) {
    // Melempar error jika terjadi kesalahan saat melakukan pencarian produk
    throw new Error(`Error searching products: ${(error as Error).message}`)
  }
}

// Ekspor fungsi searchProducts untuk digunakan di tempat lain
export default {
  searchProducts
}

// import axios from 'axios'
// import type { Product } from '../function/useProduct'

// const BASE_URL = 'https://fakhrialfi9.github.io/APifreshcart/dataproduct.json'

// const searchProducts = async (keyword: string): Promise<Product[]> => {
//   try {
//     const response = await axios.get(BASE_URL)
//     const products = response.data.products // Assuming 'products' is the array containing your product data
//     const filteredProducts = products.filter(
//       (product: Product) =>
//         product.nameProduct.toLowerCase().includes(keyword.toLowerCase()) ||
//         product.nameCategory.toLowerCase().includes(keyword.toLowerCase()) ||
//         product.priceProduct.toString().includes(keyword)
//     )
//     return filteredProducts
//   } catch (error) {
//     throw new Error(`Error searching products: ${(error as Error).message}`)
//   }
// }

// export default {
//   searchProducts
// }
