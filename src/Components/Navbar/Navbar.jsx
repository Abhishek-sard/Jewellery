import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import LOGO from "../../assets/Logo-02 (1).png";
import ProductsNav from "../product/ProductsNav";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={LOGO} alt="Logo" />
        </Link>
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>  
        </li>
        <li className="dropdown-container">
          <Link to="/product/ProductsNav">Products</Link>
          <div className="dropdown">
            <ProductsNav />
          </div>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/user">
            <FontAwesomeIcon icon={faUser} className="icon user" />
          </Link>
        </li>
      </ul>
      <div className="actions">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
        </a>
        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTiktok} className="icon tiktok" />
        </a>
        <FontAwesomeIcon icon={faSearch} className="icon search" />
      </div>
      <div className="burger" onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
