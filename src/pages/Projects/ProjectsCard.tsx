import React, { FC } from "react";
interface Prop {
  data: {
    title: string,
    description: string,
    deployment: string,
    code: string,
    image: string,
    date: string,
  };
}
export const ProjectsCard: FC<Prop> = (props) => {
  const { title, description, deployment, code, image, date } = props.data;
  return (
    <div className="project-card">
      <img src={image} alt="project" className="project-card-image" />
      <h1 className="project-header">{title}</h1>
      <p className="project-description">{description}</p>
      <p className="project-date">{date}</p>
      <div className="project-links">
        <a href={deployment} target="_blank" rel="noreferrer">
          Deployment
        </a>
        <a href={code} target="_blank" rel="noreferrer">
          Code
        </a>
      </div>
    </div>
  );
};
