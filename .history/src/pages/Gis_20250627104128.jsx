import React, { useState } from 'react';
import { Gisprojects } from '../assets/Gisprojects.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Gis = () => {
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = Gisprojects.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const openModal = (project, imageIndex = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    const images = selectedProject?.images || [];
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = selectedProject?.images || [];
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const truncate = (str, n) =>
    str.length > n ? str.slice(0, n) + '...' : str;

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-50 py-16 px-2">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold sm:mt-14 text-center text-teal-700 mb-2">GIS Projects</h2>

          <div className="flex justify-center mb-4">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Search by project..."
              className="w-full max-w-md p-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow hover:shadow-lg border border-gray-200 overflow-hidden transition duration-300 cursor-pointer"
                  onClick={() => openModal(item, 0)}
                  title={`Click to view ${item.name}`}
                >
                  {item.images?.[0] && (
                    <img
                      src={item.images[0]}
                      alt={`${item.name} main`}
                      className="w-full h-48 object-contain"
                    />
                  )}

                  {item.images?.length > 1 && (
                    <div className="flex overflow-x-auto px-6 py-1 bg-gray-100">
                      {item.images.slice(1).map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Thumb ${i + 1}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(item, i + 1);
                          }}
                          className="w-12 h-12 object-contain rounded-md mr-2 border hover:border-teal-500"
                        />
                      ))}
                    </div>
                  )}

                  <div className="p-1">
                    <h3 className="text-lg font-semibold text-teal-700 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600">{truncate(item.desc, 200)}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">No GIS projects match your search.</p>
          )}

          {selectedProject && (() => {
            const images = selectedProject.images || [];
            return (
              <div
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-2"
                onClick={closeModal}
              >
                <div
                  className="bg-white rounded-xl shadow-lg p-4 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={closeModal}
                    className="absolute top-3 right-4 text-gray-600 hover:text-black text-3xl font-bold"
                    aria-label="Close"
                  >
                    &times;
                  </button>

                  <p className="text-xl sm:text-xl font-semibold text-center text-teal-700 mb-2">
                    {selectedProject.name}
                  </p>

                  <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={prevImage}
                        disabled={images.length <= 1}
                        className="text-3xl font-bold text-teal-600 hover:text-teal-800 disabled:text-gray-400"
                      >
                        &#8592;
                      </button>

                      <img
                        src={images[currentImageIndex]}
                        alt={`Image ${currentImageIndex + 1}`}
                        className="max-h-[250px] sm:max-h-[350px] w-auto object-contain rounded-md shadow"
                      />

                      <button
                        onClick={nextImage}
                        disabled={images.length <= 1}
                        className="text-3xl font-bold text-teal-600 hover:text-teal-800 disabled:text-gray-400"
                      >
                        &#8594;
                      </button>
                    </div>

                    <div className="flex gap-2 overflow-x-auto px-2">
                      {images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Thumb ${i + 1}`}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`w-12 h-12 object-cover rounded cursor-pointer border-2 ${i === currentImageIndex
                            ? 'border-teal-600'
                            : 'border-gray-300'
                            }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-2 text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {selectedProject.desc}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gis;
