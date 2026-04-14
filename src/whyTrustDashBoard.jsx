import React from "react";

function WhyTrustDashBoard({ title, description, image: Icon }) {
  return (
    <article className="container">
      <div
        className="p-4 h-100"
        style={{
          backgroundColor: "#020c1b",
          border: "1px solid #00ff88",
          borderRadius: "10px",
          minHeight: "100px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "20px 25px",
          marginBottom: "20px",
          boxShadow: "0 4px 15px rgba(90, 80, 79, 0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "15px",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          {Icon && <Icon size={24} color="#00ff88" aria-hidden="true" />}
          <h3
            style={{
              margin: 0,
            }}
            className="text-white fw-bold fs-3 text-start"
          >
            {title}
          </h3>
        </div>
        <p
          className="text-white  mt-3"
          style={{
            lineHeight: "1.8",
            maxWidth: "350px",
            fontSize: "1.2rem",
            marginLeft: "4rem",
          }}
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export default WhyTrustDashBoard;
