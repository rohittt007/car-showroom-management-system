import React from "react";
import "./TataCars.css";
import { Link } from "react-router-dom";

import curvv from "../assets/Tata.curvv.webp";
import harrier from "../assets/Tata.harrier.svg";
import safari from "../assets/Tata.safari.svg";
import sierra from "../assets/Tata.sierra.jpg";
import altroz from "../assets/Tata.altroz.svg";
import nexon from "../assets/Tata.nexon.svg";


function TataCars() {

  const tataData = [

    {
      id: 7,
      slug: "tata-curvv",
      image: curvv,
      name: "TATA CURVV EV",
      fuel: "ELECTRIC",
      transmission: "AUTOMATIC",
      year: "2026",
      colors: "1",
      price: "₹16,99,000"
    },

    {
      id: 8,
      slug: "tata-harrier",
      image: harrier,
      name: "TATA HARRIER",
      fuel: "DIESEL",
      transmission: "MANUAL",
      year: "2026",
      colors: "5",
      price: "₹13,99,990"
    },

    {
      id: 9,
      slug: "tata-safari",
      image: safari,
      name: "TATA SAFARI",
      fuel: "DIESEL",
      transmission: "MANUAL",
      year: "2026",
      colors: "5",
      price: "₹14,66,259"
    },

    {
        id: 10,
        slug: "tata-sierra",
        image: sierra,
        name: "TATA SIERRA",
        fuel: "PETROL",
        transmission: "MANUAL",
        year: "2026",
          colors: "1",
          price: "₹11,49,000"
        },
     {
        id: 11,
        slug: "tata-altroz",
        image: altroz,
        name: "TATA ALTROZ",
        fuel: "PETROL",
        transmission: "MANUAL",
        year: "2026",
          colors: "5",
          price: "₹6,30,390"
        },
 {
        id: 12,
        slug: "tata-nexon",
        image: nexon,
        name: "TATA NEXON",
        fuel: "PETROL",
        transmission: "MANUAL",
        year: "2026",
          colors: "6",
          price: "₹7,31,890"
        },


  ];

  return (

    <div className="tata-page">

      <h1 className="tata-title">
        Tata Cars
      </h1>

      {/* SEARCH */}

      <div className="tata-search">

        <input
          type="text"
          placeholder="Search tata models..."
        />

      </div>

      <p className="cars-found">
        {tataData.length} cars found
      </p>

      {/* GRID */}

      <div className="tata-grid">

        {tataData.map((car, index) => (

          <div key={index} className="tata-card">

            <img
              src={car.image}
              alt={car.name}
              className="tata-image"
            />

            <div className="tata-info">

              <div className="tata-title-row">

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

              <div className="tata-bottom-section">

                <div>

                  <h3 className="starting-text">
                    Starting From :
                  </h3>

                  <h2 className="tata-price-text">
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

export default TataCars;