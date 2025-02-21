/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Mapimg from "../assets/Map.jpg";
import { X } from "lucide-react";

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-[#415268] py-16 text-white">
        <div className="mx-auto px-4 container">
          <h1 className="mb-4 font-bold text-4xl">Contact Us</h1>
          <p className="text-gray-300">
            Get in touch with our team. We&asop;re here to help!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto px-4 py-12 container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-sm">
            <Link to="/" className="text-orange-400 hover:text-orange-500">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Contact Us</span>
          </div>
          <div className="gap-12 grid grid-cols-1 md:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-white shadow-lg p-8 rounded-lg">
              <h2 className="mb-6 font-semibold text-2xl">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="text-orange-400">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Our Location</h3>
                    <p className="text-gray-600">
                      18/33 The Terrace Ramintra 65 <br />
                      Tahrang, Bangkok <br />
                      Thailand 10220
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="text-orange-400">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Email Us</h3>
                    <a
                      href="mailto:contact@mp2fp.com"
                      className="text-gray-600 hover:text-orange-400"
                    >
                      contact@mp2fp.com
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start space-x-4">
                  <div className="text-orange-400">
                    <GiWorld className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Website</h3>
                    <a
                      href="https://www.mp2fp.com"
                      className="text-gray-600 hover:text-orange-400"
                    >
                      www.mp2fp.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="text-orange-400">
                    <FaPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Call Us</h3>
                    <a
                      href="tel:+66123456789"
                      className="text-gray-600 hover:text-orange-400"
                    >
                      +66 12 345 6789
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden">
                {/* Popup */}
                <img
                  src={Mapimg}
                  alt="Map placeholder"
                  className="hover:opacity-80 transition cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />

                {/* Modal Popup */}
                <Dialog
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                  className="z-50 fixed inset-0 flex justify-center items-center bg-black/50"
                >
                  <Dialog.Panel className="relative max-w-3xl">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="top-2 right-2 absolute bg-black/50 p-2 rounded-full text-white"
                    >
                      <X size={20} />
                    </button>

                    {/* Zoomable pop-up pictures */}
                    <Zoom>
                      <img
                        src={Mapimg}
                        alt="Full Map"
                        className="shadow-lg rounded-lg w-full h-auto"
                      />
                    </Zoom>
                  </Dialog.Panel>
                </Dialog>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-lg p-8 rounded-lg">
              <h2 className="mb-6 font-semibold text-2xl">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 font-medium text-gray-700 text-sm"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="px-4 py-2 border border-gray-300 focus:border-transparent rounded-md focus:ring-2 focus:ring-orange-400 w-full"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 font-medium text-gray-700 text-sm"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-4 py-2 border border-gray-300 focus:border-transparent rounded-md focus:ring-2 focus:ring-orange-400 w-full"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-1 font-medium text-gray-700 text-sm"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="px-4 py-2 border border-gray-300 focus:border-transparent rounded-md focus:ring-2 focus:ring-orange-400 w-full"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 font-medium text-gray-700 text-sm"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="px-4 py-2 border border-gray-300 focus:border-transparent rounded-md focus:ring-2 focus:ring-orange-400 w-full"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-orange-400 hover:bg-orange-500 px-6 py-3 rounded-md w-full font-medium text-white transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
