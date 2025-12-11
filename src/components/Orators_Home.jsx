import React from 'react';

import OraterCard from './ui/OraterCard';
import { in_about_orators_data as orators_data } from '../assets/orators';
import { Link } from 'react-router-dom';

const Orators_Home = () => {
  return (
    <div className="flex flex-col px-4 md:px-12 py-8 min-h-[85vh] items-center justify-center my-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center">
        FoodMeet - Orators
      </h1>
      <p className="w-full md:w-2/3 my-2 text-center text-sm md:text-base text-slate-600">
        Renowned experts from across the globe sharing insights and leading the conversation at FoodMeet.
      </p>

      <div className="flex flex-col md:flex-row flex-wrap gap-6 items-center justify-center mt-4">
        {orators_data.map((item, idx) => (
          <OraterCard
            key={idx}
            name={item.name}
            about={item.about}
            from={item.from}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>

      <Link to="/foodmeet-conference-orators">
        <button className="bg-one px-10 md:px-20 py-2 rounded-full mt-6 text-sm md:text-base">
          View All
        </button>
      </Link>
    </div>
  );
};

export default Orators_Home;