export interface Category {
  id: number
  name: string
}
export interface Product {
  id: number
  name: string
  rawPrice: number
  price: number
  code: string
  color?: string
  categoryId: number
  description?: string
  stockCount?: number
  expirationDate?: Date
}
export interface Checkout {
  id: number
  date: Date
  products: [
    {
      productId: number
      unitPrice: number
      Quantity: number
      subtotal: number
    },
  ]
  total: number
  discount: number
  paymentAmount: number
  paymentMethod: string
}

export interface logIn {
  id: string
  pw: string
}
