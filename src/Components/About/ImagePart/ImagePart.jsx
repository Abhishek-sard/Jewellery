import React from "react";
import "./ImagePart.css";
import ImgShowroom from "../../../assets/showroom.jpg";

const ImagePart = () => {
  return (
    <div className="container">
      <img src={ImgShowroom} alt="Top Image" className="top-image" />
      <div className="text-box">
        <div className="left-text">
          <h2>Leading Gold and Diamond Jewellers</h2>
          <h4>OUR SPECIALITY</h4>
          <p>
            Ganapati jewellers deals in the finest diamond, gold and silver
            jewellery. Our diamond collection can be worn to impress any crowd
            at a cocktail party or to wow the entire audience at a wedding.
          </p>{" "}
          <br />
          <p>
            From exquisite daily wear rings to beautiful bridal Necklaces,
            Ganapati Jewellers has every kind of piece to add to your
            beauty.Ganapati Jewellers deals in the highest quality of 24 karat
            jewellery and the most wonderful designs of 22 karat jewellery. We
            guarantee highest degree of purity and the finest and most detailed
            craftsmanship in all our products. Our 22 karat jewellery also
            includes the most beautiful and rare antique collection. Each
            Antique jewellery is custom made after several rounds of designing
            and detailing. Our Antique collection adds a lot of depth to any
            outfit and is perfect for a show stopping statement or marquee
            bridal wear
          </p>
          <br />
          <p>
            Ganapati jewellers also guarantees the purest silver jewellery,
            ornaments and utensils. The purity we state is the purity we
            guarantee.
          </p>
        </div>
        <div className="right-text">
            <p>Designed & Produced in Nepal</p>
            <p>Certified Diamonds & Gemstones</p>
            <p>One-of-a-kind unique jewelry</p>
            <p>International Standard 3-step Quality Control</p>
            <p>Custom Handcrafted Jewelry</p>
            <p>Exceptional Customer Care</p>
            <p>Exceptional Customer Care</p>
        </div>
      </div>
    </div>
  );
};

export default ImagePart;
