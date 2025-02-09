const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// ✅ Load Swagger AFTER regenerating it
const swaggerUi = require("swagger-ui-express");
const swaggerAutogen = require("swagger-autogen")();
const swaggerFile = require("./docs/swagger.json");

// ✅ Ensure Swagger docs are generated before starting the server
swaggerAutogen("./docs/swagger.json", ["./routes/productRoutes.js"]).then(() => {
  console.log("✅ Swagger updated!");
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
});

// Import routes
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (_, res) => {
  res.send("Shopify Product API is running...");
});

const server = app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
