import React from "react";
import "./ImageHand.css";
import Middle from "../../assets/hand.jpg";

export const ImageHand = () => {
  return (
    <div className="content">
      <h1 className="heading-file">Collection</h1>
      <img src={Middle} alt="Hand folder" />
      <p>
        Our curated collections feature only fine jewelry. Explore an assortment
        of 
        antique, vintage, and contemporary designs that are the epitome of
        timeless 
        style and laid-back luxury.
      </p>
    </div>
  );
};

export default ImageHand;
