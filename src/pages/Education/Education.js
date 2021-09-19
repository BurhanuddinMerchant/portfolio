import React from "react";
import "../../styles/education.css";
import { EducationCard } from "./EducationCard.js";
export const Education = ({ id, data }) => {
  return (
    <div className="organization-section" id={id}>
      <div className="organization-section-header">Education</div>
      <div className="organizations-container">
        {data.map((d, i) => (
          <EducationCard data={d} key={i} />
        ))}
      </div>
    </div>
  );
};
