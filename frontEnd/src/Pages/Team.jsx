import React from 'react';
import MemberCard from '../components/MemberCard';
import members from '../utility/TeamData';
const Team = () => {
 
  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-600">Meet Our Team</h2>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-7 m-6">
        {members.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
