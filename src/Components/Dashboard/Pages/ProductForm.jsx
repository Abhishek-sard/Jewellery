import axios from "axios";
import React, { useState } from "react";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productDetail: "",
    productPrice: "",
    brand: "",
    countInStock: "",
    parentCategory: "",
    subCategory: "",
    childCategory: "",
    discount: "",
    weight: "",
    status: "",
    seoDescription: "",
    seoTitle: "",
    highlights: "",
    specifications: "",
    color: "",
    tags: "",
  });

  

  const fieldTypes = {
    productName: "text",
    productDetail: "textarea",
    productPrice: "number",
    brand: "text",
    countInStock: "number",
    parentCategory: "text",
    subCategory: "text",
    childCategory: "text",
    discount: "number",
    weight: "number",
    status: "text",
    seoDescription: "textarea",
    seoTitle: "text",
    highlights: "textarea",
    specifications: "textarea",
    color: "text",
    tags: "text",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    //Handle Products
    try{
      const response = await axios.post(
        "http://localhost:8000/api/v1/create_product"
      )
      console.log(" successful:", response.data);
    }catch(e){
      console.log(e)
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white shadow rounded"
    >
      <h1 className="text-2xl font-bold mb-4">Product Form</h1>
      {Object.keys(formData).map((key) => (
        <div key={key} className="mb-4">
          <label
            htmlFor={key}
            className="block text-sm font-medium text-gray-700 capitalize"
          >
            {key.replace(/([A-Z])/g, " $1").toLowerCase()}
          </label>
          {fieldTypes[key] === "textarea" ? (
            <textarea
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder={`Enter ${key
                .replace(/([A-Z])/g, " $1")
                .toLowerCase()}`}
            />
          ) : (
            <input
              type={fieldTypes[key]}
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder={`Enter ${key
                .replace(/([A-Z])/g, " $1")
                .toLowerCase()}`}
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
