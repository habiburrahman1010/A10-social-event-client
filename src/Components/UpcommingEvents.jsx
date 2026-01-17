import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/events")
            .then((res) => res.json())
            .then((data) => setEvents(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
                <EventCard key={event._id} event={event} />
            ))}
        </div>
    );
};

export default UpcomingEvents;
