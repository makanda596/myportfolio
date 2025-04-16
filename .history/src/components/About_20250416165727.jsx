import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-600 to-indigo-800 text-white p-6">
        <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold"
        >
            Hi, I'm a GIS & Full-Stack Developer
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-lg md:text-2xl max-w-xl"
        >
            Undergraduate student at Moi University studying GIS, Remote Sensing & Geospatial Engineering. Self-learning full-stack development since 2023.
        </motion.p>
        <div className="flex space-x-6 mt-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
            <a href="mailto:your.email@example.com"><FaEnvelope size={30} /></a>
        </div>
    </section>
);

const About = () => (
    <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-4"
        >
            About Me
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg"
        >
            I specialize in GIS, Remote Sensing, and Geospatial Mapping while also building full-stack applications using React, Node.js, MongoDB, and other modern tools. Passionate about combining spatial technologies with software engineering to solve real-world problems and deliver user-friendly platforms.
        </motion.p>
    </section>
);

export { Hero, About };
