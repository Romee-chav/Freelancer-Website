import React from "react";
import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a Full Stack Developer. I create responsive secure Websites for my
          Clients.
        </p>
        <Link to={"/contact"}>
          <button className="btn">Contact Us</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} alt="true" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} alt="true" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
