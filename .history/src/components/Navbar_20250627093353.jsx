import React, { useState } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { href: '/', label: 'Home', icon: <FaHome /> },
        { href: '#about', label: 'About', icon: <FaUser /> },
        { href: '#services', label: 'My Services', icon: <FaProjectDiagram /> },
        { href: '#skills', label: 'Skills', icon: <FaProjectDiagram /> },
        { href: '/gisprojects', label: 'GIS Projects', icon: <FaProjectDiagram /> },
        { href: '#projects', label: 'Projects', icon: <FaProjectDiagram /> },
        { href: '#contact', label: 'Contact', icon: <FaPhoneAlt /> },
    ];

    return (
        <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white shadow-lg py-3 px-4 fixed w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold tracking-wide">
                    <a href="/" className="hover:text-blue-400 transition duration-300 ease-in-out">
                        Brian <span className="text-blue-400">Makanda</span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
                        >
                            {link.icon} <span>{link.label}</span>
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 mt-3 transition-all duration-500">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-white hover:text-blue-400 transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
