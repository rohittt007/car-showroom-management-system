import React from "react";
import "./BMWCars.css";
import { Link } from "react-router-dom";

import bmw2 from "../assets/bmw.2.webp";
import bmw3 from "../assets/bmw.3.svg";
import bmw7 from "../assets/bmw.7.svg";
import bmwX5 from "../assets/bmw.x5.svg";
import bmw1 from "../assets/bmw.1.svg";
import bmw52 from "../assets/bmw.52.svg";
function BMWCars() {

  const bmwData = [

    {
      id:31,
      slug:"bmw-2-series-gran-coupe",
      image: bmw2,
      name: "BMW 2 SERIES GRAN COUPE",
      fuel: "PETROL",
      transmission: "DCT",
      year: "2025",
      colors: "4",
      price: "₹45,30,000"
    },

    {
      id:32,
      slug:"bmw-3-series-long-wheelbase",
      image: bmw3,
      name: "BMW 3 SERIES LONG WHEELBASE",
      fuel: "PETROL",
      transmission: "AUTOMATIC",
      year: "2026",
      colors: "1",
      price: "₹60,45,000"
    },

    {
      id:33,
      slug:"bmw-7-series",
      image: bmw7,
      name: "BMW 7 SERIES",
      fuel: "PETROL",
      transmission: "AUTOMATIC",
      year: "2025",
      colors: "6",
      price: "₹1,79,45,000"
    },

 {
    id:34,
    slug:"bmw-x5",
    image: bmwX5,
    name: "BMW X5",
    fuel: "PETROL",
    transmission: "AUTOMATIC",
    year: "2025",
    colors: "6",
    price: "₹91,30,000"
  },

   {
    id:35,
    slug:"bmw-x1",
    image: bmw1,
    name: "BMW X1",
    fuel: "PETROL",
    transmission: "AUTOMATIC",
    year: "2025",
    colors: "7",
    price: "₹50,60,000"
  },

   {
    id:33,
    slug:"bmw-5-series",
    image: bmw52,
    name: "BMW 5 Series",
    fuel: "HYBRID",
    transmission: "AUTOMATIC",
    year: "2025",
    colors: "5",
    price: "₹72,35,000"
  },

  ];

  return (

    <div className="bmw-page">

      {/* TITLE */}

      <h1 className="bmw-title">
        BMW Cars
      </h1>

      {/* SEARCH */}

      <div className="bmw-search">

        <input
          type="text"
          placeholder="Search bmw models..."
        />

      </div>

      {/* FOUND */}

      <p className="cars-found">
        {bmwData.length} cars found
      </p>

      {/* GRID */}

      <div className="bmw-grid">

        {bmwData.map((car, index) => (

          <div key={index} className="bmw-card">

            {/* IMAGE */}

            <img
              src={car.image}
              alt={car.name}
              className="bmw-image"
            />

            {/* INFO */}

            <div className="bmw-info">

              <div className="bmw-title-row">

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

              <div className="bmw-bottom-section">

                <div>

                  <h3 className="starting-text">
                    Starting From :
                  </h3>

                  <h2 className="bmw-price-text">
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

export default BMWCars;