/* eslint-disable no-unused-vars */
import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import Search from "./Search";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaNewspaper } from "react-icons/fa6";
import { MdOutlineLibraryAdd } from "react-icons/md";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const location = useLocation();

  const toggNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="flex justify-between items-center mx-auto px-6 py-4 container">
        {/* Logo Left */}
        <div>
          <Link
            to="/"
            className="font-medium text-gray-500 text-2xl underline underline-offset-4 cursor-pointer"
          >
            <span className="text-orange-400">MP</span>2FP
          </Link>
        </div>
        {/* Center - Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/collections/all"
            className={`font-medium text-gray-700 hover:text-black text-sm hover:underline hover:underline-offset-4 uppercase ${
              isActivePath("/collections/all")
                ? "underline underline-offset-4"
                : ""
            }`}
          >
            All
          </Link>
          <Link
            to="/ufpage"
            className={`font-medium text-gray-700 hover:text-orange-400 text-sm hover:underline hover:underline-offset-4 uppercase ${
              isActivePath("/ufpage")
                ? "underline underline-offset-4 text-orange-400"
                : ""
            }`}
          >
            UF
          </Link>
          <Link
            to="/fifpage"
            className={`font-medium text-gray-700 hover:text-orange-400 text-sm hover:underline hover:underline-offset-4 uppercase ${
              isActivePath("/fifpage")
                ? "underline underline-offset-4 text-orange-400"
                : ""
            }`}
          >
            FIF
          </Link>
          <Link
            to="/ffpage"
            className={`font-medium text-gray-700 hover:text-orange-400 text-sm hover:underline hover:underline-offset-4 uppercase ${
              isActivePath("/ffpage")
                ? "underline underline-offset-4 text-orange-400"
                : ""
            }`}
          >
            FF
          </Link>
          <Link
            to="/faipage"
            className={`font-medium text-gray-700 hover:text-orange-400 text-sm hover:underline hover:underline-offset-4 uppercase ${
              isActivePath("/faipage")
                ? "underline underline-offset-4 text-orange-400"
                : ""
            }`}
          >
            FAI
          </Link>
          <Link
            to="/sppage"
            className={`font-medium text-gray-700 hover:text-orange-400 text-sm hover:underline hover:underline-offset-4 uppercase ${
              isActivePath("/sppage")
                ? "underline underline-offset-4 text-orange-400"
                : ""
            }`}
          >
            SP
          </Link>
        </div>

        {/* Right - Icon Bar  */}
        <div className="flex items-center space-x-4">
          <Link
            to="/admin"
            className="block bg-black px-2 rounded text-white text-sm"
          >
            Admin
          </Link>
          <Link to="/profile" className="hover:text-black">
            <div className="relative">
              <img
                className="border hover:border-orange-400 rounded-full w-8 h-8"
                src="https://marketplace.wganforum.com/wp-content/uploads/2020/06/landing-logo-2.jpg"
                alt="Profile"
              />
              <span className="top-0 left-6 absolute bg-green-500 border-2 border-white dark:border-gray-800 rounded-full w-3.5 h-3.5"></span>
            </div>
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <MdOutlineLibraryAdd className="w-6 h-6 text-gray-700" />
            <span className="-top-1 absolute bg-mp2fp-red px-2 py-0.5 rounded-full text-white text-xs">
              2
            </span>
          </button>

          {/* Search */}
          <div className="overflow-hidden">
            <Search />
          </div>

          <button onClick={toggNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>

      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggNavDrawer}>
            <IoMdClose className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="mb-4 font-semibold text-xl">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="/collections/all"
              onClick={toggNavDrawer}
              className={`block text-gray-600 hover:text-black hover:underline-offset-4 ${
                isActivePath("/collections/all")
                  ? "underline underline-offset-4"
                  : ""
              }`}
            >
              All
            </Link>
            <Link
              to="/ufpage"
              onClick={toggNavDrawer}
              className={`block text-gray-600 hover:text-black hover:underline-offset-4 ${
                isActivePath("/ufpage")
                  ? "underline underline-offset-4 text-orange-400"
                  : ""
              }`}
            >
              UF
            </Link>
            <Link
              to="/fifpage"
              onClick={toggNavDrawer}
              className={`block text-gray-600 hover:text-black hover:underline-offset-4 ${
                isActivePath("/fifpage")
                  ? "underline underline-offset-4 text-orange-400"
                  : ""
              }`}
            >
              FIF
            </Link>
            <Link
              to="/ffpage"
              onClick={toggNavDrawer}
              className={`block text-gray-600 hover:text-black hover:underline-offset-4 ${
                isActivePath("/ffpage")
                  ? "underline underline-offset-4 text-orange-400"
                  : ""
              }`}
            >
              FF
            </Link>
            <Link
              to="/faipage"
              onClick={toggNavDrawer}
              className={`block text-gray-600 hover:text-black hover:underline-offset-4 ${
                isActivePath("/faipage")
                  ? "underline underline-offset-4 text-orange-400"
                  : ""
              }`}
            >
              FAI
            </Link>
            <Link
              to="/sppage"
              onClick={toggNavDrawer}
              className={`block text-gray-600 hover:text-black hover:underline-offset-4 ${
                isActivePath("/sppage")
                  ? "underline underline-offset-4 text-orange-400"
                  : ""
              }`}
            >
              SP
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
