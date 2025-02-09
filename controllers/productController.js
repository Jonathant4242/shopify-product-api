"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
// Get all products
const getProducts = (req, res) => {
    res.send("Get all products");
};
exports.getProducts = getProducts;
// Get product by ID
const getProductById = (req, res) => {
    res.send(`Get product with ID: ${req.params.id}`);
};
exports.getProductById = getProductById;
// Create a new product
const createProduct = (req, res) => {
    res.send("Create new product");
};
exports.createProduct = createProduct;
// Update an existing product
const updateProduct = (req, res) => {
    res.send(`Update product with ID: ${req.params.id}`);
};
exports.updateProduct = updateProduct;
// Delete a product
const deleteProduct = (req, res) => {
    res.send(`Delete product with ID: ${req.params.id}`);
};
exports.deleteProduct = deleteProduct;
