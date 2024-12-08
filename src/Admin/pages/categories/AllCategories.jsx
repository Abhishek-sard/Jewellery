
import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import {toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../../Redux/Slice/categorySlice";
import api from "../../../axios";

const AllCategories = () => {
  const { categories, isLoading } = useSelector((state) => state.category);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0); // Initialize with 0
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch,deleted]);

  // Update total when categories change
  useEffect(() => {
    setTotal(categories.length);
  }, [categories]);

  const deleteCategory = (id) => {
    api
      .delete(`/api/inventory/deletecategory/${id}`)
      .then(() => {
        toast.success("Category deleted successfully", { autoClose: 2000 });
        setDeleted(!deleted);
      })
      .catch((err) => {
        console.log(err.message)
        toast.error("Error: Could not delete category", { autoClose: 2000 });
      });
  };

  const handleEditCategory = (category) => {
    navigate(`/admin/product-category/edit/${category.id}`);
  };

  const totalPages = Math.ceil(total / limit);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const startIndex = (currentPage - 1) * limit;
  const showResult = categories.slice(startIndex, startIndex + limit);

  return (
    <>
      <div className="cardHead -z-[0] flex flex-col md:flex-row justify-between gap-4">
        <h2 className="text-3xl font-semibold text-[#34395E]">Categories</h2>
        <div className="flex text-[12px] gap-2">
          <Link
            to="/admin/dashboard"
            className="text-blue-500 hover:underline decoration-blue-500"
          >
            Dashboard
          </Link>
          /
          <h2 className="text-slate-500"> Categories</h2>
        </div>
      </div>
      <div className="mx-8 pt-4 pb-10">
        <Link
          to={"/admin/product-category/create"}
          className="bg-blue-500 flex w-fit items-center gap-1 text-white my-4 py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <FaPlus /> Add New
        </Link>

        <div className="px-[25px] py-4 w-full rounded bg-[#FFFFFF] mb-10">
          <div className="py-10 overflow-x-auto">
            <table className="w-full">
              <thead className="border-b-[1.5px]">
                <tr className="font-semibold text-[13px] text-[#263143]">
                  <th className="w-1/12 p-2 text-center">SN</th>
                  <th className="w-2/12 p-2 text-center">Image</th>
                  <th className="w-2/12 p-2 text-center">Category</th>
                  <th className="w-2/12 p-2 text-center">Master Category</th>
                  <th className="w-4/12 p-2 text-center">Description</th>
                  <th className="w-1/12 p-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-zinc-500">
                {showResult.length > 0 ? (
                  showResult.map((category, index) => (
                    <tr key={index} className="text-center">
                      <td className="w-1/12 p-2">{startIndex + index + 1}</td>
                      <td className=" p-2 flex gap-2 justify-center">
                        {category.images.length > 0 ? (
                          category.images.slice(0, 3).map((image, index) => (
                            <img
                              key={index}
                              src={`${import.meta.env.VITE_API_URL}${image}`}
                              alt={category.name}
                              className="h-12 w-12 object-cover rounded"
                            />
                          ))
                        ) : (
                          "No Image"
                        )}
                      </td>

                      <td className="w-2/12 p-2">{category.name}</td>
                      <td className="w-2/12 p-2">{category.master_category}</td>
                      <td className="w-4/12 p-2">  {category.desc.length > 60 ? category.desc.substring(0, 40) + "..." : category.desc}</td>
                      <td className="w-1/12 p-2 flex justify-center items-center gap-2">
                        <button
                          onClick={() => handleEditCategory(category)}
                          className="h-8 w-8 bg-blue-600 flex justify-center items-center text-white rounded"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => deleteCategory(category.id)}
                          className="h-8 w-8 bg-red-500 flex justify-center items-center text-white rounded"
                        >
                          <MdDeleteOutline />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-4 text-center">
                      No data found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="py-5 flex flex-col md:flex-row gap-y-5 justify-between items-center">
            <h2 className="text-slate-500 text-sm">
              Showing {startIndex + 1} to{" "}
              {Math.min(startIndex + limit, total)} of {total} entries
            </h2>

            <div className="flex items-center gap-4">
              <button
                className="px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600"
                onClick={handlePrevious}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600"
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCategories;
