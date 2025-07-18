import React from 'react';
import { FaMap, FaFlood, FaWater, FaDatabase, FaPython, FaGithub } from 'react-icons/fa';
import { IoEarth, IoDocument } from 'react-icons/io5';

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
    recommendation: "/recommendations/drsrs-recommendation.pdf",
    skills: ["QGIS", "ArcGIS", "Python", "R", "SQL", "Leaflet JS"],
    icon: <FaFlood className="text-cyan-500" />
  },
  {
    title: "GIS Intern – Busia County Government",
    company: "Department of Water, Environment, Natural Resources & Climate Change, Busia",
    date: "Feb – May 2023",
    description: `
      Supported the GIS Unit in mapping water resources, digitizing maps, and managing geospatial data for county water projects. 
      Worked with ArcGIS, QGIS, and remote sensing for environmental and climate change monitoring. 
      Demonstrated strong problem-solving skills and attention to detail in preparing map layouts and geodatabases.
    `,
    recommendation: "/recommendations/COVER LETTER.pdf",
    skills: ["ArcGIS", "QGIS", "Remote Sensing", "Data Digitization", "Geodatabases"],
    icon: <FaWater className="text-blue-500" />
  }
];

export default function Experience() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My hands-on experience in geospatial analysis and GIS technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="p-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
              
              <div className="p-8">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-4 rounded-xl mr-6">
                    <div className="text-3xl">
                      {exp.icon}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <span className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {exp.date}
                      </span>
                    </div>
                    
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                        <FaDatabase className="mr-2 text-blue-500" /> Key Technologies & Skills:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <a
                      href={exp.recommendation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center text-blue-600 font-medium group"
                    >
                      <IoDocument className="mr-2 text-lg" />
                      <span className="border-b border-transparent group-hover:border-blue-600 transition-all">
                        View Recommendation Letter
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/yourprofile" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
          >
            <FaGithub className="mr-2 text-xl" />
            Explore More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}