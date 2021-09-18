import React from "react";

export const ExperienceCard = (props) => {
  const { link, image, duration, position } = props.data;
  return (
    <div className="experience-card">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image} className="experience-card-image" alt="experience" />
      </a>
      <div className="experience-detail">
        <p className="duration">{duration}</p>
        <p className="experience-card-position">{position}</p>
      </div>
    </div>
  );
};
