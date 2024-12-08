import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiListBulletsBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { createCategory, getAllMasterCategory, masterCategoryDropDown } from "../../../Redux/Slice/categorySlice";
import { toast } from "react-toastify";

const CreateCategory = () => {
  // Master categories
  // const masterCategories = [
  //   { id: 1, name: "Electronics" },
  //   { id: 2, name: "Clothing" },
  //   { id: 3, name: "Furniture" },
  // ];
  const dispatch = useDispatch();
  // const { masterCategories } = useSelector((state) => state.category)
  const [masterCategories, setMasterCategories] = useState([]);
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    masterCategoryId: "",
    description: "",
    images: [],
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: files,
    });
  };
  const navigate = useNavigate();
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle file uploads
    const submissionData = new FormData();
    submissionData.append("name", formData.name);
    submissionData.append("master_category_id", formData.masterCategoryId);
    submissionData.append("description", formData.description);

    formData.images.forEach((image) => {
      submissionData.append("images", image);
    });

    const result = await dispatch(createCategory(submissionData));
    if (result?.payload?.success) {
      toast.success("Category created successfully");
    } else {
      toast.error("Category creation failed");
    }
    navigate("/admin/product-category/");
  };
  useEffect(() => {
    // dispatch(getAllMasterCategory())
    async function fetchData() {
      const res = await dispatch(masterCategoryDropDown());
      if (res?.payload?.success) {
        setMasterCategories(res.payload.data);
        console.log(masterCategories)
      }else{
      toast.error("error getting categories");

      }


    }
    fetchData()
  }, [])
  return (
    <>
      {/* Page Header */}
      <div className="cardHead -z-[0]">
        <h2 className="text-3xl font-semibold text-[#34395E]">
          Create Category
        </h2>
      </div>

      {/* Form Container */}
      <div className="mx-8 px-4 py-4 my-4 shadow-md">
        {/* Back Link */}
        <Link
          to="/admin/product-category"
          className="bg-blue-500 w-fit text-white my-4 py-2 flex items-center px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <PiListBulletsBold /> Categories
        </Link>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-gray-700 text-sm my-1 font-semibold"
            >
              Category Name
              <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Master Category Select */}
          <div className="flex flex-col">
            <label
              htmlFor="masterCategoryId"
              className="text-gray-700 text-sm my-1 font-semibold"
            >
              Master Category
              <span className="text-red-500"> *</span>
            </label>
            <select
              id="masterCategoryId"
              name="masterCategoryId"
              value={formData.masterCategoryId}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a Master Category</option>
              {masterCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="text-gray-700 text-sm my-1 font-semibold"
            >
              Description
              <span className="text-red-500"> *</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Images */}
          <div className="flex flex-col">
            <label
              htmlFor="images"
              className="text-gray-700 text-sm my-1 font-semibold"
            >
              Upload Images
              <span className="text-red-500"> *</span>
            </label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateCategory;
