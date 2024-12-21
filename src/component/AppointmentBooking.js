import React, { useState, useEffect } from "react";
import "./style/AppointmentBooking.css";

const AppointmentBooking = () => {
  const [doctors, setDoctors] = useState([]);
  const [appointment, setAppointment] = useState({
    patientName: "",
    doctor: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    // Fetch users from localStorage and filter for doctors
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const doctorList = storedUsers.filter((user) => user.role === "doctor");
    setDoctors(doctorList);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch existing appointments
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    // Add the new appointment
    const updatedAppointments = [...storedAppointments, { ...appointment, id: Date.now() }];
    // Save to localStorage
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    alert("Appointment booked successfully!");
    setAppointment({ patientName: "", doctor: "", date: "", time: "" });
  };

  return (
    <div className="appointment-booking-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patientName">Patient Name</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={appointment.patientName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="doctor">Choose a Doctor</label>
          <select
            id="doctor"
            name="doctor"
            value={appointment.doctor}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a Doctor
            </option>
            {doctors.map((doctor) => (
              <option key={doctor.username} value={doctor.fullName}>
                {doctor.fullName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Appointment Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={appointment.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Appointment Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={appointment.time}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentBooking;
