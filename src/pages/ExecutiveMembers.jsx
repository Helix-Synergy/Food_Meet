import React from "react";
import { panel_members_data} from "../assets/panel_members";
import PanelMemberCard from "../components/ui/PanelMemberCard";
import { Link } from "react-router-dom";
import { banner_style } from "../assets/styles";

const ExecutiveMembers = () => {
  return (
    <div className="w-full 2xl:max-w-[1280px] mx-auto justify-center items-center text-center">
      {/* Banner Section */}
      <div className={`${banner_style} executive-panel-banner`}>
        <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4 max-w-screen-lg mx-auto leading-tight">
          FoodMeet – Executive Panel Members
        </h1>
      </div>

      {/* Introduction Section */}
      <div className="w-full flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 my-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Meet Our Esteemed Executive Panel
        </h1>
        <p className="w-full sm:w-11/12 md:w-2/3 text-sm sm:text-base text-slate-600">
          Our executive panel comprises visionary leaders and industry pioneers
          who bring deep expertise and strategic insight to guide our mission in
          advancing global health innovation.
        </p>
      </div>

      {/* Panel Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 w-full min-w-7xl px-2 sm:px-8 md:px-12 lg:px-24 h-full overflow-x-hidden md:mb-12 mb-4">
        {panel_members_data.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className="hover:scale-95 transition-transform"
          >
            <PanelMemberCard
              name={item.name}
              about={item.about}
              from={item.from}
              image={item.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExecutiveMembers;
