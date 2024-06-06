import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <a href="https://github.com/oluwa-busssy-olami">
          <FontAwesomeIcon icon={faGitAlt} className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/busolami-oluwabi-546b63308/">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="https://x.com/BussyOlami">
          <FontAwesomeIcon icon={faTimes} className="icon" />
        </a>
      </div>
      <h3>@ Busolami Oluwabi 2024</h3>
    </div>
  );
};

export default Footer;
