import { Request, Response } from "express";

// Get all products
export const getProducts = (req: Request, res: Response) => {
  res.send("Get all products");
};

// Get product by ID
export const getProductById = (req: Request, res: Response) => {
  res.send(`Get product with ID: ${req.params.id}`);
};

// Create a new product
export const createProduct = (req: Request, res: Response) => {
  res.send("Create new product");
};

// Update an existing product
export const updateProduct = (req: Request, res: Response) => {
  res.send(`Update product with ID: ${req.params.id}`);
};

// Delete a product
export const deleteProduct = (req: Request, res: Response) => {
  res.send(`Delete product with ID: ${req.params.id}`);
};
