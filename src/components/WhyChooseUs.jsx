import React from "react";
import "./WhyChooseUs.css";

import {
  FaTruck,
  FaPercentage,
  FaChartLine
} from "react-icons/fa";

function WhyChooseUs() {

  const chooseData = [

    {
      icon: <FaTruck />,
      title: "Faster Delivery",
      desc: "Get faster delivery with better pricing and an amazing delivery experience every time."
    },

    {
      icon: <FaPercentage />,
      title: "Lowest EMI Options",
      desc: "Tie-ups with various banks give you the best and lowest EMI options available in the market."
    },

    {
      icon: <FaChartLine />,
      title: "Best Exchange Price",
      desc: "We care about your existing car. Get competitive pricing from someone who understands its true value."
    }

  ];

  return (

    <div className="choose-section">

      <h1 className="choose-title">
        Why Choose Us?
      </h1>

      <p className="choose-subtitle">
        Experience the difference with our commitment to quality,
        transparency, and customer satisfaction
      </p>

      <div className="choose-container">

        {chooseData.map((item, index) => (

          <div className="choose-card" key={index}>

            <div className="choose-icon">
              {item.icon}
            </div>

            <h2>
              {item.title}
            </h2>

            <p>
              {item.desc}
            </p>

          </div>

        ))}

      </div>

      <button className="contact-btn">
        Contact Us →
      </button>

    </div>

  );
}

export default WhyChooseUs;