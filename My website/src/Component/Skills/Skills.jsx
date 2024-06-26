import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitAlt,
  faCss3Alt,
  faHtml5,
  faReact,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import tailwind from "../../assets/Tailwind.png";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skill">
        <h3>
          <FontAwesomeIcon icon={faGitAlt} className="icon-style" />
          Git
        </h3>
        <h3>
          <FontAwesomeIcon icon={faHtml5} className="icon-style" />
          HTML
        </h3>
        <h3>
          <FontAwesomeIcon icon={faCss3Alt} className="icon-style" />
          CSS
        </h3>
      </div>
      <div className="skill">
        <h3>
          <FontAwesomeIcon icon={faReact} className="icon-style" />
          REACT
        </h3>
        <h3>
          <FontAwesomeIcon icon={faJs} className="icon-style" />
          JS
        </h3>
        <h3>
          <img src={tailwind} alt="" className="icon-style" />
          Tailwind CSS
        </h3>
      </div>
    </div>
  );
};

export default Skills;
