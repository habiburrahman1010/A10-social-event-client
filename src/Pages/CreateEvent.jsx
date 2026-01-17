// pages/CreateEvent.jsx
import React, { useState, useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
    const { user } = useContext(AuthContex);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        type: "",
        image: "",
        location: "",
        date: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) return alert("You must be logged in to create an event");

        const eventData = { ...formData, creatorEmail: user.email };

        const res = await fetch("http://localhost:3000/events", {
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

    return (
        <div className="max-w-md mx-auto mt-8 p-4 shadow-lg bg-base-100">
            <h2 className="text-2xl font-bold mb-4">Create Event</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input name="title" placeholder="Title" onChange={handleChange} required className="input input-bordered" />
                <input name="description" placeholder="Description" onChange={handleChange} required className="input input-bordered" />
                <select name="type" onChange={handleChange} required className="input input-bordered">
                    <option value="">Select Type</option>
                    <option value="Cleanup">Cleanup</option>
                    <option value="Plantation">Plantation</option>
                    <option value="Donation">Donation</option>
                </select>
                <input name="image" placeholder="Image URL" onChange={handleChange} required className="input input-bordered" />
                <input name="location" placeholder="Location" onChange={handleChange} required className="input input-bordered" />
                <input name="date" type="date" min={new Date().toISOString().split("T")[0]} onChange={handleChange} required className="input input-bordered" />
                <button className="btn btn-primary mt-2">Create Event</button>
            </form>
        </div>
    );
};

export default CreateEvent;
