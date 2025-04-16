import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import compactChefImg from "../assets/projects/compactchef.png";
import glitchImg from "../assets/projects/glitch.png";

const frontendProjects = [
    {
        name: 'Compact Chef Events',
        description: 'A catering and events website for booking chefs, exploring menus, and services.',
        github: 'https://github.com/makanda596/compactchef',
        link: 'https://compactchef.vercel.app/',
        image: compactChefImg,
    },
    {
        name: 'Glitch Lifestyle Photography',
        description: 'Creative photography portfolio with categories for outdoor, indoor, couples, and event shoots.',
        github: 'https://github.com/makanda596/glitchnov',
        link: 'https://glitchlifestile.vercel.app/',
        image: glitchImg,
    },
    {
        name: 'Tattoo & Salon Website',
        description: 'A vibrant salon and tattoo booking website with service listings and a modern interface.',
        github: 'https://github.com/makanda596/rass',
        link: 'https://glitchlifestile.vercel.app/',
        image: tattooImg,
    },
];


const backendProjects = [
  {
    name: 'Apartment Management System',
    description: 'Full-stack system to manage tenants and property details.',
    github: 'https://github.com/yourusername/apartment-management',
    link: 'https://apartmenthub.vercel.app/',
  },
  {
    name: 'E-Commerce Website for Salon Services',
    description: 'Handles booking, payment, and service catalog for crocheting, salon, and nails.',
    github: 'https://github.com/yourusername/salon-ecommerce',
    link: 'https://salonshop.vercel.app/',
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-yellow-300">Projects</h2>

        {/* Frontend */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-purple-300">Frontend Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {frontendProjects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-400 hover:text-blue-600">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-green-400 hover:text-green-600">
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-purple-300">Backend Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {backendProjects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-400 hover:text-blue-600">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-green-400 hover:text-green-600">
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
