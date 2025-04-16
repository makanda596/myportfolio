import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaCode, FaGlobeAfrica, FaProjectDiagram } from 'react-icons/fa';

const About = () => (
    <section id="about" className="py-16 px-6 max-w-5xl mx-auto text-center bg-gray-100 rounded-2xl shadow-xl">
        <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-gray-800"
        >
            About Me
        </motion.h2>

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 mb-10"
        >
            I'm an enthusiastic GIS and Remote Sensing student at Moi University, with a strong passion for software engineering. Since 2023, I've been building full-stack applications that solve real-world problems, blending my spatial analysis knowledge with modern web technologies. I'm committed to continuous learning, innovation, and building systems that leave a positive impact.
        </motion.p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-md">
                <FaMapMarkedAlt className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-2">GIS & Mapping</h4>
                <p className="text-sm text-gray-600">Skilled in spatial analysis, mapping techniques, flood risk modeling, and geospatial data visualization.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-md">
                <FaCode className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-2">Full-Stack Development</h4>
                <p className="text-sm text-gray-600">Proficient in React, Node.js, MongoDB, Express.js, Docker, and building scalable web apps.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-md">
                <FaGlobeAfrica className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-2">Frontend Design</h4>
                <p className="text-sm text-gray-600">Expertise in HTML, JavaScript, Tailwind CSS, and responsive UI/UX with modern animations.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-md">
                <FaProjectDiagram className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-2">Project Builder</h4>
                <p className="text-sm text-gray-600">Created systems like the Gessamu Portal, Uitrade Hub, photography and flood analysis apps.</p>
            </motion.div>
        </div>
    </section>
);

export default About;
