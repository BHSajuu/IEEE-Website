import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import axios from 'axios';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [oldEvents, setOldEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        const currentDate = new Date();
        const upcoming = [];
        const past = [];
        
        response.data.data.forEach(event => {
          const eventDate = new Date(event.date);
          eventDate >= currentDate ? upcoming.push(event) : past.push(event);
        });
        
        setEvents(upcoming);
        setOldEvents(past);
      } catch (error) {
        toast.error("Failed to load data")
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, []);

  if (loading) return <Loader/>;

  return (
    <div className="mt-20 p-6 bg-gradient-to-r from-[#ecf4ff] to-[#5f7cb7]">
      <h2 className="text-3xl font-bold text-black">Upcoming Events</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 lg:ml-2 gap-x-20 mt-6">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
      
      <div className="w-full h-[2px] bg-gray-400 my-6"></div>

      <h2 className="text-3xl font-bold text-black">Past Events</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 lg:ml-2 gap-x-20 mt-6">
        {oldEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;