import { products } from '../data/products'
import { Product } from '../types'

export function create(request, response) {
  const newProduct = request.body // JavaScript object containing the parse JSON
  products[newProduct.id] = newProduct
  console.log('--->After Post, Products:\n' + JSON.stringify(products, null))
  response.end('Post Successfully: \n' + JSON.stringify(newProduct, null))
}

export function findAll(requset, response) {
  console.log('--->Find All: \n' + JSON.stringify(products, null))
  response.end('All Products: \n' + JSON.stringify(products, null))
}

export function findOne(requset, response) {
  const getCategorie: Product = products[requset.params.id]

  console.log(
    '--->Find product: \n' + JSON.stringify(products[requset.params.id], null),
  )
  response.end(
    'Find a product:\n' + JSON.stringify(products[requset.params.id], null),
  )
}
export function update(request, response) {
  const id: number = parseInt(request.params.id)
  const updatedProducts = request.body
  if (products[id] != null) {
    // update data
    products[id] = updatedProducts

    console.log(
      '--->Update Successfully, Products: \n' + JSON.stringify(products, null),
    )

    // return
    response.end(
      'Update Successfully! \n' + JSON.stringify(updatedProducts, null),
    )
  } else {
    response.end(
      "Don't Exist Product:\n:" + JSON.stringify(updatedProducts, null),
    )
  }
}

export function deleteProduct(req, res) {
  const deleteProduct = products[req.params.id]
  delete products[req.params.id]
  console.log(
    '--->After deletion, Product list:\n' + JSON.stringify(products, null),
  )
  res.end('Deleted Product: \n' + JSON.stringify(deleteProduct, null))
}
