import React from "react";
import "./TwoRowLayer.css";
import Necklace from '../../assets/girl-necklease.jpg'

export const TwoRowLayer = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h1>
          Perfect Match <br />
          For Every <br />
          Occasion
        </h1>
        <p>
          Our unique jewellery designs are perfect for any occasion. We love
          bringing joy to <br />
          our customers with beautiful pieces that make them feel special.{" "}
          <br />
          Because you're worth it.
        </p>
        <button className="learn-more">SHOP NOW</button>
      </div>
      <div className="image-container">
        <img
          src={Necklace}
          alt="Jewelry"
          className="image"
        />
      </div>
    </div>
  );
};

export default TwoRowLayer;
