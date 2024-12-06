import React from "react";
import "./LayerImage.css"; 
import Diamond from '../../../assets/DiamondRing1.jpg.jpg'
import Diamond1 from '../../../assets/DiamondRing2.jpg.jpg'
import Diamond5 from '../../../assets/DiamondRing3.jpg'
import Diamond6 from '../../../assets/DiamondRing4.jpg'
import Diamond7 from '../../../assets/DiamondRing5.jpg'

const LayerImage = () => {
  return (
    <div className="layer-image-container">
      <div className="image-row">
        <img src={Diamond} alt="Image 1" className="layer-image" />
        <img src= {Diamond1} alt="Image 2" className="layer-image" />
        <img src={Diamond5} alt="Image 3" className="layer-image" />
        <img src={Diamond6} alt="Image 4" className="layer-image" />
        <img src={Diamond7} alt="Image 5" className="layer-image" />
      </div>
      <div className="button-row">
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          <button className="layer-button">Load More</button>
        </a>
        <a href="https://www.instagram.com/p/Csi4iuwpysF/" target="_blank" rel="noopener noreferrer">
          <button className="layer-button">Follow on Instagram</button>
        </a>
      </div>
    </div>
  );
};

export default LayerImage;
