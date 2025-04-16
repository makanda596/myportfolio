import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const frontendProjects = [
  {
    name: 'Gessamu Student Portal',
    description: 'Web portal for Moi University GESSAMU students to register, access trainings, and resources.',
    github: 'https://github.com/yourusername/gessamu-portal',
    link: 'https://gessamuportal.onrender.com/',
  },
  {
    name: 'Photography Website',
    description: 'Professional photography website with sections for events, gallery, and videos.',
    github: 'https://github.com/yourusername/photography-website',
    link: 'https://photoclient.vercel.app/',
  },
  {
    name: 'Glitch Lifestyle',
    description: 'Homepage with client-focused video and image animations.',
    github: 'https://github.com/yourusername/glitch-lifestyle',
    link: 'https://glitchlifestyle.vercel.app/',
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
