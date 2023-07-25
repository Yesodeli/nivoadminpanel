import React from "react";

const Box = ({ text }) => {
  return (
    <div
      style={{
        backgroundColor: "#003366", // Uyumlu renk: Turuncu tonu (Web rengi: orange)
        padding: "16px",
        borderRadius: "15px",
        // position: "absolute",
        bottom: "10px",
        // left: "10px",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#CCCCCC",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.55)", // Add box shadow for a 3D effect
        cursor: "pointer", // Change cursor to indicate interactivity
        transition: "transform 0.2s", // Add smooth transition on hover
        zIndex: 999, // Set a higher z-index to bring it above other elements
      }}
    >
      {/* Use newline character to create a line break */}
      {text.split("1").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Box;
