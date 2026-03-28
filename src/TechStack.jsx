import React from "react";

function TechStacks({
  title,
  feature,
  description,
  percentage,
  image,
  isHighlighted,
  onCardClick,
}) {
  return (
    <div className="col-12 col-md-4">
      <div
        onClick={onCardClick}
        className="p-4 h-100 "
        style={{
          border: isHighlighted ? "1px solid #00ff88" : "1px solid #1e2d3d",
          boxShadow: isHighlighted ? "0 0 15px rgba(0, 255, 136,0.3" : "null",
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
          className="mb-5 d-flex align-items-center"
          style={{
            justifyContent: "space-between",
          }}
        >
          <div className="d-flex align-items-center">
            <img
              style={{
                height: "45px",
                width: "45px",
                borderRadius: "10px",
              }}
              src={image}
              alt="icon images"
            />
            <p className="mx-3 text-white">{title}</p>
          </div>

          <p className="text-accent fs-5"> {percentage}</p>
        </div>

        <div
          className="mt-2"
          style={{
            height: "6px",
            width: "100%",
            background: "#1e2d3d",
            borderRadius: "10px",
          }}
        ></div>

        <p
          className="text-white mt-4"
          style={{
            fontWeight: "300",
            fontSize: "1.3rem",
            textAlign: "left",
          }}
        >
          {feature}
        </p>
        <p className="text-secondary text-start mt-2 fs-5">{description}</p>
      </div>
    </div>
  );
}

export default TechStacks;
