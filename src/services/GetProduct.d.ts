// src/services/APi/GetProduct.d.ts

declare module '../services/APi/GetProduct' {
  const GetProduct: {
    getProducts(): Promise<any>
    getProductById(id: number): Promise<any>
    getProductsByCategory(category: string): Promise<any>
    getProductsByRating(minRating: number): Promise<any>
    getProductsByPriceRange(minPrice: number, maxPrice: number): Promise<any>
    getProductsByDiscount(): Promise<any>
    getProductsByCode(productCode: string): Promise<any>
    getAvailableProducts(): Promise<any>
    getProductsByType(type: string): Promise<any>
    getProductsByDetails(details: string): Promise<any>
    getProductsByInformation(information: string): Promise<any>
    getProductsByReviews(keyword: string): Promise<any>
    getProductsByBadge(badge: string): Promise<any>
    getPromoProducts(): Promise<any>
    getProductsByImage(imageUrl: string): Promise<any>
  }
  export default GetProduct
}
