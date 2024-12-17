import React from "react";

// Import Contexts
import { useLayout } from '../contexts/LayoutContext';

// Import Components
import TabContainer from "../components/TabContainer";

// Import Styles
import "../styles/css/experience.css";
import "../styles/css/animations.css";

function Experience() {
  const {experienceVisible, experienceRef} = useLayout();

  return (
    <div
      id="experience"
      className={`experience fade-in-bottom ${experienceVisible ? "is-visible" : ""}`}
      ref={experienceRef}
    >
      <div className="experience--heading">
        <h1 className="experience--heading--icon">&#8811;</h1>
        {/* <h1 className="experience--heading--icon">&#8827;</h1> */}
        <div className="width-s"></div>
        {/* <h1 className="experience--heading--text">experience</h1> */}
        <h1 className="experience--heading--text">Experience</h1>
        <div className="width-m"></div>
        <div className="experience--heading--line"></div>
      </div>
      <div className="height-m"></div>
      <div className="height-s"></div>
      <TabContainer />
    </div>
  );
}

export default Experience;
