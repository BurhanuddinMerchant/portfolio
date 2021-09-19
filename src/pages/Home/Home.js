import React from "react";
import "../../styles/home.css";
export const Home = ({ id, data }) => {
  const { image, headerOne, headerTwo, paraOne, paraTwo } = data;
  return (
    <div className="home" id={id}>
      <div className="home-container">
        <div className="image-container">
          <img src={image} alt="me" />
        </div>
        <div className="home-content">
          <h1>{headerOne}</h1>
          <h2>{headerTwo}</h2>
          <p>
            {paraOne}
            <br />
            {paraTwo}
          </p>
        </div>
      </div>
    </div>
  );
};
