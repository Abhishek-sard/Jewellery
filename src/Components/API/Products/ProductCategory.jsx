// Components/Products/ProductCategory.js
import React from "react";
import { useParams } from "react-router-dom";

const ProductCategory = () => {
  const { slug } = useParams();

  return (
    <div>
      <h1>Category: {slug}</h1>
      <p>Showing products for category: {slug}</p>
    </div>
  );
};

export default ProductCategory;
