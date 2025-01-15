import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-custom-blue text-black p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Society Name */}
        <div className="flex items-center">
          <img
            src="./assets/logo.png"
            alt="Logo"
            className="w-30 h-12 mr-3 rounded-full object-cover"
          />
          <h1 className="text-3xl font-bold">IEEE Silchar</h1>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden block text-black focus:outline-none"
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
            className="block lg:inline mx-4 my-2 lg:my-0 hover:text-white"
          >
            Home
          </a>
          <a
            href="/section"
            style={
              isActive("/section")
                ? { textDecoration: "underline", textUnderlineOffset: "6px" }
                : {}
            }
            className="block lg:inline mx-4 my-2 lg:my-0 hover:text-white"
          >
            Section
          </a>
          <a
            href="/events"
            style={
              isActive("/events")
                ? { textDecoration: "underline", textUnderlineOffset: "6px" }
                : {}
            }
            className="block lg:inline mx-4 my-2 lg:my-0 hover:text-white"
          >
            Events
          </a>
          <a
            href="/team"
            style={
              isActive("/team")
                ? { textDecoration: "underline", textUnderlineOffset: "6px" }
                : {}
            }
            className="block lg:inline mx-4 my-2 lg:my-0 hover:text-white"
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
            className="block lg:inline mx-4 my-2 lg:my-0 hover:text-white"
          >
            Contact Us
          </a>
          <a
            href="/dashboard"
            style={
              isActive("/dashboard")
                ? { textDecoration: "underline", textUnderlineOffset: "6px" }
                : {}
            }
            className="block lg:inline mx-4 my-2 lg:my-0 hover:text-white"
          >
            Admin Dashboard
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
                    ? { textDecoration: "underline", textUnderlineOffset: "6px" }
                    : {}
                }
                className="block text-lg text-gray-800 hover:font-bold"
              >
                Home
              </a>
              <a
                href="/section"
                style={
                  isActive("/section")
                    ? { textDecoration: "underline", textUnderlineOffset: "6px" }
                    : {}
                }
                className="block text-lg text-gray-800 hover:font-bold"
              >
                Section
              </a>
              <a
                href="/events"
                style={
                  isActive("/events")
                    ? { textDecoration: "underline", textUnderlineOffset: "6px" }
                    : {}
                }
                className="block text-lg text-gray-800 hover:font-bold"
              >
                Events
              </a>
              <a
                href="/team"
                style={
                  isActive("/team")
                    ? { textDecoration: "underline", textUnderlineOffset: "6px" }
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
                    ? { textDecoration: "underline", textUnderlineOffset: "6px" }
                    : {}
                }
                className="block text-lg text-gray-800 hover:font-bold"
              >
                Contact Us
              </a>
              <a
                href="/dashboard"
                style={
                  isActive("/dashboard")
                    ? { textDecoration: "underline", textUnderlineOffset: "6px" }
                    : {}
                }
                className="block text-lg text-gray-800 hover:font-bold"
              >
                Admin Dashboard
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
