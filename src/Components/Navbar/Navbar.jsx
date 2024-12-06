import { useState } from "react";
import { Link } from 'react-router-dom';  // Import Link component
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"; // For brand icons
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // For solid icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyBrand</div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="dropdown-container">
          <Link to="/products">Products</Link>
          <ul className="dropdown">
            <li>
              <Link to="/products/books">Books</Link>
            </li>
            <li>
              <Link to="/products/electronics">Electronics</Link>
            </li>
            <li>
              <Link to="/products/clothing">Clothing</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule your Virtual Counselling</Link>
        </li>
      </ul>
      <div className="actions">
        <FontAwesomeIcon
          icon={faYoutube}
          className="icon youtube"
          title="YouTube"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className="icon facebook"
          title="Facebook"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="icon twitter"
          title="Twitter"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="icon search"
          title="Search"
        />
      </div>
      <div className="burger" onClick={toggleMenu} aria-label="Toggle menu">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
