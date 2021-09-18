import React from "react";
import { contactdata } from "./contactdata";
import "../../styles/contact.css";
export const Contact = ({ id }) => {
  return (
    <div className="contact-section" id={id}>
      <div className="contact-section-header">Connect With Me</div>
      <div className="contact-container">
        {contactdata.map((data, i) => {
          const { image, name, link } = data;
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
