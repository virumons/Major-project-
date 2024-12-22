// import React, { useState } from "react";

// // Define shapes with SVG paths for multiple categories
// const shapesData = {
//   General: [
//     { svg: <rect width="40" height="20" fill="#888" /> },
//     {  svg: <rect width="30" height="30" fill="#888" /> },
//     {  svg: <circle cx="20" cy="20" r="15" fill="#888" /> },
//     {  svg: <ellipse cx="20" cy="15" rx="20" ry="10" fill="#888" /> },
//     { svg: <polygon points="15,5 30,30 0,30" fill="#888" /> },
//     {  svg: <ellipse cx="20" cy="10" rx="20" ry="10" fill="#888" /> },
//     {  svg: <path d="M5 20 L25 20 L25 15 L40 25 L25 35 L25 30 L5 30 Z" fill="#888" /> },
//     {  svg: <line x1="5" y1="20" x2="35" y2="20" stroke="#888" strokeDasharray="4" strokeWidth="2" /> },
//   ],
//   "Use Case Diagram": [
//     {  svg: <circle cx="20" cy="10" r="10" fill="#888" /> },
//     {
   
//       svg: <ellipse cx="20" cy="15" rx="20" ry="10" fill="#888" />,
//     },
//     {  svg: <rect width="40" height="20" fill="none" stroke="#888" strokeWidth="2" /> },
//     {
  
//       svg: <line x1="5" y1="20" x2="35" y2="20" stroke="#888" strokeWidth="2" />,
//     },
//   ],
//   "Class Diagram": [
//     {  svg: <rect width="40" height="30" fill="#888" /> },
//     { svg: <rect width="40" height="20" fill="none" stroke="#888" strokeWidth="2" /> },
//     {  svg: <rect width="40" height="30" fill="#888" /> },
//     {  svg: <rect width="50" height="30" fill="none" stroke="#888" strokeWidth="2" /> },
//   ],
//   "Sequence Diagram": [
//     {
    
//       svg: (
//         <>
//           <circle cx="20" cy="10" r="5" fill="#888" />
//           <line x1="20" y1="15" x2="20" y2="35" stroke="#888" strokeWidth="2" />
//         </>
//       ),
//     },
//     {
  
//       svg: <path d="M5 20 L20 10 L35 20 L5 20" fill="none" stroke="#888" strokeWidth="2" />,
//     },
//     {
   
//       svg: <rect x="15" y="10" width="10" height="30" fill="#888" />,
//     },
//     {
      
//       svg: <line x1="5" y1="5" x2="35" y2="35" stroke="#888" strokeWidth="2" />,
//     },
//   ],
// };

// const SidepanelL = () => {
//   const [expandedCategory, setExpandedCategory] = useState(null);

//   const toggleCategory = (category) => {
//     setExpandedCategory((prev) => (prev === category ? null : category));
//   };

//   return (
//     <div className="w-72 bg-gray-100 border-r border-gray-300 h-screen p-4 overflow-y-auto">
//       {Object.keys(shapesData).map((category) => (
//         <div key={category} className="mb-6">
//           <button
//             className="w-full py-2 text-left text-sm font-semibold text-gray-700 border-b border-gray-300 focus:outline-none"
//             onClick={() => toggleCategory(category)}
//           >
//             {category}
//           </button>
//           {expandedCategory === category && (
//             <div className="grid grid-cols-4 gap-4 mt-4">
//               {shapesData[category].map((shape) => (
//                 <div
//                   key={shape.name}
//                   className="flex flex-col justify-center items-center rounded-md cursor-pointer hover:bg-gray-300"
//                   onClick={() => console.log(`Selected: ${shape.name}`)}
//                 >
//                   <svg width="50" height="50" viewBox="0 0 40 40">
//                     {shape.svg}
//                   </svg>
//                   <div className="text-center text-sm font-medium mt-2">
//                     {shape.name}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };
import React from "react";

const shapesData = {
  General: [
    { name: "Rectangle", svg: <rect width="40" height="20" fill="#888" /> },
    { name: "Circle", svg: <circle cx="20" cy="20" r="15" fill="#888" /> },
  ],
};

const SidepanelL = ({ addShape }) => {
  return (
    <div style={styles.panel}>
      {Object.keys(shapesData).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <div style={styles.shapesContainer}>
            {shapesData[category].map((shape) => (
              <div
                key={shape.name}
                style={styles.shape}
                onClick={() => addShape(shape.name)}
              >
                <svg width="50" height="50">{shape.svg}</svg>
                <p>{shape.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  panel: {
    width: "200px",
    borderRight: "1px solid #ccc",
    padding: "10px",
    backgroundColor: "#f9f9f9",
  },
  shapesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px",
  },
  shape: {
    textAlign: "center",
    cursor: "pointer",
  },
};

export default SidepanelL;
