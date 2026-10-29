import React from "react";

function DealerDetails() {
  const dealerData = JSON.parse(localStorage.getItem("dealerDetails") || "[]");

  return (
    <div>
      <h1>Dealer Details</h1>

      {dealerData.length > 0 ? (
        dealerData.map((dealer, i) => (
          <div key={i}>
            <p>{dealer.name}</p>
            <p>{dealer.email}</p>
            <p>{dealer.phone}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No Dealer Data</p>
      )}
    </div>
  );
}

export default DealerDetails;