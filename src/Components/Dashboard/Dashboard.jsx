import Profile from "../../assets/Logo-02 (1).png";
import { IoSearch } from "react-icons/io5";
import { LuHouse } from "react-icons/lu";
import { FaShoppingBag } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { BsDiagram2 } from "react-icons/bs";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { RiVipDiamondLine } from "react-icons/ri";
import { LuAlarmClockPlus } from "react-icons/lu";
import { IoStatsChartSharp } from "react-icons/io5";
import { ImStatsBars } from "react-icons/im";
import { TbChartPieFilled } from "react-icons/tb";
import "./Dashboard.css";
import React, { useState } from "react";
import {Link, Outlet } from "react-router-dom";
import Pos from "./Pages/POS/Pos";


//outer layout

const Dashboard = () => {
  const [showPosOptions, setShowPosOptions] = useState("false");
  const [showOrderOptions, setShowOrderOptions] = useState("false");
  const [showProductOptions, setShowProductOptions] = useState("flase");
  const [showCategoryOptions, setShowCategoryOptions] = useState("false");

  const togglePosOptions = () => {
    setShowPosOptions((prev) => !prev);
  };
  const toggleOrderOptions = () => {
    setShowOrderOptions((prev) => !prev);
  };
  const toggleProductOptions = () => {
    setShowProductOptions((prev) => !prev);
  };
  const toggleCategoryOptions = () => {
    setShowCategoryOptions((prev) => !prev);
  };

  return (
    <>
      <div className="flex bg-green-500">
        <div className="right-side">
          <img src={Profile} alt="Profile Logo" height="25px" width="160px" />
          <div className="search-bar">
            <span className="search-menu">
              <IoSearch className="search-icon" />
              <input type="text" placeholder="Search menu..." />
            </span>
          </div>
          <div className="house-container">
            <LuHouse className="house-icon" />
            <Link to='' className="house-text">Dashboard</Link>
          </div>
          <div className="pos-management">
            <h5>POS Management</h5>
            <div className="option-box" onClick={togglePosOptions}>
              <span>
                <FaShoppingBag />
                POS
              </span>
              {showPosOptions && (
                <ul>
                  <li ><Link to="Pos">POS</Link></li>
                  <li>order</li>
                </ul>
              )}
            </div>
          </div>
          <div className="order-management">
            <h5>ORDER MANAGEMENT</h5>
          </div>
          <div className="order-Management" onClick={toggleOrderOptions}>
            <span>
              <FaCartArrowDown />
              Order
            </span>
            {showOrderOptions && (
              <ul>
                <li>All</li>
                <li>Pending</li>
                <li>Confirmed</li>
                <li>Processing</li>
                <li>Out For Delivery</li>
                <li>Returned</li>
                <li>Failed</li>
                <li>canceled</li>
              </ul>
            )}
          </div>

          <div className="category" onClick={toggleCategoryOptions}>
            <span>
              <BsDiagram2 />
              Category
            </span>
            {showCategoryOptions && (
              <ul>
                <li>Category</li>
                <li>Sub Category</li>
              </ul>
            )}
          </div>
          <div className="attribute">
            <span>
              <TbLayoutDashboardFilled />
              Attribute
            </span>
          </div>
          <div className="Product" onClick={toggleProductOptions}>
            <span>
              <RiVipDiamondLine />
              Prodcuts
            </span>
            {showProductOptions && (
              <ul>
                <li>Add New</li>
                <li>List</li>
                <li>Bulk Import</li>
                <li>Bulk Export</li>
              </ul>
            )}
          </div>
          <div className="Management">
            <div className="banner">
              <h4>REPORT AND ANALYTICS</h4>
              <div className="earning-report">
                <span>
                  <LuAlarmClockPlus />
                  Earning Report
                </span>
              </div>
              <div className="order-report">
                <span>
                  <IoStatsChartSharp />
                  Order Report
                </span>
              </div>
              <div className="deliverman-report">
                <span>
                  <ImStatsBars />
                  Deliveryman Report
                </span>
              </div>
              <div className="Product-Report">
                <span>
                  <ImStatsBars />
                  Product Report
                </span>
              </div>
              <div className="sales-report">
                <span>
                  <TbChartPieFilled />
                  Sale Report
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <Outlet/>
      </div>
    </>
  );
};

export default Dashboard;
