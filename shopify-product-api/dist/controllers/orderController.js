"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getOrderById = exports.getOrders = void 0;
// Get all orders
const getOrders = (req, res) => {
    res.send("Get all orders");
};
exports.getOrders = getOrders;
// Get order by ID
const getOrderById = (req, res) => {
    res.send(`Get order with ID: ${req.params.id}`);
};
exports.getOrderById = getOrderById;
// Create a new order
const createOrder = (req, res) => {
    res.send("Create new order");
};
exports.createOrder = createOrder;
// Update an existing order
const updateOrder = (req, res) => {
    res.send(`Update order with ID: ${req.params.id}`);
};
exports.updateOrder = updateOrder;
// Delete an order
const deleteOrder = (req, res) => {
    res.send(`Delete order with ID: ${req.params.id}`);
};
exports.deleteOrder = deleteOrder;
