import { useState } from 'react'
// import './App.css'
import image from './images/vinland.png'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  
  return (
        <div className="w-[100%] p-5">
          {/* Header Section */}
          <div class="flex justify-between items-center mb-6">
            <button class="text-gray-600 hover:text-gray-800 text-lg">
              <Link to="/dashboard">
               Back
               </Link>
            </button>
            <div class="relative w-1/2">
              <input
                type="text"
                placeholder="Search 'use case diagram'"
                class="w-full p-2 pl-10 border rounded-lg border-gray-300 focus:outline-none hover:ring-1 hover:ring-slate-500 focus:ring-1 focus:ring-slate-500"
              />
              <span class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
            <div class="flex items-center">
              <span class="bg-purple-400 text-black h-8 w-8 flex items-center justify-center rounded-full">
                U
              </span>
              <span class="ml-2 text-gray-800 font-medium">Name</span>
            </div>
          </div>

    {/* here the filter option start */}
          <div class="flex gap-4 mb-6 justify-center ">
            {['Use case', 'Flowchart', 'Architecture', 'Dataflow', 'ER-Diagram'].map((filter, index) => (
              <button
                key={index}
                class="px-4 py-2   bg-slate-200 text-gray-800 rounded-lg  hover:bg-gray-200 hover:text-black transition duration-200"
              >
                {filter}
              </button>
            ))}
          </div>
    
          {/* dynamic numbering is required */}
          <div class="grid grid-cols-3 gap-6">
            {Array(8).fill(0).map((_, index) => (
                <div
                  key={index}
                  class="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col"
                >
                  {/* Diagram Thumbnail */}
                  <img
                    src={image} // Replace with actual diagram preview
                    alt="Diagram"
                    class="h-48 w-full object-cover"
                  />
                  <div class="p-4">
                    {/* Diagram Details */}
                    <div class="flex justify-between items-center">
                      <span class='flex items-center'>
                      <span class="bg-purple-400 text-black h-8 w-8 flex items-center justify-center rounded-full align-middle">U
                      </span>
                      <p class="font-medium text-gray-800 m-2">mama</p></span>
                      <p class="text-[15px] text-gray-400">2 mins ago</p>
                    </div>
                    <p class="text-gray-600 text-start text-sm">
                      Name: As per saved. <br />
                      Discription: As the user said.
                    </p>
                    <button class="mt-2 w-full text-black bg-gray-200 hover:bg-gray-400 text-center rounded-lg p-2">
                      Edit in workspace
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
    
  )
}

export default App
