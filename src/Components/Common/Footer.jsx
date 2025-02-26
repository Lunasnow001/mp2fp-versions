/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = ({ border }) => {
  return (
    <footer className="bg-[#415268] py-10 text-white">
      <div className="mx-auto px-4 sm:px-6 border-b container">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]"
              : ""
          }`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Link
                to="/"
                className="font-medium text-gray-500 text-6xl cursor-pointer"
              >
                <span className="text-orange-400">MP</span>2FP
              </Link>
            </div>

            <div className="text-white/50 text-sm">
              <p className="text-white">
                We are a 3D engineering and computer graphic hub that is
                passionate about delivering high quality content and services.
                Whether your project is large or small, local or international,
                we can help.
              </p>
            </div>
          </div>

          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="font-semibold text-2xl">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-300 hover:text-white transition"
                  href="#"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-white transition"
                  href="#"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-white transition"
                  href="#"
                >
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-white transition"
                  href="#"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-white transition"
                  href="#"
                >
                  Our method
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="font-semibold text-2xl">About us</h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer">
                <div className="flex text-gray-300 hover:text-white transition">
                  <FaEnvelope className="mr-2 w-5 h-5" />
                  <Link to="/contact">Contact To mp2fp</Link>
                  {/* <FaEnvelope className="mr-2 w-4 h-4" /> contact@mp2fp.com */}
                </div>
              </li>
              <li className="cursor-pointer">
                <div className="flex text-gray-300 hover:text-white transition">
                  <GiWorld className="mr-2 w-5 h-5" />
                  <a
                    href="mailto:contact@mp2fp.com"
                    className="text-gray-300 hover:text-white"
                  >
                    www.mp2fp.com
                  </a>
                </div>
              </li>
              <li className="cursor-pointer">
                <div className="flex justify-between text-gray-300 transition">
                  <FaMapMarkerAlt className="mx-1 w-10 h-10" /> 18/33 The
                  Terrace Ramintra 65 Tahrang Bangkok Thailand 10220
                </div>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="font-semibold text-2xl">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-300 hover:text-white transition"
                  href="#"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-white transition"
                  to="terms-of-service"
                >
                  Terms of Condition
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-white transition"
                  to="privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-white transition"
                  to="refund-policy"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="font-semibold text-2xl">Social</h3>
            <ul className="flex gap-1">
              <li>
                <Link
                  className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition"
                  href="#"
                  aria-label="Twitter"
                >
                  <svg
                    className="fill-current w-10 h-10"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition"
                  href="#"
                  aria-label="Medium"
                >
                  <svg
                    className="fill-current w-10 h-10"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition"
                  href="#"
                  aria-label="Github"
                >
                  <svg
                    className="fill-current w-10 h-10"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
            <form className="">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 border-gray-300 border-t border-b border-l rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 w-full text-gray-400 text-sm transition-all"
                required
              />
              <button
                type="submit"
                className="bg-orange-400 hover:bg-blue-600 mt-2 px-5 py-3 rounded-md text-white text-sm transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-6 text-white/80 text-sm text-center">
        &copy; 2024 - {new Date().getFullYear()}{" "}
        <span className="text-orange-400">MP</span>2FP - All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
