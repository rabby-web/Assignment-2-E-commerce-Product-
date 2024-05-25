import express from "express";
import { OrderController } from "./order.controller";
const router = express.Router();

// all router for orders
router.post("/", OrderController.createOrder);
router.get("/", OrderController.getAllOrders);

export const OrderRoute = router;
