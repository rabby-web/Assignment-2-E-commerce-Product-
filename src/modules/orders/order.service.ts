import { TOrders } from "./order.interface";
import { Orders } from "./order.model";

// Order service for create a order. and payload received from order.controller
const createOrder = async (payload: TOrders) => {
  const result = await Orders.create(payload);
  return result;
};

//  get all orders.
const getAllOrders = async (email: string) => {
  if (!email) {
    const result = await Orders.find();
    return result;
  } else {
    const result = await Orders.aggregate([
      {
        $match: { email: email },
      },
    ]);
    return result;
  }
};

export const OrderService = {
  createOrder,
  getAllOrders,
};
