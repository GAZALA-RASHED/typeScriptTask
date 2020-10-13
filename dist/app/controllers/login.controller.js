"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.get = void 0;
function get(request, response, next) {
    response.render('login', {});
}
exports.get = get;
function log(request, response, next) {
    const id = request.body.id;
    const pw = request.body.pw;
    if (id == 'test' && pw == '1234') {
        response.end('login Success');
    }
    else {
        response.end('login Failed');
    }
}
exports.log = log;
//# sourceMappingURL=login.controller.js.map