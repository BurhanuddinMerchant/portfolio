import React, { FC } from "react";
import { SkillsCard } from "./SkillsCard";
import "../../styles/skills.css";
interface Data {
  heading: string;
  images: {
    one: string,
    two?: string,
    three?: string,
    four?: string,
  };
}
interface Prop {
  id: string;
  data: Data[];
}
export const Skills: FC<Prop> = ({ id, data }) => {
  return (
    <div className="skill-section" id={id}>
      <div className="skill-section-header">Skills</div>
      <div className="skills-container">
        {data.map(({ heading, images }, i) => {
          return <SkillsCard key={i} images={images} heading={heading} />;
        })}
      </div>
    </div>
  );
};
