import React from 'react';
import {EventCard} from '../components/EventCard';
import { events, oldEvents } from '../utility/TeamData';


const Events = () => {
  

  return (
    <div className="mt-20 p-6 bg-gradient-to-r from-[#ecf4ff] to-[#5f7cb7]">
      <h2 className="text-3xl font-bold text-black">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 lg:ml-2 gap-x-20 mt-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
      
      <br />
      <div className="w-full h-[2px] bg-gray-400 my-2"></div>

      <h2 className="text-3xl font-bold text-blue-600">Past Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 lg:ml-2 gap-x-20 mt-6">
        {oldEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
