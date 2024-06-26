// GetProduct

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

export const products: Product[] = [
  {
    id: 1,
    name: 'Fresh Fruit Basket',
    category: 'Fresh Food',
    rating: 4.8,
    priceNormal: 39.99,
    discountPrice: 19.99,
    productCode: 'PRD-003',
    availability: true,
    type: 'Fruit Basket',
    productDetails: 'A delightful assortment of fresh seasonal fruits.',
    information: 'Perfect for gifts or everyday enjoyment.',
    reviews: ['Excellent quality!', 'Fresh and delicious'],
    sellerInfo: {
      name: 'FreshMart',
      location: 'City, Country',
      contact: 'contact@freshmart.com'
    },
    badges: ['New Arrival'],
    promo: true,
    images: ['product1.jpg', 'product1.jpg', 'product1.jpg', 'product1.jpg']
  },
  {
    id: 2,
    name: 'Assorted Bakery Box',
    category: 'Bakery Biscuits',
    rating: 4.5,
    priceNormal: 19.99,
    discountPrice: 10.99,
    productCode: 'PRD-004',
    availability: true,
    type: 'Assorted Biscuits',
    productDetails: 'A box of assorted bakery biscuits for every occasion.',
    information: 'Includes various flavors and types of biscuits.',
    reviews: ['Delicious!', 'Great variety'],
    sellerInfo: {
      name: 'Bakery Delights',
      location: 'City, Country',
      contact: 'contact@bakerydelights.com'
    },
    badges: ['Bestseller', 'Sale'],
    promo: true,
    images: ['product2.jpg', 'product2.jpg', 'product2.jpg', 'product2.jpg']
  },
  {
    id: 3,
    name: 'Organic Vegetable Basket',
    category: 'Fresh Food',
    rating: 4.7,
    priceNormal: 29.99,
    discountPrice: 15.99,
    productCode: 'PRD-005',
    availability: true,
    type: 'Vegetable Basket',
    productDetails: 'A variety of organic vegetables fresh from the farm.',
    information: 'Ideal for healthy meals and cooking.',
    reviews: ['Great quality!', 'Very fresh'],
    sellerInfo: {
      name: 'VeggieLand',
      location: 'City, Country',
      contact: 'contact@veggieland.com'
    },
    badges: ['Organic'],
    promo: true,
    images: ['product3.jpg', 'product3.jpg', 'product3.jpg', 'product3.jpg']
  },
  {
    id: 4,
    name: 'Dairy Delight Pack',
    category: 'Dairy Products',
    rating: 4.6,
    priceNormal: 25.99,
    discountPrice: 12.99,
    productCode: 'PRD-006',
    availability: true,
    type: 'Dairy Pack',
    productDetails: 'A selection of fresh dairy products including milk, cheese, and yogurt.',
    information: 'Perfect for breakfast and snacks.',
    reviews: ['Tasty and fresh', 'Good variety'],
    sellerInfo: {
      name: 'DairyBest',
      location: 'City, Country',
      contact: 'contact@dairybest.com'
    },
    badges: ['Fresh Arrival'],
    promo: true,
    images: ['product4.jpg', 'product4.jpg', 'product4.jpg', 'product4.jpg']
  },
  {
    id: 5,
    name: 'Mixed Nuts Box',
    category: 'Snacks',
    rating: 4.8,
    priceNormal: 19.99,
    discountPrice: 9.99,
    productCode: 'PRD-007',
    availability: true,
    type: 'Mixed Nuts',
    productDetails: 'A mix of various nuts perfect for snacking.',
    information: 'Includes almonds, cashews, walnuts, and more.',
    reviews: ['Crunchy and tasty', 'Healthy snack'],
    sellerInfo: {
      name: 'NuttyWorld',
      location: 'City, Country',
      contact: 'contact@nuttyworld.com'
    },
    badges: ['Popular'],
    promo: true,
    images: ['product5.jpg', 'product5.jpg', 'product5.jpg', 'product5.jpg']
  },
  {
    id: 6,
    name: 'Gourmet Cheese Selection',
    category: 'Dairy Products',
    rating: 4.9,
    priceNormal: 49.99,
    discountPrice: 24.99,
    productCode: 'PRD-008',
    availability: true,
    type: 'Cheese Selection',
    productDetails: 'An assortment of gourmet cheeses from around the world.',
    information: 'Perfect for cheese lovers and parties.',
    reviews: ['Delicious and rich', 'Excellent quality'],
    sellerInfo: {
      name: 'Cheese Haven',
      location: 'City, Country',
      contact: 'contact@cheesehaven.com'
    },
    badges: ['Gourmet'],
    promo: true,
    images: ['product6.jpg', 'product6.jpg', 'product6.jpg', 'product6.jpg']
  },
  {
    id: 7,
    name: 'Premium Coffee Beans',
    category: 'Beverages',
    rating: 4.7,
    priceNormal: 15.99,
    discountPrice: 7.99,
    productCode: 'PRD-009',
    availability: true,
    type: 'Coffee Beans',
    productDetails: 'High-quality coffee beans for a rich and flavorful brew.',
    information: 'Perfect for coffee enthusiasts.',
    reviews: ['Great taste', 'Aromatic and fresh'],
    sellerInfo: {
      name: 'CoffeeWorld',
      location: 'City, Country',
      contact: 'contact@coffeeworld.com'
    },
    badges: ['Best Seller'],
    promo: true,
    images: ['product7.jpg', 'product7.jpg', 'product7.jpg', 'product7.jpg']
  },
  {
    id: 8,
    name: 'Exotic Spice Collection',
    category: 'Spices & Herbs',
    rating: 4.6,
    priceNormal: 24.99,
    discountPrice: 12.49,
    productCode: 'PRD-010',
    availability: true,
    type: 'Spice Collection',
    productDetails: 'A variety of exotic spices to enhance your cooking.',
    information: 'Includes rare and aromatic spices.',
    reviews: ['Great variety', 'Adds amazing flavor'],
    sellerInfo: {
      name: 'SpiceMarket',
      location: 'City, Country',
      contact: 'contact@spicemarket.com'
    },
    badges: ['Exotic'],
    promo: true,
    images: ['product8.jpg', 'product8.jpg', 'product8.jpg', 'product8.jpg']
  },
  {
    id: 9,
    name: 'Artisan Chocolate Box',
    category: 'Sweets & Confectionery',
    rating: 4.9,
    priceNormal: 34.99,
    discountPrice: 17.49,
    productCode: 'PRD-011',
    availability: true,
    type: 'Chocolate Box',
    productDetails: 'A box of handcrafted artisan chocolates.',
    information: 'Perfect for gifts and special occasions.',
    reviews: ['Delicious and rich', 'Beautifully packaged'],
    sellerInfo: {
      name: 'ChocoArt',
      location: 'City, Country',
      contact: 'contact@chocoart.com'
    },
    badges: ['Artisan'],
    promo: true,
    images: ['product9.jpg', 'product9.jpg', 'product9.jpg', 'product9.jpg']
  },
  {
    id: 10,
    name: 'Herbal Tea Assortment',
    category: 'Beverages',
    rating: 4.7,
    priceNormal: 21.99,
    discountPrice: 10.99,
    productCode: 'PRD-012',
    availability: true,
    type: 'Tea Assortment',
    productDetails: 'A selection of various herbal teas for relaxation.',
    information: 'Perfect for tea lovers.',
    reviews: ['Soothing and flavorful', 'Great variety'],
    sellerInfo: {
      name: 'TeaTime',
      location: 'City, Country',
      contact: 'contact@teatime.com'
    },
    badges: ['Popular'],
    promo: true,
    images: ['product10.jpg', 'product10.jpg', 'product10.jpg', 'product10.jpg']
  }
]
