import React from "react";
import "./ImageRow.css";

const ImageRow = () => {
  return (
    <div className="image-row">
      <div className="text-container">
        <h1>New Arrivals</h1>
        <p>Handcrafted exquisite collection</p>
      </div>

      <div className="image-container">
        <div className="image-item">
          <img src="image1.jpg" alt="Image 1" className="image" />
          <p className="image-description">Handcrafted Necklace</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="image-item">
          <img src="image2.jpg" alt="Image 2" className="image" />
          <p className="image-description">Exquisite Earrings</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="image-item">
          <img src="image3.jpg" alt="Image 3" className="image" />
          <p className="image-description">Elegant Bracelet</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="image-item">
          <img src="image4.jpg" alt="Image 4" className="image" />
          <p className="image-description">Stylish Ring</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ImageRow;
