import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import "../../styles/experiences.css";
export const Experiences = ({ id, data }) => {
  return (
    <div className="experience-section" id={id}>
      <div className="experience-section-header">Experiences</div>
      <div className="experiences-container">
        {data.map((d, i) => (
          <ExperienceCard data={d} key={i} />
        ))}
      </div>
    </div>
  );
};
