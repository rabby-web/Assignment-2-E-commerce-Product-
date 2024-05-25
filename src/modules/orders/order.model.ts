import { Schema, model } from "mongoose";
import { TOrders } from "./order.interface";

// create a mongoose schema for order type
const orderSchema = new Schema<TOrders>({
  email: { type: String },
  productId: { type: String },
  price: { type: Number },
  quantity: { type: Number },
});

// create a order model and export it
export const Orders = model<TOrders>("Orders", orderSchema);
