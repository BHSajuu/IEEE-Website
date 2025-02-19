import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Ping from "./Animation/ping";
import axios from "axios";
  const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const isActive = (path) => location.pathname === path;



  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      return;
    }
    axios
      .get("/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch((error) => {
        console.error(error);
        setUser(null);
      });
  }, [navigate]);

  const handleAdminDashboardClick = () => {
    // Simple auth check; adjust as necessary
    if (!user) {
      navigate("/login");
    } else {
      navigate("/dashboard"); 
    }
  };


  return (
    <div className="fixed top-0 w-full z-10 bg-dark-2 text-indigo-100 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Society Name */}
        <div className="flex items-center">
          <img
            src="./assets/logo.png"
            alt="Logo"
            className="w-30 h-12 mr-3 rounded-full object-cover"
          />
          <h1 className="text-4xl text-indigo-100 font-bold">IEEE Silchar</h1>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden block text-white focus:outline-none mr-8"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Menu for Large Screens */}
        <nav className="hidden lg:flex lg:items-center">
          <a
            href="/"
            style={
              isActive("/")
                ? { textDecoration: "underline", textUnderlineOffset: "6px" }
                : {}
            }
            className="block lg:inline mx-4 my-2 p-1 lg:my-0 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Home
          </a>
         

          <a
            href="/news"
            style={
              isActive("/news")
                ? { textDecoration: "underline", textUnderlineOffset: "6px" }
                : {}
            }
            className="relative flex items-center mx-4 my-2 p-1 lg:my-0 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <span>News</span>
            <span className="absolute top-0 right-0 -translate-y-0.5 translate-x-1/2">
              <Ping />
            </span>
          </a>

          <a
            href="/events"
            style={
              isActive("/events")
                ? { textDecoration: "underline", textUnderlineOffset: "6px" }
                : {}
            }
            className="block lg:inline mx-4 my-2 p-1 lg:my-0 hover:bg-custom-blue hover:text-black  hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Events
          </a>
          
          <a
            href="/exhibit"
            style={
              isActive("/exhibit")
                ? { textDecoration: "underline", textUnderlineOffset: "6px" }
                : {}
            }
            className="block lg:inline mx-4 my-2 p-1 lg:my-0 hover:bg-custom-blue hover:text-black hover:scale-105 hover:rounded-lg  transition-transform duration-300 ease-in-out"
          >
            Exhibit
          </a>

          <a
            href="/team"
            style={
              isActive("/team")
                ? { textDecoration: "underline", textUnderlineOffset: "6px" }
                : {}
            }
            className="block lg:inline mx-4 my-2 p-1 lg:my-0 hover:bg-custom-blue hover:text-black  hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Team
          </a>
          <a
            href="/contact"
            style={
              isActive("/contact")
                ? { textDecoration: "underline", textUnderlineOffset: "6px" }
                : {}
            }
            className="block lg:inline mx-4 my-2 p-1 lg:my-0 hover:bg-custom-blue hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Contact Us
          </a>
          <a
            onClick={handleAdminDashboardClick}
            style={
              isActive("/dashboard")
                ? { textDecoration: "underline", textUnderlineOffset: "6px" }
                : {}
            }
            className="cursor-pointer block lg:inline mx-4 my-2 p-1  lg:my-0 hover:bg-custom-blue  hover:text-black hover:rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          >
          {user ?<p>Admin Dashboard</p> : <p>Login</p>}
          </a>
        </nav>
      </div>

      {/* Mobile Navigation Dialog */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          {/* Dialog Box at Top Right */}
          <div className="absolute top-4 right-10 bg-custom-blue w-64 rounded-lg shadow-lg p-5">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-2 right-2 text-white hover:font-bold"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <nav className="flex flex-col items-center gap-4">
              <a
                href="/"
                style={
                  isActive("/")
                    ? {
                        textDecoration: "underline",
                        textUnderlineOffset: "6px",
                      }
                    : {}
                }
                className="block text-lg text-gray-800 hover:font-bold"
              >
                Home
              </a>
              <a
                href="/exhibit"
                style={
                  isActive("/exhibit")
                    ? {
                        textDecoration: "underline",
                        textUnderlineOffset: "6px",
                      }
                    : {}
                }
                className="block text-lg text-gray-800 hover:font-bold"
              >
                Exhibit
              </a>
              <a
                href="/events"
                style={
                  isActive("/events")
                    ? {
                        textDecoration: "underline",
                        textUnderlineOffset: "6px",
                      }
                    : {}
                }
                className="block text-lg text-gray-800 hover:font-bold"
              >
                Events
              </a>

              <a
                href="/news"
                style={
                  isActive("/news")
                    ? {
                        textDecoration: "underline",
                        textUnderlineOffset: "6px",
                      }
                    : {}
                }
                className="block text-lg text-gray-800 hover:font-bold"
              >
                News
              </a>

              <a
                href="/team"
                style={
                  isActive("/team")
                    ? {
                        textDecoration: "underline",
                        textUnderlineOffset: "6px",
                      }
                    : {}
                }
                className="block text-lg text-gray-800 hover:font-bold"
              >
                Team
              </a>
              <a
                href="/contact"
                style={
                  isActive("/contact")
                    ? {
                        textDecoration: "underline",
                        textUnderlineOffset: "6px",
                      }
                    : {}
                }
                className="block text-lg text-gray-800 hover:font-bold"
              >
                Contact Us
              </a>
              <a
                onClick={handleAdminDashboardClick}
                style={
                  isActive("/dashboard")
                    ? {
                        textDecoration: "underline",
                        textUnderlineOffset: "6px",
                      }
                    : {}
                }
                className="block text-lg text-gray-800 hover:font-bold"
              >
                 {user ?<p>Admin Dashboard</p> : <p>Login</p>}
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
