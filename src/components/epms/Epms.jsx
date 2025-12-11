import React from 'react';
import { panel_members_about as panel_members } from '../../assets/panel_members';
import PanelMemberCard from '../ui/PanelMemberCard';
 
const Epms = () => {
  return (
    <div className="flex flex-col px-4 md:px-12 py-8 min-h-[90vh] items-center justify-center my-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center">
        Public Health - EPMs
      </h1>
      <p className="w-full md:w-2/3 my-2 text-center text-sm md:text-base text-slate-600">
        Renowned experts from across the globe sharing insights and leading the conversation at Public Health.
      </p>
 
      <div className="flex flex-col md:flex-row flex-wrap gap-6 items-center justify-center mt-4">
        {panel_members.slice(0, 4).map((item, idx) => (
          <PanelMemberCard
            key={idx}
            name={item.name}
            about={item.about}
            from={item.from}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
 
      <a href="/panel">
        <button className="bg-one text-white px-10 md:px-20 py-2 rounded-full mt-6 text-sm md:text-base">
          View All
        </button>
      </a>
    </div>
  );
};
 
export default Epms;