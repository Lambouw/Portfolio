import React, { useState, useEffect, useRef } from "react";

// Import Material UI Components
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Import Components
import TabPanel from "./TabPanel";

// Import Styles
import "../styles/css/experiencetabcontainer.css";

// Import Data
import experienceData from "../assets/data/experience.json";

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

function ExperienceTabContainer() {
  const [isHorizontal, setIsHorizontal] = useState(window.innerWidth < 600);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      window.innerWidth < 600 ? setIsHorizontal(true) : setIsHorizontal(false);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div className={`${isHorizontal ? "horizontaltabs" : "verticaltabs"}`}>
      <Tabs
        className="verticaltabs--tabbar"
        orientation={isHorizontal ? null : "vertical"}
        variant={isHorizontal ? "scrollable" : null}
        value={currentTab}
        onChange={handleChangeTab}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "var(--section-header-line)" }}
      >
        {Object.keys(experienceData).map((key, i) => (
          <Tab
            className="verticaltabs--tabbar--tab"
            label={key}
            {...a11yProps(i)}
          />
        ))}
      </Tabs>
      {Object.keys(experienceData).map((key, i) => (
        <TabPanel
          experienceItem={experienceData[key]}
          value={currentTab}
          index={i}
        ></TabPanel>
      ))}
    </div>
  );
}

export default ExperienceTabContainer;
