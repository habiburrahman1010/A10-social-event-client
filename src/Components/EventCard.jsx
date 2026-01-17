import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event,showButton = true }) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <figure>
        <img
          src={event.image}
          alt={event.title}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{event.title}</h2>
        <p>{event.description}</p>

        <p className="text-sm">Location: {event.location}</p>
        <p className="text-sm">
          Date: {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="text-sm">Type: {event.type}</p>

          {showButton && (
          <Link to={`/events/${event._id}`} className="btn btn-sm mt-2">
            View Event
          </Link>
        )}
      </div>
    </div>
  );
};

export default EventCard;
