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

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { href: '/', label: 'Home', icon: <FiHome className="text-lg" /> },
        { href: '#about', label: 'About', icon: <FiUser className="text-lg" /> },
        { href: '#skills', label: 'Skills', icon: <FiAward className="text-lg" /> },
        { href: '#services', label: 'My Services', icon: <FiSettings className="text-lg" /> },
        { href: '/gisprojects', label: 'GIS Projects', icon: <FiMap className="text-lg" /> },
        { href: '#projects', label: 'Projects', icon: <FiFolder className="text-lg" /> },
        { href: '#contact', label: 'Contact', icon: <FiMail className="text-lg" /> },
    ];

    return (
        <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white shadow-lg py-3 px-4 fixed w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold tracking-wide">
                    <a href="/" className="hover:text-blue-400 transition duration-300 ease-in-out">
                        Brian <span className="text-blue-400">Makanda</span>
                    </a>
                </div>

                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
                        >
                            {link.icon}
                            <span className="text-sm">{link.label}</span>
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                        ☰
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 mt-3 transition-all duration-500">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="flex items-center gap-2 text-white hover:text-blue-400 transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.icon}
                            <span>{link.label}</span>
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
