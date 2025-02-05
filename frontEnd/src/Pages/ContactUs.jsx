import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

const ContactUs = () => {
  return (
    <div
      className="relative p-6 mt-12 flex justify-center items-center"
      style={{
        backgroundImage: "url('assets/contactUs.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-10"></div>
      <div
        className="relative w-full max-w-[25rem] p-8 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          width: "80%",
          height: "auto",
        }}
      >
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
          Contact Us
        </h2>
        <div className="w-full h-[2px] bg-gray-600 my-2"></div>
        <div className="space-y-8 text-gray-800">
          {/* Official Email */}
          <div className="flex items-center space-x-4">
            <AiOutlineMail className="text-3xl text-gray-800 animate-bounce" />
            <div>
              <h3 className="font-semibold text-xl text-gray-800">
                Official Email:
              </h3>
              <p className="text-gray-700">
                <a
                  href="mailto:official.ieee@domain.com"
                  className="text-gray-800 hover:underline"
                >
                  official.ieee@domain.com
                </a>
              </p>
            </div>
          </div>

          {/* President's Email */}
          <div className="flex items-center space-x-4">
            <AiOutlineMail className="text-3xl text-gray-800 animate-bounce" />
            <div>
              <h3 className="font-semibold text-xl text-gray-800">
                President's Email:
              </h3>
              <p className="text-gray-700">
                <a
                  href="mailto:president.ieee@domain.com"
                  className="text-gray-800 hover:underline"
                >
                  president.ieee@domain.com
                </a>
              </p>
            </div>
          </div>

          {/* Secretary's Email */}
          <div className="flex items-center space-x-4">
            <AiOutlineMail className="text-3xl text-gray-800 animate-bounce" />
            <div>
              <h3 className="font-semibold text-xl text-gray-800">
                Secretary's Email:
              </h3>
              <p className="text-gray-700">
                <a
                  href="mailto:secretary.ieee@domain.com"
                  className="text-gray-700 hover:underline"
                >
                  secretary.ieee@domain.com
                </a>
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center space-x-4">
            <AiOutlineWhatsApp className="text-3xl text-green-700 animate-pulse" />
            <div>
              <h3 className="font-semibold text-xl text-gray-800">
                Connect with us on WhatsApp:
              </h3>
              <p className="text-gray-600">
                <a
                  href="https://wa.me/1234567890?text=Hello%20IEEE,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  className="text-gray-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact via WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
