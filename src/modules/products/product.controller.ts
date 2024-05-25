import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidationSchema from "./product.validation";

const createProducts = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const validData = productValidationSchema.parse(productData);
    const result = await ProductServices.createProduct(validData);
    res.json({
      success: true,
      message: "Product is created successfully",
      data: result,
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: "Something went wrong!",
      error: error.issues.map((item: { message: any }) => item.message),
    });  
  }
};

export const ProductControllers = {
  createProducts,
};
