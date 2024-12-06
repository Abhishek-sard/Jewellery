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
          4.Book your selected jewelry or visit the store to see it in person and
          purchase.
        </p>
        <h3>One-to-One Consultations</h3>
      </div>
      <div className="schedule-image">
        <img src={ImageEye} alt="Schedule" />
      </div>
    </div>
  );
};

export default ScheduleBody;
