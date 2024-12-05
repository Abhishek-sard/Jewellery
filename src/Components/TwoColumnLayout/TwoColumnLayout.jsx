import React from "react";
import "./TwoColumnLayout.css";
import GirlImage from '../../assets/girls.jpg';

const TwoColumnLayout = () => {
  return (
    <div className="layout-container">
      <div className="layout-left-column">
        <div className="layout-image-container">
          <img src={GirlImage} alt="Sample" className="layout-image" />
        </div>
      </div>
      <div className="layout-right-column">
        <h2 className="layout-title">
          Antique <br /> Golden Gallery
        </h2>
        <p className="layout-description">
          A piece of antique jewellery is a timeless classic that will always be
          in fashion. We <br /> offer a wide range of antique golden jewellery,
          each piece with its own unique story.
        </p>
        <p className="layout-description-secondary">
          Our pieces are made with the finest materials and craftsmanship,
          ensuring that you <br /> will love them for years to come. Timeless
          Elegance.
        </p>
        <button className="layout-action-button">Learn More</button>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
