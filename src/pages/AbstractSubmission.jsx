import React, { useState, useRef, useEffect } from "react"; // Added useEffect and useRef
import axios from "axios";
import { banner_style } from "../assets/styles";

const AbstractSubmission = () => {
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
    abstractTitle: "",
    abstract: null,
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
    const { name, type, value, files } = e.target;
    setForm({ ...form, [name]: type === "file" ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" }); // <-- ADDED: Clear previous status

    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        // Ensure 'abstract' file is appended correctly, handle null if not selected yet
        if (key === "abstract" && form[key]) {
          formData.append(key, form[key]);
        } else if (key !== "abstract") { // Append other fields
          formData.append(key, form[key]);
        }
      });

      await axios.post(
        "https://backend-code-6vqy.onrender.com/abstract-submission",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true, // It's good practice to include withCredentials if your backend needs it
        }
      );

      setStatus({ type: "success", message: "Abstract submitted successfully!" }); // <-- CHANGED: Replaced alert with status
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
        abstractTitle: "",
        abstract: null,
        interestedIn: "",
        websiteDomain: form.websiteDomain, // <-- Keep the websiteDomain for subsequent submissions
      });
    } catch (error) {
      console.error(error); // Keep console.error for debugging
      setStatus({ type: "error", message: error.response?.data?.message || error.message || "Submission failed. Please try again." }); // <-- CHANGED: Replaced alert with status
    }
    setLoading(false);
  };

  const presentationOptions = [
    "Food Security",
    "Food Science & Technology",
    "Crop Sciences",
    "Soil Science",
    "Food Toxicology",
    "Integrated Pest Management",
    "Sustainable Food Packaging",
    "AI in Food Production",
    "Food Safety & Traceability",
    "Nutraceuticals",
    "Personalized Nutrition",
    "Agriculture and Aquaculture",
    "Smart Irrigation Systems",
    "Plant-Based Proteins",
    "Food Waste Reduction",
    "Climate- Smart Agriculture",
    "Agroforestry",
    "Dairy Production",
  ];

  return (
    <div className="w-full mx-auto p-4">
      {/* Banner Section */}
      <div className={`${banner_style} w-full mx-auto abstract-banner`}>
        <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4">
          Abstract Submission
        </h1>
      </div>
      <h2 className="text-2xl font-bold mb-4">Abstract Submission</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="border p-2 rounded"
          />

          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="border p-2 rounded"
          />

          <input
            name="mobileNumber"
            value={form.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
            className="border p-2 rounded"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            required
            className="border p-2 rounded"
          />

          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            required
            className="border p-2 rounded"
          />

          <input
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="State"
            required
            className="border p-2 rounded"
          />

          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Country"
            required
            className="border p-2 rounded"
          />

          <input
            name="university"
            value={form.university}
            onChange={handleChange}
            placeholder="University / Industry"
            required
            className="border p-2 rounded"
          />

          <input
            name="affiliation"
            value={form.affiliation}
            onChange={handleChange}
            placeholder="Affiliation"
            required
            className="border p-2 rounded"
          />

          <input
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn"
            className="border p-2 rounded"
          />

          <input
            name="twitter"
            value={form.twitter}
            onChange={handleChange}
            placeholder="Twitter"
            className="border p-2 rounded"
          />
        </div>

        <select
          name="interestedIn"
          value={form.interestedIn}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Select Presentation Track</option>
          {presentationOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <input
          name="abstractTitle"
          value={form.abstractTitle}
          onChange={handleChange}
          placeholder="Abstract Title"
          required
          className="w-full border p-2 rounded"
        />

        <div className="w-full">
          <label
            htmlFor="abstract"
            className=" cursor-pointer px-4 py-2 bg-gray-100 text-one-700 rounded border border-gray-300 hover:bg-one-200 transition"
          >
            Upload only PDF
          </label>
          <input
            id="abstract"
            type="file"
            name="abstract"
            accept=".pdf"
            onChange={handleChange}
            required
            className="hidden"
          />
          {form.abstract && (
            <p className="mt-2 text-sm text-gray-600">
              Selected File: <strong>{form.abstract.name}</strong>
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-one text-white px-4 py-2 rounded"
        >
          {loading ? "Submitting..." : "Submit Abstract"}
        </button>

        <button className="bg-one ml-2 px-4 py-2 rounded">
          <a href="/sample_abstract.pdf" download="" className="text-white">
            Download Demo Abstract
          </a>
        </button>
      </form>
    </div>
  );
};

export default AbstractSubmission;
