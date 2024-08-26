import { NavLink } from "react-router-dom";

// Import Components
import Footer from "../sections/Footer";

// Import Styles
import "../styles/css/imprint.css";

function Imprint() {
  return (
    <div className="imprint">
      <NavLink to="/">Home</NavLink>
      <div className="imprint--container">
        <h1 className="imprint--container--heading">Imprint</h1>
        <div className="height-md"></div>
        <div className="imprint--container--text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            repellat quo nisi nostrum quasi aliquid, laboriosam provident porro
            unde aliquam iure natus a, aspernatur ducimus! Delectus consequatur
            possimus magni totam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsa repellat quo nisi nostrum quasi aliquid,
            laboriosam provident porro unde aliquam iure natus a, aspernatur
            ducimus! Delectus consequatur possimus magni totam? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsa repellat quo nisi
            nostrum quasi aliquid, laboriosam provident porro unde aliquam iure
            natus a, aspernatur ducimus! Delectus consequatur possimus magni
            totam?
          </p>
          <div className="height-md"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            repellat quo nisi nostrum quasi aliquid, laboriosam provident porro
            unde aliquam iure natus a, aspernatur ducimus! Delectus consequatur
            possimus magni totam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsa repellat quo nisi nostrum quasi aliquid,
            laboriosam provident porro unde aliquam iure natus a, aspernatur
            ducimus! Delectus consequatur possimus magni totam? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsa repellat quo nisi
            nostrum quasi aliquid, laboriosam provident porro unde aliquam iure
            natus a, aspernatur ducimus! Delectus consequatur possimus magni
            totam?
          </p>
          <div className="height-md"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            repellat quo nisi nostrum quasi aliquid, laboriosam provident porro
            unde aliquam iure natus a, aspernatur ducimus! Delectus consequatur
            possimus magni totam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsa repellat quo nisi nostrum quasi aliquid,
            laboriosam provident porro unde aliquam iure natus a, aspernatur
            ducimus! Delectus consequatur possimus magni totam? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsa repellat quo nisi
            nostrum quasi aliquid, laboriosam provident porro unde aliquam iure
            natus a, aspernatur ducimus! Delectus consequatur possimus magni
            totam?
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Imprint;
