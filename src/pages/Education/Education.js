import React from "react";
import { educationdata } from "../data/educationdata.js";
import "../../styles/education.css";
import { EducationCard } from "./EducationCard.js";
export const Education = ({ id }) => {
  return (
    <div className="organization-section" id={id}>
      <div className="organization-section-header">Education</div>
      <div className="organizations-container">
        {educationdata.map((data, i) => (
          <EducationCard data={data} key={i} />
        ))}
      </div>
    </div>
  );
};
