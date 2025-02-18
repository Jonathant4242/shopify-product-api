const swaggerAutogen = require("swagger-autogen")();

const doc = {
  swagger: "2.0",
  info: {
    title: "Shopify Product API",
    version: "1.0.0",
    description: "API documentation for Shopify Product Management",
  },
  host: "localhost:5001",
  basePath: "/api/products",  // ✅ Now points directly to `/api/products`
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],

  definitions: {
    Product: {
      type: "object",
      properties: {
        name: { type: "string", example: "Wireless Mouse" },
        price: { type: "number", example: 29.99 },
        category: { type: "string", example: "Electronics" },
        description: { type: "string", example: "A high-quality wireless mouse." },
        availability: { type: "boolean", example: true },
      },
    },
  },

  paths: {
    "/": {  // ✅ Now, Swagger sends `POST` to `/api/products/`
      post: {
        summary: "Create a new product",
        description: "Adds a product to the database.",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              $ref: "#/definitions/Product",
            },
          },
        ],
        responses: {
          201: { description: "Product created successfully" },
          400: { description: "Bad request. Missing required fields." },
          500: { description: "Internal server error." },
        },
      },
    },
  },
};

const outputFile = "./docs/swagger.json";
const endpointsFiles = ["./routes/productRoutes.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log("✅ Swagger documentation generated successfully!");
});
// Compare this snippet from server.js: