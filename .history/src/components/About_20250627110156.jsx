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
            className="text-xl font-bold text-center mb-2"
        >
            About Me
        </motion.h2>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-8 mb-4 space-y-1 text-center max-w-3xl mx-auto"
        >
            <p>
                I’m a multi-skilled professional with a strong background in <span className='text-black font-bold'>Geospatial Analysis, Remote Sensing, and Full-Stack Development</span>.
            </p>
            <p>
                I build spatially-aware, data-driven applications that solve real-world problems—ranging from environmental monitoring and urban planning to building complete web platforms.
            </p>
            <p>
                With hands-on experience in tools like ArcGIS and Sentinel data, and frameworks like React, Node.js, and MongoDB, I merge geospatial intelligence with modern development to create meaningful impact.
            </p>
        </motion.div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mb-6">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
                <FaMapMarkedAlt className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-2">GIS & Mapping</h4>
                <p className="text-sm text-gray-700">
                    Skilled in spatial analysis, mapping techniques, flood risk modeling, and geospatial data visualization.
                </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
                <FaCode className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-2">Backend Development</h4>
                <p className="text-sm text-gray-700">
                    Proficient in Node.js, MongoDB, Express.js, Redis, and Docker—building scalable APIs and backend services.
                </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
                <FaGlobeAfrica className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-2">Frontend Development</h4>
                <p className="text-sm text-gray-700">
                    React, TypeScript, Tailwind CSS, and animation tools to build responsive, accessible, and user-friendly UIs.
                </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
                <FaProjectDiagram className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-2">Project Builder</h4>
                <p className="text-sm text-gray-700">
                    Founder and full-stack lead at UniTrade Hub. Built platforms like GESSAMU Portal, photography sites, and several data-driven applications.
                </p>
            </motion.div>
        </div>
    </section>
);

export default About;
