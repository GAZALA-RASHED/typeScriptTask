import { log } from '../controllers/login.controller'

export default function (app) {
  app.post('/api/login', log)
}
