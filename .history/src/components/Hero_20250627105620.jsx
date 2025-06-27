import React from 'react';
import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiCode
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import profile from '../assets/profile.png';

const Hero = () => {
    const heroVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.3,
            },
        },
    };

    const textVariants = {
        initial: { opacity: 0, y: -20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
        },
    };

    const imageVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: 'easeInOut' },
        },
    };

    const socialVariants = {
        whileHover: { scale: 1.15, transition: { duration: 0.2 } },
        whileTap: { scale: 0.95 },
    };

    return (
        <motion.section
            className="min-h-screen flex flex-col items-center justify-center text-center bg-white text-black px-6 py-16"
            variants={heroVariants}
            initial="initial"
            animate="animate"
        >
            {/* Profile Image */}
            <motion.div
                className="rounded-full overflow-hidden shadow-lg mb-8 w-32 h-32 md:w-44 md:h-44 border-4 border-teal-500"
                variants={imageVariants}
            >
                <img src={profile} alt="Profile" className="w-full h-full object-cover" />
            </motion.div>

            {/* Name + Title */}
            <motion.h1
                variants={textVariants}
                className="text-xl md:text-2xl font-extrabold mb-2"
                style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}
            >
                Hi, I'm <span className="text-teal-600">BRIAN MAKANDA</span> <br />
                <span className="text-sm font-medium text-gray-600">(Makanda Worksoft)</span>
            </motion.h1>

            {/* Bio */}
            <motion.p
                variants={textVariants}
                className="mt-1 text-lg md:text-xl max-w-2xl text-gray-700 leading-relaxed"
            >
                Geospatial Specialist | Frontend Developer | Backend Developer | Remote Sensing | GIS & Mapping
             </motion.p>

            <motion.div
                className="flex flex-wrap justify-center gap-4 mt-6"
                variants={textVariants}
            >
                <motion.a
                    href="#projects"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-full flex items-center gap-2 shadow-md transition duration-300"
                    variants={socialVariants}
                >
                    <FiCode className="text-lg" />
                    Explore Projects
                </motion.a>
                <motion.a
                    href="#contact"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
                    variants={socialVariants}
                >
                    Contact Me
                </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
                className="flex space-x-6 mt-10"
                variants={textVariants}
            >
                <motion.a
                    href="https://github.com/makanda596"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition duration-300"
                    variants={socialVariants}
                >
                    <FiGithub size={26} />
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/brian-makanda-26ba7424a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition duration-300"
                    variants={socialVariants}
                >
                    <FiLinkedin size={26} />
                </motion.a>
                <motion.a
                    href="mailto:oumab743@gmail.com"
                    className="text-gray-700 hover:text-black transition duration-300"
                    variants={socialVariants}
                >
                    <FiMail size={26} />
                </motion.a>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
