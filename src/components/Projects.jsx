import React from "react";
import ProjectDashBoardCard from "../ProjectDashBoardCard";
import { ProjectDashBoard } from "../ProjectDashBoard";

function Projects() {
  return (
    <div id="projects" style={{ minHeight: "100vh", padding: "10px 20px" }}>
      <div className="row gap-4">
        {ProjectDashBoard.map((items) => (
          <ProjectDashBoardCard
            key={items.id}
            title={items.title}
            category={items.category}
            image={items.image}
            description={items.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
