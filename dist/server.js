"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Categories_routes_1 = __importDefault(require("./app/routes/Categories.routes"));
const Product_routes_1 = __importDefault(require("./app/routes/Product.routes"));
const checkouts_routes_1 = __importDefault(require("./app/routes/checkouts.routes"));
const login_routes_1 = __importDefault(require("./app/routes/login.routes"));
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
Categories_routes_1.default(app);
Product_routes_1.default(app);
checkouts_routes_1.default(app);
login_routes_1.default(app);
// Create a Server
const server = app.listen(1515, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
//# sourceMappingURL=server.js.map