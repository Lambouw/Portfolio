// Import Styles
import "../styles/css/projectdialog.css";

// Import Project Images
import ilhomepage5 from "../assets/images/ilhomepage5.png";
import portfoliov1 from "../assets/images/portfoliov1.png";
import fmmg from "../assets/images/fmmg.png";
import hmi from "../assets/images/hmi.png";
import twinstore from "../assets/images/twinstore.png";

const projectImageMap = {
  ilhomepage5: ilhomepage5,
  portfoliov1: portfoliov1,
  fmmg: fmmg,
  hmi: hmi,
  twinstore: twinstore,
};

// Import Tech Images
import html from "../assets/logos/html.svg";
import javascript from "../assets/logos/javascript.svg";
import typescript from "../assets/logos/typescript.svg";
import css from "../assets/logos/css.svg";
import scss from "../assets/logos/scss.svg";
import react from "../assets/logos/react-mini.svg";
import dart from "../assets/logos/dart.svg";
import flutter from "../assets/logos/flutter.svg";
import node from "../assets/logos/node.svg";
import express_d from "../assets/logos/express_d.svg";
import express_l from "../assets/logos/express_l.svg";
import git from "../assets/logos/git.svg";
import postman from "../assets/logos/postman.svg";
import insomnia from "../assets/logos/insomnia.svg";
import python from "../assets/logos/python.svg";
import postgresql from "../assets/logos/postgresql.svg";
import figma from "../assets/logos/figma.svg";
import materialui from "../assets/logos/materialui.svg";

const techImageMap = {
  html: html,
  javascript: javascript,
  typescript: typescript,
  css: css,
  scss: scss,
  react: react,
  dart: dart,
  flutter: flutter,
  node: node,
  express: express_l, // Default to light theme express logo
  git: git,
  postman: postman,
  insomnia: insomnia,
  python: python,
  postgresql: postgresql,
  figma: figma,
  materialui: materialui,
};

const ProjectDialog = ({ project }) => {
  return (
    <div className="project-dialog">
      <div className="project-dialog--upper">
        <img
          className="project-dialog--upper--image"
          aria-label={project.name}
          alt={project.name}
          src={projectImageMap[project.image]}
        />
        <div className="height-s"></div>
        <h3 className="project-dialog--upper--name">{project.name}</h3>
      </div>
      <div className="height-s"></div>
      <div className="project-dialog--description">{project.description}</div>
      <div className="height-s"></div>
      <div className="project-dialog--stack">
        {project.stack.map((item, index) => (
          <div className={`project-dialog--stack--item ${item.image}`}>
            <img
              src={techImageMap[item.image]}
              className="project-dialog--stack--item--icon"
              alt={item.name}
            />
            <div className="width-s"></div>
            <div className="project-dialog--stack--item--label">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDialog;
