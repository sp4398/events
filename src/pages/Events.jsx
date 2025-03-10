import React, { useState, useEffect } from "react";

function Events() {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    category: "",
    location: "",
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.category || !newEvent.location) {
      alert("Please fill in all fields before adding an event.");
      return;
    }

    setEvents([...events, newEvent]);
    setNewEvent({ title: "", date: "", category: "", location: "" });
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Events</h2>

      {/* Filter Section */}
      <div className="mb-6">
        <label className="mr-2 font-medium">Filter by Category:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full sm:w-auto border p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

      {/* Events List */}
      <ul className="space-y-3">
        {events
          .filter((event) => !filter || event.category === filter)
          .map((event, index) => (
            <li
              key={index}
              className="border p-3 rounded-md shadow-sm bg-white flex flex-col sm:flex-row sm:items-center justify-between"
            >
              <div>
                <strong className="text-lg">{event.title}</strong>
                <span className="block sm:inline sm:ml-2">
                  - {event.date} ({event.category})
                </span>
              </div>
              <span className="mt-2 sm:mt-0 text-gray-600">at {event.location}</span>
            </li>
          ))}
      </ul>

      {/* Add Event Form */}
      <div className="mt-8 border p-4 rounded-md shadow-md bg-gray-50">
        <h3 className="text-lg md:text-xl font-bold mb-4">Add New Event</h3>
        <div className="space-y-4">
          <input
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <input
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          />
          <input
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Location"
            value={newEvent.location}
            onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
          />
          <select
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            value={newEvent.category}
            onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
          >
            <option value="">Select Category</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
          <button
            onClick={handleAddEvent}
            className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default Events;