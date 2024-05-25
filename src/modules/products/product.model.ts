import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

// variant schema
const variantSchema = new Schema<TVariant>({
  type: { type: String },
  value: { type: String },
});

// inventory schema
const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number },
  inStock: { type: Boolean },
});

// product schema
const productSchema = new Schema<TProduct>({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: { type: [String] },
  variants: { type: [variantSchema] },
  inventory: { type: inventorySchema },
});

// created a product model and export
export const Products = model<TProduct>("Products", productSchema);
