// routes/payment.js
const Razorpay = require("razorpay");
const router = require("express").Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});
router.get("/razorpay-key", (req, res) => {
  res.json({ key: process.env.RAZORPAY_KEY_ID });
});
router.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // convert to paise
      currency: "INR",
      receipt: `hospital_receipt_${Date.now()}`
    });

    res.json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;