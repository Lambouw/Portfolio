import React, { useState } from "react";

// Import Styles
import "../styles/css/specializingcontainer.css";

// Import Images
import flutter from "../assets/logos/tech/flutter.svg";
import react from "../assets/logos/tech/react.svg";
import nextjs from "../assets/logos/tech/nextjs.svg";
import nestjs from "../assets/logos/tech/nestjs.svg";

const SpecializingContainer = () => {
  return (
    <div className="specializing-container">
      <div className="specializing-container--heading">
        <span>Currently specializing in </span>
        <span className="specializing-container--heading--highlight">
          Full Stack Development
        </span>
      </div>
      <div className="height-xs"></div>
      <div className="specializing-container--row">
        <div className="specializing-container--row--tag">
          <img
            className="specializing-container--row--tag--icon"
            src={flutter}
            alt="Flutter Icon"
          />
          <div className="width-s"></div>
          <div>Flutter</div>
        </div>
        {/* <div className="width-xs"></div>
        <div className="specializing-container--row--tag">
          <img
            className="specializing-container--row--tag--icon"
            src={react}
            alt="React.js Icon"
          />
          <div className="width-s"></div>
          <div>React.js</div>
        </div> */}
        <div className="width-xs"></div>
        <div className="specializing-container--row--tag">
          <img
            className="specializing-container--row--tag--icon"
            src={nextjs}
            alt="Next.js Icon"
          />
          <div className="width-s"></div>
          <div>Next.js</div>
        </div>
        <div className="width-xs"></div>
        <div className="specializing-container--row--tag">
          <img
            className="specializing-container--row--tag--icon"
            src={nestjs}
            alt="NestJS Icon"
          />
          <div className="width-s"></div>
          <div>NestJS</div>
        </div>
      </div>
    </div>
  );
};

export default SpecializingContainer;
