import React, { useState } from "react";

const faqData = [
  {
    question: "What is FOODMEET 2025?",
    answer:
      "FOODMEET 2025, officially known as the “World Agriculture & Food Science Conclave” (FOODMEET-2025), is a premier International conference organized by Helix Conferences. The event aims to bring together Food Science Professionals, Researchers, and Industry leaders to discuss and explore Advancements in Food Science & Technology.",
  },
  {
    question: "When and where will the FOODMEET 2025 take place?",
    answer: "The conference will be held in Valencia, Spain from November 25–27, 2025.",
  },
  {
    question: "What are the highlights of FOODMEET 2025?",
    answer: [
      "Networking opportunities with Industry leaders and Food Science Professionals.",
      "Interactive Workshops and Sessions.",
      "Exhibitions showcasing Innovations, Products, and Services.",
    ],
  },
  {
    question: "What conference tracks are featured at the Expo?",
    answer: "You can visit the session tracks at https://foodmeet.helixconferences.com/global-foodmeet-summit-tracks",
  },
  {
    question: "How can I showcase my products and services or explore sponsorship opportunities?",
    answer:
      "For showcasing Products, Services, or exploring Sponsorship opportunities, please contact us directly at hello@helixconferences.com.",
  },
  {
    question: "How can I submit an abstract for the conference?",
    answer:
      "You can submit your abstract by using this link: https://foodmeet.helixconferences.com/abstract-submission/",
  },
  {
    question: "Will an invitation letter be provided for visa purposes?",
    answer:
      "Yes, we will provide an Invitation letter after successful registration. Contact us at hello@helixconferences.com for visa documentation.",
  },
  {
    question: "Where do I stay if I come for the conference?",
    answer:
      "We will be providing you accommodation at the hotel we proposed. You can directly contact us at hello@helixconferences.com.",
  },
  {
    question: "What about my travel?",
    answer: "We can assist with affordable flight booking options for your trip to Spain.",
  },
  {
    question: "Are travel, hotel fees, and additional services covered by the event organizers?",
    answer:
      "While the event does not cover Travel, Hotel fees, or additional services, we can assist you with booking accommodation, flights, and provide options for sightseeing tours. You will need to cover these costs separately.",
  },
  {
    question: "How will I receive my invoice?",
    answer:
      "Invoices will be sent to the email address provided during registration. Please check your inbox and spam folder for your invoice.",
  },
  {
    question: "What materials will I receive at the conference?",
    answer:
      "You will receive a Conference kit which includes a name badge, a conference booklet, and a program guide upon arrival. Your name badge grants access to all sessions of the event.",
  },
  {
    question: "How long can I present my topic?",
    answer:
      "Presentation slots typically range from 15 to 25 minutes. Specific times will be assigned once your abstract is accepted.",
  },
  {
    question: "Who will be attending the FOODMEET 2025?",
    answer:
      "This event is expected to attract a diverse group of professionals from the Global Food Science and Agriculture community.",
  },
  {
    question: "How many people usually attend the Forum?",
    answer:
      "We anticipate over 200 attendees, including Participants, Speakers, and Exhibitors.",
  },
  {
    question: "Can I register for multiple speaking slots?",
    answer:
      "Yes, you can register for multiple speaking slots if each topic is distinct and relevant to the conference tracks. Please submit separate abstracts for each session.",
  },
  {
    question: "Are keynote speaking opportunities available?",
    answer:
      "Yes, keynote speaking slots are available. If you are interested in a Keynote position, please specify this in your abstract submission.",
  },
  {
    question: "What does being a Speaker involve?",
    answer:
      "Speakers are expected to present on relevant topics, provide valuable insights, and engage with the audience. Detailed guidelines will be provided upon acceptance.",
  },
  {
    question: "Is there a cost associated with participation as a Speaker or Delegate?",
    answer:
      "Yes, there is a registration fee for all participants, including speakers. Check the 'Buy A Ticket' section on our website for pricing details.",
  },
  {
    question: "How can I find out the schedule of presentations?",
    answer:
      "The schedule will be available on our website. You can download it at https://foodmeet.helixconferences.com/international-foodmeet-event-schedule/ to plan your participation.",
  },
  {
    question: "Can I see the session list before the event?",
    answer:
      "Yes, the full confirmed agenda, including sessions along with speaker details, will be posted on our website before the event.",
  },
  {
    question: "Can I purchase tickets on-site?",
    answer:
      "While we encourage pre-registration, a limited number of tickets may be available at the event. Registering in advance is recommended.",
  },
  {
    question: "How can I book accommodation for the Expo?",
    answer: "Contact us directly at hello@helixconferences.com for assistance with booking.",
  },
  {
    question: "Are meals included with my registration?",
    answer:
      "Meals depend on your registration type. Various dining options will be available at the venue. For a comprehensive meal package, please contact us at hello@helixconferences.com.",
  },
  {
    question:
      "Do you provide a whole package for flight booking, travel, sightseeing, hotel, and food?",
    answer:
      "Yes, we offer assistance with comprehensive packages that may include travel, hotel, meals, and sightseeing. Contact us to explore available options.",
  },
];

const FAQPage = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const formatAnswer = (answer) => {
    if (typeof answer !== "string") return answer;

    // Convert URLs to anchor tags
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

    const parts = answer.split(/(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g);

    return parts.map((part, i) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {part}
          </a>
        );
      }
      if (emailRegex.test(part)) {
        return (
          <a key={i} href={`mailto:${part}`} className="text-blue-600 underline">
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
            <div
              className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
              onClick={() => toggleItem(index)}
            >
              <h3 className="text-lg font-semibold text-black">
                {index + 1}. {faq.question}
              </h3>
              <button
                className={`p-2 rounded-full hover:bg-gray-100 transition-transform duration-200 ${
                  expandedItems[index] ? "transform rotate-45" : ""
                }`}
                aria-label={expandedItems[index] ? "Collapse answer" : "Expand answer"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-one"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
            {expandedItems[index] && (
              <div className="p-4 border-t">
                {Array.isArray(faq.answer) ? (
                  <ul className="list-disc pl-5 text-gray-700">
                    {faq.answer.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">{formatAnswer(faq.answer)}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
