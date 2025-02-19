import React, { useState, useEffect } from 'react';
import MemberCard from '../components/MemberCard';
import axios from 'axios';
import Loader from '../components/Loader';

const Team = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get('/api/team');
        setMembers(response.data.data || []);
      } catch (error) {
        console.error('Error fetching team:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  if (loading) return <Loader/>;

  return (
    <div className="mt-20 p-6 bg-gradient-to-r from-[#ecf4ff] to-[#5f7cb7]">
      <h2 className="text-3xl font-bold text-black">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-7 m-6">
        {members.map((member) => (
          <MemberCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;