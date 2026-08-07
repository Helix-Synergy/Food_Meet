import React, { useState, useEffect } from "react";
import { banner_images } from "../assets";
import one from "../assets/Banners1/Aprl.jpg";
import img2 from "../assets/Banners1/Conference_1.jpg";
import img3 from "../assets/Banners1/Conference_2.jpg";
import img4 from "../assets/Banners1/Conference_3.jpg";

const Carousel = () => {
  const slides = [
  {
    id: 1,
    image: one,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
  {
    id: 4,
    image: img4,
  },
];


  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );

  const goToNext = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative max-w-[90%] h-[130px] sm:h-[280px] md:h-[50%] mx-auto overflow-hidden rounded-lg bg-slate-200 border border-one">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
          aria-label="Go to previous slide"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
          aria-label="Go to next slide"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
