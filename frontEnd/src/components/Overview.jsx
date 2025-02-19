import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from './Loader';

function Overview() {
    const [loading, setLoading] = useState(true);
    const [teamData, setTeamData] = useState([]);
    const [eventsData, setEventsData] = useState([]);
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await axios.get('/api/team');
                setTeamData(response1.data.data || []);

                const response2 = await axios.get('/api/events');
                setEventsData(response2.data.data || []);

                const response3 = await axios.get('/api/news');
                setNewsData(response3.data.data || []);
            } catch (error) {
                toast.error('Failed to load data');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

  if(loading){
    return <Loader />;
  }
  return (
    <main className="p-4 md:p-6 flex-grow min-h-screen">
    <div className="bg-white shadow rounded-lg p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-700">
            This is the admin dashboard. Use the sidebar to navigate between sections.
        </p>

        
        {/* Example of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
            <div className="bg-blue-500 text-black p-4 rounded-full shadow hover:scale-105 transition-transform duration-300 ease-in-out">
                <h3 className="text-lg font-semibold text-center">Total Team Members</h3>
                <br />
                <p className="text-2xl text-center">{teamData.length}</p>
                <br />
            </div>
            <div className="bg-green-500 text-black p-4 rounded-full shadow hover:scale-105 transition-transform duration-300 ease-in-out">
                <h3 className="text-lg font-semibold text-center">Active Events</h3>
                <br />
                <p className="text-2xl text-center">{eventsData.length}</p>
            </div>
            <div className="bg-yellow-200 text-black p-4 rounded-full shadow hover:scale-105 transition-transform duration-300 ease-in-out">
                <h3 className="text-lg font-semibold text-center">Currently Active News</h3>
                <br />
                <p className="text-2xl text-center">{newsData.length}</p>
            </div>
        </div>
    </div>
</main>
  )
}

export default Overview