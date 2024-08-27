import { NavLink } from "react-router-dom";

// Import Styles
import '../styles/css/footer.css';

function Footer() {
  return <div className="footer">
    <NavLink className="link" to='/imprint'>Imprint</NavLink>
    <div className='width-lg'></div>
    <NavLink className="link" to='/data'>Data</NavLink>
  </div>;
}

export default Footer;
