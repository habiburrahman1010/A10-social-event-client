import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState("");
    const [type, setType] = useState("all");

    const fetchEvents = () => {
        const params = new URLSearchParams();

        if (type && type !== "all") params.append("type", type);
        if (search) params.append("search", search);

        fetch(`http://localhost:5000/events?${params.toString()}`)
            .then((res) => res.json())
            .then((data) => setEvents(data))
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        fetchEvents();
    }, [type, search]);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <input
                    type="text"
                    placeholder="Search event name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded-lg px-4 py-2 w-full md:w-1/2"
                />

                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="border rounded-lg px-4 py-2 w-full md:w-1/3"
                >
                    <option value="all">All Types</option>
                    <option value="plantation">Plantation</option>
                    <option value="donation">Donation</option>
                    <option value="cleaning">Cleaning</option>
                </select>

            </div>

            {/* Events */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.length === 0 ? (
                    <p className="text-center col-span-full">No events found</p>
                ) : (
                    events.map((event) => <EventCard key={event._id} event={event} />)
                )}
            </div>
        </div>
    );
};

export default UpcomingEvents;
