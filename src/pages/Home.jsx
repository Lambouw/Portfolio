import { useState, useEffect } from "react";

import { useTheme } from "../contexts/ThemeContext";

// Import Sections
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Tech from "../sections/Tech";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

// Import Styles
import "../styles/css/home.css";

// Import Images
import Scroll from "../assets/images/scroll-icon/scroll.png";
import ScrollDark from "../assets/images/scroll-icon/scroll-dark.png";

function Home() {
  const [isVisible, setIsVisible] = useState(true);

  const { theme } = useTheme();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Wenn der Benutzer mehr als 50px nach unten scrollt
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Home">
      <Header />
      <Hero />
      <About />
      {/* <Tech /> */}
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      {isVisible &&
        (theme === "light" ? (
          <img className="scroll-icon" src={Scroll} alt="Scroll Icon"></img>
        ) : (
          <img className="scroll-icon" src={ScrollDark} alt="Scroll Icon"></img>
        ))}
    </div>
  );
}

export default Home;
