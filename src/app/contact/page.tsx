"use client";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

export default function Page() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM !);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-teal-500 mt-20">Contact Us</h1>
        <p className="text-gray-400 mt-2">We would love to hear from you!</p>
      </div>

      <div className="max-w-4xl mx-auto mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
        {state.succeeded ? (
          <p className="text-green-400 text-center text-lg">
            ✅ Thank you! Your message has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 bg-gray-700 text-white rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-lg transition disabled:bg-gray-500"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>

      <div className="max-w-4xl mx-auto mt-10 text-center">
        <h2 className="text-2xl font-semibold text-teal-500">Follow Us</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaFacebook /></a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
}
