import { MapPin } from "lucide-react";
import React from "react";

const PanelMemberTemplate = (item) => {
  return (
    <div className="flex flex-col items-center px-12">
      {/* image  */}
      <div
        className="w-[92vw] max-w-7xl h-[58vh] rounded-2xl text-center flex justify-center items-center "
        style={{
          backgroundImage: `url(${item.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute mt-36">
        <img
          src={item.image}
          alt={item.name}
          className="w-68 h-68 object-cover rounded-full bg-gray-100"
        />
      </div>
      <div className="relative mt-28 flex flex-col items-center">
        <h1 className="text-3xl font-semibold">
          {item.name}
          </h1>
        <p className="text-xl font-gray-800">
          {item.about}</p>
        <p className="text-green-400 text-lg">{item.from}</p>
      </div>
      <div className="w-3/2 my-8 mx-10 mb-24">
        <p className="text-lg leading-[28px] text-center">{item.desc}</p>
      </div>
    </div>
  );
};

export default PanelMemberTemplate;
