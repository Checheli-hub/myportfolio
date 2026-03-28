import React from "react";

function ProjectDashBoardCard({ title, category, image, description }) {
  return (
    <div className="col-12 col-md-4">
      <div
        className="p-4 h-100 "
        style={{
          border: "1px solid #00ff88",
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={image}
            alt="projects images"
            style={{
              height: "300px",
              width: "70%",
            }}
          />
        </div>
        <h3 className="text-white">{title}</h3>
        <p>{description}</p>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "green",
          }}
        >
          {category}
        </button>
      </div>
    </div>
  );
}

export default ProjectDashBoardCard;
