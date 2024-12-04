import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-6 px-5 flex justify-between bg-transparent text-white items-center">
      {/* Logo and Title */}
      <div className="flex items-center space-x-3">
        <img src="/logo.svg" alt="Logo" width={100} height={100} />
        <span className="text-2xl font-bold text-black">Draw.Fine</span>
      </div>

      {/* Get Started Button */}
      <Link to="/auth/sign-in">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default Header;
