import React, { useState } from "react";
import axios from "axios";
import { div } from "framer-motion/client";
import { banner_style } from "../assets/styles";
import { side } from "../assets";

const FakeContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", form);
      setSent(true);
      alert("Form submitted successfully.");
    } catch (err) {
      alert("Submission failed.");
    }
  };

  return (
    <di className="flex flex-row items-center justify-center">
      <div
  className="w-2/3 sm:w-1/3 h-[84vh]"
  style={{
    backgroundImage: `url(${side})`,  // Ensure 'side' is a valid image URL.
    backgroundPosition: 'center',
    backgroundSize: 'cover',  // Ensure the image covers the entire div
    backgroundRepeat: 'no-repeat',
  }}
>
    <h1 className="text-3xl text-white">Contact</h1>
</div>

    <form
      action="https://formsubmit.co/botchaindravathi@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto flex flex-col items-center p-6 space-y-4"
    >
      {/* <h2 className="text-2xl font-bold mb-2">Contact Us</h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
          className="border p-4 rounded-xl"
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
          className="border p-4 rounded-xl"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="border p-4 rounded-xl col-span-2"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="border p-4 rounded-xl col-span-2"
        />
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company / University"
          className="border p-4 rounded-xl col-span-2"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={4}
          required
          className="border p-4 rounded-xl col-span-2"
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white px-4 py-4 rounded-xl flex w-full text-center items-center justify-center"
      >
        Submit
      </button>
    </form>
    </di>
  );
};

export default FakeContactForm;