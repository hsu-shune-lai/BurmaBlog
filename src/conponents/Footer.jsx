import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-bg-header text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Logo */}
        <div className="text-xl font-bold">
        <span className='text-yellow-600'>Burma</span> Blog
        </div>

        {/* Center - Copyright */}
        <div className="mt-2 md:mt-0 text-center">
          <p>&copy; {new Date().getFullYear()} Burma Blog. All rights reserved.</p>
        </div>

        {/* Right Side - Social Icons */}
        <div className="mt-2 md:mt-0 flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="text-xl hover:text-gray-400" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn className="text-xl hover:text-gray-400" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="text-xl hover:text-gray-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-xl hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
