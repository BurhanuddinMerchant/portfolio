import React,{FC} from "react";

interface Prop{
  data:{
    link : string
    , image : string
    , duration: string
    , position: string
  }
}
export const ExperienceCard:FC <Prop>= (props) => {
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
