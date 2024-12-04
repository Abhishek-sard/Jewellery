import React from "react";
import "./ImageSlider.css";
import GirlsImg from "../../assets/girls.jpg";
import jewellerses from "../../assets/jwellery4.jpg"
export const ImageSlider = () => {
  return (
    <div className="slider">
      <div className="slides">
        <img src={GirlsImg} alt="Image1" />
        <img src={jewellerses} alt="Image2" />
      </div>
    </div>
  );
};
export default ImageSlider;
