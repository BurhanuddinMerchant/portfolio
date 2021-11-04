import React,{FC} from "react";
import { ExperienceCard } from "./ExperienceCard";
import "../../styles/experiences.css";
interface Data{
  link:string,
  image:string,
  duration:string,
  position:string,
}
interface Props {
  id: string;
  data: Data[];
}
export const Experiences:FC<Props> = ({ id, data }) => {
  return (
    <div className="experience-section" id={id}>
      <div className="experience-section-header">Experiences</div>
      <div className="experiences-container">
        {data.map((d:Data, i:number) => (
          <ExperienceCard data={d} key={i} />
        ))}
      </div>
    </div>
  );
};
