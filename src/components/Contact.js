import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "./Datepicker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Contact.css";

export const Contact = () => {
  const [isAppointmentFormVisible, setAppointmentFormVisibility] =
    useState(false);

  const handleShowForm = () => {
    setAppointmentFormVisibility(true);
  };

  return (
    <div className="contact">
      <h1>Contact us</h1>
      <hr />
      <br />
      <div>
        <button onClick={handleShowForm}>Show Appointment Form</button>
        {isAppointmentFormVisible && <DatePicker />}
      </div>
      <br />
      <br />
      <Link to="/appointment">
        <button className="btn btn-primary">Book Appointment</button>
      </Link>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="contact-1">
                                <p> For Further Information Contact: </p>
                                <p className="contact-info">
                                <i class="bi bi-telephone"></i> - 022-2487848 </p>
                                <p className="contact-info">
                                <i class="bi bi-headset"></i> - 1800-343242 </p>
                                <p className="contact-info">
                                <i class="bi bi-mailbox"></i> - queries@therapists.com</p>
      </div>
      <footer>
        <hr/>
        <p>Reach Us At</p> 
        <p className="reach-us">
        <i class="bi bi-instagram"></i><a href="/"></a>
        <i class="bi bi-linkedin"></i><a href="/"></a>
        <i class="bi bi-facebook"></i><a href="/"></a>
        </p>
      </footer>
    </div>
  );
};
