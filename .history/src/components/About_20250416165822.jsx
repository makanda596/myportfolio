import React from 'react';
import { motion } from 'framer-motion';

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

export default About;
