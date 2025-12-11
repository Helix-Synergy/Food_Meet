import React, { useEffect, useState, useRef } from 'react';
import { trackImages } from '../assets';
import { banner_style } from '../assets/styles';
import { useAnimation, motion } from 'framer-motion';



const tracks = [
  {
    image: trackImages.FoodSecurity,
    title: "Food Security",
    subtitle:
      "Ensuring Global Food Security: Strategies for a Sustainable Future",
    description:
      "This track will focus on the latest breakthroughs in Gynecological care, addressing critical issues such as Reproductive Health, Infertility Treatments, Menstrual Disorders, and Gynecologic Cancers. Experts will also discuss challenges in Reproductive Health policy and the intersection of Gynecology and Aging.",
  },
  {
    image: trackImages.SustainableFood,
    title: "Sustainable Food Packaging",
    subtitle:
      "Innovations in Food Science & Technology: Advancing Nutrition and Safety",
    description:
      "Pediatrics covers the full spectrum of Child Health, from prenatal care through adolescence. This track will highlight cutting-edge research on Child Development, Pediatric Diseases, and Pediatric Surgery. Topics will include advancements in Pediatric Oncology, Neonatal Care, Immunization Strategies, and Chronic Disease management in children.",
  },
  {
    image: trackImages.SmartIrrigationSystems,
    title: "Smart Irrigation Systems",
    subtitle: "Modern Crop Sciences: Enhancing Yield and Resilience",
    description:
      "Emergency medicine remains at the forefront of Healthcare Innovation, with a focus on Triage, Trauma Management, and acute care interventions. This track will discuss advancements in emergency procedures, the role of technology in diagnostics, and new treatment protocols for life-threatening injuries and conditions.",
  },
  {
    image: trackImages.FoodScienceTechnology,
    title: "Food Science & Technology",
    subtitle:
      "Soil Science in the 21st Century: Foundations of Sustainable Agriculture",
    description:
      "This session will focus on the latest developments in Genetic Testing, Gene Therapies, and CRISPR technology. Key discussions will include breakthroughs in diagnosing rare Genetic Disorders, the role of genomics in precision medicine, and ethical considerations in genetic modification and testing.",
  },
  {
    image: trackImages.AIFoodProduction,
    title: "AI in Food Production",
    subtitle: "Food Toxicology: Safeguarding Public Health from Farm to Fork",
    description:
      "This track will explore topics such as emerging therapeutic models, Psychiatric Disorders, and mental health stigma. Attendees will hear about novel treatments for Depression, Anxiety, and Schizophrenia, as well as advances in digital mental health solutions.",
  },
  {
    image: trackImages.PlantProteins,
    title: "Plant-Based Proteins",
    subtitle:
      "Integrated Pest Management: Eco-Friendly Solutions for Crop Protection",
    description:
      "This session will explore the intersection of technology and patient care, with discussions on telehealth platforms, wearable health technology, AI-driven diagnostics, and mobile health apps. Attendees will gain insights into the regulatory landscape, reimbursement strategies, and the future of telemedicine in an increasingly digital world.",
  },
  {
    image: trackImages.CropSciences,
    title: "Crop Sciences",
    subtitle:
      "Sustainable Food Packaging: Reducing Waste from Production to Plate",
    description:
      "Public health is the foundation of disease prevention and health promotion. This track will cover emerging trends in Global Health, addressing the social determinants of health, healthcare systems strengthening, and the fight against global pandemics.",
  },
  {
    image: trackImages.FoodSafety,
    title: "Food Safety & Traceability",
    subtitle:
      "Artificial Intelligence in Food Production: Transforming Agri-Food Systems",
    description:
      "This session will provide updates on the latest research in infectious disease prevention, diagnostics, and treatment. Experts will address the development of novel vaccines, antiviral drugs, and surveillance strategies, as well as the global response to pandemics such as COVID-19, Ebola, and others.",
  },
  {
    image: trackImages.FoodWasteReduction,
    title: "Food Waste Reduction",
    subtitle:
      "Food Safety & Traceability: Building Consumer Trust through Transparency",
    description:
      "This track will explore cutting-edge research on the role of nutrition in metabolism, as well as emerging treatments for metabolic disorders. Topics will include Personalized Nutrition, Gut Microbiota, and the impact of diet on chronic conditions.",
  },
  {
    image: trackImages.SoilScience,
    title: "Soil Science",
    subtitle: "Personalized Nutrition: Tailoring Diets for Optimal Health",
    description:
      "This session will highlight new treatment options, including Biologics and Gene Therapy, as well as innovations in diagnostic tools. Experts will discuss the challenges of managing chronic pain and improving quality of life for patients with complex rheumatological conditions.",
  },
  {
    image: trackImages.Nutraceuticals,
    title: "Nutraceuticals",
    subtitle: "Nutraceuticals: Bridging the Gap Between Food and Medicine",
    description:
      "This track will discuss the latest advances in maternal health, including Obstetric Care, midwifery, and Postnatal Care. Attendees will also explore topics such as Sexual Health, Osteoporosis, and Hormonal Treatments.",
  },
  {
    image: trackImages.ClimateAgriculture,
    title: "Climate- Smart Agriculture",
    subtitle:
      "Synergies in Agriculture and Aquaculture: Toward Holistic Food Systems",
    description:
      "This session will explore the latest advancements in Cancer Treatment, including Immunotherapy, Precision Medicine, and targeted therapies. Experts will also discuss breakthroughs in early detection technologies and personalized cancer treatments.",
  },
  {
    image: trackImages.FoodToxicology,
    title: "Food Toxicology",
    subtitle: "Smart Irrigation Systems: Precision Water Management for Crops",
    description:
      "This track will discuss the science behind addiction, advances in Pharmacotherapy, behavioral therapies, and integrative care strategies for supporting recovery. Special focus will be on addressing the Opioid Crisis, Alcohol Dependency, and behavioral addictions.",
  },
  {
    image: trackImages.PersonalizedNutrition,
    title: "Personalized Nutrition",
    subtitle: "Plant-Based Proteins: The Future of Sustainable Nutrition",
    description:
      "This session will discuss technological advancements, such as teleconsultations, remote diagnostics, and mobile health units, that are improving healthcare delivery in underserved communities.",
  },
  {
    image: trackImages.Agroforestry,
    title: "Agroforestry",
    subtitle:
      "Agroforestry: Integrating Trees for Productive and Resilient Landscapes",
    description:
      "This session will delve into the latest advancements in pain management, including Pharmacological Treatments, Interventional Techniques, and Holistic Therapies. Focus will also be placed on post-operative and cancer-related pain.",
  },
  {
    image: trackImages.IntegratedManagement,
    title: "Integrated Pest Management",
    subtitle:
      "Climate-Smart Agriculture: Adapting Farming for a Changing World",
    description:
      "This track will explore new vaccine technologies, including mRNA and universal vaccines. Experts will discuss strategies for increasing vaccine accessibility, addressing vaccine hesitancy, and preparing for future pandemics.",
  },
  {
    image: trackImages.AgricultureAquaculture,
    title: "Agriculture and Aquaculture",
    subtitle: "Transforming Healthcare with Artificial Intelligence",
    description:
      "From machine learning in radiology to AI-driven drug discovery, AI is streamlining diagnostics, treatment, and care. This session will explore predictive analytics, virtual health assistants, and robotic surgery powered by AI.",
  },
  {
    image: trackImages.DairyProduction,
    title: "Dairy Production",
    subtitle: "Addressing the Global Burden of Heart Disease",
    description:
      "This track focuses on the latest advancements in the prevention, diagnosis, and treatment of cardiovascular diseases, including the role of AI in predicting risk and improving Cardiovascular outcomes.",
  },

  {
    image: trackImages.Horticulture,
    title: "Horticulture",
    subtitle:
      "Cultivating Innovation in Horticultural Science and Sustainability",
    description:
      "Horticulture is the science and art of cultivating plants, including fruits, vegetables, flowers, and ornamental plants. It's a specialized branch of agriculture, often focusing on smaller-scale, high-value production than traditional agriculture. Horticulture plays a crucial role in food security, landscaping, and urban environments.",
  },

  {
    image: trackImages.Agrobiodeversity,
    title: "Agrobiodeversity",
    subtitle:
      "Cultivating Innovation: Advancing Horticulture for Sustainable Growth",
    description:
      "Agrobiodiversity conservation focuses on preserving the variety of crops, livestock, and other species that contribute to food and agriculture. Conservation efforts aim to ensure food security, improve livelihoods, and enhance the resilience of agricultural systems in the face of climate change and other challenges.",
  },
];


