// Experience.tsx
import React from 'react';

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
    recommendation: "/recommendations/drsrs-recommendation.pdf"
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
    recommendation: "/recommendations/busia-recommendation.pdf"
  }
];


export default function Experience() {
  return (
<section className="px-4 py-8 max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold mb-6">Experience</h2>
  <div className="space-y-6">
    {experiences.map((exp, idx) => (
      <div key={idx} className="bg-white shadow-md rounded-xl p-5">
        <h3 className="text-xl font-semibold">{exp.title}</h3>
        <p className="text-gray-600">{exp.company} • {exp.date}</p>
        <p className="mt-2 text-gray-800 whitespace-pre-line">{exp.description}</p>
        <a
          href={exp.recommendation}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-600 underline font-medium"
        >
          View Recommendation Letter
        </a>
      </div>
    ))}
  </div>
</section>

  );
}
