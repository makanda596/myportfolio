import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaCode, FaGlobeAfrica, FaProjectDiagram } from 'react-icons/fa';

const About = () => (
    <section id="about" className="py-10 px-6 max-w-6xl mx-auto bg-white text-gray-800">
        <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-10"
        >
            About Me
        </motion.h2>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-8 mb-2 space-y-6 text-center max-w-3xl mx-auto"
        ><p>
                <span className="text-green-600 font-semibold">I am a Final Undegraduate student Persuing Bachelor Of arts (GEOGRAPHY) </span> at Moi University.
            
                  self-taught <span className="text-blue-600 font-semibold">Full-Stack Developer</span> 
            </p>

            <p>
                Since 2023, I’ve been building full-stack applications that solve real-world problems by blending geospatial intelligence
                with cutting-edge web technologies. My journey started from curiosity, evolved into passion — and now, it's a mission.
            </p>

            <p>
                Whether it’s frontend magic with <span className="text-purple-600 font-semibold">React & Tailwind</span> or backend logic with
                <span className="text-purple-600 font-semibold"> Node.js & MongoDB</span>, I love turning ideas into interactive and impactful solutions.
            </p>

            <p className="italic text-gray-700">
                “Every system I build is a step toward a smarter, more connected world.” 🌍
            </p>
        </motion.div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
                <FaMapMarkedAlt className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-2">GIS & Mapping</h4>
                <p className="text-sm text-gray-700">
                    Skilled in spatial analysis, mapping techniques, flood risk modeling, and geospatial data visualization.
                </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
                <FaCode className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-2">Full-Stack Development</h4>
                <p className="text-sm text-gray-700">
                    Proficient in React, Node.js, MongoDB, Express.js, Docker — building scalable and practical systems.
                </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
                <FaGlobeAfrica className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-2">Frontend Design</h4>
                <p className="text-sm text-gray-700">
                    HTML, JavaScript, Tailwind CSS wizardry, bringing out clean and responsive UI/UX with modern animations.
                </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
                <FaProjectDiagram className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-2">Project Builder</h4>
                <p className="text-sm text-gray-700">
                    Developed the GESSAMU Portal, UniTrade Hub, photography sites, and multiple data-driven platforms.
                </p>
            </motion.div>
        </div>
    </section>
);

export default About;
