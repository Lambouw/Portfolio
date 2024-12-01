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
        The tech stack for the application included{" "}
        <span className="description--paragraph--highlight">React</span> with{" "}
        <span className="description--paragraph--highlight">TypeScript</span>{" "}
        and <span className="description--paragraph--highlight">SCSS</span> for
        the frontend, incorporating{" "}
        <span className="description--paragraph--highlight">Material-UI</span>{" "}
        components to enhance the design and usability. The backend was built
        using a{" "}
        <span className="description--paragraph--highlight">Node.js</span>{" "}
        server with{" "}
        <span className="description--paragraph--highlight">TypeScript</span>,
        and the communication between the frontend and backend was implemented
        using{" "}
        <span className="description--paragraph--highlight">WebSocket</span> via
        the <span className="description--paragraph--highlight">Socket.io</span>{" "}
        library.
      </div>
      <div className="height-s"></div>
      <div className="description--paragraph">
        For UI design, I used{" "}
        <span className="description--paragraph--highlight">Figma</span> once
        again to create mockups and prototypes, ensuring a streamlined and
        cohesive user experience.
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
