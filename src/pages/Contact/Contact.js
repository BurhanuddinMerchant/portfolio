import React from "react";
import "../../styles/contact.css";
export const Contact = ({ id, data }) => {
  return (
    <div className="contact-section" id={id}>
      <div className="contact-section-header">Connect With Me</div>
      <div className="contact-container">
        {data.map((d, i) => {
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
