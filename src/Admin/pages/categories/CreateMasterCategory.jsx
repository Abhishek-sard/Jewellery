import React, { useState } from 'react';

import { PiListBulletsBold } from "react-icons/pi";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createMasterCategory } from '../../../Redux/Slice/categorySlice';
import { toast } from 'react-toastify';

const CreateMasterCategory = () => {
  const [formData, setFormData] = useState({
    name: '',

  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIconSelect = (icon) => {
    setFormData({ ...formData, icon });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(createMasterCategory(formData));
    if (result.payload.success) {
      toast.success("Category created successfully");
    } else {
      toast.error(result.payload.message || "Category creation failed");
    }
    navigate("/admin/product-master-category")
  };

  return (
    <>
      <div className="cardHead -z-[0]">
        <h2 className='text-3xl font-semibold text-[#34395E]'>Create Master Category </h2>
      </div>
      <div className="mx-8 px-4 py-4 my-4  shadow-md">
        <Link to="/admin/product-master-category" className="bg-blue-500 w-fit text-white my-4 py-2 flex items-center px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <PiListBulletsBold />   Product Category
        </Link>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image Upload */}
          {/* <div className="flex flex-col">
            <label htmlFor="image" className=" text-gray-700 text-sm my-1 font-semibold">
              Image
              <span className='text-red-500'>
                {" "}
                *
              </span>
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div> */}

          {/* Icon Picker */}
          {/* <div className="flex flex-col">
            <label htmlFor="icon" className=" text-gray-700 text-sm my-1 font-semibold">
              Icon
              <span className='text-red-500'>

                {" "}    *
              </span>
            </label>
            <div className="border border-gray-300 rounded-md p-2">
              <IconPicker
                value={formData.icon}
                onChange={handleIconSelect}
                containerStyles={{ border: 'none' }}
                buttonStyles={{ backgroundColor: 'transparent', border: 'none' }}
              />
            </div>
            {formData.icon && (
              <div className="mt-2 text-blue-500">
                Selected Icon: <span className="inline-block">{formData.icon}</span>
              </div>
            )}
          </div> */}

          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className=" text-gray-700 text-sm my-1 font-semibold">
              Name
              <span className='text-red-500'>
                {" "}
                *
              </span>
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
          {/* 
          {/* Slug Input */}
          {/* <div className="flex flex-col">
            <label htmlFor="slug" className="text-gray-700 text-sm my-1 font-semibold">
              Slug
              <span className='text-red-500'> {""}
                *
              </span>
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div> */}

          {/* Status Dropdown */}
          {/* <div className="flex flex-col">
            <label htmlFor="status" className="text-gray-700 text-sm my-1 font-semibold">
              Status
              <span className='text-red-500'>
                {" "}
                *
              </span>
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>  */}

          {/* Submit Button */}
          <button
            type="submit"
            className=" bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateMasterCategory;
