import React, { useState } from "react";
import "./CustomerReview.css";

import customer1 from "../assets/customer.1.webp";
import customer2 from "../assets/customer.2.webp";
import customer3 from "../assets/customer.3.jpg";
import customer4 from "../assets/customer.4.webp";
import customer5 from "../assets/customer.5.webp";
import customer6 from "../assets/customer.6.jpg";


function CustomerReview() {

  const reviews = [

    {
      image: customer1,
      name: "Rahul Sharma",
      job: "Bussiness Owner",
      location: "Ahmedabad, Gujarat",
      text:
        "Amazing experience with the showroom. Smooth booking and fast delivery service.",
    },

    {
      image: customer2,
      name: "Sunil Mehta",
      job: "Self-employed",
      location: "Delhi, India",
      text:
        "Professional staff and excellent support during the complete car buying process.",
    },

    {
      image: customer3,
      name: "Raj Verma",
      job: "Software Engineer",
      location: "Surat, Gujarat",
      text:
        "Best platform for buying cars online. Easy EMI options and trusted service.",
    },

    {
      image: customer4,
      name: "Karan Mehta",
      job: "Working At HDFC Bank",
      location: "Mumbai, India",
      text:
        "Very satisfied with the service and car quality. Highly recommended showroom.",
    },

    {
      image: customer5,
      name: "Yash Verma",
      job: "Designer",
      location: "Pune, India",
      text:
        "Customer support was fantastic and the complete delivery process was smooth.",
    },

     {
      image: customer6,
      name: "Karan Singh",
      job: "IT Consultant",
      location: "Bangalore, Karnataka",
      text:
        "Excellent service and a wide range of vehicles to choose from. Will definitely recommend!",
    }

  ];


  const [current, setCurrent] = useState(0);

  const nextReview = () => {

    setCurrent((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );

  };

  const prevReview = () => {

    setCurrent((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );

  };

  return (

    <div className="review-section">

      <h1 className="review-title">
        What Our Customers Say
      </h1>

      <p className="review-subtitle">
        Don't just take our word for it - hear from our satisfied customers
      </p>


      {/* RATING */}
      <div className="rating-box">

        <div className="stars">
          ⭐⭐⭐⭐⭐
        </div>

        <div className="rating-text">
          5.0 out of 5
        </div>

        <div className="review-count">
          Based on 6 verified reviews
        </div>

      </div>


      {/* SLIDER */}
        <div className="review-slider">

  <button
    className="review-arrow"
    onClick={prevReview}
  >
    ‹
  </button>


        {/* CARD */}
        <div className="review-card">
          

          <div className="verified">
            Verified
          </div>

          <div className="quote">
            ❝
          </div>

          <p className="review-message">
            {reviews[current].text}
          </p>

          <div className="review-stars">
            ⭐⭐⭐⭐⭐
          </div>


          {/* CUSTOMER */}
          <div className="customer-box">

            <img
              src={reviews[current].image}
              alt=""
            />

            <div>

              <div className="customer-name">
                {reviews[current].name}
              </div>

              <div className="customer-job">
                {reviews[current].job}
              </div>

              <div className="customer-location">
                {reviews[current].location}
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT BUTTON */}
        <button
          className="review-arrow"
          onClick={nextReview}
        >
          ›
        </button>

      </div>


      {/* DOTS */}
      <div className="dots">

        {reviews.map((item, index) => (

          <span
            key={index}
            className={
              current === index ? "active" : ""
            }
          ></span>

        ))}

      </div>

    </div>

  );
}

export default CustomerReview;