import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-screen relative"
      style={{
        backgroundImage: `url('/backgroundpattern.svg')`,
      }}
    >
      <section>
        <div
          className="absolute left-10 top-[150px] text-black text-left leading-tight"
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
          <Button className="absolute left-20 top-[400px]">Get Started</Button>
        </Link>

        <div className="absolute left-20 top-[440px] text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-500">
            Login
          </Link>
        </div>

        <div className="absolute right-0 top-[100px] flex justify-center items-center h-full">
          <img
            src="/hero1.svg"
            alt="Hero"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
