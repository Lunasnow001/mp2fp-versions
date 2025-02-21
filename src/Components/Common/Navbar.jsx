/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
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

  const toggNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
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
        {/* Center - Navigtion Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/collections/all"
            className="font-medium text-gray-700 hover:text-black text-sm hover:underline hover:underline-offset-4 uppercase"
          >
            All
          </Link>
          <Link
            to="/ufpage"
            className="font-medium text-gray-700 hover:text-orange-400 text-sm hover:underline hover:underline-offset-4 uppercase"
          >
            UF
          </Link>
          <Link
            to="/fifpage"
            className="font-medium text-gray-700 hover:text-orange-400 text-sm hover:underline hover:underline-offset-4 uppercase"
          >
            FIF
          </Link>
          <Link
            to="/ffpage"
            className="font-medium text-gray-700 hover:text-orange-400 text-sm hover:underline hover:underline-offset-4 uppercase"
          >
            FF
          </Link>
          <Link
            to="/faipage"
            className="font-medium text-gray-700 hover:text-orange-400 text-sm hover:underline hover:underline-offset-4 uppercase"
          >
            FAI
          </Link>
          <Link
            to="/sppage"
            className="font-medium text-gray-700 hover:text-orange-400 text-sm hover:underline hover:underline-offset-4 uppercase"
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
            <HiOutlineUser className="w-6 h-6 text-gray-700" />
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
              className="block text-gray-600 hover:text-black hover:underline-offset-4 k"
            >
              All
            </Link>
            <Link
              to="/ufpage"
              onClick={toggNavDrawer}
              className="block text-gray-600 hover:text-black hover:underline-offset-4 k"
            >
              UF
            </Link>
            <Link
              to="/fifpage"
              onClick={toggNavDrawer}
              className="block text-gray-600 hover:text-black hover:underline-offset-4"
            >
              FIF
            </Link>
            <Link
              to="/ffpage"
              onClick={toggNavDrawer}
              className="block text-gray-600 hover:text-black hover:underline-offset-4"
            >
              FF
            </Link>
            <Link
              to="/faipage"
              onClick={toggNavDrawer}
              className="block text-gray-600 hover:text-black hover:underline-offset-4"
            >
              FAI
            </Link>
            <Link
              to="/sppage"
              onClick={toggNavDrawer}
              className="block text-gray-600 hover:text-black hover:underline-offset-4"
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
