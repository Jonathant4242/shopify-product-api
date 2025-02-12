import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    availability: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

export default model("Product", productSchema);
