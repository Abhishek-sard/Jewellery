import React from 'react';
import './TwoColumnLayout.css';

const TwoColumnLayout = () => {
  return (
    <div className="container">
      <div className="left-column">
        <div className="image-container">
          <img src="image.jpg" alt="Sample" className="image" />
        </div>
      </div>
      <div className="right-column">
        <h2 className="title">Welcome to Our Website</h2>
        <p className="description">
          This is a sample text description on the right side. You can add more information here to describe your content or services.
        </p>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
