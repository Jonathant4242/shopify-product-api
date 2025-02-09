const swaggerAutogen = require("swagger-autogen")();

const doc = {
  swagger: "2.0", // ✅ Ensure we're using OpenAPI 3.0.0
  info: {
    title: "Shopify Product API",
    version: "1.0.0",
    description: "API documentation for Shopify Product Management",
  },
  servers: [
    {
      url: "http://localhost:5001",
      description: "Local development server",
    },
  ],
  components: {
    schemas: {
      Product: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "Unique identifier for the product",
            example: "65f123abc456d789ef012345",
          },
          name: {
            type: "string",
            description: "Product name",
            example: "Wireless Mouse",
          },
          price: {
            type: "number",
            description: "Product price",
            example: 29.99,
          },
          description: {
            type: "string",
            description: "Product details",
            example: "A high-quality wireless mouse with ergonomic design.",
          },
          availability: {
            type: "boolean",
            description: "Indicates if the product is available",
            example: true,
          },
          timestamp: {
            type: "string",
            format: "date-time",
            description: "Timestamp when the product was created",
            example: "2024-02-08T12:34:56.789Z",
          },
        },
      },
    },
  },
};

const outputFile = "./docs/swagger.json";
const endpointsFiles = ["./routes/productRoutes.js"]; // ✅ Ensure the file path is correct

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log("✅ Swagger documentation generated successfully!");
});
