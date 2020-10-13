import { checkouts } from '../data/checkout'

export function create(request, response) {
  const newCheckout = request.body
  checkouts[newCheckout.id] = newCheckout
  console.log('--->After Post, checkouts:\n' + JSON.stringify(checkouts, null))

  response.end('Post Successfully: \n' + JSON.stringify(newCheckout, null))
}
