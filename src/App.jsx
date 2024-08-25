import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Logos / Images

// Import Pages
import Home from "./pages/Home";
import Imprint from "./pages/Imprint";
import Data from "./pages/Data";

// Import Components
import Footer from "./sections/Footer";

// Import Styles
import "./styles/css/app.css";
import "./styles/css/spaceconstants.css";

function App() {
  return (
    <div>
      <Router>
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
