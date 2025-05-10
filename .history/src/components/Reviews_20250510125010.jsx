import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Daniel Kipruto",
        role: "Student Leader, GESSAMU",
        message: "Brian brought the GESSAMU portal to life. His commitment and ability to turn our vision into a real, working system was amazing. He even added features we hadn't thought of.",
    },
    {
        name: "Faith Chemutai",
        role: "Top Seller, Unitrade Hub",
        message: "As a seller on Unitrade Hub, I can confidently say the platform is well built. The user experience is seamless, and Brian constantly improves it based on user feedback.",
    },
    {
        name: "Chef Collins",
        role: "CEO, Compact Chef Events",
        message: "Working with Brian was a game-changer. He delivered a professional platform for our event bookings that works perfectly across devices. He communicates clearly and works fast.",
    },
    {
        name: "Emmanuel K.",
        role: "Developer & Collaborator",
        message: "Collaborating with Brian on the Moi University Church website was a great experience. He’s sharp, fast, and knows how to bring design and code together beautifully.",
    }
];

const Reviews = () => {
    return (
        <section id="reviews" className="py-16 px-6 bg-gray-50 text-gray-800">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-12"
            >
                What People Say About Me
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {testimonials.map((review, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white shadow-lg rounded-xl p-6"
                    >
                        <p className="text-gray-700 italic mb-4">“{review.message}”</p>
                        <div className="text-sm text-gray-600 font-semibold">{review.name}</div>
                        <div className="text-xs text-gray-500">{review.role}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
