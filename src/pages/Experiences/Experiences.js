import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import "../../styles/experiences.css";
import { experiencedata } from "../data";
export const Experiences = ({ id }) => {
  return (
    <div className="experience-section" id={id}>
      <div className="experience-section-header">Experiences</div>
      <div className="experiences-container">
        {experiencedata.map((data, i) => (
          <ExperienceCard data={data} key={i} />
        ))}
      </div>
    </div>
  );
};
