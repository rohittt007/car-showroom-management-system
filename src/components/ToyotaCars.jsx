import React from "react";
import "./ToyotaCars.css";
import { Link } from "react-router-dom";

import crysta from "../assets/toyota.crysta.svg";
import fortuner from "../assets/toyota.fortuner.svg";
import hilux from "../assets/toyota.hilux.svg";
import landCruiser from "../assets/toyota.landCruiser.svg";
import vellfire from "../assets/toyota.vellfire.svg";
import glanza from "../assets/toyota.glanza.svg";

function ToyotaCars() {

  const toyotaData = [

    {
      id:25,
      slug:"toyota-innova-crysta",
      image: crysta,
      name: "TOYOTA INNOVA CRYSTA",
      fuel: "DIESEL",
      transmission: "MANUAL",
      year: "2025",
      colors: "5",
      price: "₹18,65,700"
    },

    {
      id:26,
      slug:"toyota-fortuner",
      image: fortuner,
      name: "TOYOTA FORTUNER",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2025",
      colors: "7",
      price: "₹34,28,100"
    },

    {
      id:27,
      slug:"toyota-hilux",
      image: hilux,
      name: "TOYOTA HILUX",
      fuel: "DIESEL",
      transmission: "MANUAL",
      year: "2025",
      colors: "5",
      price: "₹28,02,400"
    },

{   
    id:28,
    slug:"toyota-land-cruiser-300",
    image: landCruiser,
    name: "TOYOTA LAND CRUISER 300",
    fuel: "DIESEL",
    transmission: "AUTOMATIC",
    year: "2026",
    colors: "5",
    price: "₹2,15,60,000"
  },

{
    id:29,
    slug:"toyota-vellfire",
    image: vellfire,
    name: "TOYOTA VELLFIRE",
    fuel: "HYBRID",
    transmission: "CVT",
    year: "2025",
    colors: "3",
    price: "₹1,19,73,400"
  },

  {
    id:30,
    slug:"toyota-glanza",
    image: glanza,
    name: "TOYOTA GLANZA",
    fuel: "PETROL",
    transmission: "MANUAL",
    year: "2025",
    colors: "5",
    price: "₹6,39,300"
  },


  ];

  return (

    <div className="toyota-page">

      {/* TITLE */}

      <h1 className="toyota-title">
        Toyota Cars
      </h1>

      {/* SEARCH */}

      <div className="toyota-search">

        <input
          type="text"
          placeholder="Search toyota models..."
        />

      </div>

      {/* FOUND */}

      <p className="cars-found">
        {toyotaData.length} cars found
      </p>

      {/* GRID */}

      <div className="toyota-grid">

        {toyotaData.map((car, index) => (

          <div key={index} className="toyota-card">

            {/* IMAGE */}

            <img
              src={car.image}
              alt={car.name}
              className="toyota-image"
            />

            {/* INFO */}

            <div className="toyota-info">

              <div className="toyota-title-row">

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

              <div className="toyota-bottom-section">

                <div>

                  <h3 className="starting-text">
                    Starting From :
                  </h3>

                  <h2 className="toyota-price-text">
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

export default ToyotaCars;