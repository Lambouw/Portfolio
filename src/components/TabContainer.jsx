import React, { useState, useEffect, useRef } from "react";

// Import Components
import TabPanel from "./TabPanel";
import Tab from "./Tab";

// Import Styles
import "../styles/css/tabcontainer.css";

// Import Data
import experienceData from "../assets/data/experience.json";

function TabContainer() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedKey, setSelectedKey] = useState("ISG");
  const [highlightStyle, setHighlightStyle] = useState({
    width: "0px",
    transform: "translateX(0px)",
  });

  const tabBarRef = useRef(null);

  useEffect(() => {
    setHighlight(selectedKey);
  }, []);

  const handleClickTab = (index, key) => {
    setSelectedTab(index);
    setSelectedKey(key);

    setHighlight(key);
  };

  const setHighlight = (selectedKey) => {
    const tabElements = tabBarRef.current?.children;

    if (tabElements) {
      let selectedTabElement;
      let newWidth;
      let newLeft;

      // Iterate through tabElements to find the one with the 'selected-tab' class
      for (let tab of tabElements) {
        if (tab.classList.contains(selectedKey)) {
          selectedTabElement = tab;
          newWidth = tab.offsetWidth;
          newLeft = tab.offsetLeft;
        }
      }

      setHighlightStyle({
        width: `${newWidth}px`,
        transform: `translateX(${newLeft}px)`,
      });
    }
  };

  return (
    <div className="tab-container">
      <div className="tab-container--tabbar" ref={tabBarRef}>
        {/* Highlight element */}
        <div className="tab-container--highlight" style={highlightStyle}></div>
        {Object.keys(experienceData).map((key, i) => (
          <Tab
            key={key}
            length={Object.entries(experienceData).length}
            label={key}
            index={i}
            selectedIndex={selectedTab}
            handleClickTab={() => {
              handleClickTab(i, key);
            }}
          />
        ))}
      </div>
      <div className="tab-container--spacer"></div>
      {Object.keys(experienceData).map((key) => (
        <div
          className="tab-container--panel-wrapper"
          style={{
            display: key === selectedKey ? "block" : "none",
          }}
        >
          <TabPanel content={experienceData[key]} />
        </div>
      ))}
    </div>
  );
}

export default TabContainer;
