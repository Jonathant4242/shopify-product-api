import { Request, Response } from "express";

// Get all orders
export const getOrders = (req: Request, res: Response) => {
  res.send("Get all orders");
};

// Get order by ID
export const getOrderById = (req: Request, res: Response) => {
  res.send(`Get order with ID: ${req.params.id}`);
};

// Create a new order
export const createOrder = (req: Request, res: Response) => {
  res.send("Create new order");
};

// Update an existing order
export const updateOrder = (req: Request, res: Response) => {
  res.send(`Update order with ID: ${req.params.id}`);
};

// Delete an order
export const deleteOrder = (req: Request, res: Response) => {
  res.send(`Delete order with ID: ${req.params.id}`);
};
