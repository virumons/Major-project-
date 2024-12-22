import React, { useState, useEffect } from "react";
import { dia, shapes, linkTools } from "jointjs";
import "jointjs/dist/joint.css";
import { useLocation } from "react-router-dom";

const Workspace = () => {
  const location = useLocation();
  const { savedDiagram } = location.state || {};
  const [graph, setGraph] = useState(null);
  const [paper, setPaper] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [shapeSize, setShapeSize] = useState(100);
  const [textSize, setTextSize] = useState(16);
  const [title, setTitle] = useState("Untitled");

  const shapeOptions = [
    { name: "Rectangle", type: "rect" },
    { name: "Rounded Rectangle", type: "roundedRect" },
    { name: "Circle", type: "circle" },
    { name: "Ellipse", type: "ellipse" },
    { name: "Diamond", type: "diamond" },
    { name: "Text", type: "text" },
    { name: "Link", type: "link" },
  ];

  useEffect(() => {
    const graphInstance = new dia.Graph();
    const paperInstance = new dia.Paper({
      el: document.getElementById("whiteboard"),
      model: graphInstance,
      width: 800,
      height: 600,
      gridSize: 10,
      drawGrid: true,
      interactive: { linkMove: true },
    });

    paperInstance.on("element:pointerdblclick", (elementView) => {
      const cell = elementView.model;
      const currentText = cell.attr("label/text") || "Edit Me!";
      const newText = prompt("Edit text:", currentText);
      if (newText !== null) {
        cell.attr("label/text", newText);
      }
    });

    paperInstance.on("element:pointerclick", (elementView) => {
      setSelectedElement(elementView.model);
    });

    paperInstance.on("link:pointerclick", (linkView) => {
      setSelectedElement(linkView.model);
    });

    setGraph(graphInstance);
    setPaper(paperInstance);
    
  }, []);
  if (savedDiagram) {
    const img = new Image();
    img.src = savedDiagram;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      alert("Diagram loaded successfully!");
      // Further logic to deserialize if required.
    };
  }

  const addShape = (shapeType) => {
    if (!graph) return;

    let shape;
    const baseAttrs = {
      position: { x: 100, y: 100 },
      size: { width: shapeSize, height: shapeSize },
      attrs: {
        body: { fill: "#f3f4f6", stroke: "#000", strokeWidth: 2 },
        label: { text: "Label", "font-size": textSize, "text-anchor": "middle" },
      },
    };

    switch (shapeType) {
      case "rect":
        shape = new shapes.standard.Rectangle(baseAttrs);
        break;
      case "roundedRect":
        shape = new shapes.standard.RoundedRectangle(baseAttrs);
        break;
      case "circle":
        shape = new shapes.standard.Circle(baseAttrs);
        break;
      case "ellipse":
        shape = new shapes.standard.Ellipse(baseAttrs);
        break;
      case "diamond":
        shape = new shapes.standard.Polygon({
          ...baseAttrs,
          attrs: {
            ...baseAttrs.attrs,
            body: { ...baseAttrs.attrs.body, refPoints: "0,10 10,0 20,10 10,20" },
          },
        });
        break;
      case "text":
        shape = new shapes.standard.Text({
          position: { x: 100, y: 100 },
          attrs: {
            label: { text: "Text", "font-size": textSize, fill: "#000" },
          },
        });
        break;
      case "link":
        shape = new dia.Link({
          source: { x: 50, y: 50 },
          target: { x: 150, y: 150 },
          attrs: {
            line: {
              stroke: "#000",
              strokeWidth: 2,
            },
          },
        });
        break;
      default:
        return;
    }

    graph.addCell(shape);
  };

  const handleResizeShape = () => {
    if (selectedElement?.isElement()) {
      selectedElement.resize(shapeSize, shapeSize);
      selectedElement.attr("label/font-size", textSize);
    }
  };

  const handleDeleteElement = () => {
    if (selectedElement) {
      selectedElement.remove();
      setSelectedElement(null);
    }
  };

  const downloadDiagram = (format) => {
    const svgContent = paper.svg.cloneNode(true);

    if (format === "svg") {
      const svgData = new XMLSerializer().serializeToString(svgContent);
      const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${title}.svg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      const canvas = document.createElement("canvas");
      canvas.width = 800;
      canvas.height = 600;
      const ctx = canvas.getContext("2d");

      const img = new Image();
      const svgData = new XMLSerializer().serializeToString(svgContent);
      const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        if (format === "png" || format === "jpeg") {
          const dataURL = canvas.toDataURL(`image/${format}`);
          const link = document.createElement("a");
          link.href = dataURL;
          link.download = `${title}.${format}`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      };
      img.src = url;
    }
  };

  const saveDiagramLocally = () => {
    const svgContent = paper.svg.cloneNode(true);
  
    // Convert the SVG to a JPG image
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
  
    const img = new Image();
    const svgData = new XMLSerializer().serializeToString(svgContent);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
  
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
  
      const dataURL = canvas.toDataURL("image/jpeg");  // Save as JPG
      localStorage.setItem("umlDiagram", dataURL);  // Store as Data URL in localStorage
      alert("Diagram saved locally as JPG!");
    };
  
    img.src = url;
  };
  
  
  return (
    <div className="flex flex-col h-screen">
      {/* Topbar */}
      <div className="flex items-center p-4 bg-gray-200 border-b">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => alert("Back clicked!")}>
          Back
        </button>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="ml-4 px-2 py-1 border rounded text-lg"
        />
      </div>

      <div className="flex h-full">
        {/* Shape Panel */}
        <div className="w-1/4 p-4 bg-gray-100 border-r">
          <h3 className="text-lg font-semibold mb-4">Shapes</h3>
          <div className="grid grid-cols-2 gap-4">
            {shapeOptions.map((shape) => (
              <div
                key={shape.type}
                className="p-2 bg-white border rounded cursor-pointer hover:bg-gray-200"
                onClick={() => addShape(shape.type)}
              >
                {shape.name}
              </div>
            ))}
          </div>
        </div>

        {/* Whiteboard */}
        <div className="flex-1 bg-gray-200" id="whiteboard"></div>

        {/* Properties Panel */}
        <div className="w-1/4 p-4 bg-gray-100 border-l">
          <h3 className="text-lg font-semibold mb-4">Properties</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium">Shape Size:</label>
            <input type="range" min="50" max="300" value={shapeSize} onChange={(e) => setShapeSize(Number(e.target.value))} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Text Size:</label>
            <input type="range" min="10" max="50" value={textSize} onChange={(e) => setTextSize(Number(e.target.value))} />
          </div>
          <button className="w-full py-2 bg-blue-500 text-white rounded" onClick={handleResizeShape}>
            Apply Changes
          </button>
          <button className="w-full py-2 bg-red-500 text-white rounded mt-2" onClick={handleDeleteElement}>
            Delete Selected
          </button>
          <h3 className="text-lg font-semibold mt-4">Download</h3>
          <button className="w-full py-2 bg-green-500 text-white rounded mt-2" onClick={() => downloadDiagram("svg")}>
            Download as SVG
          </button>
          <button className="w-full py-2 bg-green-500 text-white rounded mt-2" onClick={() => downloadDiagram("png")}>
            Download as PNG
          </button>
          <button className="w-full py-2 bg-green-500 text-white rounded mt-2" onClick={() => downloadDiagram("jpeg")}>
            Download as JPEG
          </button>
          <button className="w-full py-2 bg-green-500 text-white rounded mt-2" onClick={() => saveDiagramLocally()}>
            Save Locally
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
