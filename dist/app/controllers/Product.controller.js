"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.update = exports.findOne = exports.findAll = exports.create = void 0;
const products_1 = require("../data/products");
function create(request, response) {
    const newProduct = request.body; // JavaScript object containing the parse JSON
    products_1.products[newProduct.id] = newProduct;
    console.log('--->After Post, Products:\n' + JSON.stringify(products_1.products, null));
    response.end('Post Successfully: \n' + JSON.stringify(newProduct, null));
}
exports.create = create;
function findAll(requset, response) {
    console.log('--->Find All: \n' + JSON.stringify(products_1.products, null));
    response.end('All Products: \n' + JSON.stringify(products_1.products, null));
}
exports.findAll = findAll;
function findOne(requset, response) {
    const getCategorie = products_1.products[requset.params.id];
    console.log('--->Find product: \n' + JSON.stringify(products_1.products[requset.params.id], null));
    response.end('Find a product:\n' + JSON.stringify(products_1.products[requset.params.id], null));
}
exports.findOne = findOne;
function update(request, response) {
    const id = parseInt(request.params.id);
    const updatedProducts = request.body;
    if (products_1.products[id] != null) {
        // update data
        products_1.products[id] = updatedProducts;
        console.log('--->Update Successfully, Products: \n' + JSON.stringify(products_1.products, null));
        // return
        response.end('Update Successfully! \n' + JSON.stringify(updatedProducts, null));
    }
    else {
        response.end("Don't Exist Product:\n:" + JSON.stringify(updatedProducts, null));
    }
}
exports.update = update;
function deleteProduct(req, res) {
    var deleteProduct = products_1.products[req.params.id];
    delete products_1.products[req.params.id];
    console.log('--->After deletion, Product list:\n' + JSON.stringify(products_1.products, null));
    res.end('Deleted Product: \n' + JSON.stringify(deleteProduct, null));
}
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=Product.controller.js.map