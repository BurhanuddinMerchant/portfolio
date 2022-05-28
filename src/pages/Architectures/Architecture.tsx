import { FC } from "react";
import { ArchitectureCard } from "./ArchitectureCard";
import "../../styles/architectures.css"
interface Data {
    title:string,
      link:string,
  }
  interface Prop {
    id: string;
    data: Data[];
  }
  export const Architectures:FC<Prop> = ({id,data})=>{
      return (<>
  <div className="arch-section" id={id}>
      <div className="arch-section-header">Architectures</div>
      <div className="arch-container">
        {data.map((d, i) => (
          <ArchitectureCard data={d} key={i} />
        ))}
      </div>
    </div>
  </>)
  }