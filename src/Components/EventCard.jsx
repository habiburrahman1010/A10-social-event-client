import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

const EventCard = ({ event, showButton = true }) => {
  return (
    <div className="card bg-blue-50 shadow-md mb-4">
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mt-2"
          >
            <Link
              to={`/events/${event._id}`}
              className="btn btn-primary btn-sm w-full"
            >
              View Event
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
