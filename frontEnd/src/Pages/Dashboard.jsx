import React, { useState } from "react";
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import AssessmentIcon from '@mui/icons-material/Assessment';
import "react-circular-progressbar/dist/styles.css";
import Overview from "../components/Overview";
import ManageTeam from "../components/ManageTeam";
import ManageEvent from "../components/ManageEvent";

const Dashboard = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState("overview");

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    
    return (
        <div className="flex flex-col md:flex-row h-[75vh] bg-gray-100 ">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-custom-color4 text-white flex flex-col">
                <div className="p-4 text-center text-xl font-bold">Admin Dashboard</div>
                <div className="w-full h-[2px] bg-gray-400 my-2"></div>
                <nav className="mt-6 p-4 flex-grow">
                    <ul className="space-y-4">
                        <li onClick={()=>{setActiveComponent("overview")}} className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
                            <DashboardIcon className="mr-2" />
                            <p>Overview</p>
                        </li>
                        <li onClick={()=>{setActiveComponent("ManageTeam")}} className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
                            <GroupIcon className="mr-2" />
                            <p>Manage Team Members</p>
                        </li>
                        <li onClick={()=>{setActiveComponent("ManageEvents")}} className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
                            <EventIcon className="mr-2" />
                             <p>Manage Events</p>
                        </li>
                        <li onClick={()=>{setActiveComponent("Reports")}} className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
                            <AssessmentIcon className="mr-2" />
                            <p>Reports</p>
                        </li>
                    </ul>
                </nav>
                <div className="w-full h-[2px] bg-gray-400 my-2"></div>
                <div className="p-4 mt-auto">
                    <ul>
                        <li className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out relative flex items-center">
                            <button
                                onClick={toggleDropdown}
                                className="w-full text-left focus:outline-none flex items-center"
                            >
                                <SettingsSharpIcon className="mr-2" />
                                Settings
                            </button>
                            {isDropdownOpen && (
                                <ul className="absolute left-0 bottom-full mb-2 w-full bg-gray-900 text-white shadow-lg rounded-md">
                                    <li className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                                        <a href="/admin/profile">Profile</a>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                                        <a href="/admin/logout">Logout</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navigation */}
                <header className="bg-white shadow px-4 py-3 flex justify-between items-center">
                    <h1 className="text-lg md:text-xl font-bold">Welcome, Admin</h1>
                </header>
                <div className="w-full h-[2px] bg-gray-400 my-2"></div>

                {/* Overview */}
                {activeComponent ==="overview" && <Overview/>}

                {/* Manage Team Members */}
                {activeComponent ==="ManageTeam" && <ManageTeam/>}

                {/* Manage Events */}
                {activeComponent ==="ManageEvents" && <ManageEvent/>}
            </div>
        </div>
    );
};

export default Dashboard;
