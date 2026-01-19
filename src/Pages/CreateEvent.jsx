// pages/CreateEvent.jsx
import React, { useState, useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateEvent = () => {
  const { user } = useContext(AuthContex);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    image: "",
    location: "",
    date: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("You must be logged in to create an event");
    if (!formData.date) return alert("Please select a date");

    const eventData = {
      ...formData,
      creatorEmail: user.email,
      date: formData.date.toISOString(),
    };

    const res = await fetch("https://a10-social-event-server.vercel.app/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });

    if (res.ok) {
      alert("Event created successfully!");
      navigate("/events");
    } else {
      alert("Failed to create event");
    }
  };


  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <div className="max-w-md mx-auto mt-8 p-4 shadow-lg bg-base-100">
      <h2 className="text-2xl font-bold mb-4">Create <span className="text-blue-700">Events</span></h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
          className="input input-bordered  w-full"
        />
        <input
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
          className="input input-bordered  w-full"
        />
        <select
          name="type"
          onChange={handleChange}
          required
          className="input input-bordered  w-full"
        >
          <option value="">Select Type</option>
          <option value="Cleanup">Cleanup</option>
          <option value="Plantation">Plantation</option>
          <option value="Donation">Donation</option>
        </select>
        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          required
          className="input input-bordered  w-full"
        />
        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
          required
          className="input input-bordered  w-full"
        />

        {/* ---------------------- */}
        <DatePicker
          selected={formData.date}
          onChange={handleDateChange}
          minDate={tomorrow}
          placeholderText="Select a future date"
          className="input input-bordered w-full"
        />

        <button className="btn btn-primary mt-2">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
