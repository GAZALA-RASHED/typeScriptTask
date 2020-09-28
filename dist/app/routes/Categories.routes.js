"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Categories_controller_1 = require("../controllers/Categories.controller");
function default_1(app) {
    app.post('/api/Categories', Categories_controller_1.create);
    app.get('/api/Categories', Categories_controller_1.findAll);
    app.get('/api/Categories/:id', Categories_controller_1.findOne);
    app.put('/api/Categories/:id', Categories_controller_1.update);
    app.delete('/api/Categories/:id', Categories_controller_1.deleteCategory);
}
exports.default = default_1;
//# sourceMappingURL=Categories.routes.js.map