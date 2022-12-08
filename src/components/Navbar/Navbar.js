import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./navbar.css";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const menu = useRef(null);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeOpenMenus = (e) => {
    if (menu.current && navbarOpen && menu.current.contains(e.target)) {
      setNavbarOpen(false);
    }
    console.log(e.target);
  };

  document.addEventListener("mousedown", closeOpenMenus);

  return (
    <section className="navBarSection">
      <div className={`navBar ${navbarOpen ? " showMenu" : ""}`} ref={menu}>
        <ul className="navLists">
          <li className="navItem">
            <Link to="/" className="navLink">
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link to="/" className="navLink">
              About Us
            </Link>
          </li>
          <li className="navItem">
            <Link to="/" className="navLink">
              Services
            </Link>
          </li>
          <li className="navItem">
            <Link to="/" className="navLink">
              Our Teams
            </Link>
          </li>
          <li className="navItem">
            <Link to="/" className="navLink">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div className="toggleNavbar" onClick={handleToggle}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </section>
  );
};

export default Navbar;
