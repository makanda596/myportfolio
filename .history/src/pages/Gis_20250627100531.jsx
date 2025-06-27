import React, { useState } from 'react';
import { Gisprojects } from '../assets/Gisprojects.js';

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
    if (!selectedProject) return;
    const images = selectedProject.images || [];
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    const images = selectedProject.images || [];
    setCurrentImageIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  // Helper to truncate description preview on cards
  const truncate = (str, n) =>
    str.length > n ? str.slice(0, n) + '...' : str;

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-teal-700 mb-8 tracking-wide">
          GIS Projects
        </h2>

        <div className="flex justify-center mb-10">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search by category..."
            className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
          />
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden border border-transparent
                           hover:shadow-2xl hover:border-teal-400 transform hover:scale-[1.03] transition duration-300 ease-in-out"
                title={`Click to view images of ${item.name}`}
                onClick={() => openModal(item, 0)}
              >
                {(item.images && item.images.length > 0) && (
                  <img
                    src={item.images[0]}
                    alt={`${item.name} main image`}
                    className="w-full h-56 object-cover rounded-t-xl border-b border-gray-200"
                  />
                )}

                {(item.images && item.images.length > 1) && (
                  <div className="flex space-x-3 overflow-x-auto p-3 bg-gray-50 border-t border-gray-200">
                    {item.images.slice(1).map((imgSrc, i) => (
                      <img
                        key={i}
                        src={imgSrc}
                        alt={`${item.name} thumbnail ${i + 2}`}
                        className="w-24 h-24 object-cover rounded-lg cursor-pointer border-2 border-transparent
                                   hover:border-teal-500 hover:scale-105 transition-transform duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(item, i + 1);
                        }}
                      />
                    ))}
                  </div>
                )}

                <div className="p-5">
                  <h3 className="text-2xl font-semibold text-teal-700 mb-3 tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {truncate(item.desc, 150)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10 text-lg">
            No GIS projects match your search.
          </p>
        )}

        {/* Modal */}
        {selectedProject && (() => {
          const images = selectedProject.images || [];
          return (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-4 z-50"
              onClick={closeModal}
            >
              <div
                className="relative max-w-5xl w-full bg-white rounded-2xl shadow-2xl p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-700 hover:text-black text-4xl font-extrabold leading-none"
                  aria-label="Close modal"
                >
                  &times;
                </button>

                <h3 className="text-3xl font-bold mb-6 text-teal-700 tracking-wide">
                  {selectedProject.name}
                </h3>

                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0 max-w-xl mx-auto">
                  <button
                    onClick={prevImage}
                    disabled={images.length <= 1}
                    className="text-teal-600 hover:text-teal-900 disabled:text-gray-400 text-4xl font-bold select-none"
                    aria-label="Previous image"
                  >
                    &#8592;
                  </button>

                  <img
                    src={images[currentImageIndex]}
                    alt={`${selectedProject.name} image ${currentImageIndex + 1}`}
                    className="max-h-[300px] max-w-full object-contain rounded-xl shadow-lg"
                  />

                  <button
                    onClick={nextImage}
                    disabled={images.length <= 1}
                    className="text-teal-600 hover:text-teal-900 disabled:text-gray-400 text-4xl font-bold select-none"
                    aria-label="Next image"
                  >
                    &#8594;
                  </button>
                </div>

                <div className="flex space-x-4 mt-6 overflow-x-auto">
                  {images.map((imgSrc, i) => (
                    <img
                      key={i}
                      src={imgSrc}
                      alt={`${selectedProject.name} thumbnail ${i + 1}`}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-4 transition 
                                  ${i === currentImageIndex
                          ? 'border-teal-600 shadow-lg'
                          : 'border-transparent hover:border-teal-400'
                        }`}
                    />
                  ))}
                </div>

                <p className="mt-6 text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                  {selectedProject.desc}
                </p>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default Gis;
