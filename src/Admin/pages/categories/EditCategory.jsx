import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PiListBulletsBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllMasterCategory, getOneCategory, updateCategory } from "../../../Redux/Slice/categorySlice";

const EditCategory = () => {
  const { id } = useParams(); // Get the category ID from the route
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const {masterCategories }= useSelector((state) => state.category);
  // Redux state
//   const { masterCategories } = useSelector((state) => state.category);
  const { category } = useSelector((state) => state.category);

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    masterCategoryId: "",
    description: "",
    images: [],
  });

  // Pre-fill form data when category is fetched
  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name || "",
        masterCategoryId: category.master_category_id || "",
        description: category.desc || "",
        images: [],
      });
    }
  }, [category]);

  // Fetch master categories and the category to be edited
  useEffect(() => {
    dispatch(getAllMasterCategory());
    dispatch(getOneCategory(id));
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

    // Create a FormData object to handle file uploads
    const submissionData = new FormData();
    submissionData.append("name", formData.name);
    submissionData.append("master_category_id", formData.masterCategoryId);
    submissionData.append("description", formData.description);

    formData.images.forEach((image) => {
      submissionData.append("images", image);
    });


    const result = await dispatch(updateCategory({ submissionData,id }));
    if (result?.payload?.success) {
      toast.success("Category updated successfully");
      navigate("/admin/product-category/");
    } else {
      toast.error("Category update failed");
    }
  };

  return (
    <>
      {/* Page Header */}
      <div className="cardHead -z-[0]">
        <h2 className="text-3xl font-semibold text-[#34395E]">
          Edit Category
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
                <option key={category.master_id} value={category.master_id}>
                  {category.mastercat_name}
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

export default EditCategory;
