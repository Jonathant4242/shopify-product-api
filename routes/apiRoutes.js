const express = require("express");
const router = express.Router();

// Mock products array (temporary, replace with database connection later)
let products = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 499.99 }
];

/**
 * GET /api/products - Retrieve all products
 */
router.get("/products", (req, res) => {
    res.json(products);
});

/**
 * GET /api/products/:id - Retrieve a product by ID
 */
router.get("/products/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
});

/**
 * POST /api/products - Create a new product
 */
router.post("/products", (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).json({ message: "Name and price are required" });
    }

    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

/**
 * PUT /api/products/:id - Update a product by ID
 */
router.put("/products/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const { name, price } = req.body;
    if (name) product.name = name;
    if (price) product.price = price;

    res.json(product);
});

/**
 * DELETE /api/products/:id - Delete a product by ID
 */
router.delete("/products/:id", (req, res) => {
    const productIndex = products.findIndex(p => p.id == req.params.id);
    if (productIndex === -1) return res.status(404).json({ message: "Product not found" });

    products.splice(productIndex, 1);
    res.json({ message: "Product deleted" });
});

module.exports = router;
