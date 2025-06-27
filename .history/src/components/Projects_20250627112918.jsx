import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import compactChefImg from "../assets/compactChefImg.PNG";
import uniImg from "../assets/uniImg.PNG";
import glitchImg from "../assets/glitchImg.PNG";
import GImg from "../assets/GImg.PNG";

const Gisprojects = [
  {
    name: "LULC Analysis of Kesses Sub-County – 2020",
    desc: "This project analyzes the 2020 Land Use and Land Cover (LULC) of Kesses Sub-County, Uasin Gishu County, Kenya. It shows agriculture as the dominant land use, with built-up areas growing in the north and south, forest cover in the south, and minimal but important water bodies. The analysis was done using ArcGIS and visualized with charts in Excel. It can support planners, environmentalists, researchers, and policy makers working toward sustainable land management and development.",
    images: [
      "https://res.cloudinary.com/dch4echnq/image/upload/v1751006448/finalkesses2020_qjoeqn.jpg",
    ],
  },
  {
    name: "Agriculture Land Use",
    desc: "This project maps the 2024 water turbidity levels across Homa Bay County, Kenya, using Sentinel-2 satellite imagery. High turbidity (in red) is concentrated in the northern parts of the county, especially along the lake edge, likely due to sediment runoff, human activity, and surface erosion. Low turbidity areas (in green) dominate the deeper lake zones and southern regions. The analysis was performed using ArcMap, with visualizations done in Google Earth Pro. People who can benefit from this map include environmental agencies, planners, fisheries stakeholders, NGOs, and researchers in water resource management.",
    images: [
      "https://res.cloudinary.com/dch4echnq/image/upload/v1751007271/water_shvcwl.jpg",
    ],
  },
];

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
  },
];

const backendProjects = [
  {
    name: "UniTrade Hub",
    description: "Unitrade Hub is a student-driven platform designed to help Moi University comrades easily buy and sell goods within the campus. It fosters a connected, trusted marketplace that empowers students and local sellers to trade efficiently and safely.",
    github: "https://github.com/makanda596/UniTradeHub",
    link: "https://unitradehubs.onrender.com",
    image: uniImg,
  },
  {
    name: "GESSAMU Portal",
    description:
      "A full-stack system for Geography & Environmental Students at Moi University. Offers training programs, resource sharing, task submissions, alumni contributions, and more.",
    github: "https://github.com/makanda596/gessamusystem",
    link: "https://gessamu.onrender.com",
    image: GImg,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-4 px-4 bg-white text-white" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-2 text-center text-blue-600">Projects</h2>

        <div className="mt-6 mb-10">
          <h3 className="text-xl font-semibold mb-4 text-green-500">GIS & Remote Sensing Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Gisprojects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <img src={project.images[0]} alt={project.name} className="w-full h-40 object-cover rounded-md mb-4" />
                <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
                <p className="text-sm text-gray-300 mb-2">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-green-500">Full-stack Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {backendProjects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <img src={project.image} alt={project.name} className="w-20 h-20 rounded-md object-cover" />
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

          <h3 className="text-xl font-semibold mt-10 mb-4 text-green-500">Frontend Projects</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {frontendProjects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <img src={project.image} alt={project.name} className="w-20 h-20 rounded-md object-cover" />
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
