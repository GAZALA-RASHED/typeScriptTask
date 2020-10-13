"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const checkout_1 = require("../data/checkout");
function create(request, response) {
    const newCheckout = request.body;
    checkout_1.checkouts[newCheckout.id] = newCheckout;
    console.log('--->After Post, checkouts:\n' + JSON.stringify(checkout_1.checkouts, null));
    response.end('Post Successfully: \n' + JSON.stringify(newCheckout, null));
}
exports.create = create;
//# sourceMappingURL=checkouts.controller.js.map