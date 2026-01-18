import React, { useEffect, useState, useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import Loading from "./Loading";

const MyEvents = () => {
  const { user } = useContext(AuthContex);
  const userEmail = user?.email;

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: "", date: "" });

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
      .catch(() => {
        setError("Failed to fetch events");
        setLoading(false);
      });
  }, [userEmail]);

  const handleEdit = (event) => {
    setEditingId(event._id);
    setFormData({
      title: event.title,
      date: event.date?.slice(0, 10),
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (id) => {
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    

    const res = await fetch(`http://localhost:5000/events/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.modifiedCount > 0) {
      setEvents(events.map(ev => ev._id === id ? { ...ev, ...formData } : ev));
      setEditingId(null);
    }
  };

  if (loading) return <Loading></Loading>
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">My Created <span className="text-blue-700">Events</span></h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-blue-100
             shadow-lg rounded-xl p-5 hover:shadow-xl transition"
          >
            {editingId === event._id ? (
              <div className="space-y-3">
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                />

                <input
                  type="date"
                  name="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                />

                <div className="flex gap-3">
                  <button
                    onClick={() => handleUpdate(event._id)}
                    className="flex-1 bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-600"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => setEditingId(null)}
                    className="flex-1 bg-gray-200 py-2 rounded-lg hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{event.title}</h3>

                <p className="text-gray-500">
                  {new Date(event.date).toLocaleDateString()}
                </p>

                <button
                  onClick={() => handleEdit(event)}
                  className=" btn btn-primary w-full  text-white py-2 rounded-lg "
                >
                  Upadate Event
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEvents;
