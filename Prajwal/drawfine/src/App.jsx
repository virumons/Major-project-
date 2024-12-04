import "./App.css";
import { Outlet } from "react-router-dom";
import HeroSection from "./components/custom/HeroSection";
import SecondHeroSection from "./components/custom/SecondHeroSection";
import Footer from "./components/custom/Footer";
import Header from "@/components/custom/Header";

function App() {
  return (
    <>
      <div className="relative z-10">
        <Header />
      </div>

      {/* Outlet will render the current route's component */}
      <div className="main-content">
        <Outlet />
      </div>

      {/* Spacing between sections */}
      <div className="space-y-16">
        <HeroSection />
        <SecondHeroSection />
      </div>

      {/* Footer with extra spacing */}
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}

export default App;
