/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  X,
} from "lucide-react";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { FaPhotoFilm } from "react-icons/fa6";
import { floorPlanssp } from "../../assets/datamp2fp";
import { toast } from "sonner";

const FloorPlanShowcase = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalZoom, setModalZoom] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [mainPanPosition, setMainPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const modalRef = useRef(null);
  const mainImageRef = useRef(null);

  const handleMainMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - mainPanPosition.x,
        y: e.clientY - mainPanPosition.y,
      });
    }
  };

  const handleMainMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      setMainPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMainMouseUp = () => {
    setIsDragging(false);
  };

  const handleModalMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - panPosition.x,
      y: e.clientY - panPosition.y,
    });
  };

  const handleModalMouseMove = (e) => {
    if (isDragging) {
      setPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleModalMouseUp = () => {
    setIsDragging(false);
  };

  const handleMainWheel = (e) => {
    e.preventDefault();
    const zoomDelta = -e.deltaY * 0.01;
    setZoomLevel((prev) => {
      const newZoom = Math.min(Math.max(1, prev + zoomDelta), 4);
      if (newZoom === 1) {
        setMainPanPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleModalWheel = (e) => {
    e.preventDefault();
    const zoomDelta = -e.deltaY * 0.01;
    setModalZoom((prev) => {
      const newZoom = Math.min(Math.max(1, prev + zoomDelta), 4);
      if (newZoom === 1) {
        setPanPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  // Touch event handlers for mobile
  const handleTouchStart = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - mainPanPosition.x,
        y: e.touches[0].clientY - mainPanPosition.y,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      setMainPanPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleModalTouchStart = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.touches[0].clientX - panPosition.x,
      y: e.touches[0].clientY - panPosition.y,
    });
  };

  const handleModalTouchMove = (e) => {
    if (isDragging) {
      setPanPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleModalTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const modalElement = modalRef.current;
    const mainElement = mainImageRef.current;

    if (modalElement) {
      modalElement.addEventListener("wheel", handleModalWheel, {
        passive: false,
      });
    }
    if (mainElement) {
      mainElement.addEventListener("wheel", handleMainWheel, {
        passive: false,
      });
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener("wheel", handleModalWheel);
      }
      if (mainElement) {
        mainElement.removeEventListener("wheel", handleMainWheel);
      }
    };
  }, []);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 4));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const newZoom = Math.max(prev - 0.2, 1);
      if (newZoom === 1) {
        setMainPanPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % floorPlanssp.length);
    setZoomLevel(1);
    setMainPanPosition({ x: 0, y: 0 });
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + floorPlanssp.length) % floorPlanssp.length
    );
    setZoomLevel(1);
    setMainPanPosition({ x: 0, y: 0 });
  };

  return (
    <div className="bg-gray-50">
      <header className="bg-[#415268] py-6 text-white">
        <div className="mx-auto px-4 container">
          <h1 className="font-bold text-3xl">Floor Plan (SP)</h1>
          <p className="mt-2 text-gray-100">Discover Your Perfect Space</p>
        </div>
      </header>

      <main className="mx-auto px-4 py-8 container">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <div
              ref={mainImageRef}
              className="bg-gray-100 overflow-hidden cursor-move"
              style={{
                aspectRatio: "16/9",
                minHeight: "250px", // Ensure minimal height on mobile
                height: "auto",
              }}
              onMouseDown={handleMainMouseDown}
              onMouseMove={handleMainMouseMove}
              onMouseUp={handleMainMouseUp}
              onMouseLeave={handleMainMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={floorPlanssp[currentImageIndex].image}
                alt={floorPlanssp[currentImageIndex].title}
                className="w-full h-full object-contain transition-transform duration-200"
                style={{
                  transform: `translate(${mainPanPosition.x}px, ${mainPanPosition.y}px) scale(${zoomLevel})`,
                  cursor: isDragging
                    ? "grabbing"
                    : zoomLevel > 1
                    ? "grab"
                    : "default",
                }}
                draggable="false"
              />
            </div>

            {/* Navigation controls with improved visibility */}
            <div className="right-0 left-0 absolute inset-y-0 flex justify-between items-center px-4 pointer-events-none">
              <button
                onClick={prevImage}
                className="bg-gray-800/80 hover:bg-gray-800 shadow-lg p-2 sm:p-3 rounded-full text-white transition-colors pointer-events-auto"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="bg-gray-800/80 hover:bg-gray-800 shadow-lg p-2 sm:p-3 rounded-full text-white transition-colors pointer-events-auto"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Image counter with improved design */}
            <div className="bottom-4 left-4 absolute bg-gray-800/80 shadow-md px-3 py-1.5 rounded-full font-medium text-white">
              {currentImageIndex + 1} / {floorPlanssp.length}
            </div>

            {/* Zoom controls repositioned for better access */}
            <div className="right-4 bottom-4 absolute flex gap-2 pointer-events-none">
              <button
                onClick={handleZoomOut}
                className="bg-gray-800/80 hover:bg-gray-800 shadow-md p-2 rounded-full text-white pointer-events-auto"
                aria-label="Zoom out"
              >
                <ZoomOut size={20} />
              </button>
              <button
                onClick={handleZoomIn}
                className="bg-gray-800/80 hover:bg-gray-800 shadow-md p-2 rounded-full text-white pointer-events-auto"
                aria-label="Zoom in"
              >
                <ZoomIn size={20} />
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-6 border-gray-200 border-t">
            <div className="flex md:flex-row flex-col md:justify-between md:items-start gap-4">
              <div>
                <h2 className="font-semibold text-gray-800 text-xl sm:text-2xl">
                  {floorPlanssp[currentImageIndex].title}
                </h2>
                <div className="mt-2">
                  {floorPlanssp[currentImageIndex].areas.map((area, index) => (
                    <p key={index} className="mt-1 font-medium text-green-600">
                      <span className="text-gray-500">{area.label}:</span>{" "}
                      {area.value}
                    </p>
                  ))}
                </div>
                <p className="mt-2 text-gray-600">
                  {floorPlanssp[currentImageIndex].description}
                </p>
              </div>
              <div className="flex flex-row sm:flex-row gap-2 w-full md:w-auto">
                <button
                  className="flex flex-1 md:flex-none justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-white transition-colors"
                  onClick={() => toast("This feature is not accessible.❗❗")}
                >
                  <MdOutlineLibraryAdd size={20} />
                  <span className="hidden sm:inline">AddToCart</span>
                  <span className="sm:hidden">Add</span>
                </button>
                <button
                  className="flex flex-1 md:flex-none justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-white transition-colors"
                  onClick={() => {
                    setShowModal(true);
                    setModalZoom(1);
                    setPanPosition({ x: 0, y: 0 });
                  }}
                >
                  <FaPhotoFilm size={20} />
                  Preview
                </button>
              </div>
            </div>

            <div className="gap-3 grid grid-cols-1 sm:grid-cols-3 mt-4 sm:mt-6">
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Bedrooms</h3>
                <p className="text-gray-600">3 Spacious Rooms</p>
              </div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Bathrooms</h3>
                <p className="text-gray-600">2.5 Bathrooms</p>
              </div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Layout</h3>
                <p className="text-gray-600">Open Concept</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 p-2 sm:p-4">
          <div className="relative bg-white shadow-xl mx-auto rounded-lg w-full max-w-4xl">
            <div className="p-3 sm:p-4 border-b">
              <h2 className="font-semibold text-gray-800 text-xl sm:text-2xl">
                {floorPlanssp[currentImageIndex].title}
              </h2>
              <div className="mt-1 sm:mt-2">
                {floorPlanssp[currentImageIndex].areas.map((area, index) => (
                  <p key={index} className="mt-1 font-medium text-green-600">
                    <span className="text-gray-500">{area.label}:</span>{" "}
                    {area.value}
                  </p>
                ))}
              </div>
              <p className="mt-1 text-gray-600">
                {floorPlanssp[currentImageIndex].description}
              </p>
            </div>

            <button
              onClick={() => {
                setShowModal(false);
                setModalZoom(1);
                setPanPosition({ x: 0, y: 0 });
              }}
              className="top-2 right-2 z-10 absolute bg-gray-800/80 hover:bg-gray-800 shadow-md p-2 rounded-full text-white"
            >
              <X size={20} />
            </button>

            <div
              ref={modalRef}
              className="relative rounded-lg h-[60vh] sm:h-[70vh] overflow-hidden cursor-move"
              onMouseDown={handleModalMouseDown}
              onMouseMove={handleModalMouseMove}
              onMouseUp={handleModalMouseUp}
              onMouseLeave={handleModalMouseUp}
              onTouchStart={handleModalTouchStart}
              onTouchMove={handleModalTouchMove}
              onTouchEnd={handleModalTouchEnd}
            >
              <div className="absolute inset-0 flex justify-center items-center bg-gray-100">
                <img
                  src={floorPlanssp[currentImageIndex].image}
                  alt={floorPlanssp[currentImageIndex].title}
                  className="max-w-full max-h-full object-contain transition-transform duration-200"
                  style={{
                    transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${modalZoom})`,
                    cursor: isDragging ? "grabbing" : "grab",
                  }}
                  draggable="false"
                />
              </div>

              {/* Add zoom controls to modal */}
              <div className="right-4 bottom-4 absolute flex gap-2">
                <button
                  onClick={() =>
                    setModalZoom((prev) => Math.max(prev - 0.2, 1))
                  }
                  className="bg-gray-800/80 hover:bg-gray-800 shadow-md p-2 rounded-full text-white"
                >
                  <ZoomOut size={20} />
                </button>
                <button
                  onClick={() =>
                    setModalZoom((prev) => Math.min(prev + 0.2, 4))
                  }
                  className="bg-gray-800/80 hover:bg-gray-800 shadow-md p-2 rounded-full text-white"
                >
                  <ZoomIn size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorPlanShowcase;
