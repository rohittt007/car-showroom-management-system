import React, { useState } from "react";
import "./ShippingAddress.css";

function ShippingAddress() {

  const cartItem =
  JSON.parse(localStorage.getItem("cart"));

  const [step, setStep] = useState("form");
  const [paymentMethod, setPaymentMethod] = useState("");

  // PAYMENT NEXT
  const handleNextFromPayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }
    setStep("policy");
  };

  // POLICY ACCEPT
 const handleAcceptPolicy = () => {
  setStep("order");
};

  return (
    <div className="shipping-page">

      {/* STEP BAR */}
      <div className="checkout-steps">

        <div className="step-item active">
          <div className="step-circle">1</div>
          <p>User Login</p>
        </div>

        <div className="step-line active"></div>

        <div className="step-item active">
          <div className="step-circle">2</div>
          <p>Shipping Address</p>
        </div>

        <div className={`step-line ${step !== "form" ? "active" : ""}`}></div>

        <div className={`step-item ${step !== "form" ? "active" : ""}`}>
          <div className="step-circle">3</div>
          <p>Payment</p>
        </div>

        <div className={`step-line ${step === "order" ? "active" : ""}`}></div>

        <div className={`step-item ${step === "order" ? "active" : ""}`}>
          <div className="step-circle">4</div>
          <p>Place Order</p>
        </div>
      </div>

      <div className="shipping-content">

        {/* FORM */}
        {step === "form" && (
          <div className="shipping-form">
            <h1>Car Registration</h1>

            {[
              "Full Name",
              "Phone Number",
              "PAN Number",
              "Address",
              "City",
              "Postal Code",
              "Country"
            ].map((label, i) => (
              <div className="form-group" key={i}>
                <label>{label}</label>
                <input type="text" />
              </div>
            ))}

            <button
              className="next-btn"
              onClick={() => setStep("payment")}
            >
              Next
            </button>
          </div>
        )}

        {/* PAYMENT */}
        {step === "payment" && (
          <div className="payment-form">
            <h2>Booking Payment</h2>

            {["Cashfree", "PhonePe", "PayU"].map((method) => (
              <div className="payment-option" key={method}>
                <label>{method}</label>
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
              </div>
            ))}

            <button className="next-btn" onClick={handleNextFromPayment}>
              Next
            </button>

            <button className="back-btn" onClick={() => setStep("form")}>
              Back
            </button>
          </div>
        )}

        {/* POLICY */}
       {step === "policy" && (
  <div className="place-order-box">

    <h2>Cancellation Policy</h2>

    <div style={{ textAlign: "left", lineHeight: "1.6" }}>

      <p><b>Know about your cancellation policy before you proceed.</b></p>

      <br />

      <p><b>Cancellation Charge Before Car Allocation :  1% of the Final Price</b></p>
   

      <p><b>Cancellation Charge After Car allocation :  2% of the Final Price</b></p>


      <p><b>Booking amount would be :  2% of the Final Price </b></p>


      <p><b>Corporate Discount and Govt Discount :  Only if approved by OEM </b></p>
   

      <br />

      <p><b>What is car allocation ?</b></p>
      <p>
        Car allocation is the process of assigning a specific vehicle with
        unique identification for a customer to buy
      </p>

      <br />

      <p style={{ fontSize: "12px", color: "gray" }}>
        Learn more about cancellation policies
      </p>

    </div>

    <button className="next-btn" onClick={handleAcceptPolicy}>
      I Understand
    </button>

  </div>
)}
{step === "order" && (
  <div className="place-order-container">

    <div className="left-section">

     <div className="summary-card">
  <h2>Shipping Address</h2>

  <p><strong>Name:</strong> Rohit Gohil</p>
  <p><strong>Phone:</strong> 7898621118</p>
  <p><strong>PAN:</strong> ABCDE1234F</p>
  <p><strong>Address:</strong> Palanpur </p>

 
</div>

      <div className="summary-card">
        <h2>Payment Method</h2>
        <p>{paymentMethod}</p>

        
      </div>

      <div className="summary-card">
        <h2>Selected Car Details</h2>

        <table className="car-table">
         <thead>
  <tr>
    <th>Item</th>
    <th>Item Name</th>
    <th>Color</th>
    <th>Quantity</th>
    <th>Price</th>
  </tr>
</thead>
<tbody>
  {cartItem && (
    <tr>

      <td>
        <img
          src={cartItem.image}
          alt={cartItem.name}
          className="car-image"
        />
      </td>

      <td>
        {cartItem.name}
      </td>

      <td>
        <span className="color-badge">
          {cartItem.color}
        </span>
      </td>

      <td>
        {cartItem.quantity || 1}
      </td>

      <td>
        {cartItem.finalPrice}
      </td>

    </tr>
  )}
</tbody>
        </table>

        
      </div>

    </div>

    <div className="order-summary">
      <h2>Order Summary</h2>

      <div className="price-row">
        <span>Final Price</span>
        <span>₹6,14,729</span>
      </div>

      <button className="place-order-btn">
        Place Order
      </button>
    </div>

  </div>
)}
   

      </div>
    </div>
  );
}

export default ShippingAddress;