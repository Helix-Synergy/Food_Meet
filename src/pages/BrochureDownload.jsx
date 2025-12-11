import React, { useState, useRef, useEffect } from "react"; // Added useEffect and useRef
import axios from "axios";
import { banner_style } from "../assets/styles";

const BrochureDownload = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    address: "",
    state: "",
    country: "",
    university: "",
    email: "",
    affiliation: "",
    linkedin: "",
    twitter: "",
    interestedIn: "",
    websiteDomain: "", // <-- ADDED: New field for the website domain
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" }); // <-- ADDED: State for status messages

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
    const value =
      e.target.type === "file" ? e.target.files[0] : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" }); // Clear previous status

    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      const res = await axios.post(
        "https://backend-code-6vqy.onrender.com/brochure-download",
        formData, // Sending FormData
        {
          // headers: { "Content-Type": "multipart/form-data" }, // <-- REMOVED/COMMENTED: axios automatically sets this for FormData
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        setStatus({ type: "success", message: res.data.message || "Form submitted successfully. Brochure will now download." }); // <-- CHANGED: Replaced alert with status
        // Trigger brochure download
        const link = document.createElement("a");
        link.href = "/public_health_brochure.pdf"; // Make sure this path is correct
        link.setAttribute("download", "public_health_brochure.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset form, keeping the websiteDomain
        setForm({
          firstName: "",
          lastName: "",
          mobileNumber: "",
          address: "",
          state: "",
          country: "",
          university: "",
          email: "",
          affiliation: "",
          linkedin: "",
          twitter: "",
          interestedIn: "",
          websiteDomain: form.websiteDomain, // Keep the websiteDomain for subsequent submissions
        });
      } else {
        setStatus({ type: "error", message: res.data.message || "Failed to submit form. Please try again." }); // <-- CHANGED: Replaced alert with status
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: err.response?.data?.message || err.message || "Submission failed. Please try again.",
      }); // <-- CHANGED: Replaced alert with status
    } finally {
      setLoading(false);
    }
  };

  const presentationOptions = [
    "Paper Presentation",
    "Poster Presentation",
    "E-poster",
    "Exhibitor/sponsor",
    "Media Partner",
    "Webinar",
  ];

  return (
    <div className="w-full 2xl:max-w-[1280px] mx-auto justify-center items-center text-center">
      <div className={`${banner_style} w-full mx-auto brochure-banner`}>
        <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4">
          Brochure Download
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="min-w-4xl w-full mx-auto flex flex-col items-center p-6 space-y-4 mt-8"
      >
        {/* <-- ADDED: Status message display */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required className="border p-4 rounded-xl" />
          <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required className="border p-4 rounded-xl" />
          <input name="mobileNumber" value={form.mobileNumber} onChange={handleChange} placeholder="Mobile Number" required className="border p-4 rounded-xl" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="border p-4 rounded-xl" />
          <input name="address" value={form.address} onChange={handleChange} placeholder="Address" required className="border p-4 rounded-xl" />
          <input name="state" value={form.state} onChange={handleChange} placeholder="State" required className="border p-4 rounded-xl" />
          <input name="country" value={form.country} onChange={handleChange} placeholder="Country" required className="border p-4 rounded-xl" />
          <input name="university" value={form.university} onChange={handleChange} placeholder="University / Industry" required className="border p-4 rounded-xl" />
          <input name="affiliation" value={form.affiliation} onChange={handleChange} placeholder="Affiliation" required className="border p-4 rounded-xl" />
          <input name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="LinkedIn Profile URL" className="border p-4 rounded-xl" />
          <input name="twitter" value={form.twitter} onChange={handleChange} placeholder="Twitter Handle" className="border p-4 rounded-xl" />
          <select name="interestedIn" value={form.interestedIn} onChange={handleChange} required className="border p-4 rounded-xl col-span-2">
            <option value="">Interested in</option>
            {presentationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-one text-white px-8 py-4 rounded-xl w-full md:w-auto text-center mt-6"
        >
          {loading ? "Submitting..." : "Submit & Download Brochure"}
        </button>
      </form>
    </div>
  );
};

export default BrochureDownload;
