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

  const truncate = (str, n) =>
    str.length > n ? str.slice(0, n) + '...' : str;

  return (
    <>
    <Navbar/>
    <section className="min-h-screen bg-gray-50 py-20 px-2">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-xl font-bold text-center text-teal-700 mb-2">
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
                className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300"
                title={`Click to view images of ${item.name}`}
                onClick={() => openModal(item, 0)}
              >
                {(item.images?.length > 0) && (
                  <img
                    src={item.images[0]}
                    alt={`${item.name} main image`}
                    className="w-full h-48 object-cover"
                  />
                )}

                {(item.images?.length > 1) && (
                  <div className="flex gap-2 overflow-x-auto px-3 py-2 bg-gray-100">
                    {item.images.slice(1).map((imgSrc, i) => (
                      <img
                        key={i}
                        src={imgSrc}
                        alt={`Thumbnail ${i + 1}`}
                        className="w-16 h-16 object-cover rounded-lg border border-gray-200 hover:border-teal-500"
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(item, i + 1);
                        }}
                      />
                    ))}
                  </div>
                )}

                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {truncate(item.desc, 120)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            No GIS projects match your search.
          </p>
        )}

        {/* Modal */}
        {selectedProject && (() => {
          const images = selectedProject.images || [];
          return (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
              onClick={closeModal}
            >
              <div
                className="relative w-full max-w-3xl bg-white rounded-xl shadow-xl p-4 md:p-6 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-4 text-gray-600 hover:text-black text-3xl font-bold"
                  aria-label="Close modal"
                >
                  &times;
                </button>

                <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4 text-center">
                  {selectedProject.name}
                </h3>

                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="flex items-center justify-center gap-4 w-full">
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
                      className="max-h-[250px] w-auto object-contain rounded-xl shadow"
                    />

                    <button
                      onClick={nextImage}
                      disabled={images.length <= 1}
                      className="text-3xl font-bold text-teal-600 hover:text-teal-800 disabled:text-gray-400"
                    >
                      &#8594;
                    </button>
                  </div>

                  <div className="flex gap-2 mt-3 overflow-x-auto">
                    {images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${i === currentImageIndex
                            ? 'border-teal-600'
                            : 'border-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-gray-700 text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {selectedProject.desc}
                </p>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Gis;
