import React, { useState, useEffect } from "react";

// Import Custom Hooks
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// Import Styles
import "../styles/css/tech.css";
import "../styles/css/animations.css";

// Import Data
import tech from "../assets/data/tech.json";

// Import Images
import html from "../assets/logos/tech/html.svg";
import javascript from "../assets/logos/tech/javascript.svg";
import typescript from "../assets/logos/tech/typescript.svg";
import css from "../assets/logos/tech/css.svg";
import scss from "../assets/logos/tech/scss.svg";
import react from "../assets/logos/tech/react.svg";
import dart from "../assets/logos/tech/dart.svg";
import flutter from "../assets/logos/tech/flutter.svg";
import node_d from "../assets/logos/tech/node_d.svg";
import node_l from "../assets/logos/tech/node_l.svg";
import express_d from "../assets/logos/tech/express_d.svg";
import express_l from "../assets/logos/tech/express_l.svg";
import git from "../assets/logos/tech/git.svg";
import postman from "../assets/logos/tech/postman.svg";
import insomnia from "../assets/logos/tech/insomnia.svg";
import python from "../assets/logos/tech/python.svg";
import postgresql from "../assets/logos/tech/postgresql.svg";
import figma from "../assets/logos/tech/figma.svg";
import materialui from "../assets/logos/tech/materialui.svg";
import socketio_d from "../assets/logos/tech/socketio_d.svg";
import socketio_l from "../assets/logos/tech/socketio_l.svg";
import nestjs from "../assets/logos/tech/nestjs.svg";

function Tech() {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || systemTheme
  );

  // Animation Refs
  const [headingIsVisible, headingRef] = useIntersectionObserver();

  const [showAllTech, setShowAllTech] = useState(false); // New state for toggling tech cards

  // Dynamic imageMap based on theme
  const imageMap = {
    html: html,
    javascript: javascript,
    typescript: typescript,
    css: css,
    scss: scss,
    react: react,
    dart: dart,
    flutter: flutter,
    node: theme === "dark" ? node_d : node_l,
    express: theme === "dark" ? express_d : express_l,
    git: git,
    postman: postman,
    insomnia: insomnia,
    python: python,
    postgresql: postgresql,
    figma: figma,
    materialui: materialui,
    socketio: theme === "dark" ? socketio_d : socketio_l,
    nestjs: nestjs,
  };

  useEffect(() => {
    // Function to update the theme
    const handleThemeChange = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setTheme(currentTheme);
    };

    const observer = new MutationObserver(() => {
      handleThemeChange();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    handleThemeChange();

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      imageMap.node = node_l;
      imageMap.express = express_l;
      imageMap.socketio = socketio_l;
    } else {
      imageMap.node = node_d;
      imageMap.express = express_d;
      imageMap.socketio = socketio_d;
    }
  }, [theme]);

  const handleToggleTech = () => {
    setShowAllTech((prev) => !prev);
  };

  return (
    <div id="tech" className="tech">
      <div
        className={`tech--heading fade-in-left ${
          headingIsVisible ? "is-visible" : ""
        }`}
        ref={headingRef}
      >
        <h1 className="tech--heading--icon">&#8811;</h1>
        {/* <h1 className="tech--heading--icon">&#8827;</h1> */}
        <div className="width-s"></div>
        <h1 className="tech--heading--text">tech stack</h1>
        <div className="width-m"></div>
        <div className="tech--heading--line"></div>
      </div>
      <div className="height-l"></div>
      <div className="tech--items">
        {tech.slice(0, showAllTech ? tech.length : 7).map((item, index) => (
          <a
            key={index}
            className="tech--items--card"
            href={item.src}
            target="blank"
          >
            <img
              src={imageMap[item.image]}
              className="tech--items--card--image"
              alt={item.name}
            />
            <div className="tech--items--card--spacer"></div>
            <div className="tech--items--card--name">{item.name}</div>
          </a>
        ))}
      </div>
      {tech.length > 6 && (
        <div className="tech--toggle">
          <button className="tech--toggle--button" onClick={handleToggleTech}>
            {showAllTech ? "Show less" : "Show all"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Tech;
