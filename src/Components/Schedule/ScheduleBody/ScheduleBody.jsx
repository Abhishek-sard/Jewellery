import React from "react";
import "./ScheduleBody.css";
import ImageEye from "../../../assets/GirlEye.jpg";

const ScheduleBody = () => {
  return (
    <div className="schedule-body">
      <div className="schedule-text">
        <h2>Online Consultation</h2>
        <h3>Book a Virtual Consultation</h3>
        <p>
          Ask. Explore. Find something you love. Book a consultation or simply
          drop by our stores to speak to our experts - our team is waiting to
          welcome you.
        </p>
        <p>1. Please fill up the form below with details.</p>
        <p>
          2.Our customer representative will contact you via video call and show
          you our collections as per your needs.
        </p>
        <p>3.Pick the jewelry that you liked.</p>
        <p>
          4.Book your selected jewelry or visit the store to see it in person
          and purchase.
        </p>
        <h3>One-to-One Consultations</h3>
        <div className="login-form">
          <form>
            <h2>Your Contact Details</h2>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Contact and Email in the same row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact">Contact:</label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  placeholder="Enter your contact number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Jewelry Type, Date, and Time Slot in the same row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="jewelry-type">Jewelry Type:</label>
                <select id="jewelry-type" name="jewelryType" required>
                  <option value="">Select a type</option>
                  <option value="ring">Ring</option>
                  <option value="necklace">Necklace</option>
                  <option value="bracelet">Bracelet</option>
                  <option value="earrings">Earrings</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date">Preferable Date:</label>
                <input type="date" id="date" name="date" required />
              </div>
              <div className="form-group">
                <label htmlFor="time-slot">Preferable Time Slot:</label>
                <input type="time" id="time-slot" name="timeSlot" required />
              </div>
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button type="submit" className="send-button">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="schedule-image">
        <img src={ImageEye} alt="Schedule" />
      </div>
    </div>
  );
};

export default ScheduleBody;
