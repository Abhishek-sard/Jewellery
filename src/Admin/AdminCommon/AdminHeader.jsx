import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaHome, FaChevronDown } from "react-icons/fa";
import "./admin.css";
import { useNavigate } from "react-router-dom";

const AdminHeader = ({ setOpen, isSidebarOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleProfileMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/profile');
  };

  return (
    <div className="main-header">
      {isSidebarOpen && (
        <div
          className="overlay lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <div
        className={`top-0 left-0 bg-[#6777EF] h-28 flex items-center justify-between transition-all duration-300 ${
          isSidebarOpen ? "lg:pl-64" : "lg:pl-20"
        } w-full`}
      >
        <div className="flex items-center flex-wrap">
          <button
            className="text-gray-300 hover:text-white focus:outline-none text-4xl px-4"
            onClick={() => setOpen((prev) => !prev)}
          >
            &#9776;
          </button>
        </div>
        <div className="flex items-center gap-7 relative">
          <Link to={"/"} className="flex items-center gap-1 text-white text-lg">
            <FaHome />
            visit website
          </Link>
          <Link to={"/admin"}>
            <img
              src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
          </Link>
          <button
            className="text-gray-300 hover:text-white mr-8 focus:outline-none flex items-center gap-2"
            onClick={handleProfileMenuOpen}
            aria-haspopup="true"
            aria-expanded={isMenuOpen}
          >
            <span className="hidden md:block">Admin</span>
            <span className="mt-1">
              <FaChevronDown />
            </span>
          </button>
          {isMenuOpen && (
            <div className="absolute right-4 top-16 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <Link
                to={"/admin/profile"}
                onClick={handleNavigate}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </Link>
              <Link
                to={"/admin/profile"}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                My Account
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
