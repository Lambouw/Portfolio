// Import Components
import NavBar from "../components/NavBar";

// Import Sections
import Header from "../sections/Header";
import Footer from "../sections/Footer";

function Home() {
  return (
    <div className="Home">
      <Header />
      <div
        id="hero"
        style={{ height: "400px", width: "100%", backgroundColor: "red" }}
      >
        Hero
      </div>
      <div
        id="about"
        style={{ height: "400px", width: "100%", backgroundColor: "green" }}
      >
        About
      </div>
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
    </div>
  );
}

export default Home;
