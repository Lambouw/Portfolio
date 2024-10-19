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
import node from "../assets/logos/node.svg";
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
  node: node,
  express: express_l, // Default to light theme express logo
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

  useEffect(() => {
    // Function to update the theme
    const handleThemeChange = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setTheme(currentTheme);
    };

    // Listen for changes to the 'data-theme' attribute
    const observer = new MutationObserver(() => {
      handleThemeChange();
    });

    // Observe changes in attributes on the root element (html or body)
    observer.observe(document.documentElement, {
      attributes: true, // Observe attribute changes
      attributeFilter: ["data-theme"], // Only look for 'data-theme' changes
    });

    // Initial check
    handleThemeChange();

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // You can now respond to theme changes, for example:
    if (theme === "dark") {
      console.log("Dark theme is active");
      imageMap.express = express_d;
    } else {
      console.log("Light theme is active");
      imageMap.express = express_l;
    }
  }, [theme]);

  const cardRefs = useRef([]);
  const animatedItems = useRef(new Set()); // Set to track already animated items

  useEffect(() => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only animate if the item hasn't been animated before
            if (!animatedItems.current.has(entry.target)) {
              entry.target.classList.add("slide-in");
              animatedItems.current.add(entry.target); // Add to animated set
            }
          }
        });
      },
      { threshold: 0.5 } // 50% of the card must be visible to trigger
    );

    // Observe each card
    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    // Cleanup on component unmount
    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div id="tech" className="tech">
      <h1 className="tech--heading">Tech Stack</h1>
      <div className="height-s"></div>
      <div className="tech--items">
        {tech.map((item, index) => (
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
    </div>
  );
}

export default Tech;
