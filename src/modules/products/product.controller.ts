import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidationSchema from "./product.validation";
import { Products } from "./product.model";

// create  product
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

// product controller for get all products
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm;
    if (!searchTerm) {
      const result = await ProductServices.getAllProducts(searchTerm);
      res.json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    } else {
      const result = await ProductServices.getAllProducts(searchTerm);
      res.json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    }
  } catch (error) {
    res.json({
      success: true,
      message: "Route not found",
      data: error,
    });
  }
};
// get a single product using id
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProduct(productId);
    res.json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.json({
      success: true,
      message: "Route not found",
      data: error,
    });
  }
};

// update a product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const payload = req.body;
    await ProductServices.updateProduct(productId, payload);
    const updatedData = await Products.findById(productId);
    res.json({
      success: true,
      message: "Product updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.json({
      success: true,
      message: "Route not found",
      data: error,
    });
  }
};

export const ProductControllers = {
  createProducts,
  getAllProduct,
  getSingleProduct,
  updateProduct,
};
