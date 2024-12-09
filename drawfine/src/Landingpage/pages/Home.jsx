import React from "react";
import { Link } from "react-router-dom";
import hero1 from '../assets/hero1.svg'

const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-screen relative"
      style={{
        backgroundImage: `url('../assets/backgroundpattern.svg')`, // updated path
      }}
    >
      <section>
        <div
          className="absolute left-10 top-[20px] text-black text-left leading-tight"
          style={{ fontFamily: "Montserrat", fontSize: "40px" }}
        >
          Online diagramming software for
          <br />
          teams and technical &<br />
          non-technical
          <br />
          individuals.
        </div>

        <Link to="/auth/sign-in">
          <button className="absolute left-[4%] top-[250px] bg-blue-500 text-white px-6 py-2 rounded-md">
            Get Started
          </button>
        </Link>

        <div className="absolute left-[4%] top-[290px] text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-500">
            Login
          </Link>
        </div>

        <div className="absolute right-0 top-[-115px] flex justify-center items-center h-full">
          <img
            src={hero1} 
            alt="Hero"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
