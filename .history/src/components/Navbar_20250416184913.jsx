import React, { useState } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 text-white py-2 px-4 fixed w-full z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-xl font-semibold">
                    <div className="cursor-pointer">
                        My Portfolio
                    </div>
                </div>

                <div className="hidden md:flex space-x-8">
                    <div>
                        <a href="/" className="flex items-center space-x-2 hover:text-blue-400">
                            <FaHome /> <span>Home</span>
                        </a>
                    </div>
                    <div>
                        <a href="#about" className="flex items-center space-x-2 hover:text-blue-400">
                            <FaUser /> <span>About</span>
                        </a>
                    </div>
                    <div>
                        <a href="#skills" className="flex items-center space-x-2 hover:text-blue-400">
                            <FaProjectDiagram /> <span>Skills</span>
                        </a>
                    </div>
                    <div>
                        <a href="#projects" className="flex items-center space-x-2 hover:text-blue-400">
                            <FaProjectDiagram /> <span>Projects</span>
                        </a>
                    </div>
                    <div>
                        <a href="#contact" className="flex items-center space-x-2 hover:text-blue-400">
                            <FaPhoneAlt /> <span>Contact</span>
                        </a>
                    </div>
                </div>

                <div className="md:hidden flex items-center">
                    <div
                        onClick={toggleMenu}
                        className="text-2xl cursor-pointer"
                    >
                        <span>☰</span>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
                    <a href="/" className="text-white hover:text-blue-400">Home</a>
                    <a href="#about" className="text-white hover:text-blue-400">About</a>
                    <a href="#skills" className="text-white hover:text-blue-400">Skills</a>
                    <a href="#projects" className="text-white hover:text-blue-400">Projects</a>
                    <a href="#contact" className="text-white hover:text-blue-400">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
