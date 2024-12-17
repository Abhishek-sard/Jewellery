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

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-profile">
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
            <span className="house-text">Dashboard</span>
          </div>
          <div className="pos-management">
            <h5>POS Management</h5>
            <div className="option-box">
              <span>
                <FaShoppingBag />
                POS
              </span>
              <ul>
                <li>pos</li>
                <li>order</li>
              </ul>
            </div>
          </div>
          <div className="order-management">
            <h5>ORDER MANAGEMENT</h5>
          </div>
          <div className="order-management">
            <span>
              <FaCartArrowDown />
              Order
            </span>
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
          </div>

          <div className="category">
            <span>
              <BsDiagram2 />
              Category
            </span>
            <ul>
              <li>Category</li>
              <li>Sub Category</li>
            </ul>
          </div>
          <div className="attribute">
            <span>
              <TbLayoutDashboardFilled />
              Attribute
            </span>
          </div>
          <div className="Product">
            <span>
              <RiVipDiamondLine />
              Prodcuts
            </span>
            <ul>
              <li>Add New</li>
              <li>List</li>
              <li>Bulk Import</li>
              <li>Bulk Export</li>
            </ul>
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
      </div>
    </div>
  );
};

export default Dashboard;
