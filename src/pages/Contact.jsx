import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { banner_style } from "../assets/styles";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    websiteDomain: "", // <-- ADDED: New field for the website domain
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const contactFormRef = useRef(null);
  const [contactFormHeight, setContactFormHeight] = useState(0);

  useEffect(() => {
    if (contactFormRef.current) {
      setContactFormHeight(contactFormRef.current.offsetHeight);
    }
  }, [loading, status, form]);

  // <-- ADDED: useEffect to set the websiteDomain on component mount
  useEffect(() => {
    // Check if window object is available (for client-side rendering)
    if (typeof window !== 'undefined') {
      setForm(prevForm => ({
        ...prevForm,
        websiteDomain: window.location.hostname // Automatically captures the domain of the current website
      }));
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // <-- MODIFIED: Convert form state to FormData for multipart/form-data submission
      const formData = new FormData();
      for (const key in form) {
        formData.append(key, form[key]);
      }

      const response = await axios.post(
        "https://backend-code-6vqy.onrender.com/contact",
        formData, // <-- CHANGED: Send FormData instead of raw form object
        { 
          // <-- CHANGED: Content-Type header to multipart/form-data
          // axios automatically sets the correct 'Content-Type' with boundary for FormData
          // so removing the explicit 'Content-Type' is often best, but if you must keep it,
          // ensure it's 'multipart/form-data' not 'application/json'.
          // However, axios usually handles this best when you pass FormData directly.
          // For clarity, I'm removing the explicit header here, as it's often problematic
          // when manually set with FormData. If you need it, uncomment the line below.
          // headers: { "Content-Type": "multipart/form-data" }, // This line would be re-added if absolutely necessary, but axios usually handles it.
          withCredentials: true, 
        }
      );
      setStatus({
        type: "success",
        message: response.data.message || "Form submitted successfully.",
      });
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        websiteDomain: form.websiteDomain, // Keep the websiteDomain if user doesn't re-enter it
      });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err.response?.data?.message || err.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  const webinars = [
    "World Gene Therapy Summit",
    "Global Stemcell Meet",
    "International Immunotherapy Conclave",
    "International Biosensors Summit",
    "Global Battery Tech Summit",
    "World Bioelectronics Conclave",
    "Global Vaccine Technology Summit",
    "World Genomices Conclave",
    "Global Proteomics Summit",
    "Global Bigdata Summit",
    "World Data Analytics Concalve",
    "Global Block Chain Summit",
    "Global Green Chemistry Conclave",
    "World Biofuels Conclave",
    "Global Fermentation Technology Summit",
    "World Symposia on Food Chemistry",
    "World Renewable Energy Conclave",
    "Global Green Hydrogen Summit",
    "International Quantum Computing Conclave",
    "Global Biomechanics Summit",
    "Global Cybersecurity Summit",
    "Global Symposia on Metavers",
    "International Machine Learning Summit",
    "Global Conclave on Augmented Reality",
    "Global Summit on Nano Engineering & Smart Technology",
    "World Nano Summit",
    "International Graphene Conclave",
    "International Conference on Cloud Computing",
    "International Artificial Intelligence & Robotics Conclave",
    "Global Aerospace Engineering Conclave",
  ];

  const hybridConferences = [
    "International Pharmacectical Summit",
    "World Pharmacy Conclave",
    "Global Conclave on Forensic Sciences",
    "World Nursing Summit",
    "World Medical-Surgical Nursing Summit",
    "International Critical Care Nursing Conclave",
    "World Summit on Environmental Chemistry",
    "International Conferences on Biochemistry",
    "International Chemistry Conclave",
    "18th Global Medical Conclave",
    "International Health Sciences Conclave",
    "World Environmental Medicine Summit",
    "22nd World Agriculture & Food Sciences Conclave",
    "Global Agricultural Technology Conclave",
    "International Food Technology Congress",
    "Global Physics Summit",
    "International Material Sciences Summit",
    "World Earth Science Summit",
    "12th International Science & Technology Summit",
    "International Conferences on Biomedical Engineering",
    "World Summit on Industrial Engineering",
    "Global Nanotechnology Summit",
    "International Nanomaterials Conclave",
    "World Nanomedicine Summit",
    "Global Bioinformatics summit",
    "World Biofuel Congress",
    "International Biotechnology Conclave",
    "Global Stem Cell & Regenerative Medicine Summit",
    "World Summit on Artificial Intelligence in Healthcare",
    "International Conference on Climate Engineering",
  ];

  const infiniteWebinars = [...webinars, ...webinars];
  const infiniteHybridConferences = [...hybridConferences, ...hybridConferences];

  const listScrollAreaHeight = contactFormHeight
    ? `calc(${contactFormHeight}px - 3.5rem - 2rem)`
    : "400px";

  return (
    <div className="w-full 2xl:max-w-[1280px] mx-auto justify-center items-center text-center">
      <div className={`${banner_style} contact-banner mx-auto `}> {/* Changed to style prop if banner_style is an object */}
        <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold">
          Contact Us
        </h1>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-6 py-4 items-stretch justify-center md:px-10 px-4">
        {/* Left Side - Webinars & Conferences */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-4 py-8 bg-white border border-gray-200 rounded-xl shadow-lg">
          <h1 className="text-black text-3xl sm:text-4xl font-bold text-center">
            Upcoming Conferences
          </h1>
          <div
            className="w-full flex flex-col py-6 md:flex-row gap-6 "
            // style={{
            //   minHeight: contactFormHeight ? `${contactFormHeight}px` : "auto",
            // }}
          >
            {/* Webinars */}
            <div className="w-full md:w-1/2 h-[70vh] bg-white border border-one shadow-md rounded-xl overflow-hidden">
              <h2 className="bg-one text-white text-xl font-bold py-3 text-center z-10 relative">
                Webinars
              </h2>
              <div
                className="relative overflow-y-auto scrollbar-hide"
                style={{ maxHeight: listScrollAreaHeight }}
                onScroll={(e) => {
                  const scrollContainer = e.currentTarget;
                  clearTimeout(scrollContainer.resumeTimeout);
                  const inner = scrollContainer.querySelector(".scrolling-list");
                  if (inner) inner.style.animationPlayState = "paused";
                  scrollContainer.resumeTimeout = setTimeout(() => {
                    if (inner) inner.style.animationPlayState = "running";
                  }, 3000);
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.querySelector(".scrolling-list").style.animationPlayState = "paused")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.querySelector(".scrolling-list").style.animationPlayState = "running")
                }
              >
                <div className="scrolling-list">
                  {infiniteWebinars.map((item, idx) => (
                    <a
                      key={`webinar-${idx}`}
                      href="https://helixconferences.com/hybrid-events.php"
                      className="block text-black text-base py-2 px-4 bg-white shadow rounded my-1 mx-2 hover:bg-gray-50 transition cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Hybrid Conferences */}
            <div className="w-full md:w-1/2 bg-white border border-one shadow-md rounded-xl overflow-hidden h-[70vh]">
              <h2 className="bg-one/75 text-white text-xl font-bold py-3 text-center z-10 relative">
                Hybrids
              </h2>
              <div
                className="relative overflow-y-auto scrollbar-hide"
                style={{ maxHeight: listScrollAreaHeight }}
                onScroll={(e) => {
                  const scrollContainer = e.currentTarget;
                  clearTimeout(scrollContainer.resumeTimeout);
                  const inner = scrollContainer.querySelector(".scrolling-list");
                  if (inner) inner.style.animationPlayState = "paused";
                  scrollContainer.resumeTimeout = setTimeout(() => {
                    if (inner) inner.style.animationPlayState = "running";
                  }, 3000);
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.querySelector(".scrolling-list").style.animationPlayState = "paused")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.querySelector(".scrolling-list").style.animationPlayState = "running")
                }
              >
                <div className="scrolling-list">
                  {infiniteHybridConferences.map((item, idx) => (
                    <a
                      key={`hybrid-${idx}`}
                      href="https://helixconferences.com/hybrid-events.php"
                      className="block text-black text-base py-2 px-4 bg-white shadow rounded my-1 mx-2 hover:bg-gray-50 transition cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div
          ref={contactFormRef}
          className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-lg h-full"
        >
          <h1 className="text-black text-3xl sm:text-4xl font-bold py-8">Contact Us</h1>

          <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col space-y-4 py-6">
            {status.message && (
              <div
                className={`w-full p-4 rounded-lg
                  text-white text-center ${
                  status.type === "success" ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {status.message}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="border border-gray-300 p-3 rounded"
              />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="border border-gray-300 p-3 rounded"
              />
            </div>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="border border-gray-300 p-3 rounded"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="border border-gray-300 p-3 rounded"
            />

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company / University"
              className="border border-gray-300 p-3 rounded"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              required
              className="border border-gray-300 p-3 rounded"
            />

            <button
              type="submit"
              className="bg-one w-[120px] self-center text-white px-6 py-2 rounded-lg hover:opacity-80 transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }
        .scrolling-list {
          display: flex;
          flex-direction: column;
          animation: scrollUp 150s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
