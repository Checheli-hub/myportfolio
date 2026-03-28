import React from "react";
import { BsDot } from "react-icons/bs";

function ServiceCard({ title, description, features }) {
  return (
    <div className="col-12 col-md-4">
      <div
        className="p-4 h-100"
        style={{
          backgroundColor: "#020c1b",
          border: "2px solid #00ff88",
          borderRadius: "10px",
          minHeight: "400px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="mb-4"
          style={{
            height: "60px",
            width: "60px",
            backgroundColor: "#00ff88",
            borderRadius: "10px",
          }}
        ></div>
        <h3 className="text-white fw-bold fs-2 mb-3 text-start mb-4 px-3">
          {title}
        </h3>
        <p
          className="text-white  mb-4 text-start px-3"
          style={{
            lineHeight: "1.8",
            maxWidth: "300px",
            fontSize: "1.4rem",
          }}
        >
          {description}
        </p>
        <ul className="list-unstyled  p-0  text-start">
          {features.map((point, index) => (
            <li
              key={index}
              className="text-white mb-2 fs-5 d-flex align-items-start "
              style={{
                lineHeight: "1.6",
                marginLeft: "-5px",
              }}
            >
              <span className=" align-items-start">
                <BsDot size={40} color="#00ff88" />
              </span>
              <span
                style={{
                  marginTop: "9px",
                }}
              >
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceCard;
