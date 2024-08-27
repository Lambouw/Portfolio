// Import Components
import NavBar from '../components/NavBar';

// Import Styles
import '../styles/css/header.css';

function Header() {
  return <div className="header">
    <div className="header--name">Malte Lindemann</div>
    <NavBar />
  </div>;
}

export default Header;
