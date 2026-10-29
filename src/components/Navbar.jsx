import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import locationIcon from "../assets/placeholder.png";
import logo from "../assets/car.logo.png";

function Navbar() {

  return (

    <div className="navbar">

      {/* LOGO */}
      <div className="logo">

        <img
          src={logo}
          alt="Car Motive Logo"
        />

      </div>

      {/* NAV LINKS */}
      <ul className="nav-links">

        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/new-cars">
            New Cars
          </NavLink>
        
          
        </li>

      </ul>

      {/* RIGHT SECTION */}
      <div className="right-section">

        {/* CALL BUTTON */}
        <button className="call-btn">
          📞 +91 7898621117
        </button>

        {/* LOCATION */}
        <div className="location-box">

          <img
            src={locationIcon}
            alt="location"
            className="location-icon"
          />

          <select className="location">

            <option>Kolkata</option>
            <option>Ahmedabad</option>
            <option>Delhi</option>
            <option>Palanpur</option>
            <option>Mumbai</option>
            <option>Bengaluru</option>
            <option>Siddhpur</option>
            <option>Hyderabad</option>
            <option>Chennai</option>
            <option>Pune</option>
            <option>Jaipur</option>
            <option>Surat</option>
            <option>Lucknow</option>
            <option>Kanpur</option>
            <option>Nagpur</option>
            <option>Indore</option>
            <option>Bhopal</option>
            <option>Patna</option>
            <option>Visakhapatnam</option>
            <option>Kochi</option>
            <option>Chandigarh</option>
            <option>Guwahati</option>

          </select>

        </div>
<Link to="/cart" className="cart-btn">
  🛒 Add To Cart
</Link>

        <NavLink to="/signin" className="signin-btn">
          Sign In
        </NavLink>

      </div>

    </div>

  );
}

export default Navbar;