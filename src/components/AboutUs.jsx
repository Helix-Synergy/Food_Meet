import { CircleChevronRight } from "lucide-react";
import React from "react";
import { about_img, group_1, mediclave_logo } from "../assets";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const about_points = [
    "Highlight solutions to enhance food security and nutrition equity",
    "Emphasize the role of digital transformation in agriculture, including AI, IoT",
    "Rise of alternative proteins, plant-based diets, and lab-grown foods as sustainable solutions for the future",
    "Exploring Agriculture and public health, focusing on nutrition, food safety, and policies.",
  ];

  return (
    <div className="flex flex-col md:flex-row gap-2 md:h-[80vh] bg-pimary items-center justify-center p-4 md:px-12 md:py-4">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src="https://img.freepik.com/free-photo/woman-man-laboratory-robes-examine-carefully-plants-greenhouse_8353-7157.jpg?ga=GA1.1.1422450455.1747647704&semt=ais_hybrid&w=740"
          alt="FoodMeet"
          className="h-[40vh] md:h-[58vh] w-auto md:w-[80vh] mx-auto md:mx-16 rounded-xl object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col w-full md:w-2/3">
        <h1 className="text-xl md:text-3xl font-bold my-2">
          <span className="text-one">Health, Nutrition, and Agriculture:</span>{" "}
          Building a Resilient Future
        </h1>

        <div className="flex flex-col gap-3 mt-4">
          <div className="flex flex-row gap-2 items-start">
            <CircleChevronRight
              size={24}
              className="text-one flex-shrink-0 mt-1"
            />
            <p className="text-sm md:text-base">
              Welcome to the Hub of Global Conferences & Food-Agriculture
              Events. Explore the world’s most impactful{" "}
              <Link
                to="https://helixconferences.com/blog.php"
                target="_blank"
                className="font-bold text-one"
              >
                Global Events 2025,
              </Link>
              brought to you by trusted International Conference Organizers.
              Whether you're a Researcher, policymaker, Academic, or Industry
              Leader, our platform connects you to transformative events across
              the globe. We specialize in curating and promoting Food &
              Agriculture conferences, alongside a wide spectrum of
              multidisciplinary global conferences that shape the future of
              health, environment, sustainability, and technology.
            </p>
          </div>

          <blockquote className="italic text-one my-2 border-l-4 border-one pl-4">
            “Connecting the World Through Knowledge and Innovation”
          </blockquote>
        </div>

        <Link to="/about-world-foodmeet-conclave">
          <button className="flex bg-black text-white px-6 md:px-8 py-2 my-4 rounded-full text-sm md:text-base">
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
