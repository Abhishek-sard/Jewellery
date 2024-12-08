import React from "react";
import "./AboutFooter.css";
import BrandLogo from '../../../assets/logo-03.png'

const AboutFooter = () => {
  return (
    <div className="unique-footer">
      <div className="unique-footer-image">
        <img src={BrandLogo} alt="Footer Image" className="unique-footer-img" />
      </div>
      <div className="unique-footer-content">
        <div className="unique-footer-column">
          <h3>Links</h3>
          <p>Gallery</p>
          <p>Blog</p>
          <p>Store Location</p>
          <p>Contact Us</p>
          <p>Sitemap</p>
        </div>
        <div className="unique-footer-column">
          <h3>Ganpati Jewellers Nepal Pvt.Ltd</h3>
          <p>Bishal Bazar, New Road , Kathmandu</p>
          <p>Tel: +977-1-5321565, 5321492</p>
          <p>Email: info@ganapatijewellers.com</p>
        </div>
        <div className="unique-footer-column">
          <h3>Others</h3>
          <p>About Us</p>
          <p>FAQs</p>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="unique-footer-text">
        <p>
          The prices of gold and diamonds are constantly changing. The prices on
          our website are updated as often as possible, but we cannot guarantee
          that they are always accurate. Please contact us if you have any
          questions about the prices of our products. Thank you for your
          understanding.
        </p>
      </div>
      <div className="unique-footer-bottom-text">
        <p>
          © 2023-2024 Ganapati Jewellers Nepal, All Rights Reserved. Website by:
          SAAYAMI
        </p>
      </div>
    </div>
  );
};

export default AboutFooter;
