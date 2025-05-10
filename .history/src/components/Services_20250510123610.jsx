import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ui from '../assets/ui.png';

const Services = () => {
    return (
        <section id="services" className="py-12 px-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-10">What I Deliver</h1>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-10"
            >
                {/* Illustration */}
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
                    <img
                        src={ui}
                        alt="Frontend Development"
                        className="w-full max-w-md"
                    />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Build Impactful Interfaces with Brian Makada</h3>
                    <p className="italic text-gray-600 mb-4">
                        I craft modern, responsive, and user-focused web interfaces that make your digital presence shine.
                    </p>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-2" />
                            Responsive designs with Tailwind CSS and mobile-first approach.
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-2" />
                            Smooth animations & page transitions using Framer Motion.
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-2" />
                            Clean, accessible code with React best practices.
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-2" />
                            Personalized UI that fits your brand and vision — no extra cost.
                        </li>
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default Services;
