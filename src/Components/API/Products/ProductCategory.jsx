// Components/Products/ProductCategory.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductCategory = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products for the specific category (you can replace this URL with your actual API endpoint)
    fetch(`https://example.com/api/products/category/${slug}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [slug]);  // The effect will run whenever the `slug` changes

  return (
    <div>
      <h1>Category: {slug}</h1>
      <p>Showing products for category: {slug}</p>
      
      {/* Display products if available */}
      <div>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
