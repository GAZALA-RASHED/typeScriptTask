import { Checkout } from '../types'
export const checkouts: Array<Checkout> = [
  {
    id: 1,
    date: new Date('20/2/2020'),
    products: [
      {
        productId: 1,
        unitPrice: 1111,
        Quantity: 20,
        subtotal: 1111 * 20,
      },
    ],
    total: 3000,
    discount: 1,
    paymentAmount: 40000,
    paymentMethod: 'visa',
  },
]
