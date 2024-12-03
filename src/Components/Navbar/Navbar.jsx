import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'; // For brand icons
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // For solid icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyBrand</div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li>
          <a href="#">About</a>
          <ul className="dropdown">
            <li><a href="#">Product</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Schedule for Virtual Counselling</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Products</a>
          <ul className="dropdown">
            <li><a href="#">Books</a></li>
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Clothing</a></li>
          </ul>
        </li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Schedule for Virtual Counselling</a></li>
      </ul>
      <div className="actions">
        <FontAwesomeIcon icon={faYoutube} className="icon youtube" title="YouTube" />
        <FontAwesomeIcon icon={faFacebook} className="icon facebook" title="Facebook" />
        <FontAwesomeIcon icon={faTwitter} className="icon twitter" title="Twitter" />
        <FontAwesomeIcon icon={faSearch} className="icon search" title="Search" />
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
