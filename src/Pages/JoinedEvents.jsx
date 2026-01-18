import React, { useContext, useEffect, useState } from "react";
import { AuthContex } from "../provider/AuthProvider";
import EventCard from "../Components/EventCard"; // reuse your existing card

const JoinedEvents = () => {
    const { user } = useContext(AuthContex);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (!user) return;

        fetch(`http://localhost:5000/joined-events/${user.email}`)
            .then((res) => res.json())
            .then((data) => setEvents(data))
            .catch((err) => console.error(err));
    }, [user]);

    if (!user) return <p className="text-center mt-8">Please log in to see your joined events</p>;

    return (
        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4">
            {events.length === 0 ? (
                <p className="col-span-full text-center">You haven’t joined any events yet.</p>
            ) : (
                events.map((event) => <EventCard key={event._id} event={event} showButton={false} />)
            )}
        </div>
    );
};

export default JoinedEvents;
