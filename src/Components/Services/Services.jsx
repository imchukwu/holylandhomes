import React from "react";
import "./Services.css";
import program_1 from "../../assets/program-1.jpg";
import program_2 from "../../assets/program-2.jpg";
import program_3 from "../../assets/program-3.jpg";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Services = () => {
  return (
    <div className="services">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Orphan Care</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Education and Skills Training</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Basic Needs Support for Elderly</p>
        </div>
      </div>
    </div>
  );
};
export default Services;
