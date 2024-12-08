import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubCategory } from "../../../Redux/Slice/categorySlice";
import api from "../../../axios";

const AllSubCategories = () => {
  const { subCategories, isLoading } = useSelector((state) => state.category);
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImage, setModalImage] = useState(null); // Track modal state
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSubCategory());
  }, [dispatch]);

  const deleteSubCategory = (id) => {
    api
      .delete(`api/inventory/deletesubcat/${id}`)
      .then(() => {
        toast("Subcategory deleted successfully", { autoClose: 2000 });
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error("Failed to delete subcategory.");
      });
  };

  const totalItems = subCategories.length;
  const totalPages = Math.ceil(totalItems / limit);
  const handleLimitChange = (e) => setLimit(parseInt(e.target.value, 10));
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const startIndex = (currentPage - 1) * limit;
  const showResult = subCategories.slice(startIndex, startIndex + limit);

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <>
      <div className="cardHead -z-[0] flex flex-col md:flex-row justify-between gap-4">
        <h2 className="text-3xl font-semibold text-[#34395E]">Product Subcategory</h2>
        <div className="flex text-[12px] gap-2">
          <Link to="/admin/product-sub-category" className="text-blue-500 hover:underline decoration-blue-500">
            Product Category
          </Link>
          /
          <h2 className="text-slate-500">Product Subcategory</h2>
        </div>
      </div>
      <div className="mx-8 pt-4 pb-10">
        <Link
          to={"/admin/product-sub-category/create"}
          className="bg-blue-500 flex w-fit items-center gap-1 text-white my-4 py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <FaPlus /> Add New
        </Link>

        <div className="px-[25px] py-4 w-full rounded bg-[#FFFFFF] mb-10">
          <div className="py-10 overflow-x-auto">
            <table className="w-full">
              <thead className="border-b-[1.5px]">
                <tr className="font-semibold text-[13px] text-[#263143]">
                  <th className="w-1/6 p-2 text-center">SN</th>
                  <th className="w-1/6 p-2 text-center">Subcategory</th>
                  <th className="w-1/6 p-2 text-center">Category</th>
                  <th className="w-1/6 p-2 text-center">Images</th>
                  <th className="w-1/6 p-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-zinc-500">
                {showResult.length > 0 ? (
                  showResult.map((subcategory, index) => (
                    <tr key={subcategory.id} className="text-center">
                      <td className="p-2">{startIndex + index + 1}</td>
                      <td className="p-2">{subcategory.name}</td>
                      <td className="p-2">{subcategory.category}</td>
                      <td className="p-2">
                        <div className="flex gap-2 justify-center">
                          {subcategory.images.length > 0 ? (
                            subcategory.images.slice(0, 3).map((image, idx) => (
                              <img
                                key={idx}
                                src={`${import.meta.env.VITE_API_URL}${image}`}
                                alt={subcategory.name}
                                className="h-12 w-12 object-cover rounded cursor-pointer"
                                onClick={() => openModal(`${import.meta.env.VITE_API_URL}${image}`)}
                              />
                            ))
                          ) : (
                            "No images"
                          )}
                        </div>
                      </td>
                      <td className="p-2 flex justify-center gap-4">
                        <button
                          className="h-8 w-8 bg-blue-600 text-white rounded flex justify-center items-center hover:bg-blue-700"
                          onClick={() => navigate(`/admin/product-sub-category/edit/${subcategory.id}`)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="h-8 w-8 bg-red-500 text-white rounded flex justify-center items-center hover:bg-red-600"
                          onClick={() => deleteSubCategory(subcategory.id)}
                        >
                          <MdDeleteOutline />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-4 text-center">
                      No data found
                    </td>
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
            <div className="text-sm">Page {currentPage} of {totalPages}</div>
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

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded p-4 max-w-lg mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={modalImage} alt="Subcategory" className="max-w-full h-auto rounded" />
          </div>
        </div>
      )}
    </>
  );
};

export default AllSubCategories;
