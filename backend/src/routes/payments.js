import express from "express";
import crypto from "crypto";
import { razorpay } from "../config/razorpay.js";
const router = express.Router();

router.post("/order", async (req, res) => {
  const order = await razorpay.orders.create({
    amount: 50000,
    currency: "INR"
  });
  res.json(order);
});

router.post("/verify", (req, res) => {
  const body = req.body.order_id + "|" + req.body.payment_id;
  const expected = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body)
    .digest("hex");

  res.json({ success: expected === req.body.signature });
});

export default router;
