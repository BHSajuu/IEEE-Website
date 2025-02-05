import React, { useState } from "react";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import EventIcon from "@mui/icons-material/Event";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MenuIcon from "@mui/icons-material/Menu"; // For Hamburger Icon
import "react-circular-progressbar/dist/styles.css";
import Overview from "../components/Overview";
import ManageTeam from "../components/ManageTeam";
import ManageEvent from "../components/ManageEvent";
import ManageNews from "../components/ManageNews";

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mt-20 flex flex-col md:flex-row max-h-screen bg-gray-10 overflow-hidden">
      {/* Sidebar (visible only on laptop screens and above) */}
      <aside className="hidden md:block w-64 bg-custom-color4 text-white max-h-screen flex-col">
        <div className="p-4 text-center text-xl font-bold">Admin Dashboard</div>
        <div className="w-full h-[2px] bg-gray-400 my-2"></div>
        <nav className="mt-6 p-4 flex-grow">
          <ul className="space-y-4">
            <li
              onClick={() => {
                setActiveComponent("overview");
              }}
              className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center"
            >
              <DashboardIcon className="mr-2" />
              <p>Overview</p>
            </li>
            <li
              onClick={() => {
                setActiveComponent("ManageTeam");
              }}
              className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center"
            >
              <GroupIcon className="mr-2" />
              <p>Manage Team Members</p>
            </li>
            <li
              onClick={() => {
                setActiveComponent("ManageEvents");
              }}
              className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center"
            >
              <EventIcon className="mr-2" />
              <p>Manage Events</p>
            </li>
            <li
              onClick={() => {
                setActiveComponent("news");
              }}
              className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center"
            >
              <AssessmentIcon className="mr-2" />
              <p>Manage News</p>
            </li>
          </ul>
        </nav>
        <div className="w-full h-[2px] bg-gray-400 my-2"></div>
        <div className="p-4 mt-auto max-h-screen">
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

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute top-32 left-10 bg-custom-blue w-64 rounded-lg shadow-lg p-5">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-2 right-2 hover:font-bold md:hidden text-white focus:outline-none"
            >
              ✖
            </button>
            <nav className="mt-6 p-4 flex-grow">
              <ul className="space-y-4">
                <li
                  onClick={() => {
                    setActiveComponent("overview");
                    setMenuOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center"
                >
                  <DashboardIcon className="mr-2" />
                  <p>Overview</p>
                </li>
                <li
                  onClick={() => {
                    setActiveComponent("ManageTeam");
                    setMenuOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center"
                >
                  <GroupIcon className="mr-2" />
                  <p>Manage Team Members</p>
                </li>
                <li
                  onClick={() => {
                    setActiveComponent("ManageEvents");
                    setMenuOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center"
                >
                  <EventIcon className="mr-2" />
                  <p>Manage Events</p>
                </li>
                <li
                  onClick={() => {
                    setActiveComponent("news");
                    setMenuOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center"
                >
                  <AssessmentIcon className="mr-2" />
                  <p>Manage News</p>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full max-h-screen overflow-y-auto">
        {/* Top Navigation */}
        <header className="bg-slate-400 shadow px-4 py-3 flex justify-between items-center">
          {/* Hamburger Icon for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-custom-color4 focus:outline-none"
          >
            <MenuIcon />
          </button>
        </header>

        {/* Overview */}
        {activeComponent === "overview" && <Overview />}

        {/* Manage Team Members */}
        {activeComponent === "ManageTeam" && <ManageTeam />}

        {/* Manage Events */}
        <div className="w-full overflow-y-auto">
          {activeComponent === "ManageEvents" && <ManageEvent />}
        </div>
        {/* Manage News */}
        {activeComponent === "news" && <ManageNews />}
      </div>
    </div>
  );
};

export default Dashboard;
