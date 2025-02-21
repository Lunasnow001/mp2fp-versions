/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { assets } from '../../assets/assets';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Add your image URLs here
  const images = [
    assets.PLAN_18,
    assets.PLAN_19,
    assets.PLAN_22,
    assets.PLAN_23,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative">
      <div className="relative w-full h-[400px] md:h-[600px] lg:h-[750px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="brightness-75 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-5">
        <div className="p-6 text-white text-center">
          <h1 className="mb-4 font-bold text-[#415268] text-4xl md:text-9xl uppercase tracking-tighter">
            <span className="text-orange-400">M P</span> 2 F P
          </h1>
          <h2 className="mb-6 text-[#ffffff] text-4xl tracking-tighter">
            Modelpacks To Floorplan
          </h2>
          <div className="flex sm:flex-row flex-col gap-3 sm:gap-6 mx-auto w-full max-w-[280px] sm:max-w-xl">
            <Link
              to="#"
              className="bg-white hover:bg-[#415268] hover:shadow-lg backdrop-blur-sm px-10 py-2 rounded-full w-full sm:w-1/3 font-medium text-[#415268] hover:text-white text-sm sm:text-base text-center transition-all hover:-translate-y-1 active:translate-y-0 duration-300"
            >
              About
            </Link>
            <Link
              to="#"
              className="bg-white hover:bg-[#415268] hover:shadow-lg backdrop-blur-sm px-10 py-2 rounded-full w-full sm:w-1/3 font-medium text-[#415268] hover:text-white text-sm sm:text-base text-center transition-all hover:-translate-y-1 active:translate-y-0 duration-300"
            >
              Order
            </Link>
            <Link
              to="#"
              className="bg-white hover:bg-[#415268] hover:shadow-lg backdrop-blur-sm px-10 py-2 rounded-full w-full sm:w-1/3 font-medium text-[#415268] hover:text-white text-sm sm:text-base text-center transition-all hover:-translate-y-1 active:translate-y-0 duration-300"
            >
              Info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;