// import React from "react";
// import ReactFlow, {
//   Background,
//   Controls,
//   addEdge,
//   useNodesState,
//   useEdgesState,
// } from "reactflow";
// import "reactflow/dist/style.css";

// const initialNodes = [
//   {
//     id: "1",
//     type: "input",
//     data: { label: "Start Node" },
//     position: { x: 250, y: 25 },
//   },
// ];

// const initialEdges = [];

// const Whiteboard = () => {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//   const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

//   return (
//     <div style={styles.whiteboard}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         fitView
//       >
//         {/* Add a grid background */}
//         <Background
//           variant="lines" // Options: lines, dots
//           gap={20} // Grid gap
//           size={1} // Dot size
//           color="#AFAFAF"
//         />
//         {/* Add controls for zooming and centering */}
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// };

// const styles = {
//   whiteboard: {
//     width: "100%",
//     height: "100vh",
//     backgroundColor: "#f4f4f4",
//   },
// };

import React, { useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
} from "reactflow";
import Topbar from "./Topbar";
import SidepanelL from "./SidepanelL";
import "reactflow/dist/style.css";

const Whiteboard = ({ fileName, setFileName }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const addShape = (shapeName) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      data: { label: shapeName },
      position: { x: Math.random() * 250, y: Math.random() * 250 },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <div style={styles.container}>
      <Topbar fileName={fileName} setFileName={setFileName} />
      <div style={styles.content}>
        <SidepanelL addShape={addShape} />
        <div style={styles.canvas}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            fitView
          >
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  content: {
    display: "flex",
    flex: 1,
  },
  canvas: {
    flex: 1,
    backgroundColor: "#eaeaea",
  },
};

export default Whiteboard;

