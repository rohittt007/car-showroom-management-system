import React from "react";

function Orders() {
  const cartItem = JSON.parse(localStorage.getItem("cart") || "null");

  return (
    <div>
      <h1>Order Summary Page</h1>

      {cartItem ? (
        <div>
          <p>{cartItem.name}</p>
          <p>{cartItem.color}</p>
          <p>{cartItem.finalPrice}</p>
        </div>
      ) : (
        <p>No Orders</p>
      )}
    </div>
  );
}

export default Orders;