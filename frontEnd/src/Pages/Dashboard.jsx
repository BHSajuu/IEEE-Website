import AssessmentIcon from "@mui/icons-material/Assessment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import GroupIcon from "@mui/icons-material/Group";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import ManageEvent from "../components/ManageEvent";
import ManageNews from "../components/ManageNews";
import ManageTeam from "../components/ManageTeam";
import Overview from "../components/Overview";

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({ name: "", image: "" });
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch user data using token header
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    axios
      .get("/api/auth/me", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        let message = "Error fetching user data.";
        if (error.response && error.response.data) {
          // Check for the error message in the `error` property
          if (error.response.data.error) {
            message = error.response.data.error;
          } else if (
            error.response.data.errors &&
            error.response.data.errors.length > 0
          ) {
            message = error.response.data.errors[0].msg;
          } else if (error.response.data.message) {
            message = error.response.data.message;
          }
        }
        toast.error(message);
        navigate("/login");
      });
  }, [navigate]);

  // Update profile API call with token in header.
  // we will implement this function later

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Logout: remove token and navigate to login.
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) return <Loader />;

  return (
    <div className="mt-20 flex flex-col md:flex-row max-h-screen bg-gradient-to-r from-[#ecf4ff] to-[#5f7cb7] overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 bg-custom-color4 text-white max-h-screen flex-col">
        <div className="p-4 text-center text-xl font-bold">
          <p>Welcome, {user.name}</p>
        </div>
        <div className="w-full h-[2px] bg-gray-400 my-2"></div>
        <nav className="mt-6 p-4 flex-grow">
          <ul className="space-y-4">
            <li
              onClick={() => setActiveComponent("overview")}
              className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
              <DashboardIcon className="mr-2" />
              <p>Overview</p>
            </li>
            <li
              onClick={() => setActiveComponent("ManageTeam")}
              className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
              <GroupIcon className="mr-2" />
              <p>Manage Team Members</p>
            </li>
            <li
              onClick={() => setActiveComponent("ManageEvents")}
              className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
              <EventIcon className="mr-2" />
              <p>Manage Events</p>
            </li>
            <li
              onClick={() => setActiveComponent("news")}
              className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
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
                className="w-full text-left focus:outline-none flex items-center">
                <SettingsSharpIcon className="mr-2" />
                Settings
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 bottom-full mb-2 w-full bg-gray-900 text-white shadow-lg rounded-md">
                  <li className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left focus:outline-none">
                      Logout
                    </button>
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
              className="absolute top-2 right-2 hover:font-bold md:hidden text-white focus:outline-none">
              ✖
            </button>
            <nav className="mt-6 p-4 flex-grow">
              <ul className="space-y-4">
                <li
                  onClick={() => {
                    setActiveComponent("overview");
                    setMenuOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
                  <DashboardIcon className="mr-2" />
                  <p>Overview</p>
                </li>
                <li
                  onClick={() => {
                    setActiveComponent("ManageTeam");
                    setMenuOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
                  <GroupIcon className="mr-2" />
                  <p>Manage Team Members</p>
                </li>
                <li
                  onClick={() => {
                    setActiveComponent("ManageEvents");
                    setMenuOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
                  <EventIcon className="mr-2" />
                  <p>Manage Events</p>
                </li>
                <li
                  onClick={() => {
                    setActiveComponent("news");
                    setMenuOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
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
        <header className="bg-slate-400 shadow px-4 py-3 flex justify-between items-center">
          <button
            onClick={toggleMenu}
            className="md:hidden text-custom-color4 focus:outline-none">
            <MenuIcon />
          </button>
        </header>
        {activeComponent === "overview" && <Overview />}
        {activeComponent === "ManageTeam" && <ManageTeam />}
        {activeComponent === "ManageEvents" && (
          <div className="w-full overflow-y-auto">
            <ManageEvent />
          </div>
        )}
        {activeComponent === "news" && <ManageNews />}
      </div>
    </div>
  );
};

export default Dashboard;
