import React, { useState } from 'react';
import { Gisprojects } from '../assets/Gisprojects.js';

const Gis = () => {
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter projects by search (case-insensitive)
  const filteredProjects = Gisprojects.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Open modal for selected project and optionally set image index
  const openModal = (project, imageIndex = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
    document.body.style.overflow = 'hidden'; // disable background scroll
  };

  // Close modal
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // re-enable scroll
  };

  // Navigate modal images
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

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          GIS Projects
        </h2>

        <div className="flex justify-center mb-8">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search by category..."
            className="w-full max-w-md p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                title={`Click to view images of ${item.name}`}
                onClick={() => openModal(item, 0)}
              >
                {/* Main large image */}
                {(item.images && item.images.length > 0) && (
                  <img
                    src={item.images[0]}
                    alt={`${item.name} main image`}
                    className="w-full h-48 object-cover"
                  />
                )}

                {/* Thumbnails below */}
                {(item.images && item.images.length > 1) && (
                  <div className="flex space-x-1 overflow-x-auto p-2">
                    {item.images.slice(1).map((imgSrc, i) => (
                      <img
                        key={i}
                        src={imgSrc}
                        alt={`${item.name} thumbnail ${i + 2}`}
                        className="w-20 h-20 object-cover rounded cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation(); // prevent card click
                          openModal(item, i + 1);
                        }}
                      />
                    ))}
                  </div>
                )}

                <div className="p-4">
                  <h3 className="text-xl font-semibold text-teal-600 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">
            No GIS projects match your search.
          </p>
        )}

        {/* Modal */}
        {selectedProject && (() => {
          const images = selectedProject.images || [];
          return (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center p-4 z-50"
              onClick={closeModal}
            >
              <div
                className="relative max-w-4xl w-full bg-white rounded-lg shadow-lg p-4"
                onClick={(e) => e.stopPropagation()} // prevent modal close on inside click
              >
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-gray-700 hover:text-black text-3xl font-bold"
                  aria-label="Close modal"
                >
                  &times;
                </button>

                <h3 className="text-2xl font-bold mb-4 text-teal-600">
                  {selectedProject.name}
                </h3>

                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                  <button
                    onClick={prevImage}
                    disabled={images.length <= 1}
                    className="text-teal-600 hover:text-teal-800 disabled:text-gray-400 text-3xl font-bold"
                    aria-label="Previous image"
                  >
                    &#8592;
                  </button>

                  <img
                    src={images[currentImageIndex]}
                    alt={`${selectedProject.name} image ${currentImageIndex + 1}`}
                    className="max-h-[400px] object-contain rounded-md"
                  />

                  <button
                    onClick={nextImage}
                    disabled={images.length <= 1}
                    className="text-teal-600 hover:text-teal-800 disabled:text-gray-400 text-3xl font-bold"
                    aria-label="Next image"
                  >
                    &#8594;
                  </button>
                </div>

                <div className="flex space-x-2 mt-4 overflow-x-auto">
                  {images.map((imgSrc, i) => (
                    <img
                      key={i}
                      src={imgSrc}
                      alt={`${selectedProject.name} thumbnail ${i + 1}`}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`w-20 h-20 object-cover rounded cursor-pointer border-4 ${
                        i === currentImageIndex
                          ? 'border-teal-600'
                          : 'border-transparent'
                      }`}
                    />
                  ))}
                </div>

                <p className="mt-4 text-gray-700">{selectedProject.desc}</p>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default Gis;
