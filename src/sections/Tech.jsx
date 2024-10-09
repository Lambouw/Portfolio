import React, { useEffect, useRef } from "react";

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
import express from "../assets/logos/express.svg";
import git from "../assets/logos/git.svg";
import postman from "../assets/logos/postman.svg";
import insomnia from "../assets/logos/insomnia.svg";

// import react from "../assets/images/react.svg";
// import react2 from "../assets/images/react2.svg";

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
  express: express,
  git: git,
  postman: postman,
  insomnia: insomnia,
};

function Tech() {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the wiggle class when the element is in view
            entry.target.classList.add("slide-in");
          } else {
            // Remove the wiggle class when the element is out of view
            entry.target.classList.remove("slide-in");
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
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="tech--items--card"
          >
            <img
              src={imageMap[item.image]}
              className="tech--items--card--image"
              alt={item.name}
            />
            <div className="height-s"></div>
            <div className="tech--items--card--name">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tech;
