"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.update = exports.findOne = exports.create = exports.findAll = void 0;
const categories_1 = require("../data/categories");
function findAll(request, response) {
    console.log('--->Find All: \n' + JSON.stringify(categories_1.categories, null));
    response.end('All Categories: \n' + JSON.stringify(categories_1.categories, null));
}
exports.findAll = findAll;
function create(request, response) {
    const newCategorie = request.body;
    categories_1.categories[newCategorie.id] = newCategorie;
    console.log('--->After Post, Categories:\n' + JSON.stringify(categories_1.categories, null));
    response.end('Post Successfully: \n' + JSON.stringify(newCategorie, null));
}
exports.create = create;
function findOne(requset, response) {
    const getCategorie = categories_1.categories[requset.params.id];
    console.log('--->Find Categorie: \n' +
        JSON.stringify(categories_1.categories[requset.params.id], null));
    response.end('Find a Categorie:\n' + JSON.stringify(categories_1.categories[requset.params.id], null));
}
exports.findOne = findOne;
function update(request, response) {
    const id = parseInt(request.params.id);
    const updatedCategorie = request.body;
    if (categories_1.categories[id] != null) {
        // update data
        categories_1.categories[id] = updatedCategorie;
        console.log('--->Update Successfully, Categories: \n' +
            JSON.stringify(categories_1.categories, null));
        // return
        response.end('Update Successfully! \n' + JSON.stringify(updatedCategorie, null));
    }
    else {
        response.end("Doesn't Exist Categorie:\n:" + JSON.stringify(updatedCategorie, null));
    }
}
exports.update = update;
function deleteCategory(request, response) {
    const deleteCategorie = categories_1.categories[request.params.id];
    delete categories_1.categories[request.params.id];
    console.log('--->After deletion, Categorie list:\n' + JSON.stringify(categories_1.categories, null));
    response.end('Deleted Categorie: \n' + JSON.stringify(deleteCategorie, null));
}
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=Categories.controller.js.map