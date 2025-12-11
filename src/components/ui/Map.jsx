import React from "react";
import { motion } from "framer-motion";

const locations = [
  {
    name: "City of Arts and Sciences",
    style: "top-[60%] left-[70%]",
  },
  {
    name: "Valencia Cathedral",
    style: "top-[30%] left-[40%]",
  },
  {
    name: "Oceanogràfic",
    style: "top-[65%] left-[72%]",
  },
  {
    name: "La Lonja de la Seda",
    style: "top-[35%] left-[45%]",
  },
];

export default function Map() {
  return (
    <section className="bg-white text-gray-800 p-6 md:p-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Valencia, Spain
          </h2>
          <p className="mb-4">
            Spain’s third-largest city blends Gothic charm with futuristic innovation. With
            mild October weather (17°C–26°C / 63°F–79°F), minimal rain, and rich culture,
            Valencia is the perfect venue for Mediclave.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Fallas Festival preparations</li>
            <li>Halloween at Oceanogràfic and Bioparc</li>
            <li>Art exhibitions and wine region nearby</li>
            <li>Affordable off-season travel</li>
          </ul>
        </div>

        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
          <img
            src="/valencia-map-placeholder.jpg"
            alt="Map of Valencia"
            className="w-full h-full object-cover"
          />
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              className={`absolute ${loc.style} w-4 h-4 bg-green-500 rounded-full shadow-lg`}
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              title={loc.name}
            />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-green-600 mb-4">
          Landmarks include:
        </h3>
        <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
          {locations.map((loc, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>{loc.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}