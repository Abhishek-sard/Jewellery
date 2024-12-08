import React, { useEffect, useState } from 'react';
import { FaEdit, FaPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllBrands } from '../../../Redux/Slice/brandSlice';

const AllBrands = () => {
    const dispatch = useDispatch()
    const { brands, isLoading } = useSelector((state) => state.brands)
    useEffect(() => {
        dispatch(getAllBrands())
    }, [dispatch])


    const [limit, setLimit] = useState(5); // Set limit to 5 for pagination
    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = Array.isArray(brands) ? brands.length:1; // Total data items
    const totalPages = Math.ceil(totalItems / limit); // Total pages

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate which brands to show based on the current page and limit
    const startIndex = (currentPage - 1) * limit;
    const showResult =Array.isArray(brands)&& brands.slice(startIndex, startIndex + limit);

    return (
        <>
            <div className="cardHead -z-[0] flex flex-col md:flex-row justify-between gap-4">
                <h2 className="text-3xl font-semibold text-[#34395E]">Brands</h2>
                <div className="flex text-[12px] gap-2">
                    <Link
                        to="/admin/dashboard"
                        className="text-blue-500 hover:underline decoration-blue-500"
                    >
                        Dashboard
                    </Link>
                    /
                    <h2 className="text-slate-500"> Brands</h2>
                </div>
            </div>
            <div className="mx-8 pt-4 pb-10">
                <Link
                    to={"/admin/brands/create"}
                    className="bg-blue-500 flex w-fit items-center gap-1 text-white my-4 py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <FaPlus /> Add New
                </Link>

                <div className='px-[25px] py-4 w-full rounded bg-[#FFFFFF] mb-10'>
                    <div className='py-10 overflow-x-auto'>
                        <table className='w-full'>
                            <thead className='border-b-[1.5px]'>
                                <tr className='font-semibold text-[13px] text-[#263143]'>
                                    <th className='w-1/6 p-2 text-center'>SN</th>
                                    <th className='w-1/6 p-2 text-center'>Brand Name</th>
                                    <th className='w-1/6 p-2 text-center'>Created At</th>
                                    <th className='w-1/6 p-2 text-center'>Image</th>
                                    <th className='w-1/6 p-2 text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-zinc-500'>
                            {Array.isArray(showResult) && showResult.length > 0 ? showResult.map((brand, index) => (
                                    <tr key={brand.brand_id} className='text-center'>
                                        <td className='p-2'>{startIndex + index + 1}</td>
                                        <td className='p-2'>{brand.brand_name}</td>
                                        <td className='p-2'>{new Date(brand.created_at).toLocaleString()}</td>
                                        <td className='p-2'>
                                          {brand.image ?  <img
                                                src={import.meta.env.VITE_API_URL + brand.image}
                                                alt={brand.brand_name}
                                                className="h-12 w-12 object-cover rounded"
                                            />:"no image"}
                                        </td>
                                        <td className='p-2 flex justify-center gap-2'>
                                            <button className="h-8 w-8 bg-blue-600 text-white rounded flex justify-center items-center">
                                                <FaEdit />
                                            </button>
                                            <button className="h-8 w-8 bg-red-500 text-white rounded flex justify-center items-center">
                                                <MdDeleteOutline />
                                            </button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="5" className='py-4 text-center'>No data found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="bg-gray-300 text-gray-700 py-2 px-4 rounded disabled:opacity-50"
                        >
                            Previous
                        </button>

                        <div className="text-sm">
                            Page {currentPage} of {totalPages}
                        </div>

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="bg-gray-300 text-gray-700 py-2 px-4 rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllBrands;
