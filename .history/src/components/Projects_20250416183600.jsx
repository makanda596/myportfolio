import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import compactChefImg from "../assets/compactChefImg.PNG";
import uniImg from "../assets/uniImg.PNG";
import glitchImg from "../assets/glitchImg.PNG";
import GImg from "../assets/GImg.PNG";

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
    name: "GESSAMU Portal",
    description:
      "A full-stack system for Geography & Environmental Students at Moi University. Offers training programs, resource sharing, task submissions, alumni contributions, and more.",
    github: "https://github.com/makanda596/gessamusystem",
    link: "https://gessamuportal.onrender.com/",
    image: GImg,

  },
  {
    name: "UniTrade Hub",
    description:
      "A platform connecting Moi University students and sellers to buy and sell goods easily within the campus environment.",
    github: "https://github.com/makanda596/UniTradeHub",
    link: "https://unitradehub-kesf.onrender.com/",
    image: uniImg,

  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-yellow-300">Projects</h2>

        {/* Frontend */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-300">Frontend Projects</h3>
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

        {/* Backend */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-purple-300">Backend Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
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
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
