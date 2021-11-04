import React ,{FC}from "react";
import "../../styles/education.css";
import { EducationCard } from "./EducationCard";
interface Data {
  link: string;
  image: string;
  duration: string;
  degree: string;
  name: string;
  marks: string;
}
interface Props {
  id: string;
  data: Data[];
}
export const Education:FC<Props> = ({ id, data }) => {
  return (
    <div className="organization-section" id={id}>
      <div className="organization-section-header">Education</div>
      <div className="organizations-container">
        {data.map((d:Data, i:number) => (
          <EducationCard data={d} key={i} />
        ))}
      </div>
    </div>
  );
};
