import { useState } from "react";
import AadhaarAuth from "./components/AadhaarAuth";
import PatientDetails from "./components/PatientDetails";
import DoctorSelect from "./components/DoctorSelect";
import PaymentMode from "./components/PaymentMode";
import Receipt from "./components/Receipt";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [patient, setPatient] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [amount, setAmount] = useState(0);
  const [paymentMode, setPaymentMode] = useState("");

  const resetSystem = () => {
    setStep(1);
    setPatient(null);
    setDoctor(null);
    setAmount(0);
    setPaymentMode("");
  };

  const onDoctorSelect = (doc) => {
    setDoctor(doc);
    setAmount(doc.fee);
    setStep(4);
  };

  const onPaymentDone = (method) => {
    setPaymentMode(method);
    setStep(5);
  };

  return (
    <div className="container">
      {step === 1 && (
        <AadhaarAuth
          onVerified={(p) => {
            setPatient(p);
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <PatientDetails
          patient={patient}
          onConfirm={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <DoctorSelect onSelect={onDoctorSelect} />
      )}

      {step === 4 && (
        <PaymentMode amount={amount} onPaid={onPaymentDone} />
      )}

      {step === 5 && (
        <Receipt
          patient={patient}
          doctor={doctor}
          paymentMode={paymentMode}
          Fees={amount}
          onReset={resetSystem}
        />
      )}
    </div>
  );
}

export default App;

// import { useState } from "react";
// import AadhaarAuth from "./components/AadhaarAuth";
// import PatientDetails from "./components/PatientDetails";
// import DoctorSelect from "./components/DoctorSelect";
// import PaymentMode from "./components/PaymentMode";
// import Receipt from "./components/Receipt";
// import "./App.css";

// function App() {
//   const [step, setStep] = useState(1);
//   const [patient, setPatient] = useState(null);
//   const [doctor, setDoctor] = useState(null);
//   const [amount, setAmount] = useState(0);
//   const [paymentMode, setPaymentMode] = useState("");

//   const resetSystem = () => {
//     setStep(1);
//     setPatient(null);
//     setDoctor(null);
//     setAmount(0);
//     setPaymentMode("");
//   };

//   // Doctor selected → move to payment
//   const onDoctorSelect = (doc) => {
//     setDoctor(doc);
//     setAmount(doc.fee); // dynamic fee
//     setStep(4);         // Payment step
//   };

//   // Payment done (online/cash)
//   const onPaymentDone = (method) => {
//     setPaymentMode(method);
//     setStep(5);         // Receipt step
//   };

//   return (
//     <div className="container">
//       {step === 1 && (
//         <AadhaarAuth
//           onVerified={(p) => {
//             setPatient(p);
//             setStep(2);
//           }}
//         />
//       )}

//       {step === 2 && (
//         <PatientDetails
//           patient={patient}
//           onConfirm={() => setStep(3)}
//         />
//       )}

//       {step === 3 && (
//         <DoctorSelect
//           onSelect={onDoctorSelect}  // → Step 4
//         />
//       )}

//       {step === 4 && (
//         <PaymentMode
//           amount={amount}
//           onPaid={onPaymentDone}      // → Step 5
//         />
//       )}

//       {step === 5 && (
//         <Receipt
//           patient={patient}
//           doctor={doctor}
//           paymentMode={paymentMode}
//           Fees={amount}
//           onReset={resetSystem}
//         />
//       )}
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";
// import AadhaarAuth from "./components/AadhaarAuth";
// import PatientDetails from "./components/PatientDetails";
// import DoctorSelect from "./components/DoctorSelect";
// import PaymentMode from "./components/PaymentMode";
// import Payment from "./components/Payment";
// import Receipt from "./components/Receipt";
// import "./App.css";

// function App() {
//   const [step, setStep] = useState(1);
//   const [patient, setPatient] = useState(null);
//   const [doctor, setDoctor] = useState(null);
//   const [paymentMode, setPaymentMode] = useState("");

//   const resetSystem = () => {
//     setStep(1);
//     setPatient(null);
//     setDoctor(null);
//     setPaymentMode("");
//   };

//   return (
//     <div className="container">
//       {step === 1 && <AadhaarAuth onVerified={(p) => {
//         setPatient(p);
//         setStep(2);
//       }} />}

//       {step === 2 && <PatientDetails patient={patient} onConfirm={() => setStep(3)} />}

//       {step === 3 && <DoctorSelect onSelect={(d) => {
//         setDoctor(d);
//         setStep(4);
//       }} />}

//       {step === 4 && <PaymentMode onSelect={(mode) => {
//         setPaymentMode(mode);
//         mode === "CASH" ? setStep(6) : setStep(5);
//       }} />}

//       {step === 5 && <Payment onPaid={() => setStep(6)} />}

//       {step === 6 && (
//         <Receipt
//           patient={patient}
//           doctor={doctor}
//           paymentMode={paymentMode}
//           onReset={resetSystem}
//         />
//       )}
//     </div>
//   );
// }

// export default App;


// // App.js
// import axios from "axios";
// import Payment from "./Payment";
// function App() {

//   const aadhaarAuth = async () => {
//     const res = await axios.post("http://localhost:5000/api/patient/aadhaar-auth");
//     alert("Welcome " + res.data.patient.name);
//   };

//   const biometricAuth = async () => {
//     await axios.post("http://localhost:5000/api/patient/biometric");
//     alert("Biometric Verified");
//   };

//   return (
//     <div>
//       <h2>Hospital Kiosk</h2>
//       <button onClick={aadhaarAuth}>Scan Aadhaar QR</button>
//       <button onClick={biometricAuth}>Scan Fingerprint</button>
//       <Payment />
//     </div>
//   );
// }

// export default App;
