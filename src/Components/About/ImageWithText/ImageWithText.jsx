import React from "react";
import "./ImageWithText.css";
import People1 from "../../../assets/person-1.jpg";
import People2 from "../../../assets/person-2.jpg";

const ImageWithText = () => {
  return (
    <div className="image-text-container">
      <div className="image-text-item">
        <div className="image-section">
          <img src={People1} alt="Person 1" className="small-image" />
        </div>
        <div className="text-section">
          <h2 className="text-title">Message From Director</h2>
          <p className="text-paragraph">
            Our CEO Mr. Shakti Kumar Begani, is the visionary behind Ganapati
            Jewellers. After successfully leading a carpet business by focusing
            on quality and designs, Shakti begani plans to replicate his success
            in jewellery by prioritizing the same features of jewellery.
          </p>
          <p>
            His vision and guidelines have helped Ganapati Jewellers establish
            themselves as a brand of trust, uniqueness and beauty.
          </p>
          <h4>Mr.Shakti Kumar Begani</h4>
        </div>
      </div>

      <div className="image-text-item">
        <div className="image-section">
          <img src={People2} alt="Person 2" className="small-image" />
        </div>
        <div className="text-section">
          <h2 className="text-title">Message From Managing Director </h2>
          <p className="text-paragraph">
            Ganapati Jewellers Nepal was born with a clear vision to become the
            most trusted and iconic jewellery brand in Nepal. Our experienced
            team of experts are dedicated to sourcing and creating the most
            beautiful and luxurious pieces that will be cherished for a lifetime
          </p>
          <h4>Mr.Siddhant Begani</h4>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
