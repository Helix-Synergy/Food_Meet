import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackImages } from "../assets";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";

const VISIBLE_ICONS = 5;
const CONTAINER_HEIGHT = 500;
const ICON_HEIGHT = CONTAINER_HEIGHT / VISIBLE_ICONS;
const PAUSE_DURATION = 4000;
const SCROLL_DELAY = 500;

// const tracks = [
//   {
//     image: trackImages.FoodSecurity,
//     title: "Integrated Pest & Disease Management (IPM) Strategie ",
//     subtitle: "Global Food Resilience",
//     description:
//       "This track explores sustainable Integrated Pest and Disease Management (IPM) strategies that combine biological, cultural, physical, and chemical approaches. It focuses on early detection, monitoring, resistance management, and eco-friendly solutions to reduce crop losses while protecting environmental health and agricultural productivity.",
//   },
//   {
//     image: trackImages.SustainableFood,
//     title: "Sustainable Food Packaging",
//     subtitle: "Circular Packaging & Waste Innovation",
//     description:
//       "Join experts tackling the challenge of Sustainable Food Packaging through biodegradable materials, smart labels, and circular design. This track examines innovations that reduce packaging waste and improve food shelf life. Discover how eco-conscious packaging aligns with Sustainability Goals, consumer expectations, and global efforts to reduce plastic pollution in the Food Supply Chain.",
//   },
//   {
//     image: trackImages.SmartIrrigationSystems,
//     title: "Smart Irrigation Systems",
//     subtitle: "Precision Water Management for Agriculture ",
//     description:
//       "Smart Irrigation Systems powered by IoT, sensors, and predictive models to optimize water use. Sessions will cover real-time soil moisture data, climate forecasting, and automated irrigation. Discover how Precision Water Management can reduce waste, cut costs, and improve yields—offering scalable solutions for sustainable and climate-resilient farming.",
//   },
//   {
//     image: trackImages.FoodScienceTechnology,
//     title: "Food Science & Technology",
//     subtitle: "Innovations in Food Product Development",
//     description:
//       "Explore cutting-edge advancements in Food Science and Technology that drive the creation of new and improved food products. This track focuses on designing and formulating food items, enhancing existing ones, and addressing evolving consumer demands. Learn about functional ingredients, novel processing techniques, sensory analysis, shelf-life extension.",
//   },
//   {
//     image: trackImages.AIFoodProduction,
//     title: "AI in Food Production",
//     subtitle: "AI-Driven Agri-Food Systems",
//     description:
//       "Discover how Artificial Intelligence (AI) is revolutionizing Food Production through smart analytics, robotics, and real-time monitoring. This track highlights machine learning in precision farming, supply chain optimization, and predictive maintenance. Participants will explore how AI enhances efficiency, reduces waste, and drives innovation across Agri-Food Systems, from seed to supermarket.",
//   },
//   {
//     image: trackImages.PlantProteins,
//     title: "Plant-Based Proteins",
//     subtitle: "Future of Sustainable Protein",
//     description:
//       "Investigate the growth of Plant-Based Proteins as sustainable, health-promoting alternatives to animal products. This track covers innovation in legumes, algae, and lab-grown options. Learn how these proteins reduce environmental impact, meet dietary needs, and drive market transformation—positioning Sustainable Nutrition at the core of future food systems and consumer habits.",
//   },
//   {
//     image: trackImages.CropSciences,
//     title: "Crop Sciences",
//     subtitle: "Advanced Crop Development",
//     description:
//       "Discover breakthroughs in Modern Crop Sciences, including biotechnology, precision breeding, and genetic engineering that improve crop Yield and climate resilience. Presenters will share data-driven strategies to boost productivity, resist pests, and optimize soil usage. Attendees will learn how these innovations support food security and environmental sustainability in rapidly changing Agri-Food Systems.",
//   },
//   {
//     image: trackImages.FoodSafety,
//     title: "Food Safety & Traceability",
//     subtitle: "Supply Chain Transparency & Trust",
//     description:
//       "Learn how Food Safety and Traceability Systems ensure accountability and consumer trust. This track covers blockchain, digital labeling, and real-time monitoring for tracking food from origin to consumption. Experts will explore policy integration, crisis response, and transparency standards essential for safeguarding public health and strengthening supply chain reliability.",
//   },
//   {
//     image: trackImages.FoodWasteReduction,
//     title: "Food Waste Reduction",
//     subtitle: "Circular Food Systems & Resource Optimization",
//     description:
//       "Learn how Food Safety and Traceability Systems ensure accountability and consumer trust. This track covers blockchain, digital labeling, and real-time monitoring for tracking food from origin to consumption. Experts will explore policy integration, crisis response, and transparency standards essential for safeguarding public health and strengthening supply chain reliability.",
//   },
//   {
//     image: trackImages.SoilScience,
//     title: "Soil Science",
//     subtitle: "Soil Health for Sustainable Systems",
//     description:
//       "This track delves into the critical role of Soil Science in building sustainable and regenerative farming systems. Experts will discuss soil health, carbon sequestration, erosion control, and Nutrient Cycling. Through advanced diagnostics and organic practices, participants will explore how healthy soils are the foundation for Sustainable Agriculture, food productivity, and ecological stability.",
//   },
//   {
//     image: trackImages.Nutraceuticals,
//     title: "Nutraceuticals",
//     subtitle: "Functional Foods & Bioactive Compounds",
//     description:
//       "Examine the rising impact of Nutraceuticals—bioactive food components with medical benefits. This track explores functional foods, dietary supplements, and regulatory challenges. Experts will present evidence on disease prevention, metabolic health, and market trends, positioning Functional Nutrition as a bridge between Food and Medicine in modern healthcare and wellness.",
//   },
//   {
//     image: trackImages.ClimateAgriculture,
//     title: "Climate- Smart Agriculture",
//     subtitle: "Climate Adaptation in Agriculture",
//     description:
//       "Engage with the principles of Climate-Smart Agriculture (CSA) that mitigate greenhouse gases while boosting productivity and resilience. This track presents practices like agroecology, crop diversification, and carbon farming. Attendees will gain insight into CSA's role in sustainable development and how it empowers farmers to adapt to Climate Change.",
//   },
//   {
//     image: trackImages.FoodToxicology,
//     title: "Food Toxicology",
//     subtitle: "Food Safety & Contaminant Science",
//     description:
//       "Understand the science behind Food Toxicology and its vital role in preventing contamination and foodborne illnesses. This track addresses chemical residues, mycotoxins, additives, and emerging risks across the supply chain. Learn about risk assessments, regulatory frameworks, and technologies that ensure Food Safety, protecting public health from production through to consumption.",
//   },
//   {
//     image: trackImages.PersonalizedNutrition,
//     title: "Personalized Nutrition",
//     subtitle: "Genomics & Diet for Individual Health",
//     description:
//       "Explore the science of Personalized Nutrition using genomics, microbiome data, and AI to customize dietary recommendations. This track highlights innovations that optimize individual health outcomes and prevent disease. Learn how Precision Nutrition tools are transforming dietary practices, aligning food intake with genetic, metabolic, and lifestyle profiles for truly personalized wellness strategies.",
//   },
//   {
//     image: trackImages.Agroforestry,
//     title: "Agroforestry",
//     subtitle: "Integrated Tree-Based Farming Systems",
//     description:
//       "This track explores Agroforestry systems that combine trees with crops and livestock for improved Biodiversity, productivity, and climate resilience. Topics include silvopasture, soil enrichment, and carbon capture. Experts will highlight the ecological and economic benefits of integrating trees into farming—supporting Resilient Landscapes and sustainable agriculture models worldwide.",
//   },
//   {
//     image: trackImages.IntegratedManagement,
//     title: "Integrated Pest Management",
//     subtitle: "Ecological Approaches to Pest Control",
//     description:
//       "Explore Integrated Pest Management (IPM) as a sustainable alternative to conventional pesticides. This track focuses on biological controls, crop rotation, resistant varieties, and precision tools. Attendees will learn how IPM promotes Eco-Friendly Crop Protection, safeguards biodiversity, and reduces environmental impact while maintaining agricultural productivity and improving long-term Farm Resilience.",
//   },
//   {
//     image: trackImages.AgricultureAquaculture,
//     title: "Agriculture and Aquaculture",
//     subtitle: "Aqua-Agri Integration for Food Systems",
//     description:
//       "Uncover the potential of integrating Agriculture and Aquaculture to create Holistic Food Systems. Experts will discuss nutrient recycling, resource sharing, and land-water interface management. This track reveals how synergy between crops and aquatic life can improve food security, environmental balance, and economic resilience in both rural and coastal communities.",
//   },
//   {
//     image: trackImages.DairyProduction,
//     title: "Dairy Production",
//     subtitle: "Sustainable & Ethical Dairy Farming",
//     description:
//       "Delve into Modern Dairy Production approaches that balance efficiency with animal welfare and environmental stewardship. This track covers smart feeding systems, manure management, and ethical treatment. Discover innovations enabling Sustainable Dairy Farming that meet global demand while aligning with climate goals and consumer expectations for transparent and humane production.",
//   },
//   {
//     image: trackImages.Horticulture,
//     title: "Horticulture",
//     subtitle: "Urban & Controlled Environment Horticulture",
//     description:
//       "Horticulture focuses on the Science and Art of Plant Cultivation. Topics include Fruits, Vegetables, Flowers, and Ornamental Plants. The track emphasizes Urban Agriculture, Controlled Environment Systems, and Sustainable Practices. Attendees will gain insights into Food Security, Urban Planning, and Ecological Design, highlighting the growing importance of Horticultural Innovations in modern Agriculture worldwide.",
//   },
//   {
//     image: trackImages.Agrobiodeversity,
//     title: "Agrobiodeversity",
//     subtitle: "Biodiversity for Resilient Food Systems",
//     description:
//       "Agrobiodiversity conservation ensures resilience in Agricultural Systems. This session discusses Genetic Resource Preservation, Traditional Knowledge, and Crop Wild Relatives. Topics include Sustainable Breeding, Climate Adaptation, and Food Security. Attendees gain insight into Biodiversity’s critical role in Sustainable Agriculture, addressing Environmental Change, Food Sovereignty, and Ecosystem Health through inclusive Agricultural Innovation worldwide.",
//   },
// ];
const routes = {
  register: "https://helixconferences.com/buy-a-ticket",
  venue: "/venue",
  home: "/",
  orators: "/foodmeet-conference-orators",
  schedule: "/international-foodmeet-event-schedule",
  tracks: "/global-foodmeet-summit-tracks",
  about: "/about-world-foodmeet-conclave",
  contact: "/contact",
  eventPartner: "/event-partners",
};
const tracks = [
  {
    image: trackImages.FoodSecurity,
    title: "Integrated Pest & Disease Management (IPM) Strategies",
    // subtitle: "Global Food Resilience",
    description: (
      <>
        This track explores sustainable{" "}
        <Link to={routes.register}    className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300">
          {" "}
          Integrated Pest and Disease Management
        </Link>{" "}
        strategies that combine biological, cultural, physical, and chemical
        approaches. It focuses on early detection, monitoring, resistance
        management, and <Link to={routes.register}>eco-friendly</Link> solutions
        to reduce crop losses while protecting environmental health and
        agricultural productivity.
      </>
    ),
  },

  {
    image: trackImages.SmartIrrigationSystems,
    title: "Smart Farming & Digital Agritech",
    // subtitle: "Precision Agriculture",
    description: (
      <>
        Smart Farming & Digital Agritech harnesses IoT, AI,{" "}
        <Link to={routes.venue} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300"> drones,</Link> and data analytics to optimize
        crop yields, reduce resource use, and enhance sustainability. This track
        explores precision agriculture, smart irrigation, farm automation,
        climate-resilient technologies, and digital platforms transforming
        modern agriculture into a data-driven, efficient ecosystem.
      </>
    ),
  },

  {
    image: trackImages.ClimateAgriculture,
    title: "Climate-Resilient Cropping",
    // subtitle: "Adaptive Farming Systems",
    description: (
      <>
        <Link to={routes.home} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300">Climate-Resilient</Link> Cropping focuses on
        farming systems that withstand climate variability. It promotes
        drought-, flood-, and heat-tolerant crops, improved soil health,
        efficient water use, and adaptive agronomic practices to ensure stable
        yields and strengthen food security under changing climate conditions.
      </>
    ),
  },

  {
    image: trackImages.FoodScienceTechnology,
    title: "Food Microbiology",
    // subtitle: "Microbial Safety & Innovation",
    description: (
      <>
        <Link to={routes.orators} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300">Food Microbiology</Link> explores
        microorganisms that impact food safety, quality, and innovation. The
        track covers foodborne pathogens, fermentation, probiotics, microbial
        detection methods, and control strategies supporting safe and nutritious
        food systems.
      </>
    ),
  },

  {
    image: trackImages.PlantProteins,
    title: "Advanced Food Processing & Preservation Technologies",
    // subtitle: "Shelf Life & Safety",
    description: (
      <>
        {" "}
        <Link to={routes.home} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300">
          Advanced Food Processing & Preservation Technologies
        </Link>{" "}
        explore innovative methods to enhance food safety, quality, and shelf
        life. This track highlights emerging techniques, smart systems, and{" "}
        advanced treatment technologies that reduce waste and meet global food
        demands.
      </>
    ),
  },

  {
    image: trackImages.Nutraceuticals,
    title: "Nutrition Science & Public Health",
    // subtitle: "Health & Policy",
    description: (
      <>
        <Link to={routes.schedule} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300">Nutrition Science & Public Health</Link>{" "}
        explores how diet, food systems, and policies shape population health.
        The track focuses on preventing disease, promoting healthy behaviors,
        and improving <Link to={routes.about}>human health worldwide</Link>.
      </>
    ),
  },

  {
    image: trackImages.FoodWasteReduction,
    title: "Post-Harvest Technology",
    // subtitle: "Supply Chain Efficiency",
    description: (
      <>
        Post-<Link to={routes.eventPartner} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300">Harvest Technology</Link> focuses on
        preserving quality, safety, and value after harvest.. It covers
        handling, storage, processing, packaging, transportation, and loss
        reduction techniques to extend shelf life, enhance marketability, ensure
        food security, and improve farmers’ income through efficient
        post-harvest management systems.
      </>
    ),
  },

  {
    image: trackImages.SustainableFood,
    title: "Sustainable Food Packaging",
    // subtitle: "Circular Packaging",
    description: (
      <>
        Sustainable food packaging focuses on reducing environmental impact
        through recyclable, biodegradable, and reusable materials. It supports
        food safety, extends shelf life, minimizes waste, and lowers carbon
        emissions while meeting consumer demand for{" "}
        <Link to={routes.tracks} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300">eco-friendly </Link>, innovative, and
        cost-effective packaging solutions across the global food industry.
      </>
    ),
  },

  {
    image: trackImages.FoodToxicology,
    title: "Environmental Ecology & Restoration Science",
    // subtitle: "Ecosystem Health",
    description: (
      <>
        <Link to={routes.eventPartner} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300">
          {" "}
          Environmental Ecology & Restoration Science
        </Link>{" "}
        focuses on understanding ecosystems, assessing human impacts, and
        restoring degraded environments. The track highlights biodiversity
        conservation, ecological resilience, climate adaptation, sustainable
        land and water management, and science-based restoration practices that
        support healthy ecosystems and long-term environmental sustainability.
      </>
    ),
  },

  {
    image: trackImages.SoilScience,
    title: "Pollution Monitoring & Control",
    // subtitle: "Environmental Safety",
    description: (
      <>
        This track focuses on advanced technologies and strategies for
        monitoring <Link to={routes.about} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300">environmental pollution</Link>. It
        covers air, water, and soil quality assessment, real-time sensing
        systems, data analytics, regulatory compliance, and innovative control
        measures aimed at reducing emissions, mitigating impacts, and promoting
        sustainable environmental management.
      </>
    ),
  },

  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSco8ElPr_qFH535D05-4DqjWRvd7uJ2qionA&s",
    title: "Waste Management & Resource Recovery",
    // subtitle: "Circular Economy",
    description: (
      <>
  Waste Management & Resource Recovery focuses on innovative strategies to reduce waste generation, improve recycling, and recover valuable resources. The track highlights circular economy models,<Link to={routes.contact} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300"> advanced treatment technologies </Link>, policy frameworks, and sustainable practices that transform waste into energy, materials, and economic value while protecting the environment.
      </>
    ),
  },

  {
    image: trackImages.ClimateAgriculture,
    title: "Climate Change Science",
    // subtitle: "Climate Systems",
    description: (
      <>
   Climate Change Science examines how greenhouse gases, land use, oceans, and solar energy influence Earth’s climate system. Using observations, models, and experiments, scientists identify causes, measure impacts, project future risks, and inform mitigation and adaptation strategies to protect ecosystems, economies, and  <Link to={routes.about} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300">human health worldwide </Link>through evidence-based policy and collaborative action.
      </>
    ),
  },

  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/009/274/856/small/world-concept-and-resources-water-water-management-globe-floating-on-water-free-photo.webp",
    title: "Water Resource Management",
    // subtitle: "Water Security",
    description: (
      <>
        <Link to={routes.orators} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300">Water Resource Management</Link> focuses on
      sustainable planning, conservation, and equitable use of water resources. It addresses challenges such as scarcity, pollution, climate change, and growing demand through innovative technologies, policy frameworks, integrated watershed management, and community engagement to ensure long-term water security and resilience.
      </>
    ),
  },

  // EIA
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWp7w8A8KGT-ZIHQZKJdNEP6sUAqeyhqYw_w&s",
    title: "Environmental Impact Assessment (EIA)",
    // subtitle: "Water Security",
    description: (
      <>
        Environmental Impact Assessment (EIA) evaluates the potential
        environmental, social, and economic effects of proposed projects before
        implementation. It supports informed decision-making by identifying
        risks, recommending mitigation measures, ensuring regulatory compliance,
        and promoting <Link to={routes.orators} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300">sustainable development</Link>{" "}
        while balancing growth with environmental protection.
      </>
    ),
  },
  {
    image: trackImages.CropSciences,
    title: "Plant Genetic Improvement & Stress Physiology",
    // subtitle: "Crop Resilience",
    description: (
      <>
      This track covers breeding, genomics, phenotyping, and stress signaling to improve tolerance to drought, heat, salinity, and pathogens, enabling sustainable productivity, climate adaptation, and <Link to={routes.schedule} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300"> food security </Link> through innovative, translational research and interdisciplinary global collaborations worldwide.
      </>
    ),
  },

  {
    image: trackImages.IntegratedManagement,
    title: "Biofertilizers & Biocontrol Agents",
    // subtitle: "Natural Inputs",
    description: (
      <>
        This track promotes sustainable farming using{" "}
        <Link to={routes.venue} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300">biofertilizers and biocontrol</Link> agents. Focused on enhancing soil fertility, promoting plant growth, and managing pests naturally, it highlights microbial solutions, innovative technologies, and eco-friendly strategies that reduce chemical dependency, improve crop yield, and support environmental conservation.
      </>
    ),
  },

  {
    image:
      "https://thumbs.dreamstime.com/b/microbiome-functions-as-living-ecosystem-human-body-microbiome-functions-as-living-ecosystem-391856089.webp",
    title: "Microbiomes & Ecosystem Functioning",
    // subtitle: "Soil & Microbes",
    description: (
      <>
        This track delves into the role of microbial communities in maintaining ecosystem health and functionality. It covers microbial diversity, interactions, and their impact on nutrient cycling, soil fertility, plant productivity, and environmental sustainability, highlighting innovative  <Link to={routes.schedule} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300">research and technologies </Link>  that harness microbiomes for resilient and balanced ecosystems.

      </>
    ),
  },

  {
    image: trackImages.DairyProduction,
    title: "Bioremediation, Bioenergy & Bioeconomy Innovations",
    // subtitle: "Circular Bioeconomy",
    description: (
      <>
        This track focuses on harnessing biological systems for environmental cleanup, sustainable energy, and economic growth. It highlights innovative approaches in bioremediation, biofuel production, and bio-based industries, emphasizing microbial and biotechnological solutions that promote environmental sustainability, resource efficiency, and the transition toward a circular {" "}
        <Link to={routes.orators} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300">bioeconomy</Link>.
      </>
    ),
  },

  {
    image: trackImages.AIFoodProduction,
    title: "AI in Food Production",
    // subtitle: "AI-Driven Systems",
    description: (
      <>
        Discover how Artificial Intelligence (AI) is revolutionizing Food Production through smart analytics, robotics, and real-time monitoring. This track highlights machine learning in precision farming, supply chain optimization, and predictive maintenance. Participants will explore how AI enhances efficiency, reduces waste, and drives innovation across {" "}
        <Link to={routes.tracks} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300">Agri-Food Systems</Link>, from seed to supermarket.
      </>
    ),
  },

  {
    image: trackImages.Horticulture,
    title: "Horticulture",
    // subtitle: "Urban & Controlled Systems",
    description: (
      <>
        <Link to={routes.register} className="
             hover:text-one hover:decoration-accent
             transition-colors duration-300">Horticulture</Link> focuses on the Science and Art of Plant Cultivation. Topics include Fruits, Vegetables, Flowers, and Ornamental Plants. The track emphasizes Urban Agriculture, Controlled Environment Systems, and Sustainable Practices. Attendees will gain insights into Food Security, Urban Planning, and Ecological Design, highlighting the growing importance of Horticultural Innovations in modern Agriculture worldwide.
      </>
    ),
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
                <p className="text-md text-gray-800 leading-relaxed text-justify">
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
