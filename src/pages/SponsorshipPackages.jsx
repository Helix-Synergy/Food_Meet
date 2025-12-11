import { div } from "framer-motion/client";
import { Check, Sparkle, Sparkles, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { silver, gold, platinum, exhibitor } from "../assets";
import { banner_style } from "../assets/styles";

const sponsorshipPackages = [
  {
    type: "Silver Sponsor",
    benefits: [
      "Sponsor 3 Poster Presentation Awards",
      "2 complimentary registrations",
      "1 workshop slot (AV & catering included)",
      "1 exhibit booth (3x3 sqm)",
      "Logo on sponsorship page",
      "A4 color ad (excluding cover pages)",
      "1 insert in delegate bags",
      "Priority for extra sponsorships",
      "Online promotion on all social platforms",
      "10% waiver for next year's sponsorship",
    ],
    badge: silver,
  },

  {
    type: "Gold Sponsor",
    benefits: [
      "Sponsor 5 Poster Presentation Awards",
      "2 corporate workshop slots (AV included)",
      "1 exhibit booth (3x3 sqm)",
      "4 complimentary registrations",
      "Logo on homepage and sponsorship page",
      "A4 color ad (excluding cover pages)",
      "2 inserts in delegate bags",
      "Online promotion on all social platforms",
    ],
    badge: gold,
  },
  {
    type: "Elite Sponsor",
    benefits: [
      "Sponsor 10 Poster Presentation Awards",
      "3 corporate workshop slots (AV included)",
      "2 exhibit booths (3x3 sqm each)",
      "6 complimentary registrations",
      "Logo on homepage and sponsorship page",
      "A4 color ad (excluding cover pages)",
      "3 inserts in delegate bags",
      "Post-conference email to registrants",
      "Online promotion on all social platforms",
    ],
    badge: platinum,
  },
];
const last_item = [
  {
    type: "Exhibitor",
    benefits: [
      [
        "Sponsor 1 Poster Presentation Award",
        "1 complimentary registration",
        "Custom exhibit booth (3x3 sqm)",
        "Logo on sponsorship page",
        "A4 color ad in program/book of abstracts",
      ],
      ["Leaflet in delegate bags",
        "Online promotion on all social platforms",
       "5% waiver for next year",
        "Product recognition on global website",
        "B2B meeting opportunities",],
      [
        "Branding at ceremonies",
        "Press release for your company",
        "Brand in 50,000 brochures globally",
        "Posters shared with 10,000 institutions",
        "Product recognition on global website",
      ],
    ],
    badge: exhibitor,
  },
];

const SponsorshipPackages = () => {
  return (
    <div className="w-full 2xl:max-w-[1280px] mx-auto justify-center items-center text-center">
      <div className={`${banner_style} event-partners-banner w-full`}>
        <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4">
          Sponsorship Packages
        </h1>{" "}
      </div>
      {/* <p className="text-center text-gray-600 mb-12">
        18th Global Medical Conclave | 25–27 Nov 2025 | Valencia, Spain
      </p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2 md:mx-12">
        {sponsorshipPackages.map((pkg) => (
          <div
            key={pkg.type}
            className="border border-gray-200 rounded-2xl shadow-md p-4 bg-white items-center flex flex-col justify-between "
          >
            <div className="flex flex-col items-left">
              <div className="bg-one/50 rounded-tl-xl rounded-br-full mb-2 p-2 flex flex-row items-center">
                <img
                  src={pkg.badge}
                  alt=""
                  className="object-contain w-16 h-16"
                />
                <h2 className="text-2xl font-semibold text-one">
                  {pkg.type}
                </h2>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {pkg.benefits.map((benefit, index) => (
                  <div className="flex flex-row gap-2 items-center">
                    <Sparkles size={14} className="text-one fill-one" />
                    <li key={index} className="text-[15px] list-none text-left">
                      {benefit}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <Link to='https://helixconferences.com/buy-a-ticket' target="_blank">
              <button className="w-auto bg-one text-white px-8 py-2 rounded-full my-8">
                Become a Partner
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="my-12 mx-2 md:mx-32">
        {last_item.map((pkg) => (
          <div
            key={pkg.type}
            className="border border-gray-200 rounded-2xl shadow-md p-4 bg-white items-center flex flex-col justify-between "
          >
            <div>
               <div className="bg-one/50 rounded-tl-xl rounded-br-full mb-2 p-2 flex flex-row items-center">
                <img
                  src={pkg.badge}
                  alt=""
                  className="object-contain w-16 h-16"
                />
                <h2 className="text-2xl font-semibold text-one ">
                  {pkg.type}
                </h2>
              </div>

              {/* Two-column layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2 text-gray-700">
                {pkg.benefits.map((group, groupIndex) => (
                  <ul key={groupIndex} className="space-y-2">
                    {group.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-[15px]"
                      >
                        <Sparkles size={14} className="text-one mt-1 fill-one" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <Link to="https://helixconferences.com/buy-a-ticket" target="_blank">
              <button className="w-auto bg-one text-white px-8 py-2 rounded-full my-8">
                Become a Partner
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorshipPackages;
