import React from "react";
import "./Footer.css";
import BrandLogo from "../../assets/logo-03.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-image">
        <img src={BrandLogo} alt="Footer Image" className="footer-img" />
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <h3>Links</h3>
          <p>Gallery</p>
          <p>Blog</p>
          {/* Corrected Store Location Link */}
          <a
            href="https://www.google.com/maps/place/OM+LAXMI+GAHANA+GIRHA/@26.6619395,87.2753406,15.58z/data=!4m6!3m5!1s0x39ef6d718cf4a197:0x83a2683ac6c4a599!8m2!3d26.6619182!4d87.2748155!16s%2Fg%2F11ldx1hcds?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Store Location</p>
          </a>
          <p>Contact Us</p>
          <p>Sitemap</p>
        </div>
        <div className="footer-column">
          <h3>Ganpati Jewellers Nepal Pvt.Ltd</h3>
          <p>Bishal Bazar, New Road , Kathmandu</p>
          <p>Tel: +977-1-5321565, 5321492</p>
          <p>Email: info@ganapatijewellers.com</p>
        </div>
        <div className="footer-column">
          <h3>Others</h3>
          <p>About Us</p>
          <p>FAQs</p>
          {/* Corrected Link to Terms & Conditions */}
          <Link to="/terms-and-conditions">
            <p>Terms & Condition</p>
          </Link>
          {/* Corrected Link for Privacy Policy */}
          <Link to="/privacy-policy">
            <p>Privacy Policy</p>
          </Link>
        </div>
      </div>
      <div className="footer-text">
        <p>
          The prices of gold and diamonds are constantly changing. The prices on
          our website are updated as often as possible, but we cannot guarantee
          that they are always accurate. Please contact us if you have any
          questions about the prices of our products. Thank you for your
          understanding.
        </p>
      </div>
      <div className="footer1-text">
        <p>
          © 2023-2024 Ganapati Jewellers Nepal, All Rights Reserved. Website by:
          SAAYAMI
        </p>
      </div>
    </div>
  );
};

export default Footer;
