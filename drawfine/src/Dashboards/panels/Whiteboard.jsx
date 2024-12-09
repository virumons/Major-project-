import React from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Start Node" },
    position: { x: 250, y: 25 },
  },
];

const initialEdges = [];

const Whiteboard = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  return (
    <div style={styles.whiteboard}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        {/* Add a grid background */}
        <Background
          variant="lines" // Options: lines, dots
          gap={20} // Grid gap
          size={1} // Dot size
          color="#AFAFAF"
        />
        {/* Add controls for zooming and centering */}
        <Controls />
      </ReactFlow>
    </div>
  );
};

const styles = {
  whiteboard: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
};

export default Whiteboard;

