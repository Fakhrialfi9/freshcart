// SearchStores.ts

import { ref } from 'vue'
import GetProduct from '../services/useGlobalSearch'
import type { Product } from '../function/useProduct'

const products = ref<Product[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

const searchProducts = async (keyword: string) => {
  loading.value = true
  try {
    const response = await GetProduct.searchProducts(keyword)
    products.value = response
    error.value = null
  } catch (err) {
    products.value = []
    error.value = `Error searching products: ${(err as Error).message}`
  } finally {
    loading.value = false
  }
}

export const useSearch = () => {
  return {
    products,
    loading,
    error,
    searchProducts
  }
}
