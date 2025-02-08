import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db"; // Import MongoDB connection function

// Import routes
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";
import authRoutes from "./routes/authRoutes";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (_, res) => {
  res.send("Shopify Product API is running...");
});

// Start the server with a fallback in case of port conflict
const server = app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// Handle EADDRINUSE error
server.on("error", (err) => {
  if ((err as any).code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use.`);
    process.exit(1); // Exit to prevent infinite crashes
  } else {
    console.error(err);
  }
});
