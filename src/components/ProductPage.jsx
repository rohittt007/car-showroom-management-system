import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import Features from "../components/Features";
import { useParams } from "react-router-dom";
import carsData from "../components/CarsData";
import { useNavigate } from "react-router-dom";



function ProductPage() {

const navigate = useNavigate();

const handleBookNow = () => {

  const cartItem = {
    name: car.name,
    image: selectedImage,
    color: selectedColor.name,
    category: car.category || "SUV",
    type: "NEW",
    variant: selectedVariant.name,
    year: 2026,
    quantity: 1,
    couponDiscount: 0,
    finalPrice: selectedVariant.finalPrice
  };

  // Purani car replace ho jayegi
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItem)
  );

  navigate("/cart");
};

  // GET PARAM
  const { slug } = useParams();

  // FIND CAR
  const car = carsData.find(
    (item) => item.slug === slug
  );

  // IF CAR NOT FOUND
  if (!car) {
    return <h1>Car Not Found</h1>;
  }
  // CART DATA
const currentCart =
  JSON.parse(localStorage.getItem("cart"));

const isCurrentCarAdded =
  currentCart?.name === car.name;

  // VARIANTS
  const variants = car?.variants || [];

  // FIRST VARIANT
  const firstVariant = variants[0] || {};

  // FIRST COLOR
  const firstColor =
    firstVariant.colors?.[0] || {};

  // STATES
  const [selectedVariant, setSelectedVariant] =
    useState(firstVariant);

  const [selectedColor, setSelectedColor] =
    useState(firstColor);

  const [selectedImage, setSelectedImage] =
    useState(firstColor.images?.[0] || "");

  // CURRENT INDEX
  const [currentIndex, setCurrentIndex] =
    useState(0);

  // RESET DATA WHEN SLUG CHANGES
  useEffect(() => {

    setSelectedVariant(firstVariant);

    setSelectedColor(firstColor);

    setSelectedImage(
      firstColor.images?.[0] || ""
    );

    setCurrentIndex(0);

  }, [slug]);

  // NEXT IMAGE
  const nextSlide = () => {

    if (!selectedColor.images?.length) return;

    const nextIndex =
      currentIndex === selectedColor.images?.length - 1
        ? 0
        : currentIndex + 1;

    setCurrentIndex(nextIndex);

    setSelectedImage(
      selectedColor.images[nextIndex]
    );

  };

  // PREVIOUS IMAGE
  const prevSlide = () => {

    if (!selectedColor.images?.length) return;

    const prevIndex =
      currentIndex === 0
        ? selectedColor.images.length - 1
        : currentIndex - 1;

    setCurrentIndex(prevIndex);

    setSelectedImage(
      selectedColor.images[prevIndex]
    );

  };

  return (

    <div className="product-page">

      {/* LEFT SIDE */}
      <div className="left-side">

        {/* TOP CONTENT */}
        <div className="product-top">

          <button
            className="back-btn"
            onClick={() => window.history.back()}
          >
            ← Back to products
          </button>

          <h1 className="main-car-title">
            {car.name}
          </h1>

        </div>

        {/* IMAGE CONTAINER */}
        <div className="main-image-container">

          {/* LEFT BUTTON */}
          <button
            className="arrow left-arrow"
            onClick={prevSlide}
          >
            ❮
          </button>

          {/* MAIN IMAGE */}
          <img
            src={selectedImage}
            alt={car.name}
            className="main-image"
          />

          {/* RIGHT BUTTON */}
          <button
            className="arrow right-arrow"
            onClick={nextSlide}
          >
            ❯
          </button>

        </div>

        {/* THUMBNAILS */}
        <div className="thumbnail-container">

          {selectedColor.images?.map((img, index) => (

            <img
              key={index}
              src={img}
              alt={`thumbnail-${index}`}
              className={`thumbnail ${
                selectedImage === img
                  ? "active"
                  : ""
              }`}
              onClick={() => {

                setSelectedImage(img);

                setCurrentIndex(index);

              }}
            />

          ))}

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="right-side">

        {/* PRICE BOX */}
        <div className="price-box">

          <div className="price-row">
            <span>Ex-Showroom</span>
            <span>{selectedVariant.exShowroom}</span>
          </div>

          <div className="price-row">
            <span>Insurance</span>
            <span>{selectedVariant.insurance}</span>
          </div>

          <div className="price-row">
            <span>Road Tax</span>
            <span>{selectedVariant.roadTax}</span>
          </div>

          <div className="price-row">
            <span>TCS(1%)</span>
            <span>{selectedVariant.tcs}</span>
          </div>

          <hr />

          <div className="price-row total-price">
            <span>On Road Price</span>
            <span>{selectedVariant.onRoadPrice}</span>
          </div>

        </div>

        {/* EMPLOYMENT TYPE */}
        <div className="employment-box">

          <label>
            Employment Type
          </label>

          <select className="employment-select">

            <option>
              Select Employment Type
            </option>

            <option>
              Salaried
            </option>

            <option>
              Self Employed
            </option>

            <option>
              Business Owner
            </option>

            <option>
              Government Employee
            </option>

          </select>

        </div>

        {/* DISCOUNT BOX */}
        <div className="discount-box">

          <h2>
            Discounts:
          </h2>

          <div className="price-row">
            <span>Insurance</span>
            <span>
              {selectedVariant.insuranceDiscount}
            </span>
          </div>
          
          
          <div className="price-row">
  <span>Brand Offer</span>
  <span>
    {selectedVariant.brandOffer}
  </span>
</div>


<div className="price-row">
            <span>Carmotive Discount</span>
            <span>
              {selectedVariant.carmotiveDiscount}
            </span>
          </div>

          <hr />

          <div className="price-row total-discount">
            <span>Total Discount</span>
            <span>
              {selectedVariant.totalDiscount}
            </span>
          </div>

        </div>

        {/* FINAL PRICE */}
        <div className="final-price-box">

          <div className="price-row total-price">

            <span>
              Final Price
            </span>

            <span>
              {selectedVariant.finalPrice}
            </span>

          </div>

        </div>

        {/* STATUS */}
        <div className="status-row">

          <span>
            Status
          </span>

          <span className="ready-status">
            Ready to Deliver
          </span>

        </div>

        {/* VARIANT BOX */}
        <div className="variant-box">

          <label>
            Select Car Variant
          </label>

          <select
            className="variant-select"
            value={selectedVariant.name || ""}

            onChange={(e) => {

              const foundVariant =
                variants.find(
                  (variant) =>
                    variant.name === e.target.value
                );

              if (!foundVariant) return;

              setSelectedVariant(foundVariant);

              setSelectedColor(
                foundVariant.colors?.[0] || {}
              );

              setSelectedImage(
                foundVariant.colors?.[0]?.images?.[0] || ""
              );

              setCurrentIndex(0);

            }}
          >

            {variants.map((variant, index) => (

              <option
                key={index}
                value={variant.name}
              >
                {variant.name}
              </option>

            ))}

          </select>

        </div>

        {/* COLOR SECTION */}
        <div className="color-section">

          <label className="color-label">
            Color:
          </label>

          <div className="color-options">

            {selectedVariant.colors?.map(
              (color, index) => (

                <div
                  key={index}

                  className={`color-circle ${color.colorClass}
                  ${
                    selectedColor.name === color.name
                      ? "active-color"
                      : ""
                  }`}

                  onClick={() => {

                    setSelectedColor(color);

                    setSelectedImage(
                      color.images?.[0] || ""
                    );

                    setCurrentIndex(0);

                  }}

                ></div>

              )
            )}

          </div>

          <p className="selected-color">

            Selected:
            {" "}
            {selectedColor.name}

          </p>

        </div>

        {/* BOOK NOW BUTTON */}
 <button
  className="book-now-btn"
  onClick={handleBookNow}
  disabled={isCurrentCarAdded}
>
  {isCurrentCarAdded
    ? "Already Added To Cart"
    : currentCart
    ? "Replace & Add To Cart"
    : "Book Now"}
</button>

        {/* EXTRA BUTTONS */}
        <div className="extra-buttons">

          <button className="emi-btn">

            Know Your EMI

          </button>

          <button className="drive-btn">

            Book Test Drive

          </button>

        </div>

      </div>

      {/* AVAILABLE VARIANTS */}
      <div className="available-variants-section">

        <div className="variant-top">

          <h2>
            Available Variants
          </h2>

        </div>

        <div className="variants-grid">

          {variants.map((variant, index) => (

            <div
              className={`variant-card ${
                selectedVariant.name === variant.name
                  ? "selected-card"
                  : ""
              }`}

              key={index}

              onClick={() => {

                setSelectedVariant(variant);

                setSelectedColor(
                  variant.colors?.[0] || {}
                );

                setSelectedImage(
                  variant.colors?.[0]?.images?.[0] || ""
                );

                setCurrentIndex(0);

              }}

            >

              {/* SELECTED TAG */}
              {selectedVariant.name ===
                variant.name && (

                <span className="selected-tag">

                  Selected

                </span>

              )}

              <h3>
                {variant.name}
              </h3>

              <div className="variant-info">

                <p>
                  Price:
                </p>

                <span>
                  {variant.finalPrice}
                </span>

              </div>

              <div className="variant-info">

                <p>
                  Fuel:
                </p>

                <span>
                  {variant.fuel}
                </span>

              </div>

              <div className="variant-info">

                <p>
                  Transmission:
                </p>

                <span>
                  {variant.transmission}
                </span>

              </div>

              <hr />

              <p className="available-color-text">
                Available Colors:
              </p>

              <div className="variant-colors">

                {variant.colors?.map(
                  (color, colorIndex) => (

                    <div
                      key={colorIndex}

                      className={`small-color
                      ${color.colorClass}`}
                    ></div>

                  )
                )}

              </div>

            </div>

          ))}

        </div>

        <Features
          features={selectedVariant.features || []}
        />

      </div>

    </div>

  );
}

export default ProductPage;