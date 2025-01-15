import React from 'react';
import {EventCard,OldEventCard} from '../components/EventCard';

const Events = () => {
  const events = [
    { image:'./assets/eventImage1.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies.' },
    { image:'./assets/eventImage2.jpg', title: 'Hackathon', date: 'Feb 10, 2024', description: '24-hour coding event.' },
    { image:'./assets/eventImage3.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quod distinctio numquam, animi laboriosam quaerat libero cumque incidunt vitae ratione sapiente? A, perspiciatis. Sapiente voluptate autem incidunt dolores saepe voluptates.Inventore aliquam aut maxime nihil nostrum eveniet nobis veritatis earum illum veniam excepturi dicta, enim eligendi amet deleniti totam repudiandae voluptatibus sint ipsa cupiditate numquam voluptatum autem? Impedit, cum libero. Modi autem amet ut vitae, nulla consequatur dolore! Eos, sint quaerat numquam laudantium nobis debitis expedita consectetur aperiam minima. Officiis expedita, modi doloremque quos dignissimos quaerat asperiores debitis sapiente hic!.' },
    { image:'./assets/eventImage4.jpg', title: 'Hackathon', date: 'Feb 10, 2024', description: '24-hour coding event.' },
    { image:'./assets/eventImage5.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies.' },
  ];
  
  const oldEvents = [
    { image:'./assets/eventImage1.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies.' },
    { image:'./assets/eventImage2.jpg', title: 'Hackathon', date: 'Feb 10, 2024', description: '24-hour coding event.' },
    { image:'./assets/eventImage3.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quod distinctio numquam, animi laboriosam quaerat libero cumque incidunt vitae ratione sapiente? A, perspiciatis. Sapiente voluptate autem incidunt dolores saepe voluptates.Inventore aliquam aut maxime nihil nostrum eveniet nobis veritatis earum illum veniam excepturi dicta, enim eligendi amet deleniti totam repudiandae voluptatibus sint ipsa cupiditate numquam voluptatum autem? Impedit, cum libero. Modi autem amet ut vitae, nulla consequatur dolore! Eos, sint quaerat numquam laudantium nobis debitis expedita consectetur aperiam minima. Officiis expedita, modi doloremque quos dignissimos quaerat asperiores debitis sapiente hic!.' },
    { image:'./assets/eventImage4.jpg', title: 'Hackathon', date: 'Feb 10, 2024', description: '24-hour coding event.' },
    { image:'./assets/eventImage5.jpg', title: 'Tech Talk', date: 'Jan 15, 2024', description: 'A talk on emerging technologies.' },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-600">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
      
      <br />
      <div className="w-full h-[2px] bg-gray-400 my-2"></div>

      <h2 className="text-3xl font-bold text-blue-600">Past Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {oldEvents.map((event, index) => (
          <OldEventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
