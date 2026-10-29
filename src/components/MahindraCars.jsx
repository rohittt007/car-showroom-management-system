import React from "react";
import "./MahindraCars.css";
import { Link } from "react-router-dom";

import bolero from "../assets/mahindra.bolero.svg";
import Scorpio from "../assets/mahindra.Scorpio.svg";
import scorpioN from "../assets/mahindra.scorpioN.svg";
import tharRoxx from "../assets/mahindra.tharRoxx.svg";
import thar from "../assets/mahindra.thar.svg";
import xuv3xo from "../assets/mahindra.xuv.3xo.svg";



function MahindraCars() {

  const mahindraData = [

    {
      id:11,
      slug:"mahindra-bolero",
      image: bolero,
      name:"MAHINDRA BOLERO",
      fuel: "DIESEL",
      transmission: "MANUAL",
      year: "2026",
      colors: "4",
      price: "₹7,99,000"
    },

    {
      id:12,
      slug:"mahindra-scorpio-classic",
      image: Scorpio,
      name:"MAHINDRA SCORPIO CLASSIC",
      fuel: "DIESEL",
      transmission: "MANUAL",
      year: "2025",
      colors: "5",
      price: "₹12,97,700"
    },

    {
      id:13,
      slug:"mahindra-scorpio-n",
      image: scorpioN,
      name:"MAHINDRA SCORPIO N",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2026",
      colors: "5",
      price: "₹13,99,200"
    },

 {
    id:14,
    slug:"mahindra-thar-roxx",
    image: tharRoxx,
    name:"MAHINDRA THAR ROXX",
    fuel: "DIESEL",
    transmission: "MANUAL",
    year: "2025",
    colors: "7",
    price: "₹13,47,700"
  },

  {
    id:15,
    slug:"mahindra-thar",
    image: thar,
    name:"MAHINDRA THAR ",
    fuel: "DIESEL",
    transmission: "MANUAL",
    year: "2026",
    colors: "6",
    price: "₹9,99,000"
  },

  {

    id:16,
    slug:"mahindra-xuv3xo",
    image: xuv3xo,
    name:"MAHINDRA XUV 3XO",
    fuel: "PETROL",
    transmission: "MANUAL",
    year: "2026",
    colors: "12",
    price: "₹7,28,300"
  },



  ];

  return (

    <div className="mahindra-page">

      {/* TITLE */}

      <h1 className="mahindra-title">
        Mahindra Cars
      </h1>

      {/* SEARCH */}

      <div className="mahindra-search">

        <input
          type="text"
          placeholder="Search mahindra models..."
        />

      </div>

      {/* FOUND */}

      <p className="cars-found">
        {mahindraData.length} cars found
      </p>

      {/* GRID */}

      <div className="mahindra-grid">

        {mahindraData.map((car, index) => (

          <div key={index} className="mahindra-card">

            {/* IMAGE */}

            <img
              src={car.image}
              alt={car.name}
              className="mahindra-image"
            />

            {/* INFO */}

            <div className="mahindra-info">

              <div className="mahindra-title-row">

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

              <div className="mahindra-bottom-section">

                <div>

                  <h3 className="starting-text">
                    Starting From :
                  </h3>

                  <h2 className="mahindra-price-text">
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

export default MahindraCars;