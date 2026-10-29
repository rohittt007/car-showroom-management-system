import React from "react";
import "./HyundaiCars.css";
import { Link } from "react-router-dom";

import creta from "../assets/hyundai.creta.png";
import i20 from "../assets/hyundai.i20.svg";
import exter from "../assets/hyundai.exter.png";
import verna from "../assets/hyundai.verna.png";
import creataNline from "../assets/hyundai.n.line.svg";
import hyundaiVenue from "../assets/hyundai.venue.svg";

function HyundaiCars() {

  // HYUNDAI DATA
  const hyundaiData = [

    {
      id:1,
      slug:"hyundai-creta",
      image: creta,
      name: "HYUNDAI CRETA",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2026",
      colors: "29",
      price: "₹10,79,000"
    },

    {
      id:2,
      slug:"hyundai-i20",
      image: i20,
      name: "HYUNDAI I20",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2026",
      colors: "7",
      price: "₹6,86,865"
    },

    {
      id:3,
      slug:"hyundai-exter",
      image: exter,
      name: "HYUNDAI EXTER",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2026",
      colors: "6",
      price: "₹5,68,033"
    },

    {
      id:4,
      slug:"hyundai-verna",
      image: verna,
      name: "HYUNDAI VERNA",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2026",
      colors: "6",
      price: "₹10,79,500"
    },

    {

      id:5,
      slug:"hyundai-creta-n-line",
      image: creataNline,
      name: "HYUNDAI CRETA N LINE",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2026",
      colors: "6",
      price: "₹16,34,905"
    },

    {
      id:6,
      slug:"hyundai-new-venue",
      image: hyundaiVenue,
      name: "HYUNDAI NEW VENUE",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2026",
      colors: "8",
      price: "₹7,99,900"
    },

  ];

  return (

    <div className="hyundai-page">

      {/* TITLE */}
      <h1 className="hyundai-title">
        Hyundai Cars
      </h1>

      {/* SEARCH BAR */}
      <div className="hyundai-search">

        <input
          type="text"
          placeholder="Search hyundai models, category ..."
        />

      </div>

      {/* FOUND TEXT */}
      <p className="cars-found">
        {hyundaiData.length} cars found
      </p>

      {/* CAR GRID */}
      <div className="hyundai-grid">

        {hyundaiData.map((car, index) => (

          <div key={index} className="hyundai-card">

            {/* IMAGE */}
            <img
              src={car.image}
              alt={car.name}
              className="hyundai-image"
            />

            {/* CONTENT */}
            <div className="hyundai-info">

              <div className="hyundai-title-row">

                <h2>{car.name}</h2>

                <span className="new-badge">
                  NEW
                </span>

              </div>

              <p className="fuel-text">
                {car.fuel}
              </p>

              <p className="manual-text">
                {car.transmission}
              </p>

              <div className="year-color">

                <span>
                  Year : {car.year}
                </span>

                <span>
                  🎨 {car.colors}
                </span>

              </div>

              {/* PRICE + BUTTON */}
              <div className="hyundai-bottom-section">

                <div>

                  <h3 className="starting-text">
                    Starting From :
                  </h3>

                  <h2 className="hyundai-price-text">
                    {car.price}
                  </h2>

                </div>

               <Link to={`/car/${car.slug}`} className="details-btn">
                                 Details
                               </Link>

            

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default HyundaiCars;