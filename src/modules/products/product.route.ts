import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();
router.post("/", ProductControllers.createProducts);
router.get("/", ProductControllers.getAllProduct);
router.get("/:productId", ProductControllers.getSingleProduct);
router.put("/:productId", ProductControllers.updateProduct);

export const ProductRoutes = router;
