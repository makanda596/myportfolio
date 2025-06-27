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
            className="text-lg text-gray-700 leading-8 text-center max-w-3xl mx-auto space-y-5"
        >
            <p>
                I’m a passionate and driven individual with a deep interest in geospatial intelligence,
                digital innovation, and problem-solving through technology.
            </p>
            <p>
                I love working on projects that help people make better decisions—whether it's through
                spatial analysis, interactive platforms, or visual storytelling.
            </p>
            <p>
                I believe in lifelong learning and constantly seek ways to grow, contribute, and create
                impactful solutions that connect communities, empower youth, and promote sustainability.
            </p>
            <p>
                Every project I work on is not just about technology—it's about purpose, people, and progress.
            </p>
        </motion.div>
    </section>
);

export default About;
