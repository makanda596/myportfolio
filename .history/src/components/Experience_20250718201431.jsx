import React, { useState } from 'react';
import { FaMap, FaWater, FaDatabase, FaFilePdf, FaGithub, FaGlobeAfrica, FaChartLine } from 'react-icons/fa';

const experiences = [
  {
    title: "Geospatial Intern – DRSRS",
    company: "Directorate of Resource Surveys and Remote Sensing (DRSRS)",
    date: "May – August 2024",
    description: `
      Contributed to geospatial data analysis and remote sensing at a national level institution under the Ministry of Lands. 
      Worked with tools like QGIS, ArcGIS, Google Earth Engine, ENVI, and ERDAS Imagine. 
      Engaged in image processing, coding with Python, R, and SQL, and developed a flood risk analysis project for Nairobi County using Leaflet JS for Web Mapping.
    `,
    recommendation: "/recommendations/DRSRS RECOMMENDATION.pdf",
    skills: ["QGIS", "ArcGIS", "Python", "R", "SQL", "Leaflet JS"],
    icon: <FaMap className="text-cyan-500" />,
    accentColor: "from-cyan-500 to-blue-600"
  },
  {
    title: "GIS Atachee – Busia County Government",
    company: "Department of Water, Environment, Natural Resources & Climate Change, Busia",
    date: "Feb – May 2023",
    description: `
      Supported the GIS Unit in mapping water resources, digitizing maps, and managing geospatial data for county water projects. 
      Worked with ArcGIS, QGIS, and remote sensing for environmental and climate change monitoring. 
      Demonstrated strong problem-solving skills and attention to detail in preparing map layouts and geodatabases.
    `,
    recommendation: "/recommendations/COUNTY GOVERMENT OF BUSIA RECOMENDATION LETTER.pdf",
    skills: ["ArcGIS", "QGIS", "Remote Sensing", "Data Digitization", "Geodatabases"],
    icon: <FaWater className="text-blue-500" />,
    accentColor: "from-blue-500 to-indigo-600"
  }
];

export default function Experience() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-2 px-4 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-xl font-bold mb-2 text-white">
            Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-2 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My journey in geospatial analysis and GIS technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl overflow-hidden transform transition-all duration-500 ${hoveredCard === idx ? "scale-105" : "scale-100"
                }`}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card background with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.accentColor} opacity-20`}></div>

              {/* Card content */}
              <div className="relative bg-gray-800 bg-opacity-70 backdrop-blur-lg border border-gray-700 rounded-3xl p-4 h-full">
                <div className="flex flex-col h-full">
                  {/* Top section with icon and title */}
                  <div className="flex items-start mb-2">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-2xl mr-6">
                      <div className="text-xl text-white">
                        {exp.icon}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                  </div>

                  {/* Date badge */}
                  <div className="mb-4">
                    <span className="bg-gray-700 text-cyan-300 text-sm font-semibold px-4 py-2 rounded-full inline-flex items-center">
                      <FaChartLine className="mr-2" />
                      {exp.date}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="flex-grow mb-4">
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-400 mb-3 flex items-center">
                      <FaDatabase className="mr-2 text-cyan-500" />
                      Key Technologies & Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-gray-700 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recommendation button */}
                  <div className="mt-auto">
                    <a
                      href={exp.recommendation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white font-medium group"
                    >
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                        <FaFilePdf className="text-xl" />
                      </div>
                      <span className="border-b border-transparent group-hover:border-cyan-500 transition-all">
                        View Recommendation Letter
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br ${exp.accentColor} opacity-30 transform rotate-12 transition-all duration-700 ${hoveredCard === idx ? "opacity-50 scale-125" : ""
                }`}></div>
              <div className={`absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br ${exp.accentColor} opacity-30 transform -rotate-12 transition-all duration-700 ${hoveredCard === idx ? "opacity-50 scale-125" : ""
                }`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center relative">
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full filter blur-3xl opacity-10"></div>

          <div className="inline-block bg-gradient-to-r from-cyan-600 to-blue-700 p-1 rounded-full">
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-all duration-300 group"
            >
              <FaGithub className="mr-3 text-xl" />
              <span>Explore More Projects on GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gray-600"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}