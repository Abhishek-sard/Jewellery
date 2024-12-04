import React from "react";
import "./ImageThree.css";
import ChoiceJewellers from "../../assets/earning.jpg";
import ChoceJewellers from "../../assets/necklace.jpg";
import ChoceJeweller from "../../assets/ring.jpg";

const ImageThree = () => {
  return (
    <div className="image-row">
      <div className="image-container">
        <img src={ChoiceJewellers} alt="Earrings" className="image" />
        <div className="image-text">Earrings</div>
      </div>
      <div className="image-container">
        <img src={ChoceJewellers} alt="Necklace" className="image" />
        <div className="image-text">Necklace</div>
      </div>
      <div className="image-container">
        <img src={ChoceJeweller} alt="Ring" className="image" />
        <div className="image-text">Ring</div>
      </div>
    </div>
  );
};

export default ImageThree;
