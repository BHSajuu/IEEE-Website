import React from 'react';

const MemberCard = ({ name, position, image, year, link }) => {
  return (
    <div className="bg-gradient-to-t from-indigo-300 to-lime-300 w-80 p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transition-transform duration-300 ease-in-out">
      <img src={image} alt={name} className="rounded-full w-350 h-35 mx-auto mb-4 border-4 border-blue-700" />
      <h3 className="text-lg font-semibold text-black">{name}</h3>
      <p className="text-black">{position}</p>
      <p className="text-black">({year} year)</p>
      <button className="bg-violet-500 text-white font-medium mt-4 py-2 px-4 rounded-full hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
        <a href={link}>LinkedIn</a>
      </button>
    </div>
  );
};

export default MemberCard;
