import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PiListBulletsBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getOneSubCategory, getAllCategory, updateSubCategory } from "../../../Redux/Slice/categorySlice";

const EditSubCategory = () => {
  const { id } = useParams(); // Get subcategory ID from route
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux state
  const { categories, subcategory } = useSelector((state) => state.category);

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    categoryId: "",
    description: "",
    images: [],
  });

  // Pre-fill form data when subcategory is fetched
  useEffect(() => {
    if (subcategory) {
      setFormData({
        name: subcategory.name || "",
        categoryId: subcategory.category_id || "",
        description: subcategory.description || "",
        images: [], // Keeping empty for new uploads
      });
    }
  }, [subcategory]);

  // Fetch categories and the subcategory to be edited
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getOneSubCategory(id));
  }, [dispatch, id]);

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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for submission
    const submissionData = new FormData();
    submissionData.append("name", formData.name);
    submissionData.append("category_id", formData.categoryId);
    submissionData.append("description", formData.description);

    formData.images.forEach((image) => {
      submissionData.append("images", image);
    });

    const result = await dispatch(updateSubCategory({ submissionData, id }));
    if (result?.payload?.success) {
      toast.success("Subcategory updated successfully");
      navigate("/admin/product-sub-category/");
    } else {
      toast.error(result?.payload?.message || "Subcategory update failed");
    }
  };

  return (
    <>
      {/* Page Header */}
      <div className="cardHead -z-[0]">
        <h2 className="text-3xl font-semibold text-[#34395E]">Edit Subcategory</h2>
      </div>

      {/* Form Container */}
      <div className="mx-8 px-4 py-4 my-4 shadow-md">
        {/* Back Link */}
        <Link
          to="/admin/product-sub-category"
          className="bg-blue-500 w-fit text-white my-4 py-2 flex items-center px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <PiListBulletsBold /> Subcategories
        </Link>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-gray-700 text-sm my-1 font-semibold"
            >
              Name<span className="text-red-500"> *</span>
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

          {/* Category Select */}
          <div className="flex flex-col">
            <label
              htmlFor="categoryId"
              className="text-gray-700 text-sm my-1 font-semibold"
            >
              Category<span className="text-red-500"> *</span>
            </label>
            <select
              id="categoryId"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a Category</option>
              {categories.map((category) => (
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
              Description<span className="text-red-500"> *</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            />
          </div>

          {/* Images */}
          <div className="flex flex-col">
            <label
              htmlFor="images"
              className="text-gray-700 text-sm my-1 font-semibold"
            >
              Upload New Images
            </label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default EditSubCategory;
