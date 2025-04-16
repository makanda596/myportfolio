import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="relative py-0 md:py-32 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
            <div className="container mx-auto text-center relative z-10">
                <motion.img
                    src=""
                    alt="Your Profile"
                    className="rounded-full w-32 h-32 md:w-48 md:h-48 mx-auto shadow-md mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
                <h1 className="text-3xl md:text-5xl font-bold mb-2">Hello, I'm [Your Name]</h1>
                <p className="text-lg md:text-xl mb-6 text-gray-300">
                    A Geospatial Engineer & Aspiring Full-Stack Developer
                </p>
                <p className="text-md md:text-lg text-gray-400">
                    Passionate about the intersection of location and technology.
                </p>
                <div className="mt-8 flex justify-center space-x-4">
                    <motion.a
                        href="#projects"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore My Work
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get In Touch
                    </motion.a>
                </div>
                <div className="mt-6 flex justify-center space-x-4 text-gray-300 text-xl">
                    <a href="https://github.com/[YourGitHubUsername]" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/[YourLinkedInProfile]" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                        <FaLinkedin />
                    </a>
                    {/* Add other social media icons */}
                </div>
            </div>
            {/* Creative Background Element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <svg viewBox="0 0 1000 500" fill="none" className="absolute top-0 left-0 w-full h-full">
                    <path d="M0 0 L1000 0 L800 500 L0 500 Z" fill="currentColor" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;