import React from "react";

export const EducationCard = (props) => {
  const { link, image, duration, marks, name, degree } = props.data;
  return (
    <div className="education-card">
      <div>
        <p className="education-name">{name}</p>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image} className="education-card-image" alt="education" />
      </a>
      <p className="education-card-degree">{degree}</p>
      <div className="education-detail">
        <p className="education-marks">{marks}</p>
        <p className="education-duration">{duration}</p>
      </div>
    </div>
  );
};
