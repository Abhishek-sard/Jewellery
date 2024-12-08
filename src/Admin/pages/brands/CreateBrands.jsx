import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { PiListBulletsBold } from 'react-icons/pi';
import { useDispatch } from 'react-redux';
import { createBrand } from '../../../Redux/Slice/brandSlice';
import { toast } from 'react-toastify';

const CreateBrands = () => {
    const [brandName, setBrandName] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
const dispatch = useDispatch();
const navigate = useNavigate();    
// Function to handle image upload
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Form validation
        if (!brandName) {
            setError('Brand name is required');
            return;
        }

        setError('');

        const formData = new FormData();
        formData.append('brand_name', brandName);
        formData.append('created_at', new Date().toISOString());
        formData.append('updated_at', new Date().toISOString());
        if (image) {
            formData.append('image', image);
        }
        const res = await dispatch(createBrand(formData));
        if (res?.payload?.success) {
            toast.success('Brand created successfully');
        }else{
            toast.error(res?.payload?.message || 'Brand creation failed');
        }
        navigate("/admin/brands")

    
    };

    return (
        <>
            {/* Page Header */}
            <div className="cardHead -z-[0]">
                <h2 className="text-3xl font-semibold text-[#34395E]">
                    Create barnds
                </h2>
            </div>

            {/* Form Container */}
            <div className="mx-8 px-4 py-4 my-4 shadow-md">
                {/* Back Link */}
                <Link
                    to="/admin/brands"
                    className="bg-blue-500 w-fit text-white my-4 py-2 flex items-center px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <PiListBulletsBold /> Brands
                </Link>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="space-y-4">
                        {/* Brand Name */}
                        <div>
                            <label htmlFor="brand_name" className="block text-sm font-semibold text-gray-700">Brand Name</label>
                            <input
                                type="text"
                                id="brand_name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={brandName}
                                onChange={(e) => setBrandName(e.target.value)}
                            />
                            {error && <p className="text-red-500 text-xs">{error}</p>}
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label htmlFor="image" className="block text-sm font-semibold text-gray-700">Brand Image</label>
                            <input
                                type="file"
                                id="image"
                                className="mt-1 block w-full"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            {image && <p className="text-sm mt-2 text-green-500">Image selected: {image.name}</p>}
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Add Brand
                            </button>
                        </div>
                    </div>
                </form>

                {/* Success/Error Message */}
                {successMessage && <div className="mt-4 text-green-500">{successMessage}</div>}
                {error && <div className="mt-4 text-red-500">{error}</div>}
            </div>
            {/* </div> */}
        </>
    );
};

export default CreateBrands;
