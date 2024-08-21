import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Logos / Images
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Import Components
import NavBar from "./components/NavBar";
import Home from "./navcomponents/Home";
import About from "./navcomponents/About";
import Projects from "./navcomponents/Projects";
import Contact from "./navcomponents/Contact";

// Import Styles
import "./styles/css/main/app.css";
import "./styles/css/basic/spaceconstants.css";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
