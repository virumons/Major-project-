import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [savedFiles, setSavedFiles] = useState([]);
  const [savedImage, setSavedImage] = useState(null); // Store the saved image
  const navigate = useNavigate();

  // Fetch saved files from localStorage
  useEffect(() => {
    const files = [];
    const savedDiagram = localStorage.getItem("umlDiagram");
    if (savedDiagram) {
      files.push("Saved UML Diagram");
      setSavedImage(savedDiagram); // Set the saved image from localStorage
    }
    setSavedFiles(files);
  }, []);

  const handleEditFile = () => {
    const savedDiagram = localStorage.getItem("umlDiagram");
    if (savedDiagram) {
      navigate("/Workspace", { state: { savedDiagram } }); // Pass the diagram data
    } else {
      alert("No saved diagram found.");
    }
  };

  return (
    <div className="p-6 font-sans bg-gray-50 min-h-screen">
      <header className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-purple-300 flex items-center justify-center">
            <span className="text-lg text-white font-bold">U</span>
          </div>
          <span className="ml-4 text-lg font-medium">Name</span>
        </div>
      </header>

      <div className="mt-8 flex space-x-4">
        <button className="px-6 py-2 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-400">
          <Link to="./Workspace">New file</Link>
        </button>
        <button className="px-6 py-2 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-400">
          New post
        </button>
        <button className="px-6 py-2 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-400">
          <Link to="/App">Explore</Link>
        </button>
      </div>

      <section className="mt-12 h-44">
        <h2 className="text-xl font-semibold mb-4">Recent Files</h2>
        <div className="flex space-x-4">
          {savedFiles.length > 0 ? (
            savedFiles.map((file, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100"
              >
                {file}
              </div>
            ))
          ) : (
            <p className="text-gray-600">No saved files available</p>
          )}
        </div>
      </section>

      <section className="mt-4 h-full w-full">
        <h2 className="text-xl font-semibold mb-4">Posts</h2>
        <div className="grid grid-cols-3 gap-6">
          {savedFiles.length > 0 ? (
            savedFiles.map((file, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
              >
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center">
                      <span className="bg-purple-400 text-black h-8 w-8 flex items-center justify-center rounded-full align-middle">
                        U
                      </span>
                      <p className="font-medium text-gray-800 m-2">username</p>
                    </span>
                  </div>
                  <span className="flex">
                    <p className="text-gray-600 text-sm">
                      Name: {file} <br />
                      Description: User-saved UML diagram.
                    </p>
                    <button
                      className="mt-2 ml-36 w-64 h-11 text-black bg-gray-200 hover:bg-gray-400 text-center rounded-lg p-2"
                      onClick={handleEditFile}
                    >
                      Edit File
                    </button>
                  </span>
                </div>
                {/* Display the saved diagram image */}
                {savedImage ? (
                  <img src={savedImage} alt="Saved UML Diagram" className="h-48 w-full object-cover" />
                ) : (
                  <p>No diagram saved.</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-600">No saved diagrams to display</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
