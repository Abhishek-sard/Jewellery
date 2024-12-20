import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import './Cancled.css';

const Cancled = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <div className="search-id">
      <div className="text">
        <h2>Cancled</h2>
        <div className="cart-shadow">
          <h5>Select Date Range</h5>
          <h6>Select Orders</h6>
          <div className="input-container">
            <select>
              <option value="someOption">All branch</option>
              <option value="someOption">Main branch</option>
              <option value="someOption">Dc store</option>

              <option value="someOption">farmgate </option>

              <option value="someOption">Jewellers</option>
            </select>
            <div className="date-picker-container">
              <div className="date-picker">
                <label>Start Date</label>
                <div className="date-input">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="Select start date"
                    className="date-input-field"
                  />
                  <FaCalendarAlt className="calendar-icon" />
                </div>
              </div>
              <div className="date-picker">
                <label>End Date</label>
                <div className="date-input">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    placeholderText="Select end date"
                    className="date-input-field"
                  />
                  <FaCalendarAlt className="calendar-icon" />
                </div>
              </div>
            </div>
            <div className="button-container">
              <button className="clear-button" onClick={handleClear}>
                Clear
              </button>
              <button className="show-data-button">Show Data</button>
            </div>
          </div>
        </div>
      </div>
      <div className="search-button">
        <input type="text" placeholder="search data" />
        <button>search</button>
      </div>
      <div className="tables">
        <thead>
          <tr>
            <th>SL</th>
            <th>Order ID</th>
            <th>Order Date</th>
            <th>Customer Info</th>
            <th>Branch</th>
            <th>Total Amount</th>
            <th>Order status</th>
            <th>Order type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>34</td>
            <td>05 Oct 2024 06:31 PM</td>
            <td>Tester Mostofa +8**********</td>
            <td>main branch</td>
            <td>1,815.01$ Unpaid</td>
            <td>Pending</td>
            <td>delivery</td>
          </tr>
        </tbody>
      </div>
    </div>
  );
};

export default Cancled;
