function Receipt({ patient, doctor, paymentMode, onReset }) {

  const printReceipt = () => {
    window.print();
    setTimeout(onReset, 2000); // Auto reset after print
  };

  return (
    <div className="card center receipt">
      <h2>Appointment Receipt</h2>

      <p><b>Patient:</b> {patient.name}</p>
      <p><b>Aadhaar:</b> {patient.aadhaar}</p>
      <p><b>Doctor:</b> {doctor.name}</p>
      <p><b>Department:</b> {doctor.dept}</p>
      <p><b>Payment Mode:</b> {paymentMode}</p>

      <button className="btn print" onClick={printReceipt}>
        🖨️ Print Receipt
      </button>
    </div>
  );
}

export default Receipt;
