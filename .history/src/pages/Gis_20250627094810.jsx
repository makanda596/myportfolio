import React, { useState } from 'react';
import { Gisprojects } from '../assets/Gisprojects.js';

const Gis = () => {
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = Gisprojects.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Open modal for project
  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  // Close modal
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // Show next image in modal
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      (prev + 1) % selectedProject.images.length
    );
  };

  // Show previous image in modal
  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      (prev - 1 + selectedProject.images.length) % selectedProject.images.length
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
                onClick={() => openModal(item)}
                className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid grid-cols-3 gap-1">
                  {item.images?.slice(0, 3).map((imgSrc, i) => (
                    <img
                      key={i}
                      src={imgSrc}
                      alt={`${item.name} image ${i + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  ))}
                </div>
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
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-lg shadow-lg p-4"
              onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-700 hover:text-black text-2xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>

              <h3 className="text-2xl font-bold mb-4 text-teal-600">
                {selectedProject.name}
              </h3>

              {/* Image display */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={prevImage}
                  className="text-teal-600 hover:text-teal-800 disabled:text-gray-400"
                  aria-label="Previous image"
                >
                  &#8592;
                </button>

                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.name} image ${currentImageIndex + 1}`}
                  className="max-h-[400px] object-contain rounded-md"
                />

                <button
                  onClick={nextImage}
                  className="text-teal-600 hover:text-teal-800 disabled:text-gray-400"
                  aria-label="Next image"
                >
                  &#8594;
                </button>
              </div>

              {/* Image thumbnails */}
              <div className="flex space-x-2 mt-4 overflow-x-auto">
                {selectedProject.images.map((imgSrc, i) => (
                  <img
                    key={i}
                    src={imgSrc}
                    alt={`${selectedProject.name} thumbnail ${i + 1}`}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-20 h-20 object-cover rounded cursor-pointer border-4 ${i === currentImageIndex ? "border-teal-600" : "border-transparent"
                      }`}
                  />
                ))}
              </div>

              <p className="mt-4 text-gray-700">{selectedProject.desc}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gis;
