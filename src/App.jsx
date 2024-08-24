import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Link } from "react-scroll";

// Import Logos / Images

// Import Pages
import Home from "./pages/Home";
import Imprint from "./pages/Imprint";
import Data from "./pages/Data";

// Import Components
import NavBar from "./components/NavBar";

// Import Styles
import "./styles/css/app.css";
import "./styles/css/spaceconstants.css";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/data" element={<Data />} />
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
