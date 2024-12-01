// Import Styles
import "../styles/css/description.css";

const TwinStore = () => {
  return (
    <div className="description">
      <div className="description--paragraph">
        During my time at ISG Industrielle Steuerungstechnik GmbH, I was part of
        a team tasked with rebuilding the exchange platform for simulation
        models,{" "}
        <span className="description--paragraph--highlight">TwinStore</span>. I
        was actively involved in all phases of the project, from planning the
        architecture of the new platform and selecting tools and technologies,
        to developing, hosting, and maintaining the application after it went
        live.
      </div>
      <div className="height-s"></div>
      <div className="description--paragraph">
        My primary focus was on the frontend and UI development, which we built
        using <span className="description--paragraph--highlight">Flutter</span>
        . For the backend, we utilized{" "}
        <span className="description--paragraph--highlight">NestJS</span>, while
        the database was powered by{" "}
        <span className="description--paragraph--highlight">PostgreSQL</span>.
        Throughout the development process, we relied on tools such as{" "}
        <span className="description--paragraph--highlight">Figma</span> for
        UI/UX design,{" "}
        <span className="description--paragraph--highlight">Insomnia</span> for
        API testing and{" "}
        <span className="description--paragraph--highlight">pgAdmin</span> for
        database management.
      </div>
      <div className="height-s"></div>
      <div className="description--paragraph">
        This project not only strengthened my skills in modern web and app
        development but also gave me hands-on experience in delivering a robust,
        production-ready application.
      </div>
    </div>
  );
};

export default TwinStore;
