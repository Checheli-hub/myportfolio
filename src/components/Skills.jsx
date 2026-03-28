import React from "react";
import TechStacks from "../TechStack";
import { TechStackData } from "../TechStackData";
import { useState } from "react";

function Skills() {
  const [isActiveCard, setIsActiveCard] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleStacks = isExpanded ? TechStackData : TechStackData.slice(0, 3);

  return (
    <section>
      <div
        className="container pt-5 text-center mt-5 mb-5"
        id="skills"
        style={{ minHeight: "auto", padding: "10px 20px" }}
      >
        <h2
          className="about-title display-4 fw-bold text-white"
          style={{ color: "white", textAlign: "center" }}
        >
          Tech <span className="text-accent">Stack</span>
        </h2>
        <p
          className="text-white mx-auto  fs-2 lh-base text-center mb-5 fw-normal my-4"
          style={{
            maxWidth: "400px",
          }}
        >
          A modern tech stack focused on building responsive and interactive web
          application using React, JavaScript, and UI/UX design tools
        </p>
        <div className="row g-5  px-5 px-md-0 justify-content-center">
          {visibleStacks.map((items) => (
            <TechStacks
              key={items.id}
              title={items.title}
              feature={items.feature}
              description={items.description}
              percentage={items.percentage}
              image={items.image}
              isHighlighted={isActiveCard === items.id}
              onCardClick={() => setIsActiveCard(items.id)}
            />
          ))}
        </div>
        <div className="mt-5">
          <button
            className="btn text-white px-4 py-2"
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              borderRadius: "5px",
              fontWeight: "bold",
              width: "150px",
              backgroundColor: "#4afe80",
              fontSize: "1.2rem",
            }}
          >
            {isExpanded ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Skills;
