import {
  findAll,
  create,
  findOne,
  update,
  deleteCategory,
} from '../controllers/Categories.controller'

export default function (app) {
  app.post('/api/Categories', create)

  app.get('/api/Categories', findAll)

  app.get('/api/Categories/:id', findOne)

  app.put('/api/Categories/:id', update)

  app.delete('/api/Categories/:id', deleteCategory)
}
