import { Request, Response } from "express";

// User login
export const login = (req: Request, res: Response) => {
  res.json({ message: "User logged in", user: req.body });
};

// User signup
export const signup = (req: Request, res: Response) => {
  res.json({ message: "User signed up", user: req.body });
};

// User logout
export const logout = (req: Request, res: Response) => {
  res.json({ message: "User logged out" });
};
