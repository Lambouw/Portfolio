// Import Custom Hooks
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// Import Styles
import "../styles/css/about.css";
import "../styles/css/animations.css";

function About() {
  // Animation Refs
  const [headingIsVisible, headingRef] = useIntersectionObserver(0.1);
  const [textIsVisible, textRef] = useIntersectionObserver();

  return (
    <div id="about" className="about">
      <div
        className={`about--heading fade-in-left ${
          headingIsVisible ? "is-visible" : ""
        }`}
        ref={headingRef}
      >
        <h1 className="about--heading--icon">&#8811;</h1>
        {/* <h1 className="about--heading--icon">&#8827;</h1> */}
        <div className="width-s"></div>
        {/* <h1 className="about--heading--text">about me</h1> */}
        <h1 className="about--heading--text">About me</h1>
        <div className="width-m"></div>
        <div className="about--heading--line"></div>
      </div>
      <div className="height-l"></div>
      <div
        className={`about--text fade-in-bottom ${
          textIsVisible ? "is-visible" : ""
        }`}
        ref={textRef}
      >
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
    </div>
  );
}

export default About;
