"use client";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [submitForm, setSubmitForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubmitForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://formspree.io/f/mnnpjeal", {
        name: submitForm.name,
        email: submitForm.email,
        message: submitForm.message,
      });

      setStatus("success");
      setSubmitForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="relative">
      {status === "success" && (
        <div className="fixed inset-0 flex items-center justify-center p-1 bg-slate-800/95">
          <div className="flex flex-col max-w-md p-3 space-y-3 text-black bg-white rounded">
            <h2 className="text-3xl font-bold">Message Sent Successfully</h2>
            <p className="text-lg text-slate-700">
              Thank you for reaching out! I will check your message as soon as
              possible and respond at the earliest convenience.
            </p>

            <button
              onClick={() => setStatus(null)}
              className="self-end px-4 py-1 text-white bg-red-500 border-black rounded cursor-pointer hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="fixed inset-0 flex items-center justify-center p-1 bg-slate-800/95">
          <div className="flex flex-col max-w-md p-3 space-y-3 text-black bg-white rounded">
            <h2 className="text-3xl font-bold">Oops! Something went wrong.</h2>
            <p className="text-lg text-slate-700">Please try again later.</p>
            <button
              onClick={() => setStatus(null)}
              className="self-end px-4 py-1 text-white bg-red-500 border rounded cursor-pointer hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

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
    </div>
  );
};

export default Form;
