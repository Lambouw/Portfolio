import React, { useState, useEffect, useRef } from "react";

// Import Styles
import "../styles/css/tech.css";

// Import Data
import tech from "../assets/data/tech.json";

// Import Images
import html from "../assets/logos/html.svg";
import javascript from "../assets/logos/javascript.svg";
import typescript from "../assets/logos/typescript.svg";
import css from "../assets/logos/css.svg";
import scss from "../assets/logos/scss.svg";
import react from "../assets/logos/react.svg";
import dart from "../assets/logos/dart.svg";
import flutter from "../assets/logos/flutter.svg";
import node_d from "../assets/logos/node_d.svg";
import node_l from "../assets/logos/node_l.svg";
import express_d from "../assets/logos/express_d.svg";
import express_l from "../assets/logos/express_l.svg";
import git from "../assets/logos/git.svg";
import postman from "../assets/logos/postman.svg";
import insomnia from "../assets/logos/insomnia.svg";
import python from "../assets/logos/python.svg";
import postgresql from "../assets/logos/postgresql.svg";
import figma from "../assets/logos/figma.svg";
import materialui from "../assets/logos/materialui.svg";

const imageMap = {
  html: html,
  javascript: javascript,
  typescript: typescript,
  css: css,
  scss: scss,
  react: react,
  dart: dart,
  flutter: flutter,
  node: node_d, // Default to light theme node logo
  express: express_d, // Default to light theme express logo
  git: git,
  postman: postman,
  insomnia: insomnia,
  python: python,
  postgresql: postgresql,
  figma: figma,
  materialui: materialui,
};

function Tech() {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "light"
  );

  const [showAllTech, setShowAllTech] = useState(false); // New state for toggling tech cards
  const cardRefs = useRef([]);
  const animatedItems = useRef(new Set()); // Track already animated items

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
    } else {
      imageMap.node = node_d;
      imageMap.express = express_d;
    }
  }, [theme]);

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!animatedItems.current.has(entry.target)) {
              entry.target.classList.add("slide-in");
              animatedItems.current.add(entry.target);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [showAllTech]);

  const handleToggleTech = () => {
    setShowAllTech((prev) => !prev);
  };

  return (
    <div id="tech" className="tech">
      <div className="tech--heading">
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
            ref={(el) => (cardRefs.current[index] = el)}
            className="tech--items--card"
            href={item.src}
            target="blank"
          >
            <img
              src={imageMap[item.image]}
              className="tech--items--card--image"
              alt={item.name}
            />
            <div className="height-s"></div>
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
