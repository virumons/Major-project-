import React from "react";
import { Button } from "../ui/button"; // Import the Button component

const SecondHeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 space-y-6">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
        Post diagram for others
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 text-center text-lg">
        Online diagramming software for teams and <br />
        technical & non-technical individuals.
      </p>

      {/* Diagram Card */}
      <div className="bg-blue-100 rounded-lg shadow-lg p-6 w-[90%] sm:w-1/2">
        {/* Image */}
        <img
          src="/prassna.png"
          alt="Diagram by Prasanna"
          className="rounded-lg w-full"
        />
      </div>

      {/* Using the Button component */}
      <Button className="mt-4 relative group px-8 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full overflow-hidden shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
        <span className="absolute inset-0 w-full h-full bg-black opacity-20 group-hover:opacity-10 transition-opacity"></span>{" "}
        {/* Background overlay for hover effect */}
        <span className="relative z-10">Start now</span>
      </Button>
    </div>
  );
};

export default SecondHeroSection;
