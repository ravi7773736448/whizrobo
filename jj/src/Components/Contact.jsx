import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFileAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 flex flex-col">
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Contact WhizRobo
        </h1>
        <p className="text-gray-600 text-lg">
          We'd love to hear from you! Reach out for queries, support, or collaboration.
        </p>
      </div>

      {/* Contact Info + Form Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
          <div className="space-y-6 text-gray-700 text-lg">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-orange-500 text-2xl transition-transform hover:scale-110" />
              <span>+91-896-871-4000, +91-946-421-4000</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-orange-500 text-2xl transition-transform hover:scale-110" />
              <span>info@whizrobo.com, support@whizrobo.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-orange-500 text-2xl transition-transform hover:scale-110" />
              <span>WHIZROBO Private Limited, India</span>
            </div>
            <div className="flex items-center gap-4">
              <FaFileAlt className="text-orange-500 text-2xl transition-transform hover:scale-110" />
              <span>
                <span className="underline cursor-pointer">Privacy Policy</span> | 
                <span className="underline cursor-pointer ml-1">Terms & Conditions</span>
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Send Us a Message</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold px-5 py-3 rounded-xl hover:scale-105 hover:shadow-lg transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500">
        Powered by <span className="font-semibold text-gray-700">WHIZROBO</span>
      </footer>
    </div>
  );
};

export default Contact;
