import React from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router
import { FaHome, FaUser, FaProjectDiagram, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-5">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Brand */}
                <div className="text-xl font-semibold">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="cursor-pointer"
                    >
                        My Portfolio
                    </motion.div>
                </div>

                {/* Links */}
                <div className="hidden md:flex space-x-8">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/" className="flex items-center space-x-2 hover:text-yellow-400">
                            <FaHome /> <span>Home</span>
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="#about" className="flex items-center space-x-2 hover:text-yellow-400">
                            <FaUser /> <span>About</span>
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="#projects" className="flex items-center space-x-2 hover:text-yellow-400">
                            <FaProjectDiagram /> <span>Projects</span>
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="#contact" className="flex items-center space-x-2 hover:text-yellow-400">
                            <FaPhoneAlt /> <span>Contact</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-2xl"
                    >
                        <span>☰</span>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
