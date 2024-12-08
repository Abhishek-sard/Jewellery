import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import api from "../../../axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const response = await api.get(`/api/inventory/getproductbyid/${id}`);
        if (response.data.success) {
          // console.log(response.data.data)
          setProduct(response.data.data);
        } else {
          setError("Product not found or doesn't exist.");
        }
      } catch (err) {
        setError("Failed to fetch product details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="cardHead -z-[0]">
        <h2 className='text-3xl font-semibold text-[#34395E]'>Create Footer Banner</h2>
      </div>
{console.log(product)}
    <div className="max-w-4xl mx-auto mt-4 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Product Details: {product.product_name}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">General Information</h2>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
              <span className="font-medium">Category:</span> {product.category || "N/A"}
            </li>
            <li>
              <span className="font-medium">Subcategory:</span> {product.subcategory || "N/A"}
            </li>
            <li>
              <span className="font-medium">Brand:</span> {product.brand || "N/A"}
            </li>
            <li>
              <span className="font-medium">Desclaimer: {""}</span> 
              <span className="font-medium"  >
              {product.disclaimer }
            </span>
            </li>
            <li>
              <span className="font-medium">Description:</span> 
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Pricing and Stock</h2>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
              <span className="font-medium">Price:</span> ${product.price}
            </li>
            <li>
              <span className="font-medium">Discount:</span> ${product.discount}
            </li>
            <li>
              <span className="font-medium">Price After Discount:</span> $
              {product.main_price_after_discount}
            </li>
            <li>
              <span className="font-medium">Stock:</span> {product.stock}
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700">Attributes</h2>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <span className="font-medium">Volume:</span> {product.ml}ml
          </li>
          <li>
            <span className="font-medium">Active:</span> {product.is_active ? "Yes" : "No"}
          </li>
          <li>
            <span className="font-medium">Best Seller:</span> {product.is_best_seller ? "Yes" : "No"}
          </li>
          <li>
            <span className="font-medium">Hot Sales:</span> {product.is_hot_sales ? "Yes" : "No"}
          </li>
          <li>
            <span className="font-medium">Prescription Required:</span>{" "}
            {product.is_prescription ? "Yes" : "No"}
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700">Discount Period</h2>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <span className="font-medium">Start Date:</span>{" "}
            {new Date(product.discount_startdate).toLocaleString()}
          </li>
          <li>
            <span className="font-medium">End Date:</span>{" "}
            {new Date(product.discount_enddate).toLocaleString()}
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700">Product Images</h2>
        {product.images.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 mt-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={import.meta.env.VITE_API_URL + image}
                alt={`Product Image ${index + 1}`}
                className="w-full h-auto rounded shadow"
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mt-4">No images available.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
