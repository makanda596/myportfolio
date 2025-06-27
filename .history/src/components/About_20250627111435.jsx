import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaCode, FaGlobeAfrica, FaProjectDiagram } from 'react-icons/fa';

const About = () => (
    <section
        id="about"
        className="py-2 px-4  text-gray-800"
    >
        <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl font-extrabold text-center text-teal-700 mb-2"
        >
            About Me
        </motion.h2>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-md text-gray-700 leading-8 mb-8 text-center max-w-3xl mx-auto space-y-2"
        >
            <p>
                I’m a multi-skilled professional with a strong background in{' '}
                <span className="text-teal-800 font-semibold">
                    Geospatial Analysis, Mapping, Geospatial Specialist Remote Sensing,  Frontend Development and Backend Development
                </span>
                .
            </p>
            <p>
                I build spatially-aware, data-driven applications that solve real-world problems—
                from environmental monitoring to complete digital platforms.
            </p>
            <p>
                With hands-on experience in tools like <strong>ArcGIS, Google Earth Engine</strong>, and
                frameworks like <strong>React, Node.js, MongoDB</strong>, I fuse geospatial intelligence
                with modern web development.
            </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
            {[
                {
                    icon: <FaMapMarkedAlt />,
                    title: 'GIS & Mapping',
                    desc: 'Spatial analysis, flood modeling, land use mapping, and remote sensing tools.',
                },
                {
                    icon: <FaCode />,
                    title: 'Backend Development',
                    desc: 'APIs with Node.js, Express, MongoDB, Redis, Docker, and secure architecture.',
                },
                {
                    icon: <FaGlobeAfrica />,
                    title: 'Frontend Development',
                    desc: 'React, TypeScript, Tailwind CSS, animations, and responsive interfaces.',
                },
                {
                    icon: <FaProjectDiagram />,
                    title: 'Project Builder',
                    desc: 'Founder of UniTrade Hub & GESSAMU Portal. Builder of platforms & geospatial tools.',
                },
            ].map((item, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-teal-500 hover:shadow-xl transition duration-300"
                >
                    <div className="text-4xl text-teal-600 mb-4">{item.icon}</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
            ))}
        </div>
    </section>
);

export default About;
