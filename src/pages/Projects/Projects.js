import React from "react";
import { ProjectsCard } from "./ProjectsCard";
import "../../styles/projects.css";
export const Projects = ({ id, data }) => {
  return (
    <div className="project-section" id={id}>
      <div className="project-section-header">Projects</div>
      <div className="projects-container">
        {data.map((d, i) => (
          <ProjectsCard data={d} key={i} />
        ))}
      </div>
    </div>
  );
};
