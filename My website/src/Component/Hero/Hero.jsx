import React from "react";
import my_picture from "../../assets/smiles.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="home">
      <div className="hero-text">
        <h1>I'm Busolami Oluwabi</h1>
        <p>
          I'm a Front-End Developer and Designer from Nigeria who is passionate
          about making sure that systems, interfaces, languages and graphics are
          human-friendly, emotive and clear.
        </p>
      </div>
      <img src={my_picture} alt="" />
    </div>
  );
};

export default Hero;
