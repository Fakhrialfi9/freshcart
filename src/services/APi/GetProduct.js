import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://fakhrialfi9.github.io/APifreshcart/db.json',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getProducts() {
    return apiClient.get('')
  },
  async getProductById(id) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const product = products.find((p) => p.id === id)
      if (!product) {
        throw new Error(`Product with ID ${id} not found`)
      }
      return product
    } catch (error) {
      throw new Error(`Error fetching product: ${error.message}`)
    }
  },
  async getProductsByCategory(category) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      )
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by category: ${error.message}`)
    }
  },
  async getProductsByRating(minRating) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter((p) => p.rating >= minRating)
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by rating: ${error.message}`)
    }
  },
  async getProductsByPriceRange(minPrice, maxPrice) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter(
        (p) => p.priceNormal >= minPrice && p.priceNormal <= maxPrice
      )
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by price range: ${error.message}`)
    }
  },
  async getProductsByDiscount() {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter((p) => p.discountPrice < p.priceNormal)
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching discounted products: ${error.message}`)
    }
  },
  async getProductsByCode(productCode) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter((p) => p.productCode === productCode)
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by code: ${error.message}`)
    }
  },
  async getAvailableProducts() {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const availableProducts = products.filter((p) => p.availability)
      return availableProducts
    } catch (error) {
      throw new Error(`Error fetching available products: ${error.message}`)
    }
  },
  async getProductsByType(type) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter((p) => p.type.toLowerCase() === type.toLowerCase())
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by type: ${error.message}`)
    }
  },
  async getProductsByDetails(details) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter((p) =>
        p.productDetails.toLowerCase().includes(details.toLowerCase())
      )
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by details: ${error.message}`)
    }
  },
  async getProductsByInformation(information) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter((p) =>
        p.information.toLowerCase().includes(information.toLowerCase())
      )
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by information: ${error.message}`)
    }
  },
  async getProductsByReviews(keyword) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter((p) =>
        p.reviews.some((review) => review.toLowerCase().includes(keyword.toLowerCase()))
      )
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by reviews: ${error.message}`)
    }
  },
  async getProductsByBadge(badge) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter((p) => p.badges.includes(badge))
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by badge: ${error.message}`)
    }
  },
  async getPromoProducts() {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const promoProducts = products.filter((p) => p.promo)
      return promoProducts
    } catch (error) {
      throw new Error(`Error fetching promo products: ${error.message}`)
    }
  },
  async getProductsByImage(imageUrl) {
    try {
      const response = await apiClient.get('')
      const products = response.data.products
      const filteredProducts = products.filter((p) => p.images.includes(imageUrl))
      return filteredProducts
    } catch (error) {
      throw new Error(`Error fetching products by image: ${error.message}`)
    }
  }
}
