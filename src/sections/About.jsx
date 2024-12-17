import { useState, useEffect } from "react";

// Import Contexts
import { useLayout } from "../contexts/LayoutContext";

// Import Styles
import "../styles/css/about.css";
import "../styles/css/animations.css";

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

// // Import Images White out
// import html from "../assets/logos/tech_white/html.svg";
// import javascript from "../assets/logos/tech_white/javascript.svg";
// import typescript from "../assets/logos/tech_white/typescript.svg";
// import css from "../assets/logos/tech_white/css.svg";
// import scss from "../assets/logos/tech_white/scss.svg";
// import react from "../assets/logos/tech_white/react.svg";
// import dart from "../assets/logos/tech_white/dart.svg";
// import flutter from "../assets/logos/tech_white/flutter.svg";
// import node_d from "../assets/logos/tech_white/node_d.svg";
// import node_l from "../assets/logos/tech_white/node_l.svg";
// import express_d from "../assets/logos/tech_white/express_d.svg";
// import express_l from "../assets/logos/tech_white/express_l.svg";
// import git from "../assets/logos/tech_white/git.svg";
// import postman from "../assets/logos/tech_white/postman.svg";
// import insomnia from "../assets/logos/tech_white/insomnia.svg";
// import python from "../assets/logos/tech_white/python.svg";
// import postgresql from "../assets/logos/tech_white/postgresql.svg";
// import figma from "../assets/logos/tech_white/figma.svg";
// import materialui from "../assets/logos/tech_white/materialui.svg";
// import socketio_d from "../assets/logos/tech_white/socketio_d.svg";
// import socketio_l from "../assets/logos/tech_white/socketio_l.svg";
// import nestjs from "../assets/logos/tech_white/nestjs.svg";

// // Import Images Black out
// import html from "../assets/logos/tech_black/html.svg";
// import javascript from "../assets/logos/tech_black/javascript.svg";
// import typescript from "../assets/logos/tech_black/typescript.svg";
// import css from "../assets/logos/tech_black/css.svg";
// import scss from "../assets/logos/tech_black/scss.svg";
// import react from "../assets/logos/tech_black/react.svg";
// import dart from "../assets/logos/tech_black/dart.svg";
// import flutter from "../assets/logos/tech_black/flutter.svg";
// import node_d from "../assets/logos/tech_black/node_d.svg";
// import node_l from "../assets/logos/tech_black/node_l.svg";
// import express_d from "../assets/logos/tech_black/express_d.svg";
// import express_l from "../assets/logos/tech_black/express_l.svg";
// import git from "../assets/logos/tech_black/git.svg";
// import postman from "../assets/logos/tech_black/postman.svg";
// import insomnia from "../assets/logos/tech_black/insomnia.svg";
// import python from "../assets/logos/tech_black/python.svg";
// import postgresql from "../assets/logos/tech_black/postgresql.svg";
// import figma from "../assets/logos/tech_black/figma.svg";
// import materialui from "../assets/logos/tech_black/materialui.svg";
// import socketio_d from "../assets/logos/tech_black/socketio_d.svg";
// import socketio_l from "../assets/logos/tech_black/socketio_l.svg";
// import nestjs from "../assets/logos/tech_black/nestjs.svg";

function About() {
  const { aboutVisible, aboutRef } = useLayout();

  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || systemTheme
  );

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
    // insomnia: insomnia,
    // python: python,
    postgresql: postgresql,
    figma: figma,
    // materialui: materialui,
    socketio: theme === "dark" ? socketio_d : socketio_l,
    // nestjs: nestjs,
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

  return (
    <div
      id="about"
      className={`about fade-in-bottom ${aboutVisible ? "is-visible" : ""}`}
      ref={aboutRef}
    >
      <div className="about--heading">
        <h1 className="about--heading--icon">&#8811;</h1>
        {/* <h1 className="about--heading--icon">&#8827;</h1> */}
        <div className="width-s"></div>
        {/* <h1 className="about--heading--text">about me</h1> */}
        <h1 className="about--heading--text">About me</h1>
        <div className="width-m"></div>
        <div className="about--heading--line"></div>
      </div>
      <div className="height-m"></div>
      <div className="height-s"></div>
      <div className="about--text">
        <p>
          I am currently completing my Master's degree in Mechanical Engineering
          at the{" "}
          <span className="about--text--highlight">
            University of Stuttgart
          </span>
          . As part of my studies, I am working on my Master's thesis at{" "}
          <span className="about--text--highlight">
            ISG Industrielle Steuerungstechnik GmbH
          </span>
          , where I am developing an adaptive Human-Machine Interface (HMI)
          tailored to different machine configurations.
        </p>
        <div className="height-s"></div>
        <p>
          My journey into software development began during the COVID pandemic.
          After being introduced to programming in university computer science
          lectures, I decided to dive deeper and{" "}
          <span className="about--text--highlight">teach myself coding</span> —
          a decision that has become a passion and an integral part of my career
          aspirations.
        </p>
        <div className="height-s"></div>
        <p>
          Outside of software development and engineering, I am deeply
          passionate about{" "}
          <span className="about--text--highlight">football</span>. Whether it’s
          playing with friends at my local club or cheering on my favorite teams
          from the stadium or in front of the TV, football has always been a
          source of joy and inspiration in my life.
        </p>
      </div>
      <div className="about--logos">
        <div class="about--logos--slide">
          {Object.entries(imageMap).map(([key, src]) => (
            <img
              className="about--logos--slide--item"
              key={key}
              alt={`${key} logo`}
              src={src}
            />
          ))}
        </div>
        <div class="about--logos--slide">
          {Object.entries(imageMap).map(([key, src]) => (
            <img
              className="about--logos--slide--item"
              key={key}
              alt={`${key} logo`}
              src={src}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
