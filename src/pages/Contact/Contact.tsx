import React ,{FC}from "react";
import "../../styles/contact.css";
interface Data{
  image:string,
  name:string,
  link:string
}
interface Props{
  id:string,
  data: Data[]
}
export const Contact:FC<Props> = ({ id, data }) => {
  return (
    <div className="contact-section" id={id}>
      <div className="contact-section-header">Connect With Me</div>
      <div className="contact-container">
        {data.map((d:Data, i:number) => {
          const { image, name, link } = d;
          return (
            <div key={i} className="contact">
              <a href={link} target="_blank" rel="noreferrer">
                <img src={image} alt={name} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
