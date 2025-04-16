import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiRedis, SiExpress, SiLeaflet, SiQgis, SiArcgis } from 'react-icons/si';
import { MdSatelliteAlt } from 'react-icons/md';
import { motion } from 'framer-motion';

const Skills = () => {
  const frontend = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-300" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'Leaflet.js', icon: <SiLeaflet className="text-green-600" /> },
  ];

  const backend = [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
    { name: 'Redis', icon: <SiRedis className="text-red-500" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-400" /> },
  ];

  const geospatial = [
    { name: 'QGIS', icon: <SiQgis className="text-green-600" /> },
    { name: 'ArcGIS', icon: <SiArcgis className="text-blue-500" /> },
    { name: 'Remote Sensing', icon: <MdSatelliteAlt className="text-purple-400" /> },
    { name: 'Leaflet.js (GIS Maps)', icon: <SiLeaflet className="text-green-400" /> },
  ];

  return (
    <section id="skills" className="bg-gray-900 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-yellow-300">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Frontend */}
          <motion.div 
            className="bg-gray-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Frontend</h3>
            <ul className="grid grid-cols-2 gap-4">
              {frontend.map((skill, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div 
            className="bg-gray-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">Backend</h3>
            <ul className="grid grid-cols-2 gap-4">
              {backend.map((skill, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Geospatial */}
          <motion.div 
            className="bg-gray-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-300">Geospatial Engineering</h3>
            <ul className="grid grid-cols-2 gap-4">
              {geospatial.map((skill, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
