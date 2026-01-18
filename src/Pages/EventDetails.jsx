import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";
import Loading from "./Loading";

const EventDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContex);
    const [event, setEvent] = useState(null);
    const [joined, setJoined] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/events/${id}`)
            .then(res => res.json())
            .then(data => {
                setEvent(data);
                if (user && data.joinedUsers?.includes(user.email)) setJoined(true);
            });
    }, [id, user]);

    const handleJoin = async () => {
        if (!user) return alert("Please log in to join this event");

        const res = await fetch(`http://localhost:5000/events/${id}/join`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userEmail: user.email }),
        });

       
    };

    if (!event) return <Loading></Loading>

    return (
        <div className="max-w-2xl mx-auto mt-8 p-4 shadow-lg bg-blue-100 rounded-2xl mb-6">
            <h2 className="text-3xl font-bold mb-2">{event.title}</h2>

            <p className="mb-2"><strong>Description:</strong> {event.description}</p>
            <p className="mb-2"><strong>Type:</strong> {event.type}</p>

            <p className="mb-2"><strong>Location:</strong> {event.location}</p>
            <p className="mb-2"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            {event.image && <img src={event.image} alt={event.title} className="mb-4 rounded-md" />}

            <button
                onClick={handleJoin}
                disabled={joined}
                className={`btn ${joined ? "btn-disabled" : "btn-primary"}`}
            >
                {joined ? "Joined" : "Join Event"}
            </button>
        </div>
    );
};

export default EventDetails;
