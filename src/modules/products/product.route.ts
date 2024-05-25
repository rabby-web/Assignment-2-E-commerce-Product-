import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();
router.post("/", ProductControllers.createProducts);

export const ProductRoutes = router;
