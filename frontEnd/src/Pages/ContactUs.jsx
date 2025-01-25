import React from 'react';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';

const ContactUs = () => {
  return (
    <div className="p-6 mt-20 bg-gradient-to-r from-gray-700 to-gray-900 min-h-[75vh] flex justify-center items-center">
      <div className="w-full max-w-lg bg-amber-50 p-8 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-6">Contact Us</h2>
         <div className='w-full h-[2px] bg-gray-400 my-2'></div>
        <div className="space-y-8">
          {/* Official Email */}
          <div className="flex items-center space-x-4">
            <AiOutlineMail className="text-3xl text-blue-600 animate-bounce" />
            <div>
              <h3 className="font-semibold text-xl">Official Email:</h3>
              <p className="text-gray-700">
                <a
                  href="mailto:official.ieee@domain.com"
                  className="text-blue-600 hover:underline"
                >
                  official.ieee@domain.com
                </a>
              </p>
            </div>
          </div>

          {/* President's Email */}
          <div className="flex items-center space-x-4">
            <AiOutlineMail className="text-3xl text-blue-600 animate-bounce" />
            <div>
              <h3 className="font-semibold text-xl">President's Email:</h3>
              <p className="text-gray-700">
                <a
                  href="mailto:president.ieee@domain.com"
                  className="text-blue-600 hover:underline"
                >
                  president.ieee@domain.com
                </a>
              </p>
            </div>
          </div>

          {/* Secretary's Email */}
          <div className="flex items-center space-x-4">
            <AiOutlineMail className="text-3xl text-blue-600 animate-bounce" />
            <div>
              <h3 className="font-semibold text-xl">Secretary's Email:</h3>
              <p className="text-gray-700">
                <a
                  href="mailto:secretary.ieee@domain.com"
                  className="text-blue-600 hover:underline"
                >
                  secretary.ieee@domain.com
                </a>
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center space-x-4">
            <AiOutlineWhatsApp className="text-3xl text-green-500 animate-pulse" />
            <div>
              <h3 className="font-semibold text-xl">Connect with us on WhatsApp:</h3>
              <p className="text-gray-700">
                <a
                  href="https://wa.me/1234567890?text=Hello%20IEEE,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  className="text-green-500 hover:underline"
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
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0">
          <img
            src="assets/roboIm1.jpg" 
            alt="Contact Us"
            className="w-[550px] h-[592px] hidden md:block md:ml-5 rounded-lg shadow-lg max-w-full object-cover transform transition duration-500 hover:scale-105"
          />
        </div>
    </div>
  );
};

export default ContactUs;
