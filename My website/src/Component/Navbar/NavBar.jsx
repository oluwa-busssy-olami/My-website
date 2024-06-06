import { useState } from "react";
import "./Navbar.css";
import Menu from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className="navbar">
      <h2>Busolami</h2>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-260} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="blog" smooth={true} offset={-150} duration={500}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={-260} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-260} duration={500}>
            Projects
          </Link>
        </li>
        <li className="btn">
          <Link to="contact" smooth={true} offset={-260} duration={500}>
            Contact us
          </Link>
        </li>
      </ul>
      <img src={Menu} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default NavBar;
