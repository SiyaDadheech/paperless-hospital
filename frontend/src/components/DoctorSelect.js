function DoctorSelect({ onSelect }) {
  const doctors = [
    {
      id: 1,
      name: "Dr. Mehta",
      dept: "Cardiology",
      experience: 12,
      fee: 800,
      available: true
    },
    {
      id: 2,
      name: "Dr. Sharma",
      dept: "Orthopedic",
      experience: 8,
      fee: 600,
      available: true
    },
    {
      id: 3,
      name: "Dr. Khan",
      dept: "General",
      experience: 5,
      fee: 300,
      available: true
    },
    {
      id: 4,
      name: "Dr. Gupta",
      dept: "Pediatrics",
      experience: 10,
      fee: 600,
      available: false
    }
  ];

  const handleChange = (e) => {
    const selectedDoctor = doctors.find(
      (doc) => doc.id === Number(e.target.value)
    );
    onSelect(selectedDoctor);
  };

  return (
    <div className="card center">
      <h2>Select Doctor</h2>

      <select className="doctor-select" onChange={handleChange}>
        <option value="">-- Choose Doctor --</option>

        {doctors.map((doc) => (
          <option key={doc.id} value={doc.id} disabled={!doc.available}>
            {doc.name} | {doc.dept} | {doc.experience} yrs exp | ₹{doc.fee}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DoctorSelect;

// function DoctorSelect({ onSelect }) {
//   const doctors = [
//     { id: 1, name: "Dr. Mehta", dept: "Cardiology", fee: 800, available: true },
//     { id: 2, name: "Dr. Sharma", dept: "Orthopedic", fee: 600, available: true },
//     { id: 3, name: "Dr. Khan", dept: "General", fee: 300, available: true }
//   ];

//   return (
//     <div className="card center">
//       <h2>Select Doctor</h2>
//       {doctors.map(doc => (
//         <button
//           key={doc.id}
//           disabled={!doc.available}
//           className={doc.available ? "btn" : "btn disabled"}
//           onClick={() => onSelect(doc)}   // ← Important
//         >
//           {doc.name} – {doc.dept} (₹{doc.fee})
//         </button>
//       ))}
//     </div>
//   );
// }

// export default DoctorSelect;

// import { useState } from "react";

// const doctors = [
//   { id: 1, name: "Dr. Mehta", dept: "Cardiology",fees: "300",available: true },
//   { id: 2, name: "Dr. Sharma", dept: "Orthopedic",fees:"500", available: false },
//   { id: 3, name: "Dr. Khan", dept: "General",fees:"350", available: true }
// ];

// function DoctorSelect({ onSelect }) {
//   const [selected, setSelected] = useState(null);

//   return (
//     <div className="card">
//       <h2>Select Doctor</h2>

//       {doctors.map(doc => (
//         <div key={doc.id}>
//           <input
//             type="radio"
//             disabled={!doc.available}
//             onChange={() => setSelected(doc)}
//           />
//           {doc.name} ({doc.dept}) ({doc.fees} INR)
//           {doc.available ? " ✅" : " ❌"}
//         </div>
//       ))}

//       <button disabled={!selected} onClick={() => onSelect(selected)}>
//         Continue to Payment
//       </button>
//     </div>
//   );
// }

// export default DoctorSelect;
