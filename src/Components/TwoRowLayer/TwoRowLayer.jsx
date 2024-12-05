import React from "react";
import "./TwoRowLayer.css";
import Necklace from "../../assets/girl-necklease.jpg";

export const TwoRowLayer = () => {
  return (
    <div className="two-row-layer-container">
      <div className="two-row-text-container">
        <h1 className="two-row-title">
          Perfect Match <br />
          For Every <br />
          Occasion
        </h1>
        <p className="two-row-description">
          Our unique jewellery designs are perfect for any occasion. We love
          bringing joy to <br />
          our customers with beautiful pieces that make them feel special.
          <br />
          Because you're worth it.
        </p>
        <button className="two-row-shop-button">SHOP NOW</button>
      </div>
      <div className="two-row-image-container">
        <img
          src={Necklace}
          alt="Jewelry"
          className="two-row-image"
        />
      </div>
    </div>
  );
};

export default TwoRowLayer;
