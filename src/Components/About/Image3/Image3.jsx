import React from "react";
import "./Image3.css";
import Image1 from "../../../assets/table1.jpg";
import Image2 from "../../../assets/table2.jpg";
import Image4 from "../../../assets/table3.jpg";

const Image3 = () => {
  return (
    <div className="image3-container">
      <div className="image3-text-section">
        <h2>
          <span>DIAMOND</span>
        </h2>
        <h2>GOLD</h2>
        <h2>SILVER</h2>
        <p>
          What sets our diamond jewellery apart from other stores is the quality
          of our diamonds. We only use the finest diamonds in our jewellery, We
          use ethically sourced diamonds one of the best color and clarity.
        </p>
      </div>
      <div className="image3-image-section">
        <div className="image3-large-image">
          <img src={Image1} alt="Large Jewelry" />
        </div>
        <div className="image3-bottom-images">
          <div className="image3-small-image">
            <img src={Image2} alt="Small Jewelry" />
          </div>
          <div className="image3-small-image">
            <img src={Image4} alt="Small Jewelry" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image3;
