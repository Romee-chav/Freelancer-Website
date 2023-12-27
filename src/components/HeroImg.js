import "./HeroImgStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import IntroImg from "../assets/intro-bg.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi,I'M A FREELANCER.</p>
        {/* <h1>PHP Developer.</h1> */}
        <div>
          <Link to={"/project"} className="btn">
            PROJECTS
          </Link>
          <Link to={"/contact"} className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
