import React from 'react';

const Card = ({ image, name, position, email, linkedIn }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row items-center transform transition duration-500 hover:scale-105">
      {/* Image Section */}
      <img 
        src={image} 
        alt={name} 
        className="w-full sm:w-1/3 h-48 sm:h-full object-cover"
      />
      {/* Text Section */}
      <div className="p-4 w-full sm:w-2/3">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center sm:text-left">{name}</h2>
        <p className="text-gray-600 text-center sm:text-left">{position}</p>
        <div className="mt-4">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            <span className="font-semibold">Email:</span>{' '}
            <a 
              href={`mailto:${email}`} 
              className="text-blue-500 hover:underline"
            >
              {email}
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-2 text-center sm:text-left">
            <span className="font-semibold">LinkedIn:</span>{' '}
            <a 
              href={linkedIn} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Profile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
