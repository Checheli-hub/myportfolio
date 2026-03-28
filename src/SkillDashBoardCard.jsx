import React from "react";

function SkillDashBoardCard({ title, experience, percentage }) {
  <div className="container col-12 col-md-4">
    <div
      style={{
        border: "1px solid #00ff88",
        boxShadow: "0 0 15px rgba(0, 255, 136,0.3",
        borderRadius: "12px",
        backgroundColor: "#0d1b2a",
        display: "flex",
        flexDirection: "column",
        maxWidth: "400px",
        margin: "0 auto",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>{title}</p>
        <p>{percentage}</p>
      </div>

      <div
        style={{
          height: "50px",
          width: "100px",
          backgroundColor: "red",
        }}
      >
        <p>{experience}</p>
      </div>
    </div>
  </div>;
}

export default SkillDashBoardCard;
