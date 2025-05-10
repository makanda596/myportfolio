import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        name: "Chef Victor",
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
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    const goToSlide = (index) => setCurrent(index);

    return (
        <section id="reviews" className="py-16 px-6 bg-gray-50 text-gray-800">
            <h2 className="text-4xl font-bold text-center mb-12">What People Say About Me</h2>

            <div className="relative max-w-3xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-6 rounded-xl shadow-md"
                    >
                        <p className="italic text-gray-700 mb-4">“{testimonials[current].message}”</p>
                        <div className="text-sm font-semibold text-gray-800">{testimonials[current].name}</div>
                        <div className="text-xs text-gray-500">{testimonials[current].role}</div>
                    </motion.div>
                </AnimatePresence>

                {/* Dots Navigation */}
                <div className="flex justify-center mt-6 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full ${current === index ? 'bg-blue-600' : 'bg-gray-300'
                                } transition duration-300`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
