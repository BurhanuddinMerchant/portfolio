import { FC } from "react";
import { YoutubeCard } from "./YoutubeCard";
import "../../styles/youtube.css"
interface Data {
    title:string,
      link:string,
  }
  interface Prop {
    id: string;
    data: Data[];
  }
  export const Youtube:FC<Prop> = ({id,data})=>{
      return (<>
  <div className="yt-section" id={id}>
      <div className="yt-section-header">YouTube Videos</div>
      <div className="yt-container">
        {data.map((d, i) => (
          <YoutubeCard data={d} key={i} />
        ))}
      </div>
    </div>
  </>)
  }