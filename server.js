const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const fs = require("fs");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// ✅ Load Swagger AFTER regenerating it (ONLY if missing)
const swaggerUi = require("swagger-ui-express");
const swaggerAutogen = require("swagger-autogen")();

const swaggerFilePath = "./docs/swagger.json";
const swaggerRoutes = ["./routes/productRoutes.js"];

// ✅ Ensure `swagger.json` is generated before requiring it
if (!fs.existsSync(swaggerFilePath)) {
  console.log("⚠️ `swagger.json` not found! Generating...");
  swaggerAutogen(swaggerFilePath, swaggerRoutes).then(() => {
    console.log("✅ Swagger JSON generated.");
    const swaggerDocument = require(swaggerFilePath);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  });
} else {
  console.log("✅ Swagger JSON exists.");
  const swaggerDocument = require(swaggerFilePath);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

// ✅ Import API routes
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (_, res) => {
  res.send("Shopify Product API is running...");
});

// ✅ Start the Server
const server = app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
