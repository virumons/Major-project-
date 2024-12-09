import React, { useState } from "react";

const SidepanelR = () => {
  const [shapeSize, setShapeSize] = useState(100); // Default size
  const [textSize, setTextSize] = useState(16);   // Default text size

  const handleIncrease = (setter) => setter((prev) => prev + 10);
  const handleDecrease = (setter, minValue) => setter((prev) => Math.max(minValue, prev - 10));

  const handleSave = () => {
    alert(`Properties Saved:\nShape Size: ${shapeSize}px\nText Size: ${textSize}px`);
  };

  return (
    <div style={styles.panel}>
      <h3 style={styles.title}>Properties</h3>

      {/* Shape Size */}
      <div style={styles.property}>
        <label style={styles.label}>Shape Size:</label>
        <div style={styles.controls}>
          <button style={styles.button} onClick={() => handleDecrease(setShapeSize, 10)}>
            -
          </button>
          <span style={styles.value}>{shapeSize}px</span>
          <button style={styles.button} onClick={() => handleIncrease(setShapeSize)}>
            +
          </button>
        </div>
      </div>

      {/* Text Size */}
      <div style={styles.property}>
        <label style={styles.label}>Text Size:</label>
        <div style={styles.controls}>
          <button style={styles.button} onClick={() => handleDecrease(setTextSize, 8)}>
            -
          </button>
          <span style={styles.value}>{textSize}px</span>
          <button style={styles.button} onClick={() => handleIncrease(setTextSize)}>
            +
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div style={styles.saveContainer}>
        <button style={styles.saveButton} onClick={handleSave}>
          Save 
        </button>
      </div>
    </div>
  );
};

const styles = {
  panel: {
    width: "300px",
    backgroundColor: "#EEEEEE",
    borderLeft: "1px solid #ccc",
    padding: "15px",
    height: "100vh",
  
  },
  title: {
    textAlign: "left",
    marginBottom: "20px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  property: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "bold",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  button: {
    width: "30px",
    height: "30px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  value: {
    fontSize: "16px",
    minWidth: "50px",
    textAlign: "center",
    fontWeight: "bold",
  },
  saveContainer: {
    textAlign: "left",
    marginTop: "40px",
  },
  saveButton: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default SidepanelR;
