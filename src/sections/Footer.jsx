import { NavLink } from "react-router-dom";

// Import Styles
import '../styles/css/spaceconstants.css';
import '../styles/css/footer.css';

function Footer() {
  return <div className="footer">
    <NavLink to='/imprint'>Imprint</NavLink>
    <div className='width-md'></div>
    <NavLink to='/data'>Data</NavLink>
  </div>;
}

export default Footer;
