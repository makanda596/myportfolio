import React, { useState } from 'react';
import { Gisprojects } from '../assets/Gisprojects.js';

const Gis = () => {
  const [search, setSearch] = useState("");

  const filteredProjects = Gisprojects.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

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
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                {item.image && (
                  <img
                    src={item.image2}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
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
      </div>
    </section>
  );
};

export default Gis;
