import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
    const heroVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } },
    };

    const textVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
    };

    const imageVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
    };

    const socialVariants = {
        whileHover: { scale: 1.1, transition: { duration: 0.2 } },
        whileTap: { scale: 0.9 },
    };

    return (
        <motion.section
            className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-8"
            variants={heroVariants}
            initial="initial"
            animate="animate"
        >
            {/* Profile Image with Subtle Animation */}
            <motion.div
                className="rounded-full overflow-hidden shadow-lg mb-8 w-32 h-32 md:w-48 md:h-48"
                variants={imageVariants}
            >
                <img src="{ProfileImage}" alt="Your Profile" className="w-full h-full object-cover" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
                variants={textVariants}
                className="text-4xl md:text-6xl font-bold mb-4"
                style={{ fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
                Hi, I'm <span className="text-teal-300">{/* Highlight your name or role */}[Your Name]</span>
            </motion.h1>

            {/* Subtitle with More Context */}
            <motion.p
                variants={textVariants}
                className="mt-4 text-lg md:text-xl max-w-xl text-gray-200 leading-relaxed"
                style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}
            >
                Undergraduate at Moi University, passionate about <span className="text-yellow-300">GIS, Remote Sensing & Geospatial Engineering</span>, and on a continuous journey to master <span className="text-purple-300">Full-Stack Development</span> since 2023. Based in Kenya <FaMapMarkerAlt className="inline-block ml-1" />.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
                className="flex space-x-4 mt-8"
                variants={textVariants}
                style={{ delay: 0.7 }}
            >
                <motion.a
                    href="#projects" // Link to your projects section
                    className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out flex items-center"
                    variants={socialVariants}
                >
                    <FaCode className="mr-2" /> Explore Projects
                </motion.a>
                <motion.a
                    href="#contact" // Link to your contact section
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
                    variants={socialVariants}
                >
                    Contact Me
                </motion.a>
            </motion.div>

            {/* Social Media Icons with Hover Effects */}
            <motion.div
                className="flex space-x-6 mt-8"
                variants={textVariants}
                style={{ delay: 0.9 }}
            >
                <motion.a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition duration-300"
                    variants={socialVariants}
                >
                    <FaGithub size={30} />
                </motion.a>
                <motion.a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition duration-300"
                    variants={socialVariants}
                >
                    <FaLinkedin size={30} />
                </motion.a>
                <motion.a
                    href="mailto:your.email@example.com"
                    className="text-gray-300 hover:text-white transition duration-300"
                    variants={socialVariants}
                >
                    <FaEnvelope size={30} />
                </motion.a>
            </motion.div>
        </motion.section>
    );
};

export default Hero;