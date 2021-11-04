import React,{FC} from "react";
import "../../styles/organizations.css";
import { OrganizationCard } from "./OrganizationCard";
interface Data{
  link:string,
  image:string,
  duration:string,
  position:string,
  name:string,
}
interface Prop{
  data:Data[],
  id:string
}
export const Organizations:FC<Prop> = ({ id, data }) => {
  return (
    <div className="organization-section" id={id}>
      <div className="organization-section-header">Organizations</div>
      <div className="organizations-container">
        {data.map((d:Data, i:number) => (
          <OrganizationCard data={d} key={i} />
        ))}
      </div>
    </div>
  );
};
