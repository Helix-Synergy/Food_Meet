import React from 'react';
import { orators_data as orators } from '../../assets/orators';
import OraterCard from '../ui/OraterCard';

const Orators = () => {
  return (
    <div className="flex flex-col px-4 md:px-12 py-8 min-h-[90vh] items-center justify-center my-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center">
        FoodMeet - Orators
      </h1>
      <p className="w-full md:w-2/3 my-2 text-center text-sm md:text-base text-slate-600">
        Renowned experts from across the globe sharing insights and leading the conversation at FoodMeet.
      </p>

      <div className="flex flex-col md:flex-row flex-wrap gap-6 items-center justify-center mt-4">
        {orators.map((item, idx) => (
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

      <a href="/orators">
        <button className="bg-one px-10 md:px-20 py-2 rounded-full mt-6 text-sm md:text-base">
          View All
        </button>
      </a>
    </div>
  );
};

export default Orators;

