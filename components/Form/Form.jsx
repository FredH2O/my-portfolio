"use client";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [submitForm, setSubmitForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubmitForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`${submitForm.name}, ${submitForm.email}, ${submitForm.message}`);

    // clear
    setSubmitForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md p-6 mx-auto bg-white border rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={submitForm.name}
          onChange={handleChange}
          className="w-full p-3 mt-1 text-black border border-gray-300 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
          placeholder="Your Name"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={submitForm.email}
          onChange={handleChange}
          className="w-full p-3 mt-1 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-gray-400"
          placeholder="Your Email"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={submitForm.message}
          onChange={handleChange}
          className="w-full p-3 mt-1 text-black border border-gray-300 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
          rows="4"
          maxLength={500}
          placeholder="Your Message"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 mt-4 font-semibold text-white rounded-lg bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
