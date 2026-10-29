import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cars from "./components/Cars";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import CustomerReview from "./components/CustomerReview";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import SellPage from "./components/SellPage";
import Cart from "./components/Cart";
import AdminDashboard from "./components/AdminDashboard";

/* NEW CARS PAGE */
import NewCars from "./components/NewCars";
import HyundaiCars from "./components/HyundaiCars";
import TataCars from "./components/TataCars";
import MahindraCars from "./components/MahindraCars";
import SuzukiCars from "./components/SuzukiCars";
import ToyotaCars from "./components/ToyotaCars";
import BMWCars from "./components/BMWCars";
import ProductPage from "./components/ProductPage";
import ShippingAddress from "./components/ShippingAddress";

function HomePage() {
  return (
    <>
      <Hero />
      <Cars />
      <WhyChooseUs />
      <SellPage />
      <Services />
      <CustomerReview />
      <Footer />
      
    </>
  );
}

function App() {
  return (
    <>

      {/* NAVBAR */}
      <Navbar />

      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={<HomePage />} />

        {/* SIGN IN PAGE */}
        <Route path="/signin" element={<SignIn />} />

        {/* NEW CARS PAGE */}
        <Route path="/new-cars" element={<NewCars />} />

        <Route path="/hyundai-cars" element={<HyundaiCars />} />
        
        <Route path="/tata-cars" element={<TataCars />} />

        <Route path="/mahindra-cars" element={<MahindraCars />} />

        <Route path="/suzuki-cars" element={<SuzukiCars />} />

        <Route path="/toyota-cars" element={<ToyotaCars />} />

        <Route path="/bmw-cars" element={<BMWCars />} />
        
        <Route path="/sell" element={<SellPage />} />

        <Route path="/register" element={<SellPage />} />

        <Route path="/car/:slug" element={<ProductPage />} />
       
        <Route path="/cart" element={<Cart />} />
 
       <Route path="/shipping-address" element={<ShippingAddress />}/>
      
        {/* ADMIN DASHBOARD */}
        <Route path="/admin-dashboard" element={<AdminDashboard />}/>

      </Routes>
    </>
  );
}

export default App;