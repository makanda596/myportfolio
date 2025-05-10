import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ui from '../assets/ui.png';
import backend from '../assets/backend.png';
import gis from '../assets/gis.png'; // Add your GIS illustration here

const Services = () => {
    return (
        <section id="services" className="py-12 px-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-16">What I Deliver</h1>

            {/* FRONTEND */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-10 mb-20"
            >
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
                    <img src={ui} alt="Frontend Development" className="w-full max-w-md" />
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Build Impactful Interfaces with Brian Makada</h3>
                    <p className="italic text-gray-600 mb-4">
                        I craft modern, responsive, and user-focused web interfaces that make your digital presence shine.
                    </p>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start"><CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-2" />Responsive designs with Tailwind CSS and mobile-first approach.</li>
                        <li className="flex items-start"><CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-2" />Smooth animations & page transitions using Framer Motion.</li>
                        <li className="flex items-start"><CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-2" />Clean, accessible code with React best practices.</li>
                        <li className="flex items-start"><CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-2" />Personalized UI that fits your brand and vision — no extra cost.</li>
                    </ul>
                </div>
            </motion.div>

            {/* BACKEND */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row-reverse items-center gap-10 mb-20"
            >
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
                    <img src={backend} alt="Backend Development" className="w-full max-w-md" />
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Power Your App with Scalable Backend Solutions</h3>
                    <p className="italic text-gray-600 mb-4">
                        Beyond clean UIs, I engineer the logic, security, and performance that fuel great apps — all from scratch.
                    </p>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start"><CheckCircle className="text-indigo-600 w-5 h-5 mt-1 mr-2" />RESTful & GraphQL APIs with Node.js and Express.js.</li>
                        <li className="flex items-start"><CheckCircle className="text-indigo-600 w-5 h-5 mt-1 mr-2" />Database design and optimization using MongoDB & Mongoose.</li>
                        <li className="flex items-start"><CheckCircle className="text-indigo-600 w-5 h-5 mt-1 mr-2" />Authentication, authorization (JWT, OAuth), and RBAC.</li>
                        <li className="flex items-start"><CheckCircle className="text-indigo-600 w-5 h-5 mt-1 mr-2" />Dockerized deployment and scalable microservices.</li>
                        <li className="flex items-start"><CheckCircle className="text-indigo-600 w-5 h-5 mt-1 mr-2" />Real-time systems, admin dashboards, and analytics.</li>
                    </ul>
                </div>
            </motion.div>

            {/* GIS & MAPPING */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-10"
            >
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
                    <img src={gis} alt="GIS and Mapping" className="w-full max-w-md" />
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Transform Data into Insight with GIS Expertise</h3>
                    <p className="italic text-gray-600 mb-4">
                        I integrate spatial thinking with web development to help visualize, analyze, and make data-driven decisions.
                    </p>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start"><CheckCircle className="text-green-600 w-5 h-5 mt-1 mr-2" />Geospatial data processing using QGIS and remote sensing tools.</li>
                        <li className="flex items-start"><CheckCircle className="text-green-600 w-5 h-5 mt-1 mr-2" />Interactive web maps using Leaflet, Mapbox, and GeoJSON.</li>
                        <li className="flex items-start"><CheckCircle className="text-green-600 w-5 h-5 mt-1 mr-2" />Flood risk analysis, urban planning, and location intelligence.</li>
                        <li className="flex items-start"><CheckCircle className="text-green-600 w-5 h-5 mt-1 mr-2" />Integrating GIS with MongoDB, APIs, and dashboards.</li>
                        <li className="flex items-start"><CheckCircle className="text-green-600 w-5 h-5 mt-1 mr-2" />Custom GIS tools for community, research, and startups.</li>
                    </ul>
                </div>
            </motion.div>
            {/* MANAGEMENT SYSTEMS */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row-reverse items-center gap-10 mt-20"
            >
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
                    <img src={require('../assets/management.png')} alt="Management System" className="w-full max-w-md" />
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Custom Management Systems Built for Scale</h3>
                    <p className="italic text-gray-600 mb-4">
                        I architect and develop scalable platforms for institutions, startups, and communities — secure, structured, and intuitive.
                    </p>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start"><CheckCircle className="text-purple-600 w-5 h-5 mt-1 mr-2" />Role-based access (admin, users, moderators, etc.) with full authentication.</li>
                        <li className="flex items-start"><CheckCircle className="text-purple-600 w-5 h-5 mt-1 mr-2" />Dynamic dashboards with charts, insights, and analytics.</li>
                        <li className="flex items-start"><CheckCircle className="text-purple-600 w-5 h-5 mt-1 mr-2" />CRUD operations with data filtering, search, and export tools.</li>
                        <li className="flex items-start"><CheckCircle className="text-purple-600 w-5 h-5 mt-1 mr-2" />Custom notification systems, messaging, and report handling.</li>
                        <li className="flex items-start"><CheckCircle className="text-purple-600 w-5 h-5 mt-1 mr-2" />Examples: Unitrade Hub Admin, GESSAMU Portal, church management tools.</li>
                    </ul>
                </div>
            </motion.div>

        </section>
    );
};

export default Services;
