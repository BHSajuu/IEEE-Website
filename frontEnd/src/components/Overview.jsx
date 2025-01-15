import React from 'react'

function Overview() {
  return (
    <main className="p-4 md:p-6 flex-grow">
    <div className="bg-white shadow rounded-lg p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-700">
            This is the admin dashboard. Use the sidebar to navigate between sections.
        </p>

        
        {/* Example of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
            <div className="bg-blue-500 text-white p-4 rounded-xl shadow hover:scale-105 transition-transform duration-300 ease-in-out">
                <h3 className="text-lg font-semibold">Total Users</h3>
                <p className="text-2xl">123</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-xl shadow hover:scale-105 transition-transform duration-300 ease-in-out">
                <h3 className="text-lg font-semibold">Active Events</h3>
                <p className="text-2xl">5</p>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-xl shadow hover:scale-105 transition-transform duration-300 ease-in-out">
                <h3 className="text-lg font-semibold">Pending Reports</h3>
                <p className="text-2xl">2</p>
            </div>
        </div>
    </div>
</main>
  )
}

export default Overview