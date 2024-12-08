// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-100 rounded-lg py-8 px-12">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className="flex items-center mb-6 lg:mb-0">
          <div className="bg-indigo-500 p-3 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.75 5.75l-3.5 3.5m0 0l3.5 3.5m-3.5-3.5h14.5m0 0l-3.5-3.5m3.5 3.5l-3.5 3.5"
              />
            </svg>
          </div>
          <span className="ml-4 text-xl font-semibold text-gray-800">
            Draw.Fine
          </span>
        </div>

        <div className="flex flex-col lg:flex-row text-center lg:text-left lg:space-x-16">
          <div className="mb-6 lg:mb-0">
            <h3 className="text-lg font-medium text-gray-800">Quick links</h3>
            <ul className="mt-2 space-y-2">
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Link</li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Link</li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Link</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800">Contact us</h3>
            <p className="mt-2 text-gray-600">Address, Nalasopara</p>
            <p className="mt-2 text-gray-600">+91 884515620</p>
            <p className="mt-2 text-gray-600">xyz@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center lg:text-right text-gray-600">
        Copyright © 2024
      </div>
    </footer>
  );
};

export default Footer;
