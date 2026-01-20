import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import Loading from "../Pages/Loading";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [loading, setLoading] = useState(true);

  const fetchEvents = () => {
    setLoading(true);

    const params = new URLSearchParams();
    if (type && type !== "all") params.append("type", type);
    if (search) params.append("search", search);

    fetch(`https://a10-social-event-server-jodjzk0zv-habiburrahman1010s-projects.vercel.app/events?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, [type, search]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Upcoming <span className="text-blue-700">Events</span></h2>

      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
        <input
          type="text"
          placeholder="Search event name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="all">All Types</option>
          <option value="plantation">Plantation</option>
          <option value="donation">Donation</option>
          <option value="cleaning">Cleaning</option>
        </select>
      </div>


      {loading ? (
        <Loading></Loading>
      ) : events.length === 0 ? (
        <p className="text-center">No events found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
