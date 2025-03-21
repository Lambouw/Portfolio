// Import Styles
import "../styles/css/description.css";

const HMI = () => {
  return (
    <div className="description">
      <div className="description--paragraph">
        This was the first project where I was responsible for both the frontend
        and backend development. The project involved creating an{" "}
        <span className="description--paragraph--highlight">
          adaptive Human-Machine Interface (HMI)
        </span>{" "}
        for machines with varying configurations and was a core part of my
        master's thesis titled{" "}
        <span className="description--paragraph--italic">
          "Development of a flexible and adaptive HMI for different machine
          configurations."
        </span>{" "}
      </div>
      <div className="height-s"></div>
      <div className="description--paragraph">
        To connect the application to machines, the system utilized an{" "}
        <span className="description--paragraph--highlight">OPC UA</span>{" "}
        server, which managed the data exchange and control utilities of the
        machine's control system. This project demonstrated my ability to design
        and implement a full-stack application tailored for industrial use cases
        and adaptive functionality.
      </div>
    </div>
  );
};

export default HMI;
