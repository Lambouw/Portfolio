// Import Components
import NavBar from '../components/NavBar';

function Home() {
  return (
    <div className="Home--wrapper">
      <NavBar />
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
    </div>
  );
}

export default Home;
