import React from "react";
import { organizationdata } from "../data/organizationdata";
import "../../styles/organizations.css";
import { OrganizationCard } from "./OrganizationCard";
export const Organizations = ({ id }) => {
  return (
    <div className="organization-section" id={id}>
      <div className="organization-section-header">Organizations</div>
      <div className="organizations-container">
        {organizationdata.map((data, i) => (
          <OrganizationCard data={data} key={i} />
        ))}
      </div>
    </div>
  );
};
