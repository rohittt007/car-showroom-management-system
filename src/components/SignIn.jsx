import React, { useState } from "react";
import "./SignIn.css";
import loginImage from "../assets/sign.P.img.png";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // LOGIN DATA SAVE (single object)
    const loginData = {
      email,
      loginTime: new Date().toLocaleString(),
    };

    localStorage.setItem("loginDetails", JSON.stringify(loginData));

    alert("Login Successful");

    navigate("/admin"); // change if your route is different
  };

  return (
    <div className="signin-container">

      {/* LEFT IMAGE */}
      <div className="signin-left">
        <img src={loginImage} alt="login" />
      </div>

      {/* RIGHT FORM */}
      <div className="signin-right">

        <h1>Sign In</h1>

        {/* EMAIL */}
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTON */}
        <button className="signin-submit" onClick={handleLogin}>
          Sign In
        </button>

        {/* FORGOT PASSWORD */}
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>

        {/* OR */}
        <div className="or">
          <hr />
          <span>OR</span>
          <hr />
        </div>

        {/* GOOGLE BUTTON */}
        <button className="google-btn">
          Sign in with Google
        </button>

        {/* REGISTER */}
        <div className="register-text">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>
            Register now
          </span>
        </div>

      </div>
    </div>
  );
}

export default SignIn;