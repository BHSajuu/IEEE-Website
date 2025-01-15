import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white text-center p-6 mt-auto">
      <p className="text-sm">&copy; 2024 IEEE Society. All Rights Reserved.</p>
      <p className="text-sm mt-4 flex justify-center gap-6">
        <a
          href="https://www.facebook.com/people/IEEE-Robotics-Automation-SocietySilchar-Subsection/100091380648276/?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.linkedin.com/company/ieee-ras-silchar-subsection/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300"
        >
          <FaInstagram size={24} />
        </a>
      </p>
    </div>
  );
};

export default Footer;
