
import React from 'react';
import { tracks } from '../assets';
import { Link, useNavigate } from 'react-router-dom';

const TracksSection = () => {
  const navigate = useNavigate();

  return (
    <div className="py-6 px-4 md:py-12 md:px-6 bg-one/20 h-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
        FoodMeet - Tracks
      </h2>

      {/* Track Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {tracks.map(({ name, icon }, idx) => (
          <div
            key={idx}
            className="flex flex-row items-center gap-4 px-4 py-4
                       rounded-lg shadow hover:shadow-lg
                       hover:border-one transition-all
                       bg-white border border-transparent
                       cursor-pointer"
          >
            <img
              src={icon}
              alt="Icon"
              className="h-8 w-8 object-contain shrink-0"
            />
            <p className="text-sm font-medium text-gray-800">
              {name}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="mt-10 md:mt-10 flex flex-col md:flex-row gap-4 justify-center">
        <Link to="/global-foodmeet-summit-tracks">
          <button    aria-label="ReadMore Button"className="bg-one text-white px-6 md:px-4 py-2 rounded-full text-sm md:text-base w-full md:w-auto text-center">
            Read More
          </button>
        </Link>

        <Link to="/abstract-submission">
          <button    aria-label="Submit Abstract Button" className="border bg-black text-slate-100 px-6 md:px-4 py-2 rounded-full text-sm md:text-base w-full md:w-auto text-center">
            Submit Abstract
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TracksSection;


