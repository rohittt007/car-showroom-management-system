import React from "react";
import "./SuzukiCars.css";
import { Link } from "react-router-dom";

import brezza from "../assets/suzuki.brezza.svg";
import fronx from "../assets/suzuki.fronx.svg";
import jimny from "../assets/suzuki.jimny.svg";
import swift from "../assets/suzuki.swift.svg";
import dzire from "../assets/suzuki,dzire.svg";
import victoris from "../assets/suzuki.victoris.webp";

function SuzukiCars() {

  const suzukiData = [

    {
      id:19,
      slug:"maruti-suzuki-brezza",
      image: brezza,
      name: "MARUTI SUZUKI BREZZA",
      fuel: "HYBRID",
      transmission: "MANUAL",
      year: "2026",
      colors: "8",
      price: "₹8,25,900"
    },

    {
      id:20,
      slug:"maruti-suzuki-fronx",
      image: fronx,
      name: "MARUTI SUZUKI FRONX",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2026",
      colors: "9",
      price: "₹6,84,899"
    },

    {
      id:21,
      slug:"maruti-suzuki-jimny",
      image: jimny,
      name: "MARUTI SUZUKI JIMNY",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2025",
      colors: "7",
      price: "₹14,44,600"
    },

 {
    id:22,
    slug:"maruti-suzuki-swift",
    image: swift,
    name: "MARUTI SUZUKI SWIFT",
    fuel: "PETROL",
    transmission: "MANUAL",
    year: "2026",
    colors: "10",
    price: "₹5,78,900"
  },

   {
    id:23,
    slug:"maruti-suzuki-dzire",
    image: dzire,
    name: "MARUTI SUZUKI DZIRE",
    fuel: "PETROL",
    transmission: "MANUAL",
    year: "2026",
    colors: "7",
      price: "₹6,25,600"
    },

 {
    id:24,
    slug:"maruti-suzuki-victoris",
    image: victoris,
    name: "MARUTI SUZUKI VICTORIS",
    fuel: "PETROL",
    transmission: "MANUAL",
    year: "2026",
    colors: "1",
    price: "₹10,49,900"
  },
  
];

  return (

    <div className="suzuki-page">

      {/* TITLE */}

      <h1 className="suzuki-title">
        Suzuki Cars
      </h1>

      {/* SEARCH */}

      <div className="suzuki-search">

        <input
          type="text"
          placeholder="Search suzuki models..."
        />

      </div>

      {/* FOUND */}

      <p className="cars-found">
        {suzukiData.length} cars found
      </p>

      {/* GRID */}

      <div className="suzuki-grid">

        {suzukiData.map((car, index) => (

          <div key={index} className="suzuki-card">

            {/* IMAGE */}

            <img
              src={car.image}
              alt={car.name}
              className="suzuki-image"
            />

            {/* INFO */}

            <div className="suzuki-info">

              <div className="suzuki-title-row">

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

              {/* PRICE */}

              <div className="suzuki-bottom-section">

                <div>

                  <h3 className="starting-text">
                    Starting From :
                  </h3>

                  <h2 className="suzuki-price-text">
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

export default SuzukiCars;