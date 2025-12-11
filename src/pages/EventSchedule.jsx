import { div } from "framer-motion/client";
import React from "react";
import EventSchedule from "../components/EventSchedule";
// import EventSchedulePDF from "../components/EventSchedulePdf";
import { banner_style } from "../assets/styles";


const Schedule = () => {
  return (
    <div>
      <section className="w-full 2xl:max-w-[1280px] mx-auto justify-center items-center text-center">
        <div className={`${banner_style} schedule-banner w-full`}>
          <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4">
            FoodMeet - 2025
          </h1>
        </div>
        <EventSchedule height={"auto"} name={"Download"} link={'/Food-meet-Schedule.pdf'}/>
      </section>
    </div>
  );
};

export default Schedule;
