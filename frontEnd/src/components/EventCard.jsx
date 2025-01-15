import React from 'react';

const  EventCard = ({ title, date, description, image }) => {
  return (
    <div className="bg-white ml-10 mr-10 p-6 w-100 rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300 flex items-center gap-8">
      <div className='w-[300px]'>
        <h3 className="text-xl font-bold text-blue-600">{title}</h3>
        <p className="text-gray-500">{date}</p>
        <p className="mt-4 text-gray-700 overflow-hidden text-ellipsis line-clamp-5">{description}</p>
        <br />
         <a href="" className='text-pretty text-blue-700'>Click to Register</a>
      </div>
      <div className='w-[300px]'>
        <img
          src={image}
          alt="Not available"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
};


const  OldEventCard = ({ title, date, description, image }) => {
  return (
    <div className="bg-white ml-10 mr-10 p-6 w-100 rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300 flex items-center gap-8">
      <div className='w-[300px]'>
        <h3 className="text-xl font-bold text-blue-600">{title}</h3>
        <p className="text-gray-500">{date}</p>
        <p className="mt-4 text-gray-700 overflow-hidden text-ellipsis line-clamp-5">{description}</p>
        <br />
         <a href="" className='text-pretty text-blue-700'>Click to Register</a>
      </div>
      <div className='w-[300px]'>
        <img
          src={image}
          alt="Not available"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
};


export {OldEventCard,EventCard};