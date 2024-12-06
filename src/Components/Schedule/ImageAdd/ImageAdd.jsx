import React from "react";
import "./ImageAdd.css"; // Updated the CSS file name
import ImageRing from '../../../assets/DiamondRing.jpg';

const ImageAdd = () => {
  return (
    <div className="middle-line-container">
      <div className="middle-line-left">
        <p>
          From simple and stylish to elegant antique pieces - Ganpati jewellery
          has something for everyone.
        </p>
        <h2>- Tenzing Lama</h2>
      </div>
      <div className="middle-line-center">
        <img
          src={ImageRing}
          alt="Diamond Ring"
          className="middle-line-image"
        />
      </div>
      <div className="middle-line-right">
        <h1>Antique Gold Gallery</h1>
        <p>
          Antique gold jewellery is a piece of jewelry that is genuine,
          original, and made from high-quality materials. Moreover, it is
          designed and crafted with precision and care. It uses traditional
          techniques and methods that have been passed down through generations
          of skilled artisans. Are you looking for an ancient piece of jewelry
          with cultural significance…
        </p>
      </div>
    </div>
  );
};

export default ImageAdd;
