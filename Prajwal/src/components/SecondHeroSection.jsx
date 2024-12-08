import React from "react";
import Button from "./Button";

const SecondHeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-16 space-y-6">
      <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center">
        Post diagrams for others
      </h2>

      <p className="text-gray-600 text-center text-lg">
        Online diagramming software for teams and technical & non-technical individuals.
      </p>

      <div className="bg-blue-100 rounded-lg shadow-lg p-6 w-[90%] sm:w-1/2">
        <img
          src="src/assets/prassna.png"
          alt="Diagram by Prasanna"
          className="rounded-lg w-full"
        />
      </div>

      <Button className="bg-blue-500 hover:bg-indigo-600 rounded-full">
        Start Now
      </Button>
    </div>
  );
};

export default SecondHeroSection;
