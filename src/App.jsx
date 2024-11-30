import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Contexts
import { ThemeProvider } from "./contexts/ThemeContext";

// Import Pages
import Home from "./pages/Home";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";

// Import Components
import BottomNav from "./components/BottomNav";

// Import Styles
import "./styles/css/reset.css";
import "./styles/css/app.css";
import "./styles/css/link.css";
import "./styles/css/spaceconstants.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>
        <BottomNav />
      </Router>
    </ThemeProvider>
  );
}

export default App;
