import React from "react";
import "./Hero.css";

import heroImage from "../assets/car.hero.photo.png";

function Hero() {

  return (

    <div className="hero-container">

      {/* IMAGE */}

      <img
        src={heroImage}
        alt="hero"
        className="hero-image"
      />

      {/* SEARCH BAR */}

      <div className="search-bar">

        <input
          type="text"
          placeholder="Search model, brand, feature..."
        />

        <button>
          Search
        </button>

      </div>

    </div>

  );
}

export default Hero;