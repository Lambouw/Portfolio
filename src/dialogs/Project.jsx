import React, { useState, useEffect } from "react";

// Import Descriptions
import HMI from "../projectdescriptions/HMI";
import ArtistPortfolio from "../projectdescriptions/ArtistPortfolio";
import TwinStore from "../projectdescriptions/TwinStore";

// Import Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Import Styles
import "../styles/css/project.css";
import "../styles/css/techcolors.css";

// Import Project Images
import ilhomepage from "../assets/images/projects/ilhomepage.png";
import hmi from "../assets/images/projects/hmi.png";
import twinstore from "../assets/images/projects/twinstore.png";

const projectImageMap = {
  ilhomepage: ilhomepage,
  hmi: hmi,
  twinstore: twinstore,
};

// Import Tech Images
import html from "../assets/logos/tech/html.svg";
import javascript from "../assets/logos/tech/javascript.svg";
import typescript from "../assets/logos/tech/typescript.svg";
import css from "../assets/logos/tech/css.svg";
import scss from "../assets/logos/tech/scss.svg";
import react from "../assets/logos/tech/react-mini.svg";
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

const Project = ({ project }) => {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || systemTheme
  );

  // Dynamic imageMap based on theme
  const techImageMap = {
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

  return (
    <div className="project">
      <div className="project--upper">
        <img
          className="project--upper--image"
          aria-label={project.name}
          alt={project.name}
          src={projectImageMap[project.image]}
        />
        <div className="height-s"></div>
        <div className="project--upper--title">
          <h3 className="project--upper--title--name">{project.name}</h3>
          <div className="project--upper--title--buttons">
            {project.git !== null && (
              <a
                href={project.git}
                className="project--upper--title--buttons--git"
                target="blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
            {project.site !== null && (
              <div className="project--upper--title--buttons--spacer"></div>
            )}
            {project.site !== null && (
              <a
                href={project.site}
                className="project--upper--title--buttons--site"
                target="blank"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="height-s"></div>
      <div className="project--description">
        {project.name == "Adaptive HMI" && <HMI />}
        {project.name == "Artist Portfolio Website" && <ArtistPortfolio />}
        {project.name == "TwinStore" && <TwinStore />}
      </div>
      {/* <div className="height-m"></div>
      <div className="project--stack">
        {project.stack.map((item, index) => (
          <div className={`project--stack--item ${item.class}`}>
            <img
              src={techImageMap[item.image]}
              className="project--stack--item--icon"
              alt={item.name}
            />
            <div className="width-s"></div>
            <div className="project--stack--item--label">{item.name}</div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Project;
