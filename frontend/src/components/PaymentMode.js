function PaymentMode({ amount, onPaid }) {
  const payOnline = async(method) => {
    const orderRes = await fetch('http://localhost:5000/api/payment/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount  })
    });
    const order = await orderRes.json();
    const keyRes = await fetch("http://localhost:5000/api/payment/razorpay-key");
    const { key } = await keyRes.json();
    const options = {
      key: key,
    //  amount: amount * 100, // amount in paise
      amount: order.amount,
      currency: "INR",
      name: "Smart Hospital",
      order_id: order.id,
      description: "Consultation Fee",
      handler: function () {
        onPaid(method);
      },
      prefill: {
        name: "Patient Name", // Optional, you can pass patient.name
      },
      notes: {},
      theme: {
        color: "#0a7cff"
      },
      method: {
        card: method === "CARD",
        netbanking: method === "NETBANKING",
        upi: method === "UPI",
        wallet: false
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="card center">
      <h2>Select Payment Method</h2>

      <button className="btn" onClick={() => payOnline("UPI")}>
        💳 UPI
      </button>

      <button className="btn" onClick={() => payOnline("CARD")}>
        💳 Card
      </button>

      <button className="btn" onClick={() => payOnline("NETBANKING")}>
        🏦 NetBanking
      </button>

      <button className="btn cash" onClick={() => onPaid("CASH")}>
        💵 Cash
      </button>
    </div>
  );
}

export default PaymentMode;
