function PatientDetails({ patient, onConfirm }) {
  return (
    <div className="card">
      <h2>Verify Patient Details</h2>

      <p><b>Name:</b> {patient.name}</p>
      <p><b>Aadhaar:</b> {patient.aadhaar}</p>
      <p><b>DOB:</b> {patient.dob}</p>
      <p><b>Gender:</b> {patient.gender}</p>

      <button onClick={onConfirm}>Confirm & Continue</button>
    </div>
  );
}

export default PatientDetails;
