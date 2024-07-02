import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>WELCOME TO </h3>
        <h2>HOLYLAND HOMES</h2>
        <p>
          Holyland Homes, established in 2006 and located in Owerrinta, Abia
          State, is a sanctuary of hope and care for vulnerable children. Our
          orphanage is a registered charity committed to providing a loving and
          supportive environment for children in need.
        </p>
        <p>
          At Holyland Homes, we embrace children from various backgrounds—some
          are registered by their parents, while others have been rescued from
          the streets or found in dire situations. Our mission is to offer these
          children a safe haven where they can thrive, receive an education, and
          build a brighter future.
        </p>
      </div>
    </div>
  );
};
export default About;
