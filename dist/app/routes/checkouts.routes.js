"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkouts_controller_1 = require("../controllers/checkouts.controller");
function default_1(app) {
    app.post('/api/checkouts', checkouts_controller_1.create);
}
exports.default = default_1;
//# sourceMappingURL=checkouts.routes.js.map