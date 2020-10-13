import { create } from '../controllers/checkouts.controller'

export default function (app) {
  app.post('/api/checkouts', create)
}
