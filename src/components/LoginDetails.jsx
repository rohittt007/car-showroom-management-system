import React from "react";

function LoginDetails() {
  const loginData = JSON.parse(localStorage.getItem("loginDetails") || "[]");

  return (
    <div>
      <h1>Login Details</h1>

      {loginData.length > 0 ? (
        loginData.map((item, i) => (
          <div key={i}>
            <p>{item.email}</p>
            <p>{item.loginTime}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No Login Data</p>
      )}
    </div>
  );
}

export default LoginDetails;