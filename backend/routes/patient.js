const router = require("express").Router();

router.post("/aadhaar-auth", (req, res) => {
  let { aadhaar } = req.body;

  if (!aadhaar) {
    return res.status(400).json({ message: "Aadhaar required" });
  }

  // Normalize Aadhaar
  aadhaar = aadhaar.replace(/[\s-]/g, "");

  const patients = [
    {
      aadhaar: "123456789012",
      name: "Deepu Sharma",
      dob: "1998-05-12",
      gender: "Male"
    },
    {
      aadhaar: "222233334444",
      name: "Anita Verma",
      dob: "1992-11-23",
      gender: "Female"
    },
    {
      aadhaar: "555566667777",
      name: "Rohan Singh",
      dob: "1985-07-30",
      gender: "Male"
    }
  ];

  const patient = patients.find(p => p.aadhaar === aadhaar);

  if (!patient) {
    return res.status(404).json({
      success: false,
      message: "Patient not found"
    });
  }

  res.json({
    success: true,
    patient
  });
});

router.post("/biometric", (req, res) => {
  res.json({
    success: true,
    message: "Biometric verified successfully"
  });
});

module.exports = router;
