import React from "react";
import "../../styles/organizations.css";
import { OrganizationCard } from "./OrganizationCard";
export const Organizations = ({ id, data }) => {
  return (
    <div className="organization-section" id={id}>
      <div className="organization-section-header">Organizations</div>
      <div className="organizations-container">
        {data.map((d, i) => (
          <OrganizationCard data={d} key={i} />
        ))}
      </div>
    </div>
  );
};
