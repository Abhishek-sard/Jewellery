import React from "react";
import "./ImageRow.css";
import Golden1 from '../../assets/DiamondRing.jpg';
import Golden2 from '../../assets/earning.jpg';
import Golden3 from '../../assets/girl-necklease.jpg';
import Golden4 from '../../assets/jewellers.jpg';

const ImageRow = () => {
  return (
    <div className="new-arrivals">
      <div className="header-container">
        <h1 className="arrivals-title">New Arrivals</h1>
        <p className="arrivals-subtitle">Handcrafted exquisite collection</p>
      </div>

      <div className="arrivals-images">
        <div className="arrivals-item">
          <img src={Golden1} alt="Gold Necklace" className="arrivals-image" />
          <p className="item-title">Enigmatic Gold Necklace</p>
          <p className="item-price">NRP 898,858.58</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
        <div className="arrivals-item">
          <img src={Golden2} alt="Diamond Necklace" className="arrivals-image" />
          <p className="item-title">Solstice Diamond Necklace</p>
          <p className="item-price">NRP 835,200.00</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
        <div className="arrivals-item">
          <img src={Golden3} alt="Dazzling Necklace" className="arrivals-image" />
          <p className="item-title">Dazzling Diamond Necklace</p>
          <p className="item-price">NRP 1,976,400.00</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
        <div className="arrivals-item">
          <img src={Golden4} alt="Victorian Necklace" className="arrivals-image" />
          <p className="item-title">Victorian Gold Necklace Set</p>
          <p className="item-price">NRP 839,399.41</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ImageRow;
