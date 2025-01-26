import React, { useState } from "react";
import { NewEvents } from "../utility/TeamData";

const ManageEvent = () => {
  const [events, setEvents] = useState(NewEvents);

  const [currEvent, setCurrEvent] = useState({
    title: "",
    des: "",
    link: "",
    image: "",
    date: "",
  });

  const handleRemoveEvent = (id) => {
    const updatedEvent = events.filter((e) => e.id !== id);
    setEvents(updatedEvent);

    const index = NewEvents.findIndex((e) => e.id === id);
    if (index > -1) {
      NewEvents.splice(index, 1);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCurrEvent({ ...currEvent, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (currEvent.title && currEvent.des && currEvent.link && currEvent.date) {
      const newEvent = { id: Date.now(), ...currEvent };

      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);

      { NewEvents.push(newEvent) && console.log("its working") };

      setCurrEvent({ title: "", des: "", link: "", image: "", date: "" });
    } else {
      alert("Please fill out all required fields!");
    }
  };

  return (
    <main className="p-4 sm:p-6 flex flex-col  items-center min-h-screen ">
      <div className=" max-w-5xl w-full bg-gray-300 shadow-lg rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
       
          <form onSubmit={handleClick}>
            <div className="grid gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name" className="font-medium text-black">
                  Title
                </label>
                <input
                  id="name"
                  type="text"
                  value={currEvent.title}
                  onChange={(e) =>
                    setCurrEvent({ ...currEvent, title: e.target.value })
                  }
                  className="px-3 py-2 border rounded-md focus:ring-2 bg-white focus:outline-none"
                  placeholder="Name of the event"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="description" className="font-medium text-black">
                  Description
                </label>
                <textarea
                  rows={8}
                  type="text"
                  id="description"
                  value={currEvent.des}
                  onChange={(e) =>
                    setCurrEvent({ ...currEvent, des: e.target.value })
                  }
                  className="px-3 py-2 border rounded-md focus:ring-2 bg-white focus:outline-none"
                  placeholder="Description of the event"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="link" className="font-medium text-black">
                  Registration Link
                </label>
                <input
                  id="link"
                  type="text"
                  value={currEvent.link}
                  onChange={(e) =>
                    setCurrEvent({ ...currEvent, link: e.target.value })
                  }
                  className="px-3 py-2 border rounded-md focus:ring-2 bg-white focus:outline-none"
                  placeholder="Link to register for the event"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex flex-col space-y-1.5">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="border rounded-xl p-2 w-full"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="date" className="font-medium text-black">
                    Date
                  </label>
                  <input
                  type="date"
                    id="date"
                    value={currEvent.date}
                    onChange={(e) =>
                      setCurrEvent({ ...currEvent, date: e.target.value })
                    }
                    className="px-3 py-2 border rounded-md focus:ring-2 bg-white focus:outline-none"
                    placeholder="Date of the event"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </form>
       
      </div>

      <div className="w-full h-[2px] bg-gray-400 my-2 "></div>

      <h2 className="text-3xl font-bold text-blue-600 mb-4">Upcoming Events</h2>
      <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full ">
        {events.map((event) => (
          <li
            key={event.id}
            className="flex items-center bg-gray-300 p-4 rounded-lg shadow-sm hover:scale-105 transition-transform hover:shadow-lg"
          >
            <div className="flex-1">
              <p className="text-gray-800 font-medium">{event.title}</p>
              <p className="text-gray-600 text-sm">{event.date}</p>
            </div>

            {event.image && (
              <div className="ml-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-16 h-16 rounded-full"
                />
              </div>
            )}

            <button
              onClick={() => handleRemoveEvent(event.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-4"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ManageEvent;
