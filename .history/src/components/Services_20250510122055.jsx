import React from 'react'
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ui from '../assets/ui.png'
const Services = () => {
  return (
    <section id="services">
          {/* New Cross-Platform Section */}
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
                      alt="Cross-platform app development"
                      className="w-full max-w-md"
                  />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Expand Your Reach with Cross-Platform Development</h3>
                  <p className="italic text-gray-600 mb-4">
                      I deliver Android and iOS apps from a single codebase — fast, scalable, and reliable.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                          <CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-2" />
                          One Codebase, native performance across Android and iOS.
                      </li>
                      <li className="flex items-start">
                          <CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-2" />
                          Fast iterations with customized UI/UX (Your vision comes first).
                      </li>
                      <li className="flex items-start">
                          <CheckCircle className="text-blue-600 w-5 h-5 mt-1 mr-2" />
                          No extra charge for clean, user-centric design.
                      </li>
                  </ul>
              </div>
          </motion.div>
    </section>
  )
}

export default Services