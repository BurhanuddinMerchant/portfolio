import React from "react";
import { ProjectsCard } from "./ProjectsCard";
import { projectdata } from "./projectdata";
import "../../styles/projects.css";
export const Projects = ({ id }) => {
  return (
    <div className="project-section" id={id}>
      <div className="project-section-header">Projects</div>
      <div className="projects-container">
        {projectdata.map((data, i) => (
          <ProjectsCard data={data} key={i} />
        ))}
      </div>
    </div>
  );
};
