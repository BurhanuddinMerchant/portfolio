import React,{FC} from "react";
interface Data{
  link:string,
  image:string,
  duration:string,
  position:string,
  name:string,
}
interface Prop{
  data:Data
}
export const OrganizationCard:FC<Prop>= (props) => {
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
