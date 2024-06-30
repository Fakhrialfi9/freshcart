import axios from 'axios'

const apiClient = axios.create({
  // baseURL: 'https://fakhrialfi9.github.io/APifreshcart/db.json',
  baseURL: 'https://fakhrialfi9.github.io/APifreshcart/dataproduct.json',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const GetProduct = {
  async getProducts() {
    try {
      const response = await apiClient.get('')
      return response.data.products
    } catch (error) {
      throw new Error(`Error fetching products: ${(error as Error).message}`)
    }
  },

  async getProductById(id: number) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const product = products.find((p: { id: number }) => p.id === id)
      if (!product) {
        throw new Error(`Product with ID ${id} not found`)
      }
      return product
    } catch (error) {
      throw new Error(`Error fetching product with ID ${id}: ${(error as Error).message}`)
    }
  },

  async getProductsByCategory(category: string) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter(
        (p: { category: string }) => p.category.toLowerCase() === category.toLowerCase()
      )
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by category: ${(error as Error).message}`)
    }
  },

  async getProductsByRating(minRating: number) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter((p: { rating: number }) => p.rating >= minRating)
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by rating: ${(error as Error).message}`)
    }
  },

  async getProductsByPriceRange(minPrice: number, maxPrice: number) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter(
        (p: { priceNormal: number }) => p.priceNormal >= minPrice && p.priceNormal <= maxPrice
      )
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by price range: ${(error as Error).message}`)
    }
  },

  async getProductsByDiscount() {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter(
        (p: { discountPrice: number; priceNormal: number }) => p.discountPrice < p.priceNormal
      )
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching discounted products: ${(error as Error).message}`)
    }
  },

  async getProductsByCode(productCode: string) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter(
        (p: { productCode: string }) => p.productCode === productCode
      )
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by code: ${(error as Error).message}`)
    }
  },

  async getAvailableProducts() {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const availableProducts = products.filter((p: { availability: boolean }) => p.availability)
      return availableProducts
    } catch (error) {
      throw new Error(`Error fetching available products: ${(error as Error).message}`)
    }
  },

  async getProductsByType(type: string) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter(
        (p: { type: string }) => p.type.toLowerCase() === type.toLowerCase()
      )
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by type: ${(error as Error).message}`)
    }
  },

  async getProductsByDetails(details: string) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter((p: { productDetails: string }) =>
        p.productDetails.toLowerCase().includes(details.toLowerCase())
      )
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by details: ${(error as Error).message}`)
    }
  },

  async getProductsByInformation(information: string) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter((p: { information: string }) =>
        p.information.toLowerCase().includes(information.toLowerCase())
      )
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by information: ${(error as Error).message}`)
    }
  },

  async getProductsByReviews(keyword: string) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter((p: { reviews: string[] }) =>
        p.reviews.some((review: string) => review.toLowerCase().includes(keyword.toLowerCase()))
      )
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by reviews: ${(error as Error).message}`)
    }
  },

  async getProductsByBadge(badge: string) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter((p: { badges: string[] }) =>
        p.badges.includes(badge)
      )
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by badge: ${(error as Error).message}`)
    }
  },

  async getPromoProducts() {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const promoProducts = products.filter((p: { promo: boolean }) => p.promo)
      return promoProducts
    } catch (error) {
      throw new Error(`Error fetching promo products: ${(error as Error).message}`)
    }
  },

  async getProductsByImage(imageUrl: string) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter((p: { images: string[] }) =>
        p.images.includes(imageUrl)
      )
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by image: ${(error as Error).message}`)
    }
  }
}

export default GetProduct
