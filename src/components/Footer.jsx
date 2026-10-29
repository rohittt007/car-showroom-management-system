import React from "react";
import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowRight
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-top">

        {/* COMPANY INFO */}
        <div className="footer-box">
          <h2 className="footer-logo">
            Car<span>Motive</span>
          </h2>

          <p className="footer-text">
            Premium car showroom platform with trusted
            services, latest car collection, easy booking
            and customer satisfaction across India.
          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

          </div>
        </div>


        {/* QUICK LINKS */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>

            <li>
              <FaArrowRight className="footer-icon" />
              Home
            </li>

            <li>
              <FaArrowRight className="footer-icon" />
              Top Cars
            </li>

            <li>
              <FaArrowRight className="footer-icon" />
              Why Choose Us
            </li>

            <li>
              <FaArrowRight className="footer-icon" />
              Services
            </li>

            <li>
              <FaArrowRight className="footer-icon" />
              Customer Reviews
            </li>

          </ul>
        </div>


        {/* CONTACT INFO */}
        <div className="footer-box">
          <h3>Contact Info</h3>

          <p>
            <FaMapMarkerAlt className="contact-icon" />
            Ahmedabad, Gujarat, India
          </p>

          <p>
            <FaPhoneAlt className="contact-icon" />
            +91 7898621117
          </p>

          <p>
            <FaEnvelope className="contact-icon" />
            carmotive1255@gmail.com
          </p>

          <p>
            <FaClock className="contact-icon" />
            Mon - Sat : 9AM - 9PM
          </p>

        </div>


        {/* SHOWROOM INFO */}
        <div className="footer-box">
          <h3>Our Showroom</h3>

          <div className="showroom-card">

            <h4>Luxury Car Collection</h4>

            <p>
              Explore premium brands like BMW,
              Audi, Mercedes & more with best offers.
            </p>

            <button>
              Explore More
            </button>

          </div>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 CarMotive. All Rights Reserved.
        </p>

        <p>
          Designed By Rohit Gohil
        </p>

      </div>

    </footer>
  );
}

export default Footer;