import React from "react";
import { useLocation, Link } from "react-router-dom";
import image from './images/sqlimg.png';
import App from "./App";

const Dashboard = () => {
  const location = useLocation(); // Get state passed via navigate
  const email = location.state?.email || "Unknown User"; // Fallback if no email is provided

  const recentFiles = ["untitled", "umlUseCase1"];
  const templates = ["Use case", "Flowchart", "Architecture", "Dataflow", "ER-Diagram"];

  return (
    <div className="p-6 font-sans bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-purple-300 flex items-center justify-center">
            <span className="text-lg text-black font-bold">O</span>
          </div>
          <div className="ml-4">
            <span className="text-lg font-medium">{email}</span>
          </div>
        </div>
      </header>

      {/* Action Buttons */}
      <div className="mt-8 flex space-x-4">
        <button className="px-6 py-2 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-400">
          <Link >New file</Link>
        </button>
        <button className="px-6 py-2 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-400">
          New post
        </button>
        <button className="px-6 py-2 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-400">
          <Link to={'./App.jsx'}/>Explore
        </button>
      </div>

      {/* Recent Files */}
      <div className="flex">
        <section className="mt-12 h-44 w-1/3">
          <h2 className="text-xl font-semibold mb-4">Recent</h2>
          <div className="flex space-x-4">
            {recentFiles.map((file, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100"
              >
                {file}
              </div>
            ))}
          </div>
        </section>

        {/* Templates */}
        <section className="mt-12 h-44 w-1/2">
          <h2 className="text-xl font-semibold mb-4">Templates</h2>
          <div className="flex space-x-4 flex-wrap">
            {templates.map((template, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100"
              >
                {template}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Posts */}
      <section className="mt-4 h-full w-full">
        <h2 className="text-xl font-semibold mb-4">Posts</h2>
        <div className="grid grid-cols-3 gap-6">
          {Array(6).fill(0).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col">
              <div className="p-4">
                {/* Diagram Details */}
                <div className="flex justify-between items-center">
                  <span className="flex items-center">
                    <span className="bg-purple-400 text-black h-8 w-8 flex items-center justify-center rounded-full align-middle">
                      O
                    </span>
                    <p className="font-medium text-gray-800 m-2">{email}</p>
                  </span>
                </div>
                <span className="flex">
                  <p className="text-gray-600 text-sm">
                    Name: As per saved. <br />
                    Description: As the user said.
                  </p>

                  <button className="mt-2 ml-36 w-64 h-11 text-black bg-gray-200 hover:bg-gray-400 text-center rounded-lg p-2">
                    <Link to="/Workspace">Edit File</Link>
                  </button>
                </span>
              </div>
              <img src={image} alt="Diagram" className="h-48 w-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
