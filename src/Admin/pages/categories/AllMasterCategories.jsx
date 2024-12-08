import React, { useEffect, useState } from 'react';
import { FaPlus, FaEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMasterCategory } from '../../../Redux/Slice/categorySlice';
import { PiListBulletsBold } from 'react-icons/pi';
import api from '../../../axios';

const AllMasterCategories = () => {
  const { masterCategories } = useSelector((state) => state.category);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMasterCategory());
  }, [dispatch]);

  const deleteMasterCategory = (id) => {
    api
      .delete(`/api/inventory/deletemastercat/${id}`)
      .then(() => {
        toast("Master category deleted successfully", { autoClose: 2000 });
      })
      .catch((err) => {
        console.error("Error deleting master category:", err);
        toast.error("Failed to delete master category.");
      });
  };

  const total = masterCategories.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (currentPage - 1) * limit;
  const showResult = masterCategories.slice(startIndex, startIndex + limit);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <div className="cardHead -z-[0]">
        <h2 className="text-3xl font-semibold text-[#34395E]">
          Master Category
        </h2>
      </div>
      <div className="mx-8 px-4 py-4 my-4 shadow-md">
        <Link
          to="/admin/product-master-category/create"
          className="bg-blue-500 w-fit text-white my-4 py-2 flex items-center px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <FaPlus /> Add New
        </Link>

        <div className="flex flex-col md:flex-row justify-between text-sm">
          <div className="flex items-center gap-2">
            <label htmlFor="items">Show:</label>
            <select
              name="items"
              id="items"
              className="outline-none border py-2 px-2 rounded"
              onChange={(e) => setLimit(parseInt(e.target.value, 10))}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            entries
          </div>
        </div>

        <div className="py-6 overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse border border-gray-200">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 border border-gray-200">SN</th>
                <th className="px-4 py-2 border border-gray-200">Name</th>
                <th className="px-4 py-2 border border-gray-200">Action</th>
              </tr>
            </thead>
            <tbody>
              {showResult.length > 0 ? (
                showResult.map((category, index) => (
                  <tr
                    key={index}
                    className={`text-gray-700 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}
                  >
                    <td className="px-4 py-2 border border-gray-200 text-center">
                      {startIndex + index + 1}
                    </td>
                    <td className="px-4 py-2 border border-gray-200">
                      {category.mastercat_name}
                    </td>
                    <td className="px-4 py-2 border border-gray-200 flex justify-center gap-2">
                      <button
                        className="h-8 w-8 bg-blue-600 text-white rounded flex items-center justify-center hover:bg-blue-700"
                        onClick={() => navigate(`/admin/product-master-category/edit/${category.master_id}`)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="h-8 w-8 bg-red-500 text-white rounded flex items-center justify-center hover:bg-red-600"
                        onClick={() => deleteMasterCategory(category.master_id)}
                      >
                        <MdDeleteOutline />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-4 text-center text-gray-500">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="py-5 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-gray-500 text-sm">
            Showing {Math.min(startIndex + 1, total)} to {Math.min(startIndex + limit, total)} of {total} entries
          </h2>

          <div className="flex items-center gap-4">
            <button
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <span className="bg-blue-600 w-[35px] h-[35px] flex items-center justify-center text-white rounded">
              {currentPage}
            </span>
            <button
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
              disabled={currentPage === totalPages}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllMasterCategories;
