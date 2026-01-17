// pages/Events.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <div key={event._id} className="card bg-base-100 shadow-md">
          <figure>
            <img src={event.image} alt={event.title} className="h-48 w-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{event.title}</h2>
            <p>{event.description}</p>
            <p className="text-sm">Location: {event.location}</p>
            <p className="text-sm">Date: {new Date(event.date).toLocaleDateString()}</p>
            <p className="text-sm">Type: {event.type}</p>
            <Link to={`/events/${event._id}`} className="btn btn-sm mt-2">View Event</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
