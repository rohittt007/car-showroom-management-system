import React from "react";
import "./NewCars.css";
import { Link } from "react-router-dom";

import creta from "../assets/hyundai.creta.png";
import i20 from "../assets/hyundai.i20.svg";
import exter from "../assets/hyundai.exter.png";

import curvv from "../assets/Tata.curvv.webp";
import harrier from "../assets/Tata.harrier.svg";
import safari from "../assets/Tata.safari.svg";

import bolero from "../assets/mahindra.bolero.svg";
import Scorpio from "../assets/mahindra.Scorpio.svg";
import scorpioN from "../assets/mahindra.scorpioN.svg";

import brezza from "../assets/suzuki.brezza.svg";
import fronx from "../assets/suzuki.fronx.svg";
import jimny from "../assets/suzuki.jimny.svg";

import crysta from "../assets/toyota.crysta.svg";
import fortuner from "../assets/toyota.fortuner.svg";
import hilux from "../assets/toyota.hilux.svg";

import bmw2 from "../assets/bmw.2.webp";
import bmw3 from "../assets/bmw.3.svg";
import bmw7 from "../assets/bmw.7.svg";

function NewCars() {

  // HYUNDAI DATA
  const cars = [

    {
      image: creta,
      slug:"hyundai-creta",
      name: "HYUNDAI CRETA",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2026",
      colors: "29",
      price: "₹10,79,000"
    },

    {
      image: i20,
       slug:"hyundai-i20",
      name: "HYUNDAI I20",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2026",
      colors: "7",
      price: "₹6,86,865"
    },

    {
      image: exter,
       slug:"hyundai-exter",
      name: "HYUNDAI EXTER",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2026",
      colors: "6",
      price: "₹5,68,033"
    },

  ];

  // TATA DATA
  const tataData = [

    {
      image: curvv,
       slug:"tata-curvv",
      name: "TATA CURVV EV",
      fuel: "ELECTRIC",
      transmission: "AUTOMATIC",
      year: "2026",
      colors: "1",
      price: "₹16,99,000"
    },

    {
      image: harrier,
      slug:"tata-harrier",
      name: "TATA HARRIER",
      fuel: "DIESEL",
      transmission: "MANUAL",
      year: "2026",
      colors: "5",
      price: "₹13,99,990"
    },

    {
      image: safari,
      slug:"tata-safari",
      name: "TATA SAFARI",
      fuel: "DIESEL",
      transmission: "MANUAL",
      year: "2026",
      colors: "5",
      price: "₹14,66,259"
    }

  ];

  // MAHINDRA DATA
  const mahindraData = [

    {
      image: bolero,
      slug:"mahindra-bolero",
      name: "MAHINDRA BOLERO",
      fuel: "DIESEL",
      transmission: "MANUAL",
      year: "2026",
      colors: "4",
      price: "₹7,99,000"
    },

    {
      image: Scorpio,
       slug:"mahindra-scorpio-classic",
      name: "MAHINDRA SCORPIO CLASSIC",
      fuel: "DIESEL",
      transmission: "MANUAL",
      year: "2025",
      colors: "5",
      price: "₹12,97,700"
    },

    {
      image: scorpioN,
       slug:"mahindra-scorpio-n",
      name: "MAHINDRA SCORPIO N",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2026",
      colors: "5",
      price: "₹13,99,200"
    }

  ];

  // SUZUKI DATA
  const suzukiData = [

    {
      image: brezza,
       slug:"maruti-suzuki-brezza",
      name: "MARUTI SUZUKI BREZZA",
      fuel: "HYBRID",
      transmission: "MANUAL",
      year: "2026",
      colors: "8",
      price: "₹8,25,900"
    },

    {
      image: fronx,
      slug:"maruti-suzuki-fronx",
      name: "MARUTI SUZUKI FRONX",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2026",
      colors: "9",
      price: "₹6,84,899"
    },

    {
      image: jimny,
      slug:"maruti-suzuki-jimny",
      name: "MARUTI SUZUKI JIMNY",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2025",
      colors: "7",
      price: "₹14,44,600"
    }

  ];

  // TOYOTA DATA
  const toyotaData = [

    {
      image: crysta,
      slug:"toyota-innova-crysta",
      name: "TOYOTA INNOVA CRYSTA",
      fuel: "DIESEL",
      transmission: "MANUAL",
      year: "2025",
      colors: "5",
      price: "₹18,65,700"
    },

    {
      image: fortuner,
      slug:"toyota-fortuner",
      name: "TOYOTA FORTUNER",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2025",
      colors: "7",
      price: "₹34,28,100"
    },

    {
      image: hilux,
      slug:"toyota-hilux",
      name: "TOYOTA HILUX",
      fuel: "DIESEL",
      transmission: "MANUAL",
      year: "2025",
      colors: "5",
      price: "₹28,02,400"
    }

  ];

  // BMW DATA
  const bmwData = [

    {
      image: bmw2,
      slug:"bmw-2-series-gran-coupe",
      name: "BMW 2 SERIES GRAN COUPE",
      fuel: "PETROL",
      transmission: "DCT",
      year: "2025",
      colors: "4",
      price: "₹45,30,000"
    },

    {
      image: bmw3,
       slug:"bmw-3-series-long-wheelbase",
      name: "BMW 3 SERIES LONG WHEELBASE",
      fuel: "PETROL",
      transmission: "AUTOMATIC",
      year: "2026",
      colors: "1",
      price: "₹60,45,000"
    },

    {
      image: bmw7,
       slug:"bmw-7-series",
      name: "BMW 7 SERIES",
      fuel: "PETROL",
      transmission: "AUTOMATIC",
      year: "2025",
      colors: "6",
      price: "₹1,79,45,000"
    }

  ];

  // COMMON CARD
  const renderCars = (data) => {
    return data.map((car, index) => (

      <div className="newcar-card" key={index}>

        <img
          src={car.image}
          alt={car.name}
          className="newcar-image"
        />

        <div className="newcar-info">

          <div className="newtitle-row">

            <h2>{car.name}</h2>

            <span className="new-tag">
              NEW
            </span>

          </div>

          <p className="fuel">
            {car.fuel}
          </p>

          <p className="manual">
            {car.transmission}
          </p>

          <div className="year-seat">

            <span>
              Year : {car.year}
            </span>

            <span>
              🎨 {car.colors}
            </span>

          </div>

          <div className="bottom-row">

            <div>

              <h3>
                Starting From :
              </h3>

              <h2 className="price">
                {car.price}
              </h2>

            </div>

                          <Link to={`/car/${car.slug}`} className="details-btn">
              Details
            </Link>

          </div>

        </div>

      </div>

    ));
  };

  return (

    <div className="newcars-page">

      {/* SEARCH */}
      <div className="search-box">

        <input
          type="text"
          placeholder="Search model, brand, feature ..."
        />

      </div>

      {/* TITLE */}
      <h1 className="newcars-title">
        New Cars
      </h1>

      {/* HYUNDAI */}
      <div className="newbrand-section">

        <h2 className="newbrand-title">
          HYUNDAI
        </h2>

        <div className="newcars-container">
          {renderCars(cars)}
        </div>

  <div className="explore-btn-box">

      <Link to="/hyundai-cars">

    <button className="explore-btn">
      Explore All HYUNDAI Cars →
    
    </button>
    </Link>
  </div>
</div>

    {/* TATA */}
      <div className="newbrand-section">

        <h2 className="newbrand-title">
          TATA
        </h2>
  
        <div className="newcars-container">
          {renderCars(tataData)}
        </div>

   
  <div className="explore-btn-box">

  <Link to="/tata-cars">

    <button className="explore-btn">
      Explore All TATA Cars →
    </button>
  </Link>
   </div>
      </div>

      {/* MAHINDRA */}
      <div className="newbrand-section">

        <h2 className="newbrand-title">
          MAHINDRA
        </h2>

        <div className="newcars-container">
          {renderCars(mahindraData)}
        </div>

  <div className="explore-btn-box">
     <Link to="/mahindra-cars">

    <button className="explore-btn">
      Explore All MAHINDRA Cars →
    </button>
    </Link>
  </div>

      </div>

      {/* SUZUKI */}
      <div className="newbrand-section">

        <h2 className="newbrand-title">
          SUZUKI
        </h2>

        <div className="newcars-container">
          {renderCars(suzukiData)}
        </div>

  <div className="explore-btn-box">
      <Link to="/suzuki-cars">
      
    <button className="explore-btn">
      Explore All SUZUKI Cars →
    </button>
    </Link>
  </div>

</div>

      {/* TOYOTA */}
      <div className="newbrand-section">

        <h2 className="newbrand-title">
          TOYOTA
        </h2>

        <div className="newcars-container">
          {renderCars(toyotaData)}
        </div>

  <div className="explore-btn-box">
     <Link to="/toyota-cars">

    <button className="explore-btn">
      Explore All TOYOTA Cars →
    </button>
    </Link>
  </div>

      </div>

      {/* BMW */}
      <div className="newbrand-section">

        <h2 className="newbrand-title">
          BMW
        </h2>

        <div className="newcars-container">
          {renderCars(bmwData)}
        </div>

  <div className="explore-btn-box">
    <Link to="/bmw-cars">
    
    <button className="explore-btn">
      Explore All BMW Cars →
    </button>
    </Link>
  </div>

      </div>

    </div>
  );
}

export default NewCars;
