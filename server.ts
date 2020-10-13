import CategoriesRoutes from './app/routes/Categories.routes'
import ProductsRoutes from './app/routes/Product.routes'
import CheckoutRoutes from './app/routes/checkouts.routes'
import LoginRoutes from './app/routes/login.routes'
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
CategoriesRoutes(app)
ProductsRoutes(app)
CheckoutRoutes(app)
LoginRoutes(app)
// Create a Server
const server = app.listen(1515, function () {
  const host = server.address().address
  const port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})
