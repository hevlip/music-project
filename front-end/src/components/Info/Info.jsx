import React from "react";
import { studenticon, videoicon } from "../../assets";
import "./Info.css";

const Info = () => {
  return (
    <section id="info" className="dark-gray">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={studenticon} />
            <div className="amount">23,200</div>
            <div className="type">Students</div>
          </div>
        </div>
        <div className="content-container">
          <div className="info-content">
            <img src={videoicon} />
            <div className="amount">26 Hrs</div>
            <div className="type">Video Content</div>
          </div>
        </div>
        <img className="bg-element-2" src="bgelement2" />
      </div>
    </section>
  );
};
export default Info;
