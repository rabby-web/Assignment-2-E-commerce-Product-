import { TProduct } from "./product.interface";
import { Products } from "./product.model";

// create a product
const createProduct = async (payLoad: TProduct) => {
  const result = await Products.create(payLoad);
  return result;
};

//  get all products
const getAllProducts = async (searchTerm: any) => {
  if (!searchTerm) {
    const result = await Products.find();
    return result;
  } else {
    const result = await Products.find({
      name: { $regex: searchTerm, $options: "i" },
    });
    return result;
  }
};

//  get single product
const getSingleProduct = async (id: string) => {
  const result = await Products.findById(id);
  return result;
};

//  update a product
const updateProduct = async (id: string, payload: Partial<TProduct>) => {
  const result = await Products.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
};
