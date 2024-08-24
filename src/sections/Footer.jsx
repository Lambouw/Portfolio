import { NavLink } from "react-router-dom";

// Import Styles
import '../styles/css/spaceconstants.css';

function Footer() {
  return <div className="footer--wrapper">
    <NavLink to='/imprint'>Imprint</NavLink>
    <div className='horizontal-spacer-md'></div>
    <NavLink to='/data'>Data</NavLink>
  </div>;
}

export default Footer;
