import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assets } from "../../assets/assets";

const FloorplanViewer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const floorplans = [
    {
      id: 1,
      title: "2D With Measurements",
      image: assets.PLAN2D_1,
      type: "TEMPLATE STYLE OR CUSTOM DESIGN",
      description: "FLOORPLANS FROM YOUR 3D SCANNED MODEL PACKS",
    },
    {
      id: 2,
      title: "3D Furnished 1",
      image: assets.PLAN3D_1,
      type: "TEMPLATE STYLE OR CUSTOM DESIGN",
      description: "FLOORPLANS FROM YOUR 3D SCANNED MODEL PACKS",
    },
    {
      id: 3,
      title: "3D Furnished 2",
      image: assets.PLAN3D_2,
      type: "TEMPLATE STYLE OR CUSTOM DESIGN",
      description: "FLOORPLANS FROM YOUR 3D SCANNED MODEL PACKS",
    },
    // Add more floorplans here as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % floorplans.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + floorplans.length) % floorplans.length
    );
  };

  return (
    <div className="relative mx-auto py-16 pt-14 border-t border-b w-full max-w-6xl">
      {/* Top text section */}
      <div className="mb-8 text-center">
        <p className="mb-2 text-gray-500 text-sm">
          {floorplans[currentSlide].type}
        </p>
        <h2 className="font-semibold text-gray-950 text-2xl md:text-3xl">
          {floorplans[currentSlide].description}
        </h2>
      </div>

      {/* Main image container */}
      <div className="relative bg-gray-100 rounded-lg aspect-video overflow-hidden">
        {/* Slide transition wrapper */}
        <div className="relative w-full h-full">
          <img
            src={floorplans[currentSlide].image}
            alt={`Floorplan ${currentSlide + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="top-1/2 left-4 absolute bg-white/80 hover:bg-white shadow-lg p-2 rounded-full transition-all -translate-y-1/2"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="top-1/2 right-4 absolute bg-white/80 hover:bg-white shadow-lg p-2 rounded-full transition-all -translate-y-1/2"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Bottom right label */}
        <div className="right-6 bottom-6 absolute bg-white/90 px-4 py-2 rounded-md">
          <p className="font-medium text-orange-400">
            {floorplans[currentSlide].title}
          </p>
        </div>

        {/* Slide indicators */}
        {/* <div className="bottom-6 left-6 absolute flex space-x-2">
          {floorplans.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-blue-600 w-4"
                  : "bg-white/60 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>

      {/* Optional: Thumbnails */}
      <div className="hidden md:flex justify-center space-x-4 mt-6">
        {floorplans.map((floorplan, index) => (
          <button
            key={floorplan.id}
            onClick={() => setCurrentSlide(index)}
            className={`relative rounded-lg overflow-hidden w-24 h-16 transition-all ${
              currentSlide === index
                ? "ring-2 ring-orange-400"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={floorplan.image}
              alt={floorplan.title}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FloorplanViewer;
