// Import Styles
import "../styles/css/hero.css";

import Malte from "../assets/images/original.jpeg";

function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="hero--left">
        <div className="hero--left--text1">I am Malte</div>
        <div className="hero--left--text2">Web Developer</div>
        <div className="hero--left--socials">
          <a
            href="https://www.github.com/lambouw"
            className="hero--left--socials--icon"
            target="blank"
          >
            Github
          </a>
          <div className="width-sm"></div>
          <a
            href="https://www.linkedin.com/in/malte-lindemann-b9533b209/"
            className="hero--left--socials--icon"
            target="blank"
          >
            LinkedIn
          </a>
          <div className="width-sm"></div>
          <a
            href="https://www.instagram.com/malte.lm"
            className="hero--left--socials--icon"
            target="blank"
          >
            Instagram
          </a>
          <div className="width-sm"></div>
          <a
            href="https://www.github.com/lambouw"
            className="hero--left--socials--icon"
            target="blank"
          >
            Mail
          </a>
        </div>
      </div>
      <div className="hero--right">
        <img
          className="hero--right--image"
          src={Malte}
          alt="Image of Malte Lindemann"
        />
      </div>
    </div>
  );
}

export default Hero;
