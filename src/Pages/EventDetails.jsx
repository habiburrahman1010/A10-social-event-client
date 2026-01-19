import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";
import Loading from "./Loading";
import Swal from "sweetalert2";

const EventDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContex);
  const [event, setEvent] = useState(null);
  const [joined, setJoined] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/events/${id}`)
      .then(res => res.json())
      .then(data => {
        setEvent(data);
        if (user && data.joinedUsers?.includes(user.email)) setJoined(true);
        setLoading(false);
      });
  }, [id, user]);

  const handleJoin = () => {
    if (!user) {
      return alert("Please login");
    };

    fetch(`http://localhost:5000/events/${id}/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEmail: user.email }),
    }).then(() => {
      setJoined(true);

      Swal.fire({
        icon: "success",
        title: "Joined!",
        text: "You have successfully joined this event.",
        timer: 2000,
        showConfirmButton: false,
      });
    });
  };

  if (loading) return <Loading />;
  if (!event) return null;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 shadow-lg rounded-2xl bg-gray-50">
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
      )}

      <h2 className="text-3xl font-bold mb-4">{event.title}</h2>

      <p className="mb-2 text-gray-700"><strong>Description:</strong> {event.description}</p>
      <p className="mb-2 text-gray-700"><strong>Type:</strong> {event.type}</p>
      <p className="mb-2 text-gray-700"><strong>Location:</strong> {event.location}</p>
      <p className="mb-6 text-gray-700"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>

      <button
        onClick={handleJoin}
        disabled={joined}
        className={`w-full py-3 rounded-xl text-white font-semibold transition 
                    ${joined ? "bg-gray-400 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"}`}
      >
        {joined ? "Joined" : "Join Event"}
      </button>
    </div>
  );
};

export default EventDetails;
