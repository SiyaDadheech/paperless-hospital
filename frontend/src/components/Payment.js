function Payment({ onPaid }) {
  const payNow = async () => {
    const res = await fetch("http://localhost:5000/api/payment/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount })
    });
    const order = await res.json();
    const keyRes = await fetch("http://localhost:5000/api/payment/razorpay-key");
    const { key } = await keyRes.json();
    const options = {
      key: key,
      amount: order.amount,
      currency: "INR",
      order_id: order.id,
      name: "Smart Hospital",
      description: "Consultation Fee",
      handler: function () {
        onPaid("ONLINE");
      }
    };

    new window.Razorpay(options).open();
  };

  return (
    <div className="card center">
      <h2>Online Payment</h2>
      <button className="btn" onClick={payNow}>Pay ₹{amount}</button>
    </div>
  );
}

export default Payment;

// function Payment({ onPaid }) {
//   const payNow = async () => {
//     const res = await fetch(
//       "http://localhost:5000/api/payment/create-order",
//       { method: "POST" }
//     );
//     const order = await res.json();

//     const options = {
//       key: "rzp_test_S28kQARurj88gk",
//       amount: order.amount,
//       currency: "INR",
//       order_id: order.id,
//       name: "Smart Hospital",
//       description: "Consultation Fee",
//       handler: function () {
//         alert("Payment Successful");
//         onPaid();
//       }
//     };

//     new window.Razorpay(options).open();
//   };

//   return (
//     <div className="card">
//       <h2>Payment</h2>
//       <p>Select payment mode:</p>
//       <p>✔ UPI ✔ Card ✔ Netbanking</p>

//       <button onClick={payNow}>Pay ₹500</button>
//     </div>
//   );
// }

// export default Payment;
