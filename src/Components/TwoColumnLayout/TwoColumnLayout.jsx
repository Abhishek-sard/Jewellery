import React from "react";
import "./TwoColumnLayout.css";

const TwoColumnLayout = () => {
  return (
    <div className="container">
      <div className="left-column">
        <div className="image-container">
          <img src='./assets/girls.jpg' alt="Sample" className="image" />
        </div>
      </div>
      <div className="right-column">
        <h2 className="title">
          Antique <br /> Golden Gallery
        </h2>
        <p className="description">
          A piece of antique jewellery is a timeless classic that will always be
          in fashion. We <br /> offer a wide range of antique golden jewellery,
          each piece with its own unique story.
        </p>
        <p className="description-1">
          Our pieces are made with the finest materials and craftsmanship,
          ensuring that you <br /> will love them for years to come. Timeless
          Elegance.
        </p>
        <button className="action-button">Learn More</button>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
