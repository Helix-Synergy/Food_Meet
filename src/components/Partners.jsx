import React, { useEffect, useRef } from "react";
import { PartnerImageList } from "../assets";
import { Link } from "react-router-dom";


const Partners = () => {
  const wrapperRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    let scrollAmount = 0;
    const speed = 1; // px per frame
    let frameId;
    
    const scroll = () => {
      if (scrollRef.current && wrapperRef.current) {
        scrollAmount += speed;

        // Reset to 0 if we've scrolled one full set of images
        const scrollWidth = scrollRef.current.scrollWidth / 2;
        if (scrollAmount >= scrollWidth) {
          scrollAmount = 0;
        }

        scrollRef.current.style.transform = `translateX(-${scrollAmount}px)`;
      }

      frameId = requestAnimationFrame(scroll);
    };

    frameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="py-16 bg-white flex flex-col items-center">
      {/* <p className="text-one font-semibold text-xl mb-2">Partners</p> */}
      <h1 className="text-4xl text-black font-bold text-center mb-10">
        FoodMeet - Event Partners
      </h1>

      {/* Carousel Container */}
      <div className="w-[90vw] overflow-hidden ">
        <div ref={wrapperRef} className="w-full ">
          <div
            ref={scrollRef}
            className="flex"
            style={{
              width: "fit-content",
              display: "flex",
              whiteSpace: "nowrap",
            }}
          >
            {/* Duplicate the list twice for seamless loop */}
            {[...PartnerImageList, ...PartnerImageList].map((img, idx) => (
              <div key={`${img.id}-${idx}`} className="mx-8 flex-shrink-0">
                <img
                  src={img.name}
                  alt={`Partner ${img.id}`}
                  className="h-20 w-40 object-contain border border-one rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link to='/event-partners'><button className="mt-10 bg-black text-white py-2 px-6 rounded-full">
        Become a Partner
      </button></Link>
    </div>
  );
};

export default Partners;
