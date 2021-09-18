import React from "react";

export const OrganizationCard = (props) => {
  const { link, image, duration, position, name } = props.data;
  return (
    <div className="organization-card">
      <div>
        <p className="organization-name">{name}</p>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={image}
          className="organization-card-image"
          alt="organization"
        />
      </a>
      <div className="organization-detail">
        <p className="duration">{duration}</p>
        <p className="organization-card-position">{position}</p>
      </div>
    </div>
  );
};
