import React from "react";


const Horizontal = ({ active, onClick }) => {
  return (
    <div className="horizontal-dot-wrapper">
      <div
        className={`horizontal-dot ${active ? "active" : ""}`}
        onClick={onClick}
        style={{ marginTop: "80px" }}
      ></div>
    </div>
  );
};

export default Horizontal;
