import React from "react";

const AboutUs = ({ title, text, subtext }) => {
  return (
    <div className="aboutus">
      <div className="container">
        <div className="wrapper">
          <div className="aboutus__block">
            <h1>{title}</h1>
            <p>
              {text}
              <br />
              <span>{subtext}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
