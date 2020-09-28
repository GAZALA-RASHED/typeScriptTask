"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_controller_1 = require("../controllers/Product.controller");
function default_1(app) {
    app.post('/api/Products', Product_controller_1.create);
    app.get('/api/Products', Product_controller_1.findAll);
    app.get('/api/Products/:id', Product_controller_1.findOne);
    app.put('/api/Products/:id', Product_controller_1.update);
    app.delete('/api/Products/:id', Product_controller_1.deleteProduct);
}
exports.default = default_1;
//# sourceMappingURL=Product.routes.js.map