import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link component
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"; // For brand icons
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons"; // For solid icons
import { faTiktok } from "@fortawesome/free-brands-svg-icons"; // For TikTok icon
import LOGO from "../../assets/Logo-02 (1).png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]); // State for categories

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/categories");
        const data = await response.json();
        setCategories(data); // Assuming `data` is an array of categories
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

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
          <Link to="/Products">Products</Link>
          <ul className="dropdown">
            {categories.length > 0 ? (
              categories.map((category) => (
                <li key={category.id}>
                  <Link to={`/Products/${category.slug}`}>{category.name}</Link>
                </li>
              ))
            ) : (
              <li>Loading...</li>
            )}
          </ul>
        </li>
        <li>
          <Link to="/schedule">Schedule your Virtual Counselling</Link>
        </li>
        <li>
          <Link to="/User">
            <FontAwesomeIcon
              icon={faUser}
              className="icon user"
              title="User Profile"
            />
          </Link>
        </li>
      </ul>
      <div className="actions">
        <a
          href="https://www.facebook.com/p/Om-Laxmi-Gahana-Griha-61567682581154/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="icon facebook"
            title="Facebook"
          />
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTiktok} // TikTok icon here
            className="icon tiktok"
            title="TikTok"
          />
        </a>
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
