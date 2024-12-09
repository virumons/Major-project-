
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SecondHeroSection from "./components/SecondHeroSection";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Outlet />
      </div>

      <div className="mt-16">
        <HeroSection />
      </div>

      <div className="mt-16">
        <SecondHeroSection />
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
}

export default App;
