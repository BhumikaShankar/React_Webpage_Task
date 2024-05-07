import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "./Datepicker";
import "./Home.css";

export const Home = () => {
    const [isAppointmentFormVisible, setAppointmentFormVisibility] =
    useState(false);

  const handleShowForm = () => {
    setAppointmentFormVisibility(true);
  };
const [first, setFirst] = useState(true);
const [second, setSecond] = useState(true);

const handleChange = () => {};
return (
    <div className="home">
    <h1>Our Therapist </h1>
    <hr />
    <br />
    <br />
    <div className="container">
        <div className="row">
          {/*Div for card 1 */}
        <div className="col-md-3">
        <div className="card">
            <img
                src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="psychologist"
            />
            <div className="card-body">
                <h5 className="card-title">
                Dr. Anna Smith
                <br />
                Clinical Psychologist
                <ul>
                    <li>PGDip</li>
                </ul>
                </h5>
                <p className="card-text">2.5km</p>
                <a href="/" className="btn btn-primary">
                Book
                </a>
            </div>
            </div>
        </div>
          {/*Div for card 2 */}
        <div className="col-md-3">
            <div className="card">
            <img
                src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="psychologist"
            />
            <div className="card-body">
                <h5 className="card-title">
                Dr. Micheal Arrow <br/>Counseling Psychologist
                <ul>
                    <li>MSc in Counseling</li>
                </ul>
                </h5>
                <p className="card-text">3.0km</p>
                <a href="/" className="btn btn-primary">
                Book
                </a>
            </div>
            </div>
        </div>
          {/*Div for card 3 */}
        <div className="col-md-3">
            <div className="card">
            <img
                src="https://images.pexels.com/photos/19547590/pexels-photo-19547590/free-photo-of-doctor-in-blue-scrubs-sitting-in-front-of-the-hospital.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="psychologist"
            />
            <div className="card-body">
                <h5 className="card-title">
                Dr. Marie K M <br />
                Child Psychologist
                <ul>
                    <li>PhD in Child Psychology</li>
                </ul>
                </h5>
                <p className="card-text">1.8km</p>
                <a href="/" className="btn btn-primary">
                Book
                </a>
            </div>
            </div>
        </div>
        <div className="col-md-3">
            <div>
            <p className="details">
            <button onClick={handleShowForm}>Show Appointment Form</button>
        {isAppointmentFormVisible && <DatePicker />}
        </p>
      </div>
      <br />
      <br />
      <Link to="/appointment">
        <button className="btn btn-primary">Book Appointment</button>
      </Link>
            <hr />
            <br />
            <div className="checkbox">
            <p>Therapist Type </p>
            <hr />
            <input
                type="checkbox"
                value={first}
                onChange={() => handleChange("first")}
            />
            Psychologist
            <br />
            <div className="checkbox">
                <input
                type="checkbox"
                value={second}
                onChange={() => handleChange("second")}
                />
                Psychotherapist
            </div>
            </div>
        </div>
        </div>
        <hr />
        <br />
    </div>
    <div className="row1">
<div className="col-4">
    <hr />
    <div className="text_1">
    <h3> Choose Your Options </h3>
    </div>
    <hr />
    <br />
</div>

  {/* Column 1 */}
<div className="col-4">
    <div className="card-1">
    <img
        src="https://images.pexels.com/photos/1276518/pexels-photo-1276518.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="card-img-top img-fluid"
        alt="Card 1"
    />
    <div className="card-body-1">
        <h5 className="card-title-1">Mood Journal</h5>
        <a href="/" className="btn btn-primary">
          Click Here
        </a>
    </div>
    </div>
  </div>

  {/* Column 2 */}
  <div className="col-4">
    <div className="card-1">
      <img
        src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
        className="card-img-top img-fluid"
        alt="Card 2"
      />
      <div className="card-body-1">
        <h5 className="card-title-1">Mood Boosters</h5>
        <a href="/" className="btn btn-primary">
          Click Here
        </a>
      </div>
    </div>
  </div>

  {/* Column 3 */}
  <div className="col-4">
    <div className="card-1">
      <img
        src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="card-img-top img-fluid"
        alt="Card 3"
      />
      <div className="card-body-1">
        <h5 className="card-title-1">Good Trainer</h5>
        <a href="/" className="btn btn-primary">
          Click Here
        </a>
      </div>
    </div>
  </div>
</div>
      </div>

  );
};
