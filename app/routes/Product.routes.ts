import {
  findAll,
  create,
  findOne,
  update,
  deleteProduct,
} from '../controllers/Product.controller'

export default function (app) {
  app.post('/api/Products', create)
  app.get('/api/Products', findAll)
  app.get('/api/Products/:id', findOne)
  app.put('/api/Products/:id', update)
  app.delete('/api/Products/:id', deleteProduct)
}
