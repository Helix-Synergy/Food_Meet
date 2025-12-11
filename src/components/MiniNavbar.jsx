import React from "react";
import {
  ArrowDown,
  ChevronDown,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";

const MiniNavbar = () => {
  const social_media = [
    {
      icon: <Instagram color="white" size="20"/>,
      name: "Instagram",
    },
    {
      icon: <Linkedin color="white" size="20"/>,
      name: "LinkedIn",
    },
    {
      icon: <Facebook color="white" size="20"/>,
      name: "Facebook",
    },
    {
      icon: <Youtube color="white" size="20"/>,
      name: "Youtube",
    },
  ];
  return (
    <div className="flex flex-row px-8 py-2 justify-between items-center bg-accent text-slate-100 sticky">
      <div className="flex flex-row gap-10 items-center">
        <div className="flex fles-row gap-2 items-center">
          <Phone size="18"/>
          <p>+1757 656 7778</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Mail size="18"/>
          <p>hello@helixconferences.com</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-10">
      <div className="flex flex-row items-center gap-1 justify-center">
        <Globe size={18}/>
        <p>Languages</p>
        {/* <ChevronDown size={20}/> */}
      </div>

        <div className="flex flex-row gap-4 items-center">
          <p>Follow Us:</p>
        {social_media.map((item, idx) => (
          <div key={idx} alt={item.name} className="">
            {item.icon}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default MiniNavbar;
