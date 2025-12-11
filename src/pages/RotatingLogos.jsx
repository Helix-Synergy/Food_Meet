import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackImages } from "../assets";
import { Sparkle } from "lucide-react";

const VISIBLE_ICONS = 5;
const CONTAINER_HEIGHT = 500;
const ICON_HEIGHT = CONTAINER_HEIGHT / VISIBLE_ICONS;
const PAUSE_DURATION = 4000;
const SCROLL_DELAY = 500;

const tracks = [
  {
    image: trackImages.FoodSecurity,
    title: "Food Security",
    subtitle: "Global Food Resilience",
    description:
      "Explore cutting-edge strategies to achieve Global Food Security through sustainable agriculture, equitable food distribution, and policy reform. This track highlights innovative farming, resource management, and food access solutions. Experts will share scalable models that reduce hunger, strengthen Food Systems, and prepare for climate resilience—shaping a future where nutrition, equity, and environmental stability are guaranteed for all.",
  },
  {
    image: trackImages.SustainableFood,
    title: "Sustainable Food Packaging",
    subtitle: "Circular Packaging & Waste Innovation",
    description:
      "Join experts tackling the challenge of Sustainable Food Packaging through biodegradable materials, smart labels, and circular design. This track examines innovations that reduce packaging waste and improve food shelf life. Discover how eco-conscious packaging aligns with Sustainability Goals, consumer expectations, and global efforts to reduce plastic pollution in the Food Supply Chain.",
  },
  {
    image: trackImages.SmartIrrigationSystems,
    title: "Smart Irrigation Systems",
    subtitle: "Precision Water Management for Agriculture ",
    description:
      "Smart Irrigation Systems powered by IoT, sensors, and predictive models to optimize water use. Sessions will cover real-time soil moisture data, climate forecasting, and automated irrigation. Discover how Precision Water Management can reduce waste, cut costs, and improve yields—offering scalable solutions for sustainable and climate-resilient farming.",
  },
  {
    image: trackImages.FoodScienceTechnology,
    title: "Food Science & Technology",
    subtitle: "Innovations in Food Product Development",
    description:
      "Explore cutting-edge advancements in Food Science and Technology that drive the creation of new and improved food products. This track focuses on designing and formulating food items, enhancing existing ones, and addressing evolving consumer demands. Learn about functional ingredients, novel processing techniques, sensory analysis, shelf-life extension.",
  },
  {
    image: trackImages.AIFoodProduction,
    title: "AI in Food Production",
    subtitle: "AI-Driven Agri-Food Systems",
    description:
      "Discover how Artificial Intelligence (AI) is revolutionizing Food Production through smart analytics, robotics, and real-time monitoring. This track highlights machine learning in precision farming, supply chain optimization, and predictive maintenance. Participants will explore how AI enhances efficiency, reduces waste, and drives innovation across Agri-Food Systems, from seed to supermarket.",
  },
  {
    image: trackImages.PlantProteins,
    title: "Plant-Based Proteins",
    subtitle: "Future of Sustainable Protein",
    description:
      "Investigate the growth of Plant-Based Proteins as sustainable, health-promoting alternatives to animal products. This track covers innovation in legumes, algae, and lab-grown options. Learn how these proteins reduce environmental impact, meet dietary needs, and drive market transformation—positioning Sustainable Nutrition at the core of future food systems and consumer habits.",
  },
  {
    image: trackImages.CropSciences,
    title: "Crop Sciences",
    subtitle: "Advanced Crop Development",
    description:
      "Discover breakthroughs in Modern Crop Sciences, including biotechnology, precision breeding, and genetic engineering that improve crop Yield and climate resilience. Presenters will share data-driven strategies to boost productivity, resist pests, and optimize soil usage. Attendees will learn how these innovations support food security and environmental sustainability in rapidly changing Agri-Food Systems.",
  },
  {
    image: trackImages.FoodSafety,
    title: "Food Safety & Traceability",
    subtitle: "Supply Chain Transparency & Trust",
    description:
      "Learn how Food Safety and Traceability Systems ensure accountability and consumer trust. This track covers blockchain, digital labeling, and real-time monitoring for tracking food from origin to consumption. Experts will explore policy integration, crisis response, and transparency standards essential for safeguarding public health and strengthening supply chain reliability.",
  },
  {
    image: trackImages.FoodWasteReduction,
    title: "Food Waste Reduction",
    subtitle: "Circular Food Systems & Resource Optimization",
    description:
      "Learn how Food Safety and Traceability Systems ensure accountability and consumer trust. This track covers blockchain, digital labeling, and real-time monitoring for tracking food from origin to consumption. Experts will explore policy integration, crisis response, and transparency standards essential for safeguarding public health and strengthening supply chain reliability.",
  },
  {
    image: trackImages.SoilScience,
    title: "Soil Science",
    subtitle: "Soil Health for Sustainable Systems",
    description:
      "This track delves into the critical role of Soil Science in building sustainable and regenerative farming systems. Experts will discuss soil health, carbon sequestration, erosion control, and Nutrient Cycling. Through advanced diagnostics and organic practices, participants will explore how healthy soils are the foundation for Sustainable Agriculture, food productivity, and ecological stability.",
  },
  {
    image: trackImages.Nutraceuticals,
    title: "Nutraceuticals",
    subtitle: "Functional Foods & Bioactive Compounds",
    description:
      "Examine the rising impact of Nutraceuticals—bioactive food components with medical benefits. This track explores functional foods, dietary supplements, and regulatory challenges. Experts will present evidence on disease prevention, metabolic health, and market trends, positioning Functional Nutrition as a bridge between Food and Medicine in modern healthcare and wellness.",
  },
  {
    image: trackImages.ClimateAgriculture,
    title: "Climate- Smart Agriculture",
    subtitle: "Climate Adaptation in Agriculture",
    description:
      "Engage with the principles of Climate-Smart Agriculture (CSA) that mitigate greenhouse gases while boosting productivity and resilience. This track presents practices like agroecology, crop diversification, and carbon farming. Attendees will gain insight into CSA's role in sustainable development and how it empowers farmers to adapt to Climate Change.",
  },
  {
    image: trackImages.FoodToxicology,
    title: "Food Toxicology",
    subtitle: "Food Safety & Contaminant Science",
    description:
      "Understand the science behind Food Toxicology and its vital role in preventing contamination and foodborne illnesses. This track addresses chemical residues, mycotoxins, additives, and emerging risks across the supply chain. Learn about risk assessments, regulatory frameworks, and technologies that ensure Food Safety, protecting public health from production through to consumption.",
  },
  {
    image: trackImages.PersonalizedNutrition,
    title: "Personalized Nutrition",
    subtitle: "Genomics & Diet for Individual Health",
    description:
      "Explore the science of Personalized Nutrition using genomics, microbiome data, and AI to customize dietary recommendations. This track highlights innovations that optimize individual health outcomes and prevent disease. Learn how Precision Nutrition tools are transforming dietary practices, aligning food intake with genetic, metabolic, and lifestyle profiles for truly personalized wellness strategies.",
  },
  {
    image: trackImages.Agroforestry,
    title: "Agroforestry",
    subtitle: "Integrated Tree-Based Farming Systems",
    description:
      "This track explores Agroforestry systems that combine trees with crops and livestock for improved Biodiversity, productivity, and climate resilience. Topics include silvopasture, soil enrichment, and carbon capture. Experts will highlight the ecological and economic benefits of integrating trees into farming—supporting Resilient Landscapes and sustainable agriculture models worldwide.",
  },
  {
    image: trackImages.IntegratedManagement,
    title: "Integrated Pest Management",
    subtitle: "Ecological Approaches to Pest Control",
    description:
      "Explore Integrated Pest Management (IPM) as a sustainable alternative to conventional pesticides. This track focuses on biological controls, crop rotation, resistant varieties, and precision tools. Attendees will learn how IPM promotes Eco-Friendly Crop Protection, safeguards biodiversity, and reduces environmental impact while maintaining agricultural productivity and improving long-term Farm Resilience.",
  },
  {
    image: trackImages.AgricultureAquaculture,
    title: "Agriculture and Aquaculture",
    subtitle: "Aqua-Agri Integration for Food Systems",
    description:
      "Uncover the potential of integrating Agriculture and Aquaculture to create Holistic Food Systems. Experts will discuss nutrient recycling, resource sharing, and land-water interface management. This track reveals how synergy between crops and aquatic life can improve food security, environmental balance, and economic resilience in both rural and coastal communities.",
  },
  {
    image: trackImages.DairyProduction,
    title: "Dairy Production",
    subtitle: "Sustainable & Ethical Dairy Farming",
    description:
      "Delve into Modern Dairy Production approaches that balance efficiency with animal welfare and environmental stewardship. This track covers smart feeding systems, manure management, and ethical treatment. Discover innovations enabling Sustainable Dairy Farming that meet global demand while aligning with climate goals and consumer expectations for transparent and humane production.",
  },
  {
    image: trackImages.Horticulture,
    title: "Horticulture",
    subtitle: "Urban & Controlled Environment Horticulture",
    description:
      "Horticulture focuses on the Science and Art of Plant Cultivation. Topics include Fruits, Vegetables, Flowers, and Ornamental Plants. The track emphasizes Urban Agriculture, Controlled Environment Systems, and Sustainable Practices. Attendees will gain insights into Food Security, Urban Planning, and Ecological Design, highlighting the growing importance of Horticultural Innovations in modern Agriculture worldwide.",
  },
  {
    image: trackImages.Agrobiodeversity,
    title: "Agrobiodeversity",
    subtitle: "Biodiversity for Resilient Food Systems",
    description:
      "Agrobiodiversity conservation ensures resilience in Agricultural Systems. This session discusses Genetic Resource Preservation, Traditional Knowledge, and Crop Wild Relatives. Topics include Sustainable Breeding, Climate Adaptation, and Food Security. Attendees gain insight into Biodiversity’s critical role in Sustainable Agriculture, addressing Environmental Change, Food Sovereignty, and Ecosystem Health through inclusive Agricultural Innovation worldwide.",
  },
];

const ScrollingTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px #445e39;
          }
          50% {
            box-shadow: 0 0 18px 6px #73946b;
          }
        }
 
        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }
 
        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}
      </style>

      <div className="relative mt-14">
        {/* Fixed Top-Right Button (No Icon) */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollingTracks;
