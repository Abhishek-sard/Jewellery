import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllBanners, getAllSecondBanners } from "../../../Redux/Slice/bannerSlice";
import api from "../../../axios";

const AllSecondBanner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { secondBanners, isLoading } = useSelector((state) => state.banner);

  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllSecondBanners());
  }, [dispatch]);

  const total = secondBanners.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (currentPage - 1) * limit;
  const showResult = secondBanners.slice(startIndex, startIndex + limit);

  const handleLimit = (e) => {
    setLimit(parseInt(e.target.value, 10));
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filtered = secondBanners.filter((banner) =>
      banner.title.toLowerCase().includes(searchValue)
    );
    setCurrentPage(1);
    setLimit(filtered.length);
  };

  const handleEditBanner = (id) => {
    navigate("/admin/banner/second-banner/edit/" + id);
  };

  const handleDeleteBanner = async (id) => {
    const res = await api.delete(`/api/inventory/deletesecondbanner/${id}`);
    if (res.data.success) {
      toast.success("Banner deleted successfully");
      dispatch(getAllSecondBanners());

    }else{
      toast.error(res.data.message);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="cardHead flex flex-col md:flex-row justify-between gap-4">
        <h2 className="text-3xl font-semibold text-[#34395E]">Second Banners</h2>
        <Link
          to="/admin/banner/second-banner/create"
          className="bg-blue-500 flex w-fit items-center gap-1 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <FaPlus /> Add New
        </Link>
      </div>
      <div className="mx-4 md:mx-8 pt-4 pb-10">
        <div className="px-4 md:px-[25px] py-4 w-full rounded bg-white mb-10 shadow">
          <div className="flex flex-col md:flex-row justify-between gap-4 text-sm">
            <div className="flex items-center gap-2">
              <label htmlFor="items">Show:</label>
              <select
                name="items"
                id="items"
                className="outline-none border py-2 px-2 rounded"
                onChange={handleLimit}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              entries
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="search">Search:</label>
              <input
                type="text"
                id="search"
                className="outline-none border py-2 px-2 rounded w-full md:w-60"
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="py-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="border-b-2">
                <tr className="font-semibold text-gray-700">
                  <th className="w-1/6 p-2 text-center">SN</th>
                  <th className="w-1/6 p-2 text-center">Title</th>
                  <th className="w-1/6 p-2 text-center">Images</th>
                  <th className="w-1/6 p-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {showResult.length > 0 ? (
                  showResult.map((banner, index) => (
                    <tr key={banner.id} className="text-center">
                      <td className="p-2">{startIndex + index + 1}</td>
                      <td className="p-2">{banner.title}</td>
                      <td className="p-2">
                        <div className="flex flex-wrap justify-center gap-2">
                          {banner.images &&
                            banner.images.map((image, i) => (
                              <img
                                key={i}
                                src={import.meta.env.VITE_API_URL + image}
                                alt={banner.title}
                                className="w-16 h-16 object-cover rounded"
                              />
                            ))}
                        </div>
                      </td>
                      <td className="p-2 flex gap-2 justify-center">
                        <button
                          className="bg-blue-600 p-2 rounded text-white hover:bg-blue-700"
                          onClick={() => handleEditBanner(banner.id)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="bg-red-500 p-2 rounded text-white hover:bg-red-600"
                          onClick={() => handleDeleteBanner(banner.id)}
                        >
                          <MdDeleteOutline />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-4 text-center text-gray-500">
                      No secondBanners found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <hr />
          <div className="py-5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs md:text-sm">
              Showing {startIndex + 1} to {Math.min(startIndex + limit, total)}{" "}
              of {total} entries
            </p>
            <div className="flex gap-4">
              <button
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
                disabled={currentPage === 1}
                onClick={handlePrevious}
              >
                Previous
              </button>
              <span className="px-4 py-2 bg-blue-600 text-white rounded">
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
      </div>
    </>
  );
};

export default AllSecondBanner;
