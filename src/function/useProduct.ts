// useProduct.ts

import { ref, onMounted } from 'vue'
import GetProduct from '../services/APi/GetProduct.js'

// Define Product interface
export interface Product {
  id: number
  name: string
  category: string
  rating: number
  priceNormal: number
  discountPrice: number
  productCode: string
  availability: boolean
  type: string
  productDetails: string
  information: string
  reviews: string[]
  sellerInfo: {
    name: string
    location: string
    contact: string
  }
  badges: string[]
  promo: boolean
  images: string[]
}

export const useProducts = () => {
  const products = ref<Product[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchProducts = async () => {
    loading.value = true
    try {
      const response = await GetProduct.getProducts()
      products.value = response.data.products
    } catch (err) {
      error.value = `Error fetching products: ${(err as Error).message}`
    } finally {
      loading.value = false
    }
  }

  const fetchProductById = async (id: number) => {
    loading.value = true
    try {
      const response = await GetProduct.getProductById(id)
      return response
    } catch (err) {
      error.value = `Error fetching product with ID ${id}: ${(err as Error).message}`
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchProducts()
  })

  return {
    products,
    loading,
    error,
    fetchProductById
  }
}
