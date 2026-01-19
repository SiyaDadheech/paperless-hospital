// routes/payment.js
const router = require("express").Router();
const razorpay = require("../razorpay");
const crypto = require("crypto");

router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100, // ₹ → paise
      currency: "INR",
      receipt: "receipt_" + Date.now()
    });

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Order creation failed" });
  }
});

router.post("/verify", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
});

module.exports = router;

// const Razorpay = require("razorpay");
// const crypto = require("crypto");
// const router = require("express").Router();

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET
// });
// router.get("/razorpay-key", (req, res) => {
//   res.json({ key: process.env.RAZORPAY_KEY_ID });
// });
// router.post("/create-order", async (req, res) => {
//   const { amount } = req.body;

//   try {
//     const order = await razorpay.orders.create({
//       amount: amount * 100, // convert to paise
//       currency: "INR",
//       receipt: `hospital_receipt_${Date.now()}`
//     });

//     res.json(order);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// module.exports = router;