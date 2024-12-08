import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiListBulletsBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { categoryDropDown, createSubCategory, getAllCategory } from "../../../Redux/Slice/categorySlice";
import { toast } from "react-toastify";

const CreateSubCategory = () => {
// const {categories,isLoading} = useSelector((state) => state.category)
const [categories,setCategories] =useState([]) 
const dispatch = useDispatch()
const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    categoryId: "",
    description: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: files,
    });
  };
useEffect(() => {
  // dispatch(getAllCategory())
  
  async function fetchData() {
    const res =await dispatch(categoryDropDown());
    if(res?.payload?.success){
      setCategories(res.payload.data);
    }else{
      toast.error("error getting categories");
    }
    
    
  } 
  fetchData();
},[dispatch])
  const handleSubmit = async(e) => {
    e.preventDefault();

    const dataToSubmit = new FormData();
    dataToSubmit.append("name", formData.name);
    dataToSubmit.append("category_id", formData.categoryId);
    dataToSubmit.append("description", formData.description);
    formData.images.forEach((file) => {
      dataToSubmit.append("images", file);
    });

    const result =await dispatch(createSubCategory(dataToSubmit));
    if(result?.payload?.success){
      toast.success("Sub Category created successfully");
    }else{
      toast.error(result?.payload?.message || "Sub Category creation failed");
    }
    navigate("/admin/product-sub-category/")
  };

  return (
    <>
      <div className="cardHead -z-[0]">
        <h2 className="text-3xl font-semibold text-[#34395E]">
          Create Sub Category
        </h2>
      </div>
      <div className="mx-8 px-4 py-4 my-4 shadow-md">
        <Link
          to="/admin/product-sub-category"
          className="bg-blue-500 w-fit text-white my-4 py-2 flex items-center px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <PiListBulletsBold /> Sub Categories
        </Link>
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
              Images<span className="text-red-500"> *</span>
            </label>
            <input
              type="file"
              id="images"
              name="images"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              multiple
              // required
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

export default CreateSubCategory;
