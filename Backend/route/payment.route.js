import express from "express";
import { createOrder, verifyPayment } from "../controller/payment.controller.js";

const router = express.Router();

// Create Razorpay order
router.post("/create-order", createOrder);

// Verify Razorpay payment
router.post("/verify-payment", verifyPayment);

export default router;
