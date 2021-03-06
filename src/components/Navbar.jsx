import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/4048.png";
import menu from "../images/menu.png";

const Navbar = () => {
  const [expand, setExpanded] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", scrollHandler);
  return (
    <nav
      className={`navbar navbar-expand-md fixed-top ${
        navbar ? "sticky" : "navbar"
      }`}
    >
      <div className="container">
        <div className="mobile-nav">
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              className="logo"
              alt="Mayur"
              style={{ width: 50 }}
            />
          </Link>
          <button
            className="navbar-toggler collapsed"
            aria-controls="navbarNav"
            aria-label="toggle navigation"
            onClick={() => {
              setExpanded(!expand);
            }}
          >
            <img src={menu} alt="menu" style={{ width: 38 }} />
          </button>
        </div>
        <div
          className={`navbar-collapse ${!expand ? "collapse" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                aria-current="page"
                onClick={() => {
                  setExpanded(false);
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-link"
                onClick={() => {
                  setExpanded(false);
                }}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                onClick={() => {
                  setExpanded(false);
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => {
                  setExpanded(false);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
