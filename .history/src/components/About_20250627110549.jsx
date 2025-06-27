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
                I'm a multi-disciplinary professional with expertise in <span className="font-bold text-black">Geospatial Analysis, Remote Sensing, GIS, Web Mapping, and Full-Stack Web Development</span>.
            </p>
            <p>
                I specialize in building geospatial applications and scalable web platforms that solve real-world problems—from environmental monitoring and land-use planning to building enterprise-grade web systems.
            </p>
            <p>
                I bring together skills in <span className="font-bold text-black">frontend (React, Tailwind CSS, TypeScript), backend (Node.js, Express, MongoDB, Redis, Docker), and geospatial tech (ArcGIS, QGIS, Google Earth Engine, Sentinel-2, Python, PostGIS, Leaflet)</span> to create high-impact tools and visualizations.
            </p>
            <p>
                Whether it's developing interactive maps, analyzing satellite imagery, or deploying full-stack systems—my mission is to create digital solutions with spatial intelligence at the core.
            </p>
        </motion.div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mb-6">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
                <FaMapMarkedAlt className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-2">GIS & Mapping</h4>
                <p className="text-sm text-gray-700">
                    GIS analysis, satellite data processing (Sentinel-2, Landsat), spatial modeling, LULC classification, flood risk mapping, and map design using ArcGIS, QGIS, and Google Earth Engine.
                </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
                <FaCode className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-2">Backend Development</h4>
                <p className="text-sm text-gray-700">
                    Node.js, Express.js, MongoDB, PostgreSQL, Redis, REST APIs, authentication, server-side logic, and containerized deployments with Docker.
                </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
                <FaGlobeAfrica className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-2">Frontend Development</h4>
                <p className="text-sm text-gray-700">
                    React, JavaScript, TypeScript, Tailwind CSS, Framer Motion, responsive design, interactive dashboards, and modern UI/UX development.
                </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
                <FaProjectDiagram className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-2">Project Builder</h4>
                <p className="text-sm text-gray-700">
                    Founder and full-stack lead at UniTrade Hub. Built platforms like GESSAMU Portal, custom GIS tools, photography sites, and other data-driven web systems with spatial integration.
                </p>
            </motion.div>
        </div>
    </section>
);

export default About;
