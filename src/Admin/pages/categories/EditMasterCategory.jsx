import React, { useEffect, useState } from "react";
import { PiListBulletsBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneMasterCategory, updateMasterCategory } from "../../../Redux/Slice/categorySlice";
import { toast } from "react-toastify";

const EditMasterCategory = ({params}) => {
  const { id } = useParams();
  const { mastercategory, isLoading } = useSelector((state) => state.category);
  const [formData, setFormData] = useState({ name: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fetch category data on component mount
  useEffect(() => {
    dispatch(getOneMasterCategory(id));
  }, [dispatch, id]);

  // Update form data when masterCategory changes
  useEffect(() => {
    if (mastercategory) {
      setFormData({ name: mastercategory.name || "" });
    }
  }, [mastercategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // console.log({formData,id})
        console.log(id)
      const result = await dispatch(updateMasterCategory({formData,id }));
      if (result.payload.success) {
        toast.success("Category updated successfully");
        navigate("/admin/product-master-category");
      } else {
        toast.error(result.payload.message || "Category update failed");
      }
    } catch (err) {
      toast.error("An error occurred while updating the category.");
    }
  };


  return (
    <>
      <div className="cardHead -z-[0]">
        <h2 className="text-3xl font-semibold text-[#34395E]">Edit Master Category</h2>
      </div>
      <div className="mx-8 px-4 py-4 my-4 shadow-md">
        <Link
          to="/admin/product-master-category"
          className="bg-blue-500 w-fit text-white my-4 py-2 flex items-center px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <PiListBulletsBold /> Product Category
        </Link>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 text-sm my-1 font-semibold">
              Name
              <span className="text-red-500"> *</span>
            </label>
            {isLoading ? <p>Loading...</p>:
            (

                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            )
            }
          </div>
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

export default EditMasterCategory;
