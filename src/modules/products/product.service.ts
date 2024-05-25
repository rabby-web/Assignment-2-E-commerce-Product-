import { TProduct } from "./product.interface";
import { Products } from "./product.model";

const createProduct = async (payLoad: TProduct) => {
  const result = await Products.create(payLoad);
  return result;
};

export const ProductServices = {
  createProduct,
};
