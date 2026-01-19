const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Test route (IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend is running on Azure 🚀");
});

// API routes
app.use("/api/payment", require("./routes/payment"));
app.use("/api/patient", require("./routes/patient"));

// Serve React build in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
  });
}

// Azure dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
