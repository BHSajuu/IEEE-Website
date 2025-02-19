import React, { useState, useEffect } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from './Loader';


const ManageEvent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currEvent, setCurrEvent] = useState({
    title: "",
    description: "",
    link: "",
    image: "",
    date: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        setEvents(response.data.data || []);
      } catch (error) {
        toast.error('Failed to load events');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleRemoveEvent = async (id) => {
    try {
      await axios.delete(`/api/events/${id}`);
      setEvents(prev => prev.filter(event => event.id !== id));
      toast.success('Event deleted successfully');
    } catch (error) {
      toast.error('Failed to delete event');
      console.error(error);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!currEvent.title || !currEvent.description || !currEvent.link || !currEvent.image) {
      toast.error('Please fill all required fields');
      return;
    }

    try {
      const response = await axios.post('/api/events', {
        ...currEvent,
        date: new Date(currEvent.date).toISOString()
      });
      setEvents(prev => [...prev, response.data]);
      console.log(response.data); 
      setCurrEvent({
        title: "",
        description: "",
        link: "",
        image: "",
        date: new Date().toISOString().split('T')[0]
      });
      toast.success('Event added successfully!');
    } catch (error) {
      toast.error('Failed to add event');
      console.error(error);
    }
  };

  if (loading) return <Loader/>;

  return (
    <main className="p-4 sm:p-6 flex flex-col  items-center min-h-screen ">
      <div className=" max-w-5xl w-full bg-gray-300 shadow-lg rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
       
          <form onSubmit={handleSubmit}>
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
                  value={currEvent.description}
                  onChange={(e) =>
                    setCurrEvent({ ...currEvent, description: e.target.value })
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
        {events?.map((event) => (
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
