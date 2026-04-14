import React from "react";
import ProjectDashBoardCard from "../ProjectDashBoardCard";
import { ProjectDashBoard } from "../ProjectDashBoard";
import { useState } from "react";

function Projects() {
  const categories = ["All", "Design", "Web"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [isExpandable, setIsExpandable] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? ProjectDashBoard
      : ProjectDashBoard.filter(
          (project) => project.category === activeCategory,
        );

  const displayedProjects = isExpandable
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  return (
    <div
      className="container-fluid overflow-hidden py-5 mt-5 mb-5"
      id="projects"
    >
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h2
            className="about-title display-4 fw-bold text-white "
            style={{ color: "white", textAlign: "center" }}
          >
            My <span className="text-accent">Projects</span>
          </h2>
          <p
            className="text-white mx-auto  fs-2 lh-base text-center mb-5 fw-normal my-4"
            style={{
              maxWidth: "600px",
            }}
          >
            Real-World projects demonstrating strong front-end fundamentals,
            responsive design, and modern UI/UX practices.
          </p>
          <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap bg-dark-custom">
            {categories.map((category) => (
              <button
                className={`filter-btn ${activeCategory === category ? "btn-neon-active" : "btn-neon-outline"}`}
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="row g-4 px-2 px-md-4">
            {displayedProjects.map((items) => (
              <div className="col-12 col-md-6 col-lg-4 d-flex">
                <ProjectDashBoardCard
                  key={items.id}
                  title={items.title}
                  category={items.category}
                  image={items.image}
                  description={items.description}
                  tags={items.tags}
                  link={items.link}
                  action={items.action}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button
          className="filter-btn btn-neon-active px-4 py-2 "
          onClick={() => setIsExpandable(!isExpandable)}
          style={{ width: "auto" }}
        >
          {isExpandable ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}

export default Projects;
