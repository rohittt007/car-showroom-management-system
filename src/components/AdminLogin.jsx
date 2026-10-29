import React from "react";
import "./AdminLogin.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">

        <div className="logo-area">
          <h1>🚗 CAR MOTIVE</h1>
          <p>Admin Panel Login</p>
        </div>

        <form>
          <div className="input-box">
            <label>Username</label>
            <input type="text" placeholder="Enter Username" />
          </div>

          <div className="input-box">
            <label>Password</label>
            <input type="password" placeholder="Enter Password" />
          </div>

          <button type="submit">Log In</button>
        </form>

      </div>
    </div>
  );
}

export default Login;