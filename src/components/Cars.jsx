import React from "react";
import "./Cars.css";
import { Link } from "react-router-dom";

import creta from "../assets/hyundai.creta.png";
import i20 from "../assets/hyundai.i20.svg";
import exter from "../assets/hyundai.exter.png";
import verna from "../assets/hyundai.verna.png";

import curvv from "../assets/Tata.curvv.webp";
import harrier from "../assets/Tata.harrier.svg";
import safari from "../assets/Tata.safari.svg";
import sierra from "../assets/Tata.sierra.jpg";

import bolero from "../assets/mahindra.bolero.svg";
import Scorpio from "../assets/mahindra.Scorpio.svg";
import scorpioN from "../assets/mahindra.scorpioN.svg";
import tharRoxx from "../assets/mahindra.tharRoxx.svg";

import brezza from "../assets/suzuki.brezza.svg";
import fronx from "../assets/suzuki.fronx.svg";
import jimny from "../assets/suzuki.jimny.svg";
import swift from "../assets/suzuki.swift.svg";

import crysta from "../assets/toyota.crysta.svg";
import fortuner from "../assets/toyota.fortuner.svg";
import hilux from "../assets/toyota.hilux.svg";
import landCruiser from "../assets/toyota.landCruiser.svg";

import bmw2 from "../assets/bmw.2.webp";
import bmw3 from "../assets/bmw.3.svg";
import bmw7 from "../assets/bmw.7.svg";
import bmwX5 from "../assets/bmw.x5.svg";


function Cars() {

  // HYUNDAI DATA
  const hyundaiData = [

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

    {
      image: verna,
      slug:"hyundai-verna",
      name: "HYUNDAI VERNA",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2026",
      colors: "6",
      price: "₹10,79,500"
    }

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
    },

    {
      image: sierra,
      slug:"tata-sierra",
      name: "TATA SIERRA",
      fuel: "PETROL",
      transmission: "MANUAL",
      year: "2026",
      colors: "1",
      price: "₹11,49,000"
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
  },

  {
    image: tharRoxx,
    slug:"mahindra-thar-roxx",
    name: "MAHINDRA THAR ROXX",
    fuel: "DIESEL",
    transmission: "MANUAL",
    year: "2025",
    colors: "7",
    price: "₹13,47,700"
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
  },

  {
    image: swift,
    slug:"maruti-suzuki-swift",
    name: "MARUTI SUZUKI SWIFT",
    fuel: "PETROL",
    transmission: "MANUAL",
    year: "2026",
    colors: "10",
    price: "₹5,78,900"
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
  },

  {
    image: landCruiser,
    slug:"toyota-land-cruiser-300",
    name: "TOYOTA LAND CRUISER 300",
    fuel: "DIESEL",
    transmission: "AUTOMATIC",
    year: "2026",
    colors: "5",
    price: "₹2,15,60,000"
  },

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
    name: "BMW 3 SERIES LONG WHEELBASE (LWB)",
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
  },

  {
    image: bmwX5,
    slug:"bmw-x5",
    name: "BMW X5",
    fuel: "PETROL",
    transmission: "AUTOMATIC",
    year: "2025",
    colors: "6",
    price: "₹91,30,000"
  },

];


  return (

    <div className="cars-section">

      {/* MAIN TITLE */}
      <h1 className="cars-title">
        Top Selling New Cars
      </h1>

    <div className="brand-section">
    
      {/* HYUNDAI TITLE */}
      <h2 className="brand-title">
        HYUNDAI
      </h2>


      {/* HYUNDAI CARS */}
      <div className="cars-container">

        {hyundaiData.map((car, index) => (

          <div className="cars-card" key={index}>

            <img
              src={car.image}
              alt={car.name}
              className="cars-image"
            />

            <div className="cars-info">

              <div className="cars-title-row">

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

              <div className="cars-bottom-row">

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
          

        ))}

      </div>
      </div>


    <div className="brand-section">

      {/* TATA TITLE */}
      <h2 className="brand-title">
        TATA
      </h2>


      {/* TATA CARS */}
      <div className="cars-container">

        {tataData.map((car, index) => (

          <div className="cars-card" key={index}>

            <img
              src={car.image}
              alt={car.name}
              className="cars-image"
            />

            <div className="cars-info">

              <div className="cars-title-row">

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

              <div className="cars-bottom-row">

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

        ))}

      </div>

      </div>


    <div className="brand-section">

  {/* MAHINDRA TITLE */}
  <h2 className="brand-title">
    MAHINDRA
  </h2>

  {/* MAHINDRA CARS */}
  <div className="cars-container">

    {mahindraData.map((car, index) => (

      <div className="cars-card" key={index}>

        <img
          src={car.image}
          alt={car.name}
          className="cars-image"
        />

        <div className="cars-info">

          <div className="cars-title-row">

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

          <div className="cars-bottom-row">

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

    ))}

  </div>
</div>


<div className="brand-section">

  {/* SUZUKI TITLE */}
  <h2 className="brand-title">
    SUZUKI
  </h2>

  {/* SUZUKI CARS */}
  <div className="cars-container">

    {suzukiData.map((car, index) => (

      <div className="cars-card" key={index}>

        <img
          src={car.image}
          alt={car.name}
          className="cars-image"
        />

        <div className="cars-info">

          <div className="cars-title-row">

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

          <div className="cars-bottom-row">

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

    ))}

    </div>
    
</div>


<div className="brand-section">

  {/* TOYOTA TITLE */}
  <h2 className="brand-title">
    TOYOTA
  </h2>

  {/* TOYOTA CARS */}
  <div className="cars-container">

    {toyotaData.map((car, index) => (

      <div className="cars-card" key={index}>

        <img
          src={car.image}
          alt={car.name}
          className="cars-image"
        />

        <div className="cars-info">

          <div className="cars-title-row">

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

          <div className="cars-bottom-row">

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

    ))}

  </div>

</div>


   <div className="brand-section">

  {/* BMW TITLE */}
  <h2 className="brand-title">
    BMW
  </h2>

  {/* BMW CARS */}
  <div className="cars-container">

    {bmwData.map((car, index) => (

      <div className="cars-card" key={index}>

        <img
          src={car.image}
          alt={car.name}
          className="cars-image"
        />

        <div className="cars-info">

          <div className="cars-title-row">

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

          <div className="cars-bottom-row">

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

    ))}

  </div>

</div>

</div>

  );
}

export default Cars;