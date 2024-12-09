import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const menus = {
    File: ["New", "Open", "Close"],
    Edit: ["Undo", "Redo", "Cut", "Copy", "Paste"],
    Save: ["Save", "Save As"],
    Help: ["Documentation", "About"],
  };

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <div style={styles.topBar} className="px-6 py-3 border-b-2 border-l-neutral-800" >
        <Link to="/dashboard">
        <h1>Back</h1>
        </Link>
      <div style={styles.fileName} className="px-4">
        Untitled.uml</div>
      <div style={styles.menuContainer}>
        {Object.keys(menus).map((menu) => (
          <div key={menu} style={styles.menu}>
            <button
              style={styles.menuButton}
              onClick={() => toggleMenu(menu)}
            >
              {menu}
            </button>
            {openMenu === menu && (
              <ul style={styles.dropdown}>
                {menus[menu].map((item) => (
                  <li key={item} style={styles.dropdownItem}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "Start  ",
    backgroundColor: "#EEEEEE",
    color: "black",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  fileName: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  menuContainer: {
    display: "flex",
    gap: "20px",
  },
  menu: {
    position: "relative",
  },
  menuButton: {
    backgroundColor: "transparent",
    color: "black",
    // border: "none",
    fontSize: "18px",
    cursor: "pointer",
    outline: "none",
  },
  dropdown: {
    position: "absolute",
    top: "30px",
    left: 0,
    backgroundColor: "white",
    color: "#333",
    listStyleType: "none",
    padding: "10px",
    margin: 0,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    zIndex: 1000,
  },
  dropdownItem: {
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "4px",
    transition: "background-color 0.2s",
  },
  dropdownItemHover: {
    backgroundColor: "#f4f4f4",
  },
};

export default Topbar;
