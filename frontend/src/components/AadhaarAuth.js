import React, { useState } from "react";
import axios from "axios";

function AadhaarAuth({ onVerified }) {
  const [aadhaar, setAadhaar] = useState("");

  const verifyAadhaar = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/patient/aadhaar-auth",
      { aadhaar }
    );
    onVerified(res.data.patient);
  };

  const biometricScan = async () => {
    await axios.post("http://localhost:5000/api/patient/biometric");
    verifyAadhaar();
  };

  return (
    <div className="card">
      <h2>Patient Verification</h2>

      <input
        type="text"
        placeholder="Enter Aadhaar Number"
        value={aadhaar}
        onChange={(e) => setAadhaar(e.target.value)}
      />

      <button onClick={verifyAadhaar}>Verify Aadhaar</button>

      <hr />

      <button onClick={biometricScan}>Scan Fingerprint</button>
    </div>
  );
}

export default AadhaarAuth;
