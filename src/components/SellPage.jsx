import React, { useState } from "react";
import "./SellPage.css";
import seller from "../assets/sell.page.photo.webp";
import seller2 from "../assets/sell.page.photo2.png";
import { useNavigate, useLocation } from "react-router-dom";

function SellPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const isRegisterPage = location.pathname === "/register";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !phone || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // REGISTER DATA (single object)
    const registerData = { name, email, phone };
    localStorage.setItem("registerDetails", JSON.stringify(registerData));

    // DEALER DATA (array safe system)
    const existingDealers =
      JSON.parse(localStorage.getItem("dealerDetails")) || [];

    existingDealers.push({
      name,
      email,
      phone,
    });

    localStorage.setItem(
      "dealerDetails",
      JSON.stringify(existingDealers)
    );

    alert("Registration Successful");

    navigate("/signin");
  };

  return (
    <>
      {!isRegisterPage ? (
        <div className="sell-section">
          <div className="sell-left">
            <img src={seller} alt="seller" />
          </div>

          <div className="sell-right">
            <h1>Try Selling</h1>
            <p>Earn Extra & Get New opportunity of Market to sell More.</p>

            <button onClick={() => navigate("/register")}>
              Become Our Partner
            </button>
          </div>
        </div>
      ) : (
        <div className="register-page">
          <div className="register-left">
            <img src={seller2} alt="car" />
          </div>

          <div className="register-right">
            <h1>Register</h1>

            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            <button onClick={handleRegister}>Register</button>
          </div>
        </div>
      )}
    </>
  );
}

export default SellPage;