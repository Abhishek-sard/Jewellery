    import React, { useEffect, useState } from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { fetchProducts, setPage, setPerPage } from "../../../Redux/Slice/productSlice";
    import { Link } from "react-router-dom";
    import { FaPlus } from "react-icons/fa";
import api from "../../../axios";

    const AllProducts = () => {
    const dispatch = useDispatch();
    const { products, isLoading, error, pagination } = useSelector((state) => state.product);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    // Debounce search input
    useEffect(() => {
        const timer = setTimeout(() => {
        if (search.length >= 3 || search === "") {
            setDebouncedSearch(search);
        }
        }, 500);
        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        const params = {
        product_name: debouncedSearch,
        page: pagination.currentPage,
        per_page: pagination.perPage,
        };
        dispatch(fetchProducts(params));
    }, [dispatch, debouncedSearch, pagination.currentPage, pagination.perPage]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= pagination.totalPages) {
        dispatch(setPage(page));
        }
    };

    const handlePerPageChange = (e) => {
        dispatch(setPerPage(Number(e.target.value)));
    };
    async function handleDelete(id) {
        try {
            const res = api.delete(`/api/inventory/deleteproduct/${id}`);
            if (res?.data?.success) {
                toast.success("Product deleted successfully");
            }
            dispatch(fetchProducts());
        } catch (error) {
            console.error("Error deleting product:", error);
        }
        
    }

    return (
        <div className=" p-6">
        <div className="cardHead flex flex-col md:flex-row justify-between gap-4 mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">Product List</h2>
            <Link
            to="/admin/product/create"
            className="bg-blue-500 flex items-center gap-1 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
            <FaPlus /> Add New Product
            </Link>
        </div>

        <div className="bg-white shadow rounded p-6 mx-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <input
                type="text"
                placeholder="Search by product name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
            />
            <select
                value={pagination.perPage}
                onChange={handlePerPageChange}
                className="border border-gray-300 px-4 py-2 rounded-md shadow-sm"
            >
                <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="20">20 per page</option>
            </select>
            </div>

            {isLoading ? (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
            ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
            ) : products.length === 0 ? (
            <p className="text-gray-600 text-center">No products found.</p>
            ) : (
            <>
                <table className="table-auto w-full border-collapse border border-gray-300 shadow-sm">
                <thead className="bg-gray-100">
                    <tr>
                    <th className="border border-gray-300 px-4 py-2">ID</th>
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">Category</th>
                    <th className="border border-gray-300 px-4 py-2">Price</th>
                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 text-center">{product.id}</td>
                        <td className="border border-gray-300 px-4 py-2">{product.product_name}</td>
                        <td className="border border-gray-300 px-4 py-2">{product.category || "N/A"}</td>
                        <td className="border border-gray-300 px-4 py-2">${product.price}</td>
                        <td className="border border-gray-300 px-4 py-2 flex gap-2 justify-center">
                        <Link
                            to={`/admin/product/view/${product.id}`}
                            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                        >
                            View
                        </Link>
                        <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
                            Delete
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>

                <div className="flex justify-between items-center mt-6">
                <button
                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                    disabled={pagination.currentPage === 1}
                >
                    Previous
                </button>
                <span className="text-gray-600">
                    Page {pagination.currentPage} of {pagination.totalPages}
                </span>
                <button
                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
                    onClick={() => handlePageChange(pagination.currentPage + 1)}
                    disabled={pagination.currentPage === pagination.totalPages}
                >
                    Next
                </button>
                </div>
            </>
            )}
        </div>
        </div>
    );
    };

    export default AllProducts;
