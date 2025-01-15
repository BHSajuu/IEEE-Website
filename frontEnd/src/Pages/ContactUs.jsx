import React from 'react';

const ContactUs = () => {
  return (
    <div className="p-6 bg-gray-400 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">Contact Us</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-xl">Official Email:</h3>
            <p className="text-gray-700">
              <a href="mailto:official.ieee@domain.com" className="text-blue-600 hover:underline">
                official.ieee@domain.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">President's Email:</h3>
            <p className="text-gray-700">
              <a href="mailto:president.ieee@domain.com" className="text-blue-600 hover:underline">
                president.ieee@domain.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Secretary's Email:</h3>
            <p className="text-gray-700">
              <a href="mailto:secretary.ieee@domain.com" className="text-blue-600 hover:underline">
                secretary.ieee@domain.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Connect with us on WhatsApp:</h3>
            <p className="text-gray-700">
              <a 
                href="https://wa.me/1234567890?text=Hello%20IEEE,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                className="text-blue-600 hover:underline"
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
  );
};

export default ContactUs;
