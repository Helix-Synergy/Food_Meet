import React from "react";
import { orators_data as orators } from "../assets/orators";
import OraterCard from "../components/ui/OraterCard";
import { Link } from "react-router-dom";
import { banner_style } from "../assets/styles";

const Orators = () => {
  return (
    <section className="w-full 2xl:max-w-[1280px] mx-auto justify-center items-center text-center">
      {/* Banner Section */}
      <div className={`${banner_style} orators-banner w-full`}>
        <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4">
          FoodMeet - Orators
        </h1>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col px-4 md:px-12 py-4 items-center justify-center mt-2 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Meet Our Distinguished Orators
        </h2>
        <p className="w-full md:w-2/3 text-sm md:text-base text-slate-600">
          Renowned experts from across the globe sharing insights and leading
          the conversation at Mediclave.
        </p>
      </div>

      {/* Orator Cards Grid */}
      <div className="grid grid-cols-1 px-2 sm:px-8 md:px-12 lg:px-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 mb-12 w-full">
        {orators?.length > 0 ? (
          orators.map((item, idx) => (
            <Link
              to={item.link}
              key={idx}
              className="hover:scale-90 transition-transform"
            >
              <OraterCard
                name={item.name}
                about={item.about}
                from={item.from}
                image={item.image}
              />
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No orators available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export default Orators;
