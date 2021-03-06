import React, { FC } from "react";
interface Prop {
  heading: string;
  images: {
    one: string,
    two?: string,
    three?: string,
    four?: string,
  };
}
export const SkillsCard: FC<Prop> = (props) => {
  const { heading } = props;
  const { one, two, three, four } = props.images;
  return (
    <div className="skill-card">
      <h1 className="skill-header">{heading}</h1>
      <div className="skills">
        <div className="skill-icon">
          <img src={one} alt="skills" />
        </div>
        {two ? (
          <div className="skill-icon">
            <img src={two} alt="skills" />
          </div>
        ) : (
          ""
        )}
        {three ? (
          <div className="skill-icon">
            <img src={three} alt="skills" />
          </div>
        ) : (
          ""
        )}
        {four ? (
          <div className="skill-icon">
            <img src={four} alt="skills" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
