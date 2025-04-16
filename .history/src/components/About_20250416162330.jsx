import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center md:text-left">About Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Driven by a curiosity for both the spatial world and the digital realm, I am an undergraduate student at Moi University immersed in the fascinating fields of GIS, Geospatial Engineering, Remote Sensing, and Mapping. This academic journey has provided me with a strong analytical foundation and a keen eye for visualizing complex data.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            My passion extends beyond maps and coordinates. Since 2023, I've been on an exciting self-learning adventure into the world of Software Engineering. As an aspiring full-stack developer, I'm dedicated to crafting intuitive and efficient web applications.
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            My current tech stack includes:
                            <ul className="list-disc list-inside mt-2">
                                <li>Frontend: HTML, React, JavaScript, Leaflet.js, Tailwind CSS</li>
                                <li>Backend: Node.js, Express.js, MongoDB, Redis</li>
                                <li>Tools: Git, Docker</li>
                            </ul>
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            I'm eager to connect my geospatial knowledge with my growing software development skills to create innovative solutions. I'm looking for opportunities to contribute to meaningful projects and collaborate with passionate teams.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;