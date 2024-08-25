import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Link } from "react-scroll";

// Import Logos / Images

// Import Pages
import Home from "./pages/Home";
import Imprint from "./pages/Imprint";
import Data from "./pages/Data";

// Import Components
import NavBar from "./components/NavBar";
import Footer from "./sections/Footer";

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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
