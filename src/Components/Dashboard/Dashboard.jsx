import React from "react";
import ProductForm from "./Pages/ProductForm";
import {
  FaHome,
  FaUserAlt,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col">
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold">My Dashboard</h1>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-4 p-4">
            <li className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded cursor-pointer">
              <FaHome /> Home
            </li>
            <li className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded cursor-pointer">
              <FaUserAlt /> Profile
            </li>
            <li className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded cursor-pointer">
              <FaChartBar /> Analytics
            </li>
            <li className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded cursor-pointer">
              <FaCog /> Settings
            </li>
            <li className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded cursor-pointer">
              <FaSignOutAlt /> Logout
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Welcome to the Dashboard</h2>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </header>

        
      </div>
      <ProductForm/>
    </div>
  );
};

export default Dashboard;
