import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Welcome to HOLYLAND HOMES</h1>
        <p>
          Holyland Homes, established in 2006 in Owerrinta, Abia State, is a
          charity providing a safe, nurturing environment and education for
          vulnerable children.
        </p>
        <Link to="program" smooth={true} offset={-260} duration={500}>
          <button className="btn">
            Explore more <img src={dark_arrow} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
