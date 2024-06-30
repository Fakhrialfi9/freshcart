import { ref, onMounted } from 'vue'
import GetProduct from '../services/APi/GetProduct'

// Define Product interface
export interface Product {
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

  promoGlobalProduct: {
    discountPrice: number
    percentageDiscount: number
  }[]

  ProductDetails: {
    BenefitProduct: string
    descriptionBenefitProduct: string
    StorageTips: string
    descriptionStorageTips: string
    Unit: string
    descriptionUnit: string
    Seller: string
    descriptionSeller: string
    Disclaimer: string
    descriptionDisclaimer: string
  }

  InformationProduct: {
    Weight: string
    IngredientType: string
    Brand: string
    ItemPackageQuantity: string
    Form: string
    Manufacturer: string
    NetQuantity: string
    ProductDimensions: string
    ASIN: string
    BestSellersRank: string
    DateFirstAvailable: string
    ItemWeight: string
    GenericName: string
    expiredDate: string
  }

  ratingsProduct: {
    countRatingProduct: number
    globalCountRatingProduct: number
    ratingBar: number
    percentageBar: number
  }[]

  reviewProduct: {
    nameUserReview: string
    dateUserReview: string
    descriptionUserReview: string
    reviewsProduct: string
    passedPurchase: string
    headlineReview: string
    descriptionReview: string
    imageProductReview: string[]
  }[]
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
