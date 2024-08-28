import { useState, useEffect } from "react";

// Import Components
import NavBar from "../components/NavBar";

// Import Sections
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Footer from "../sections/Footer";

// Import Styles
import "../styles/css/home.css";

// Import Images
import Scroll from "../assets/scroll.png";

function Home() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) { // Wenn der Benutzer mehr als 50px nach unten scrollt
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
      <div
        id="projects"
        style={{ height: "400px", width: "100%", backgroundColor: "orange" }}
      >
        Projects
      </div>
      <div
        id="career"
        style={{ height: "400px", width: "100%", backgroundColor: "yellow" }}
      >
        Career
      </div>
      <div
        id="contact"
        style={{ height: "400px", width: "100%", backgroundColor: "blue" }}
      >
        Contact
      </div>
      <Footer />
      {isVisible && <img className="scroll-icon" src={Scroll} alt="Scroll Icon"></img>}
    </div>
  );
}

export default Home;
