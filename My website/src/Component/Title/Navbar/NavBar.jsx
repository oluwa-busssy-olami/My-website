import React from "react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2>Busolami</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Skills</li>
        <li>Projects</li>
        <li className="btn">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
