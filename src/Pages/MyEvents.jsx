import React, { useEffect, useState, useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";

const MyEvents = () => {
  const { user } = useContext(AuthContex); // get logged-in user
  const userEmail = user?.email;          // safe access

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userEmail) {
      setLoading(false);
      setError("No user email provided. Please log in.");
      return;
    }

    fetch(`http://localhost:5000/my-events/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch events");
        setLoading(false);
      });
  }, [userEmail]);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>My Created Events</h2>
      {events.length === 0 ? (
        <p>No events found</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event._id}>
              <strong>{event.title}</strong> -{" "}
              {new Date(event.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyEvents;
