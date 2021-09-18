import React from "react";
import profile from "../../assets/icons/misc/profile.png";
import "../../styles/home.css";
export const Home = ({ id }) => {
  return (
    <div className="home" id={id}>
      <div className="home-container">
        <div className="image-container">
          <img src={profile} alt="me" />
        </div>
        <div className="home-content">
          <h1>Hey There!</h1>
          <h2>I'm Burhanuddin Merchant</h2>
          <p>
            I'm A Third Year Computer Engineering Undergraduate At Pune
            Institute of Computer Technology, Pune.
            <br />
            I'm currently working on Full Stack Web Development and I'm
            interested in Cloud & DevOps. I also produce music.
          </p>
        </div>
      </div>
    </div>
  );
};
