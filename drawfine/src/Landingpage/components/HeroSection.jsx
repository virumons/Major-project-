import React from "react";
import hero2 from "../assets/hero2.svg";

const HeroSection = () => {
  return (
    <div className="mt-5 px-6 lg:px-8 font-montserrat"> 
      <h2
        className="text-2xl sm:text-4xl lg:text-4xl text-center font-bold text-gray-800"
        style={{ marginTop: "-40px" }}
      >
        Accelerate your workflow.
      </h2>

      <div className="flex flex-wrap justify-center items-center mt-12">
        <div className="p-4 w-full lg:w-1/2">
          <img src={hero2} alt="Hero" className="w-full rounded-lg shadow-lg" />
        </div>

        <div className="pt-8 w-full lg:w-1/2 lg:pl-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-700">
            Collaborate with colleagues
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Online diagramming software for teams and individuals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
