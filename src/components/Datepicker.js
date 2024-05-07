import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = () => {
const [selectedDate, setSelectedDate] = useState(null);

const handleDateChange = (date) => {
    setSelectedDate(date);
};

return (
    <div>
    <h2>Choose Appointment Date</h2>
    <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()} 
        isClearable
        placeholderText="Select a date" />
    </div>
);
};

export default Datepicker;
