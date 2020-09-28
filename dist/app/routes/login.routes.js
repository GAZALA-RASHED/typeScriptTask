"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_controller_1 = require("../controllers/login.controller");
function default_1(app) {
    app.post('/api/login', login_controller_1.log);
}
exports.default = default_1;
//# sourceMappingURL=login.routes.js.map