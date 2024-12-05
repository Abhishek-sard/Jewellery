import React from "react";
import "./Image3.css";
import Image1 from "../../../assets/table1.jpg";  
import Image2 from "../../../assets/table2.jpg"; 
import Image4 from "../../../assets/table3.jpg"; 

const Image3 = () => {
  return (
    <div className="container">
      <div className="text-section">
        <h2>Unique Jewelry Designs</h2>
        <p>
          Our jewelry collections combine timeless designs with modern aesthetics. Every piece is crafted with the utmost attention to detail, ensuring both beauty and durability.
        </p>
        <h3>Why Choose Us?</h3>
        <p>
          - Exclusive Designs<br />
          - Highest Quality Craftsmanship<br />
          - Customizable Jewelry Options<br />
          - Affordable Luxury for Everyone
        </p>
        <p>
          Our experienced designers are constantly creating new and unique pieces to reflect personal styles and preferences. Whether you are looking for a statement piece or a subtle accessory, we have something for you.
        </p>
      </div>
      <div className="image-section">
        <div className="large-image">
          <img src={Image1} alt="Large Jewelry" />
        </div>
        <div className="bottom-images">
          <div className="small-image">
            <img src={Image2} alt="Small Jewelry" />
          </div>
          <div className="small-image">
            <img src={Image4} alt="Small Jewelry" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image3;
