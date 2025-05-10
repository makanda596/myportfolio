import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profile from "../assets/profile.png";

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
            className="min-h-screen flex flex-col items-center justify-center text-center bg-white text-black py-14"
            variants={heroVariants}
            initial="initial"
            animate="animate"
        >
            <motion.div
                className="rounded-full overflow-hidden shadow-lg mb-8 w-32 h-32 md:w-48 md:h-48"
                variants={imageVariants}
            >
                <img src={profile} alt="profile" className="w-full h-full object-cover" />
            </motion.div>

            <motion.h1
                variants={textVariants}
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
                Hi, I'm <span className="text-teal-500">BRIAN MAKANDA (Makanda Worksoft)</span>
            </motion.h1>

            <motion.p
                variants={textVariants}
                className="mt-2 text-lg md:text-xl max-w-xl text-gray-700 leading-relaxed"
                style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}
            >
                Undergraduate at Moi University, pursuing BACHELOR OF ARTS PURE GEOGRAPHY (GEOSPATIAL ENGINEERING)
                and passionate about GIS, Remote Sensing & Geospatial Engineering
                , and a Full-Stack Developer since 2023. Based in Kenya.
            </motion.p>

            <motion.div
                className="flex space-x-4 mt-8"
                variants={textVariants}
                style={{ delay: 0.7 }}
            >
                <motion.a
                    href="#projects"
                    className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out flex items-center"
                    variants={socialVariants}
                >
                    <FaCode className="mr-2" /> Explore Projects
                </motion.a>
                <motion.a
                    href="#contact"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
                    variants={socialVariants}
                >
                    Contact Me
                </motion.a>
               
            </motion.div>

            <motion.div
                className="flex space-x-6 mt-8"
                variants={textVariants}
                style={{ delay: 0.9 }}
            >
                <motion.a
                    href="https://github.com/makanda596"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition duration-300"
                    variants={socialVariants}
                >
                    <FaGithub size={28} />
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/brian-makanda-26ba7424a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition duration-300"
                    variants={socialVariants}
                >
                    <FaLinkedin size={28} />
                </motion.a>
                <motion.a
                    href="mailto:oumab743@gmail.com"
                    className="text-gray-700 hover:text-black transition duration-300"
                    variants={socialVariants}
                >
                    <FaEnvelope size={28} />
                </motion.a>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
