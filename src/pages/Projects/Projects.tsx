import React, { FC } from "react";
import { ProjectsCard } from "./ProjectsCard";
import "../../styles/projects.css";
interface Data {
  title:string,
    description:string,
    deployment:string,
    code:string,
    image:string,
    date:string,
}
interface Prop {
  id: string;
  data: Data[];
}
export const Projects:FC<Prop> = ({ id, data }) => {
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
