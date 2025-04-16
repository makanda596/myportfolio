import React, { useState, useEffect } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaCode } from 'react-icons/fa'; // More relevant icons

const Hero = () => {
    const [isHovering, setIsHovering] = useState(false);
    const { scrollYProgress } = useScroll();

    // Parallax effect for background elements
    const bgScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.7]);

    // Subtle movement for the profile image
    const imageMotion = {
        initial: { opacity: 0, y: 20, rotate: -5 },
        animate: { opacity: 1, y: 0, rotate: 0 },
        transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    };

    const textMotion = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] },
    };

    const buttonMotion = {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        transition: { duration: 0.2 },
    };

    return (
        <motion.section
            className="relative py-24 md:py-36 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden"
            style={{ scale: bgScale, opacity: bgOpacity }}
        >
            {/* Abstract Shape Background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <motion.svg
                    viewBox="0 0 1920 1080"
                    fill="none"
                    className="absolute top-0 left-0 w-full h-full opacity-30"
                    style={{ scale: bgScale }}
                >
                    <motion.path
                        d="M0 0 C 573 200, 859 700, 1920 300 L 1920 1080 L 0 1080 Z"
                        fill="url(#gradient0)"
                    />
                    <defs>
                        <linearGradient id="gradient0" x1="960" y1="0" x2="960" y2="1080" gradientUnits="userSpaceOnUse">
                            <stop stopColor="rgba(100, 116, 139, 0.3)" /> {/* Gray-600 with opacity */}
                            <stop offset="1" stopColor="rgba(55, 65, 81, 0.3)" /> {/* Gray-800 with opacity */}
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>

            <div className="container mx-auto text-center relative z-10">
                <motion.div
                    className="inline-block rounded-full overflow-hidden shadow-lg"
                    style={{ perspective: 500 }}
                    initial="initial"
                    animate="animate"
                >
                    <motion.img
                        src=""
                        alt="Your Profile"
                        className="block w-32 h-32 md:w-48 md:h-48 object-cover"
                        variants={imageMotion}
                    />
                </motion.div>

                <motion.h1
                    className="text-3xl md:text-5xl font-bold mt-6 mb-2"
                    variants={textMotion}
                >
                    Hi, I'm <span className="text-indigo-400">[Your Name]</span>
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl mb-8 text-gray-300"
                    variants={textMotion}
                    style={{ delay: 0.2 }}
                >
                    GIS & Geospatial Engineering | Full-Stack Development
                </motion.p>
                <motion.p
                    className="text-md md:text-lg text-gray-400 mb-6"
                    variants={textMotion}
                    style={{ delay: 0.4 }}
                >
                    Bridging the gap between spatial insights and innovative web solutions. Based in <FaMapMarkerAlt className="inline-block mr-1" /> Kenya.
                </motion.p>

                <motion.div
                    className="flex justify-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <motion.a
                        href="#projects"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out flex items-center"
                        variants={buttonMotion}
                    >
                        <FaCode className="mr-2" /> Explore My Projects
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
                        variants={buttonMotion}
                    >
                        Contact Me
                    </motion.a>
                </motion.div>

                <motion.div
                    className="mt-8 flex justify-center space-x-4 text-gray-300 text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <a href="https://github.com/[YourGitHubUsername]" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/[YourLinkedInProfile]" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                        <FaLinkedin />
                    </a>
                    {/* Add other social media icons */}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;