const TrackCard = ({ title, subtitle, description, image, reverse }) => {
  const imageControls = useAnimation();
  const textControls = useAnimation();

  const cardRef = useRef(null);
  const [isImagePaused, setIsImagePaused] = useState(false);
  const [isTextPaused, setIsTextPaused] = useState(false);

  // Animate image
  useEffect(() => {
    if (isImagePaused) {
      imageControls.stop();
    } else {
      imageControls.start({
        y: [0, -10, 0],
        transition: { duration: 4, repeat: Infinity }
      });
    }
  }, [isImagePaused]);

  // Animate text
  useEffect(() => {
    if (isTextPaused) {
      textControls.stop();
    } else {
      textControls.start({
        y: [0, -10, 0],
        transition: { duration: 4, repeat: Infinity }
      });
    }
  }, [isTextPaused]);

  // Click to scroll card into center
  const handleCardClick = () => {
    cardRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <div
      ref={cardRef}
      className={`flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } items-center gap-8 mb-12 cursor-pointer`}
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <motion.div
        className="w-full md:w-1/2 cursor-pointer"
        animate={imageControls}
        onMouseEnter={() => setIsImagePaused(true)}
        onMouseLeave={() => setIsImagePaused(false)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover rounded-xl shadow-md cursor-pointer"
          draggable="false"
        />
      </motion.div>

      {/* Text Container */}
      <motion.div
        className="w-full md:w-1/2"
        animate={textControls}
        onMouseEnter={() => setIsTextPaused(true)}
        onMouseLeave={() => setIsTextPaused(false)}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-one mb-2">
          {title}
        </h2>
        <h3 className="text-lg font-semibold text-gray-600 mb-2">
          {subtitle}
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

const TracksSection = () => {
  return (
    <section className="container max-w-7xl mx-auto">
       <div className={`${banner_style} banner`}>
        <h1 className="text-slate-900 text-3xl sm:text-5xl font-bold">
          Conference Tracks
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        {tracks.map((track, index) => (
          <TrackCard key={index} {...track} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default TracksSection;