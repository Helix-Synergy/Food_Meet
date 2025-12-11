import React from "react";
import { banner_style } from "../assets/styles";

import {
  Leaf,
  Star,
  Calendar,
  BadgeCheck,
  WheatIcon as Corn,
  FlaskConical,
  Sun,
  Recycle,
  Globe,
  Wheat,
  LineChart,
} from "lucide-react";

// const data = {
//   event: {
//     title: "About Event",
//     date: "25–27 Nov 2025",
//     location: "Valencia, Spain",
//     organizer: "Helix Conferences",
//     description: [
//       "Helix Conferences warmly invites you to the World Agriculture & Food Science Conclave – FOODMEET 2025, taking place from November 25 to 27, 2025, in the vibrant city of Valencia, Spain. This groundbreaking event is dedicated to fostering scientific innovation and discovery, with a focus on the theme, “Advancing Agricultural and Food Innovations for Global Sustainability.”",
//       "The summit provides a dynamic platform for researchers, industry leaders, and thought pioneers to share insights and advancements in agriculture and food sciences. Attendees can expect engaging discussions, expert-led sessions, and valuable networking opportunities.",
//     ],
//   },
//   themes: [
//     {
//       icon: Leaf,
//       title: "Sustainable Agriculture",
//       description: "Practices for Ecological farming and sustainability.",
//     },
//     {
//       icon: Corn,
//       title: "Crop Diversity & Agroecology",
//       description: "Enhancing Biodiversity and resilience in agriculture.",
//     },
//     {
//       icon: FlaskConical,
//       title: "Food Innovation & Safety",
//       description: "Scientific Advancements in Food quality and safety.",
//     },
//     {
//       icon: Sun,
//       title: "Climate-Smart Agriculture",
//       description: "Adaptation Strategies for a Changing Climate.",
//     },
//     {
//       icon: Recycle,
//       title: "Circular Economy in Agri-food",
//       description: "Sustainable models for Waste and Resource management.",
//     },
//     {
//       icon: Globe,
//       title: "Global Food Security",
//       description: "Strategies to Feed a growing population sustainably.",
//     },
//     {
//       icon: Wheat,
//       title: "Precision Agriculture",
//       description: "Technology-driven solutions for Farm productivity.",
//     },
//     {
//       icon: LineChart,
//       title: "Blockchain & Supply Chain",
//       description: "Transparency and efficiency in Agri-food logistics.",
//     },
//   ],
//   audience: [
//     "Agricultural Scientists & Researchers",
//     "Food Technologists & Engineers",
//     "Policy Makers & Government Officials",
//     "Environmental Scientists",
//     "Agri-tech Entrepreneurs",
//     "Sustainable Development Professionals",
//     "Students & Early-Career Researchers",
//     "NGOs & International Development Agencies",
//   ],
//   highlights: [
//     {
//       title: "Keynote Speakers",
//       description: "Renowned voices in agriculture and food science.",
//     },
//     {
//       title: "Workshops & Seminars",
//       description: "Hands-on learning and expert-led discussions.",
//     },
//     {
//       title: "Exhibition",
//       description: "Showcase of innovations in agri-food technology.",
//     },
//     {
//       title: "Networking Opportunities",
//       description: "Connect with global leaders in agri-food sectors.",
//     },
//     {
//       title: "Sustainability Focus",
//       description: "Programs aligned with UN SDGs for agriculture.",
//     },
//     {
//       title: "Market Insights",
//       description: "Explore trends and forecasts for agricultural markets.",
//     },
//     {
//       title: "Collaboration Forums",
//       description: "Facilitating joint ventures and partnerships.",
//     },
//     {
//       title: "Accredited Learning",
//       description: "Earn CPD/CME credits by attending the conferences.",
//     },
//   ],
//   dates: {
//     eventDate: "25th November",
//     venue: "Valencia, Spain",
//     registrationDeadline: "20th November",
//   },
//   callForPapers:
//     "Researchers, scientists, and professionals in agriculture and food sciences are invited to submit abstracts and presentations. Share your innovations with a global audience to support sustainable development and food security.",
//   registration: {
//     note: "Early Bird Registration is Now Open!",
//     general: "[Insert Price]",
//     student: "[Insert Price]",
//   },
// };

