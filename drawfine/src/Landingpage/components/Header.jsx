
import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="p-6 flex justify-between items-center bg-transparent relative"
      style={{
        backgroundImage: `url('src/assets/backgroundpattern.svg')`,
        backgroundPosition: "top left", 
        backgroundSize: "cover", 
        height: "200px", 
      }}
    >
      <div className="flex items-center space-x-3">
      <img src="src/assets/logo.svg" alt="Logo" width={65} height={65} />
        <span className="text-2xl font-bold text-black">Draw.Fine</span>
      </div>

      <Link to="/auth/sign-in">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default Header;
