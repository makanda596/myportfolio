import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router
import { FaHome, FaUser, FaProjectDiagram, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="text-xl font-semibold">
          <div className="cursor-pointer">
            My Portfolio
          </div>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 hover:text-yellow-400">
              <FaHome /> <span>Home</span>
            </Link>
          </div>
          <div>
            <Link to="#about" className="flex items-center space-x-2 hover:text-yellow-400">
              <FaUser /> <span>About</span>
            </Link>
          </div>
          <div>
            <Link to="#projects" className="flex items-center space-x-2 hover:text-yellow-400">
              <FaProjectDiagram /> <span>Projects</span>
            </Link>
          </div>
          <div>
            <Link to="#contact" className="flex items-center space-x-2 hover:text-yellow-400">
              <FaPhoneAlt /> <span>Contact</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <div
            onClick={toggleMenu}
            className="text-2xl cursor-pointer"
          >
            <span>☰</span>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link to="/" className="text-white hover:text-yellow-400">Home</Link>
          <Link to="#about" className="text-white hover:text-yellow-400">About</Link>
          <Link to="#projects" className="text-white hover:text-yellow-400">Projects</Link>
          <Link to="#contact" className="text-white hover:text-yellow-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
