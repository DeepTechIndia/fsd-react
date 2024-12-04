import React, { createContext } from "react";

// Define ButtonContext
export const ButtonContext = createContext();

// Provide shared styles and properties for buttons
export const ButtonProvider = ({ children }) => {
  const buttonStyles = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    hover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <ButtonContext.Provider value={buttonStyles}>
      {children}
    </ButtonContext.Provider>
  );
};
