import React from "react";
import "./Products.css"; // Assuming you create a CSS file for styling

const Products = () => {
  return (
    <div className="products-page">
      <h1>Products Page</h1>
      <p>Explore our product categories:</p>
      <ul className="category-list">
        <li>Electronics</li>
        <li>Fashion</li>
        <li>Home Appliances</li>
      </ul>
    </div>
  );
};

export default Products;
