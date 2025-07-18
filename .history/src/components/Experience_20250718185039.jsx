// Experience.tsx
import React from 'react';

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Compact Chef Events",
    date: "Jan 2024 – April 2024",
    description: "Worked on building interactive web pages and enhancing user experience using React and Tailwind CSS.",
    recommendation: "compact-chef.pdf", // or a scanned image
  },
  {
    title: "GIS Intern",
    company: "Merlik Foundation",
    date: "May 2023 – August 2023",
    description: "Handled spatial data analysis and mapping tasks using ArcGIS and Google Earth Engine.",
    recommendation: "/recommendations/COVER LETTER.pdf", 
  },
];

export default function Experience() {
  return (
    <section className="px-4 py-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white shadow rounded-xl p-5">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company} • {exp.date}</p>
            <p className="mt-2">{exp.description}</p>
            <a
              href={exp.recommendation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 underline"
            >
              View Recommendation
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
