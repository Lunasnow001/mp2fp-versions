/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
  X,
} from "lucide-react";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { FaPhotoFilm } from "react-icons/fa6";
import { assets } from "../../assets/assets";
import { toast } from "sonner";

const FloorPlanShowcase = () => {
  // ... (previous state declarations remain the same)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalZoom, setModalZoom] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const modalRef = useRef(null);

  // ... (previous handlers remain the same)
  const handleAddToCart = () => {
    toast("This feature is not accessible.❗❗");
  };

  const handleShowImg = () => {
    setShowModal(true);
    setModalZoom(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - panPosition.x,
      y: e.clientY - panPosition.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomDelta = -e.deltaY * 0.01;
    setModalZoom((prev) => Math.min(Math.max(1, prev + zoomDelta), 4));
  };

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      modalElement.addEventListener("wheel", handleWheel, { passive: false });
      return () => {
        modalElement.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  // ... (floorPlans data and other handlers remain the same)
  const floorPlans = [
    {
      id: 1,
      title: "Modern Living Space (FIF)",
      area: "1,900 ft²",
      description: "Spacious 3-bedroom floor plan with open concept living",
      image: assets.Mp2fpfif,
    },
    {
      id: 2,
      title: "Alternative Layout",
      area: "1,900 ft²",
      description: "Same space, different perspective",
      image: assets.No_image,
    },
    {
      id: 3,
      title: "Gross Internal Area",
      area: "1,900 ft²",
      description: "Same space, different perspective",
      image: assets.No_image,
    },
  ];

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % floorPlans.length);
    setZoomLevel(1);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + floorPlans.length) % floorPlans.length
    );
    setZoomLevel(1);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ... (previous JSX remains the same until the modal) */}
      <header className="bg-[#415268] py-6 text-white">
        <div className="mx-auto px-4 container">
          <h1 className="font-bold text-3xl">Fully Indicated furnish (FIF)</h1>
          <p className="mt-2 text-gray-100">Discover Your Perfect Space</p>
        </div>
      </header>

      <main className="mx-auto px-4 py-8 container">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <div className="bg-gray-100 aspect-video overflow-hidden">
              <img
                src={floorPlans[currentImageIndex].image}
                alt={floorPlans[currentImageIndex].title}
                className="w-full h-full object-contain transition-transform duration-200"
                style={{ transform: `scale(${zoomLevel})` }}
              />
            </div>

            <div className="right-0 left-0 absolute inset-y-0 flex justify-between items-center px-4">
              <button
                onClick={prevImage}
                className="bg-gray-800/70 hover:bg-gray-800 p-2 rounded-full text-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="bg-gray-800/70 hover:bg-gray-800 p-2 rounded-full text-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="right-4 bottom-4 absolute flex gap-2">
              <button
                onClick={handleZoomOut}
                className="bg-gray-800/70 hover:bg-gray-800 p-2 rounded-full text-white"
              >
                <ZoomOut size={20} />
              </button>
              <button
                onClick={handleZoomIn}
                className="bg-gray-800/70 hover:bg-gray-800 p-2 rounded-full text-white"
              >
                <ZoomIn size={20} />
              </button>
            </div>

            <div className="bottom-4 left-4 absolute bg-gray-800/70 px-3 py-1 rounded-full text-white">
              {currentImageIndex + 1} / {floorPlans.length}
            </div>
          </div>

          <div className="p-6 border-gray-200 border-t">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold text-gray-800 text-2xl">
                  {floorPlans[currentImageIndex].title}
                </h2>
                <p className="mt-1 font-medium text-green-600">
                  {floorPlans[currentImageIndex].area}
                </p>
                <p className="mt-2 text-gray-600">
                  {floorPlans[currentImageIndex].description}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-white transition-colors"
                  onClick={handleAddToCart}
                >
                  <MdOutlineLibraryAdd size={20} />
                  AddToCart
                </button>
                <button
                  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-white transition-colors"
                  onClick={handleShowImg}
                >
                  <FaPhotoFilm size={20} />
                  Preview
                </button>
              </div>
            </div>

            <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mt-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Bedrooms</h3>
                <p className="text-gray-600">3 Spacious Rooms</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Bathrooms</h3>
                <p className="text-gray-600">2.5 Bathrooms</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Layout</h3>
                <p className="text-gray-600">Open Concept</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Updated Modal with controlled size */}
      {showModal && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 p-4">
          <div className="relative bg-white shadow-xl mx-auto rounded-lg w-full max-w-4xl">
            <div className="p-4 border-b">
              <h2 className="font-semibold text-gray-800 text-2xl">
                {floorPlans[currentImageIndex].title}
              </h2>
              <p className="mt-1 text-gray-600">
                {floorPlans[currentImageIndex].description}
              </p>
              <p className="mt-1 font-medium text-green-600">
                {floorPlans[currentImageIndex].area}
              </p>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="top-2 right-2 z-10 absolute bg-gray-800/70 hover:bg-gray-800 p-2 rounded-full text-white"
            >
              <X size={20} />
            </button>

            <div
              ref={modalRef}
              className="relative rounded-lg h-[70vh] overflow-hidden cursor-move"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div className="absolute inset-0 flex justify-center items-center bg-gray-100">
                <img
                  src={floorPlans[currentImageIndex].image}
                  alt={floorPlans[currentImageIndex].title}
                  className="max-w-full max-h-full object-contain transition-transform duration-200"
                  style={{
                    transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${modalZoom})`,
                    cursor: isDragging ? "grabbing" : "grab",
                  }}
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorPlanShowcase;
