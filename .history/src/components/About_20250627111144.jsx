import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
    <section
        id="about"
        className="py-16 px-6 bg-gradient-to-br from-white via-gray-50 to-teal-50 text-gray-800"
    >
        <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-center text-teal-700 mb-6"
        >
            About Me
        </motion.h2>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 leading-8 text-center max-w-3xl mx-auto space-y-6"
        >
            <p>
                I am a multidisciplinary developer and geospatial enthusiast, combining technical creativity
                with data-driven insight to build powerful digital solutions.
            </p>

            <p>
                As a <span className="font-semibold text-teal-700">frontend developer</span>, I design clean,
                responsive, and user-focused interfaces that deliver great user experiences across devices.
            </p>

            <p>
                On the <span className="font-semibold text-teal-700">backend</span>, I enjoy building systems
                that are secure, efficient, and scalable — ensuring the logic behind applications works
                smoothly.
            </p>

            <p>
                My passion for <span className="font-semibold text-teal-700">geospatial science and remote sensing</span> has led me to work on projects involving
                satellite imagery, land use mapping, and environmental monitoring.
            </p>

            <p>
                I use tools like Google Earth Engine to analyze and visualize spatial patterns that
                influence real-world decisions — from agriculture and urban planning to climate resilience.
            </p>

            <p>
                My goal is to use both code and spatial intelligence to empower communities, create solutions
                that matter, and make technology more meaningful.
            </p>
        </motion.div>
    </section>
);

export default About;
