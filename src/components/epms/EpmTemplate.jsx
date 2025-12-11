import React from "react";
import { useParams } from "react-router-dom";
import {
  ana_data,
  annette_data,
  craig_data,
  francesco_data,
  marly_data,
  shlomo_data,
} from "../../assets/orators";

const epmsMap = {
  craig: craig_data,
  ana: ana_data,
  shlomo: shlomo_data,
  // "zacharoula": andreopoulou_data,
  annette: annette_data,
  marly: marly_data,
  francesco: francesco_data,
};
const EpmTemplate = () => {
  const { id } = useParams();
  const item = epmsMap[id];

  if (!item) {
    return (
      <h2 className="text-center mt-10 text-2xl text-red-600">
        404 - Orator not found
      </h2>
    );
  }

  return (
    <div className="container mx-auto flex flex-col items-center px-2 md:px-16">
      <div className="w-[100%] mx-auto h-[58vh] text-center flex flex-col justify-center items-center bg-gray-900 mb-12 rounded-3xl">
        <img
          src={item.banner}
          alt={item.name}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      {/* profile image */}
      <div className="relative z-10 -mt-44">
        <img
          src={item.image}
          alt={item.name}
          className="max-w-64 max-h-64 object-cover rounded-full shadow-[0_10px_30px_0_rgb(115,148,107)] border-0 border-one bg-white"
          loading="lazy"
        />
      </div>

      {/* name and intro */}
      <div className="relative mt-4 flex flex-col items-center text-center">
        <h1 className="text-4xl font-semibold">{item.name}</h1>
        <p className="text-one-400 font-semibold text-lg">{item.from}</p>
        {/* <p className='text-xl text-gray-800'>{item.about}</p> */}
      </div>

      {/* full description */}
      <div className="px-2 md:px-24 my-4 md:mb-16 mb-12">
        <p className="text-lg leading-[28px] text-center">{item.about}</p>
      </div>
    </div>
  );
};

export default EpmTemplate;
