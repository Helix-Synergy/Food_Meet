import React from "react";
import { logo, socialLinks, WhatsAppIcon } from "../assets";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const nav_links = [
    { name: "About", link: "/about-world-foodmeet-conclave" },
    { name: "Executive Panel", link: "/executive-panel-members" },
    { name: "Tracks", link: "/global-foodmeet-summit-tracks" },
    { name: "Orators", link: "/foodmeet-conference-orators" },
    { name: "Schedule", link: "/international-foodmeet-event-schedule" },
    { name: "Venue", link: "/venue" },
    { name: "Event Partners", link: "/event-partners" },
    { name: "Contact", link: "/Contact" },
  ];

  return (
    <div className="flex flex-col md:flex-row md:justify-between bg-black px-6 md:px-12 py-10 text-white gap-12 md:gap-0 rounded-t-3xl">
      {/* Grid 1 */}
      <div className="w-full md:w-1/4 gap-4 flex flex-col items-center text-center">
        {/* <h1 className="text-slate-100 text-3xl">FoodMeet</h1> */}
        <div className="bg-white pt-4 rounded-xl shadow-md">
          <img
            src={logo}
            alt="FoodMeet Logo"
            className="h-32 md:h-56 rounded-lg"
          />
        </div>
        <p className="text-slate-200 text-sm px-4 md:px-8">
          Innovations in FoodMeet: Connecting the World Through Knowledge and Innovation
        </p>
      </div>

      {/* Grid 2 */}
      <div className="w-full md:w-1/4 flex flex-col items-center text-center md:text-left">
        <h1 className="text-one font-semibold text-3xl border-b border-slate-800">
          Quick Links
        </h1>
        <div className="flex flex-col mt-4 gap-1">
          {nav_links.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-row gap-1 justify-center md:justify-start items-center"
            >
              <ChevronRight />
              <Link to={item.link}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Grid 3 */}
      <div className="w-full md:w-1/5 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-one font-semibold text-3xl border-b border-slate-800 w-auto md:w-[16vw]">
          Social Media
        </h1>
        {socialLinks.map(({ id, name, url, icon }) => (
          <div
            key={id}
            className="flex flex-row items-center justify-center md:justify-start"
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
              className="text-one p-2 rounded-full bg-black text-md cursor-pointer flex flex-row items-center gap-2"
            >
              {icon}
              <p className="text-white">{name}</p>
            </a>
          </div>
        ))}
      </div>

      {/* Grid 4 */}
      <div className="w-full md:w-1/4 flex flex-col gap-4 items-center md:items-start text-center md:text-left">
        <h1 className="text-one font-semibold text-3xl border-b border-slate-800">
          Get In Touch
        </h1>
        <div className="flex flex-col gap-4 text-slate-300">
          {/* <div className="flex flex-row gap-2 items-center justify-center md:justify-start">
            <Phone size="18" />
            <p>+1757 656 7778</p>
          </div> */}
          <div className="flex flex-row gap-2 items-center justify-center md:justify-start">
            <WhatsAppIcon className="h-5 w-5 fill-slate-300" />
            <p>+1-305-239-8055</p>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center md:justify-start">
            <Mail size="18" />
            <p>hello@helixconferences.com</p>
          </div>
          <div className="flex flex-row gap-2 items-start md:justify-start px-4 md:px-0">
            <MapPin size="44" />
            <p>
              Helix Conferences LLC,
              <br />
               45573 Shepard Drive, Suit#101, <br/>Sterling,
              Virginia-20164, USA
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <a
            href="https://helixconferences.com/buy-a-ticket"
            className="bg-one px-12 py-2 rounded-full mt-1"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
