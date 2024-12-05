import React from "react";
import "./MiddleLineLayout.css";
import ImagesDiamond from "../../assets/DiamondRing.jpg";

const MiddleLineLayout = () => {
  return (
    <div className="middle-line-container">
      <div className="middle-line-left-text">
        <p>
          From simple and stylish to elegant antique pieces - Ganpati jewellery
          has something for everyone.
        </p>
        <h2>- Tenzing Lama</h2>
      </div>
      <div className="middle-line-center-content">
        <img
          src={ImagesDiamond}
          alt="Placeholder"
          className="middle-line-center-image"
        />
      </div>
      <div className="middle-line-right-text">
        <h1>Antique Gold Gallery</h1>
        <p>
          Antique gold jewellery is a piece of jewelry that is genuine,
          original, and made from high-quality materials. Moreover, it is
          designed and crafted with precision and care. It uses traditional
          techniques and methods that have been passed down through generations
          of skilled artisans. Are you looking for a ancient piece of jewelry
          with cultural significance…
        </p>
      </div>
    </div>
  );
};

export default MiddleLineLayout;
