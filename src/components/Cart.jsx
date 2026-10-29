import React from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {

const navigate = useNavigate();

  const cartItem =
    JSON.parse(localStorage.getItem("cart"));

const subtotal = cartItem
  ? parseInt(
      String(
        cartItem.finalPrice || cartItem.price || 0
      ).replace(/[₹,]/g, "")
    )
  : 0;

  const clearCart = () => {

    localStorage.removeItem("cart");

    window.location.reload();
  };

  return (

    <div className="cart-page">

      {/* TOP SECTION */}

      <div className="cart-top">

        {/* LEFT TABLE */}

        <div className="cart-left">

          <h1>Shopping Cart</h1>

          <table className="cart-table">

            <thead>

              <tr>

                <th>Item</th>

                <th>Quantity</th>

                <th>Color</th>

                <th>Category</th>

                <th>Type</th>

                <th>Variant</th>

                <th>Year</th>

                <th>Coupon Discount</th>

                <th>Final Price</th>

              </tr>

            </thead>

            <tbody>

              {cartItem ? (

                <tr>

                  <td className="item-cell">

                    <img
                      src={cartItem.image}
                      alt={cartItem.name}
                      className="cart-car-img"
                    />

                    <span>
                      {cartItem.name}
                    </span>

                  </td>

                  <td>
                    {cartItem.quantity || 1}
                  </td>

                  <td>
                    {cartItem.color}
                  </td>

                  <td>
                    {cartItem.category}
                  </td>

                  <td>
                    {cartItem.type || "NEW"}
                  </td>

                  <td>
                    {cartItem.variant}
                  </td>

                  <td>
                    {cartItem.year || 2026}
                  </td>

                  <td>
                    ₹{cartItem.couponDiscount || 0}
                  </td>

                  <td>
                    ₹{cartItem.finalPrice}
                  </td>

                </tr>

              ) : (

                <tr>

                  <td
                    colSpan="9"
                    style={{
                      textAlign: "center",
                      padding: "40px"
                    }}
                  >
                    Cart is Empty
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

        {/* RIGHT SUMMARY */}

        <div className="cart-summary">

        <h2>
  Subtotal ({cartItem ? 1 : 0}) :
  ₹{subtotal.toLocaleString("en-IN")}
</h2>

          <button
  className="checkout-btn"
  onClick={() =>
    navigate("/shipping-address")
  }
>
  Proceed to Checkout
</button>

          <button
            className="clear-btn"
            onClick={clearCart}
          >

            Clear Cart

          </button>

        </div>

      </div>

      {/* BOTTOM SECTION */}

      <div className="delivery-section">

        <div className="delivery-left">

          <h2>
            Fast, Transparent Deliveries
          </h2>

          <p>
            We ensure a smooth vehicle
            delivery experience.
          </p>

          <div className="delivery-grid">

            <div className="delivery-card">

              <h3>
                Delivery Coverage
              </h3>

              <p>
                Deliver across India.
              </p>

            </div>

            <div className="delivery-card">

              <h3>
                Pickup Options
              </h3>

              <p>
                Pickup from authorized
                dealer.
              </p>

            </div>

            <div className="delivery-card">

              <h3>
                Inspection
              </h3>

              <p>
                Vehicle checked before
                dispatch.
              </p>

            </div>

          </div>

        </div>

        <div className="help-box">

          <h2>
            Need Help?
          </h2>

          <p>
            📞 +91 7898621117
          </p>

          <p>
            support@carmotive.com
          </p>

          <button>

            Contact Us

          </button>

           </div>

      </div>
 {/* DELIVERY INFO SECTION */}

<div className="cart-info-section">

  <div className="info-block">
    <h2>Delivery Timeline</h2>

    <ol>
      <li>Booking & Payment confirmation</li>
      <li>Pre-delivery inspection (PDI) and dispatch scheduling</li>
      <li>RTO registration and documentation</li>
      <li>Delivery intimation call / email before dispatch</li>
      <li>Vehicle delivery and document handover</li>
    </ol>
  </div>

  <div className="info-block">
    <h2>Required Documents for Delivery</h2>

    <ol>
      <li>Valid KYC (PAN, Aadhaar, Driving License)</li>
      <li>Address Proof</li>
      <li>Loan / Finance Documents</li>
      <li>Signed RTO Forms</li>
    </ol>
  </div>

  <div className="info-block">
    <h2>Delays & Exceptions</h2>

    <p>
      Delays may occur due to RTO processing,
      stock availability, transport issues,
      government restrictions, or natural events.
    </p>
  </div>

  <div className="info-block">
    <h2>Cancellation & Refunds</h2>

    <p>
      Cancellation before registration may be
      eligible for refund according to company
      policy. After registration cancellation
      may not be allowed.
    </p>
  </div>

</div>
        </div>


  );
}

export default Cart;