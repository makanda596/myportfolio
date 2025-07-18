import React, { useState } from 'react';
import {
    FiHome,
    FiUser,
    FiSettings,
    FiAward,
    FiMap,
    FiFolder,
    FiMail
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white shadow-lg py-3 px-4 fixed w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-xl font-bold tracking-wide">
                    <a href="/" className="hover:text-blue-400 transition duration-300 ease-in-out">
                        Brian Makanda
                    </a>
                </div>

                <ul className="hidden md:flex items-center space-x-6">
                    <li>
                        <a href="/" className="hover:underline flex items-center gap-2">
                            <FiHome className="text-lg" />
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:underline flex items-center gap-2">
                            <FiUser className="text-lg" />
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:underline flex items-center gap-2">
                            <FiAward className="text-lg" />
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="hover:underline flex items-center gap-2">
                            <FiSettings className="text-lg" />
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="hover:underline flex items-center gap-2">
                            <FiSettings className="text-lg" />
                            Experience
                        </a>
                    </li>
                    <li>
                        <Link to="/gisprojects" className="hover:underline flex items-center gap-2">
                            <FiMap className="text-lg" />
                            GIS Projects
                        </Link>
                    </li>
                    <li>
                        <a href="#projects" className="hover:underline flex items-center gap-2">
                            <FiFolder className="text-lg" />
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline flex items-center gap-2">
                            <FiMail className="text-lg" />
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                        ☰
                    </button>
                </div>
            </div>

            {isOpen && (
                <ul className="md:hidden flex flex-col items-center space-y-4 mt-3 transition-all duration-500">
                    <li>
                        <a href="/" className="hover:underline flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <FiHome className="text-lg" />
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:underline flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <FiUser className="text-lg" />
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:underline flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <FiAward className="text-lg" />
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="hover:underline flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <FiSettings className="text-lg" />
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/gisprojects" className="hover:underline flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <FiMap className="text-lg" />
                            GIS Projects
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:underline flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <FiFolder className="text-lg" />
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <FiMail className="text-lg" />
                            Contact
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