const data = {
  event: {
    title: "About Event",
    date: "Apr 23-24 | 2026",
    location: "Barcelona,Spain",
    organizer: "Helix Conferences",
    description: [
      "Helix Conferences warmly invites you to the World Agriculture & Food Science Conclave – FOODMEET 2025, taking place from November 25 to 27, 2025, in the vibrant city of Valencia, Spain. This groundbreaking event is dedicated to fostering Scientific Innovation and Discovery, with a focus on the theme, “Advancing Agricultural and Food Innovations for Global Sustainability.”",
      "The Summit provides a dynamic platform for Researchers, Industry Leaders, and Thought Pioneers to share insights and advancements in Agriculture and Food Sciences. Attendees can expect engaging discussions, Expert-Led Sessions, and valuable Networking Opportunities.",
    ],
  },
  themes: [
    {
      icon: Leaf,
      title: "Sustainable Agriculture",
      description: "Practices for Ecological Farming and Sustainability.",
    },
    {
      icon: Corn,
      title: "Crop Diversity & Agroecology",
      description: "Enhancing Biodiversity and Resilience in Agriculture.",
    },
    {
      icon: FlaskConical,
      title: "Food Innovation & Safety",
      description: "Scientific Advancements in Food Quality and Safety.",
    },
    {
      icon: Sun,
      title: "Climate-Smart Agriculture",
      description: "Adaptation Strategies for a Changing Climate.",
    },
    {
      icon: Recycle,
      title: "Circular Economy in Agri-Food",
      description: "Sustainable Models for Waste and Resource Management.",
    },
    {
      icon: Globe,
      title: "Global Food Security",
      description: "Strategies to Feed a Growing Population Sustainably.",
    },
    {
      icon: Wheat,
      title: "Precision Agriculture",
      description: "Technology-Driven Solutions for Farm Productivity.",
    },
    {
      icon: LineChart,
      title: "Blockchain & Supply Chain",
      description: "Transparency and Efficiency in Agri-Food Logistics.",
    },
  ],
  audience: [
    "Agricultural Scientists & Researchers",
    "Food Technologists & Engineers",
    "Policy Makers & Government Officials",
    "Environmental Scientists",
    "Agri-Tech Entrepreneurs",
    "Sustainable Development Professionals",
    "Students & Early-Career Researchers",
    "NGOs & International Development Agencies",
  ],
  highlights: [
    {
      title: "Keynote Speakers",
      description: "Renowned Voices in Agriculture and Food Science.",
    },
    {
      title: "Workshops & Seminars",
      description: "Hands-On Learning and Expert-Led Discussions.",
    },
    {
      title: "Exhibition",
      description: "Showcase of Innovations in Agri-Food Technology.",
    },
    {
      title: "Networking Opportunities",
      description: "Connect with Global Leaders in Agri-Food Sectors.",
    },
    {
      title: "Sustainability Focus",
      description: "Programs Aligned with UN SDGs for Agriculture.",
    },
    {
      title: "Market Insights",
      description: "Explore Trends and Forecasts for Agricultural Markets.",
    },
    {
      title: "Collaboration Forums",
      description: "Facilitating Joint Ventures and Partnerships.",
    },
    {
      title: "Accredited Learning",
      description: "Earn CPD/CME Credits by Attending the Conferences.",
    },
  ],
  dates: {
    eventDate: "Apr 23-24 | 2026",
    venue: "Barcelona | Spain",
    registrationDeadline: "16th April",
  },
  callForPapers:
    "Researchers, Scientists, and Professionals in Agriculture and Food Sciences are invited to submit Abstracts and Presentations. Share your Innovations with a Global Audience to support Sustainable Development and Food Security.",
  registration: {
    note: "Early Bird Registration is Now Open!",
    general: "[Insert Price]",
    student: "[Insert Price]",
  },
};

const AboutMediclave = () => {
  return (
    <div className="w-full 2xl:max-w-[1280px] mx-auto justify-center items-center text-center">
      <div className={`${banner_style} w-full about-banner`}>
        <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4 z-10">
          {data.event.title}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl mt-2 font-bold text-one py-2">
          Empowering Global Collaboration Through Conferences
        </h1>
        <p className="text-center text-gray-600 mb-6 text-center">
          <strong>{data.event.date}</strong> | {data.event.location}
        </p>

        <p className="mb-6 text-lg leading-relaxed text-center w-full max-w-5xl text-center">
          At Helix Conferences, we are passionate about bringing people together
          to share Knowledge, drive Innovation, and solve Global Challenges. As
          experienced{" "}
          <a
            href="https://helixconferences.com/buy-a-ticket"
            target="blank"
            className="font-bold text-one"
          >
            International Conference Organizers,
          </a>{" "}
          we specialize in hosting and promoting World-Class events across
          disciplines with a strong emphasis on Food and Agriculture.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-center w-full max-w-5xl">
          Since our inception, we’ve helped thousands of professionals connect
          through purposeful Conferences that foster Innovation, Partnerships,
          and sustainable development. From Academic summits to Industry expos,
          we curate experiences that go beyond borders.
        </p>
      </div>

      {/* Themes Section */}
      <section className="mb-16 text-center w-full px-12">
        <h2 className="text-4xl my-8 font-bold text-one">Who Can Attend...</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.themes.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition"
            >
              <Icon className="h-10 w-10 text-one mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">
                {description}
              </h3>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-16 text-center w-full px-12">
        <h2 className="text-4xl font-bold text-one mb-8">Event Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full items-start">
          {data.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 text-sm text-gray-800 text-left flex items-start shadow-sm "
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-3 mt-1" />
              <div className="flex flex-wrap items-start">
                <h3 className="font-semibold whitespace-nowrap mr-1">
                  {highlight.title} –
                </h3>
                <p className="text-[14px] text-gray-600 flex-1">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dates Section */}
      <section className="mb-16 text-center w-full md:px-12 px-4">
        <h2 className="text-4xl font-bold text-one mb-8">Important Dates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-sm">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Calendar className="w-6 h-6 text-one mb-2" />
            <strong>Event Date</strong>
            <p>{data.dates.eventDate}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Globe className="w-6 h-6 text-one mb-2" />
            <strong>Proposed Venue</strong>
            <p>{data.dates.venue}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <BadgeCheck className="w-6 h-6 text-one mb-2" />
            <strong>Registration Deadline</strong>
            <p>{data.dates.registrationDeadline}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMediclave;
