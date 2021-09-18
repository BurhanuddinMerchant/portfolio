import React from "react";
import { SkillsCard } from "./SkillsCard";
import { skills } from "./skillsdata";
import "../../styles/skills.css";
export const Skills = ({ id }) => {
  return (
    <div className="skill-section" id={id}>
      <div className="skill-section-header">Skills</div>
      <div className="skills-container">
        {skills.map(({ heading, images }, i) => {
          return <SkillsCard key={i} images={images} heading={heading} />;
        })}
      </div>
    </div>
  );
};
