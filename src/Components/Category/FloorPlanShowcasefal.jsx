/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, X } from "lucide-react";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { FaPhotoFilm } from "react-icons/fa6";
import { assets } from "../../assets/assets";
import { toast } from "sonner";

const FloorPlanShowcasefai = () => {
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

  const floorPlans = [
    {
      id: 1,
      title: "Modern Living Space (FAI)",
      areas: [{ label: "APPROXIMATE GROSS LIVING AREA", value: "1,900 ft²" }],
      description: "Spacious 3-bedroom floor plan with open concept living",
      image: assets.No_image,
    },
    {
      id: 2,
      title: "2D_FAI With Imperial Measurement",
      areas: [{ label: "APPROXIMATE GROSS LIVING AREA", value: "1,900 ft²" }],
      description: "Same space, different perspective",
      image: assets.No_image,
    },
    {
      id: 3,
      title: "2D_FAI With Met Measurement",
      areas: [{ label: "APPROXIMATE GROSS LIVING AREA", value: "177 m²" }],
      description: "Same space, different perspective",
      image: assets.No_image,
    },
  ];

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
    setCurrentImageIndex((prev) => (prev + 1) % floorPlans.length);
    setZoomLevel(1);
    setMainPanPosition({ x: 0, y: 0 });
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + floorPlans.length) % floorPlans.length
    );
    setZoomLevel(1);
    setMainPanPosition({ x: 0, y: 0 });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-[#415268] py-6 text-white">
        <div className="mx-auto px-4 container">
          <h1 className="font-bold text-3xl">Furnish as Indicated (FAI)</h1>
          <p className="mt-2 text-gray-100">Discover Your Perfect Space</p>
        </div>
      </header>

      <main className="mx-auto px-4 py-8 container">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <div
              ref={mainImageRef}
              className="bg-gray-100 aspect-video overflow-hidden cursor-move"
              onMouseDown={handleMainMouseDown}
              onMouseMove={handleMainMouseMove}
              onMouseUp={handleMainMouseUp}
              onMouseLeave={handleMainMouseUp}
            >
              <img
                src={floorPlans[currentImageIndex].image}
                alt={floorPlans[currentImageIndex].title}
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

            <div className="right-0 left-0 absolute inset-y-0 flex justify-between items-center px-4 pointer-events-none">
              <button
                onClick={prevImage}
                className="bg-gray-800/70 hover:bg-gray-800 p-2 rounded-full text-white transition-colors pointer-events-auto"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="bg-gray-800/70 hover:bg-gray-800 p-2 rounded-full text-white transition-colors pointer-events-auto"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="right-4 bottom-4 absolute flex gap-2 pointer-events-none">
              <button
                onClick={handleZoomOut}
                className="bg-gray-800/70 hover:bg-gray-800 p-2 rounded-full text-white pointer-events-auto"
              >
                <ZoomOut size={20} />
              </button>
              <button
                onClick={handleZoomIn}
                className="bg-gray-800/70 hover:bg-gray-800 p-2 rounded-full text-white pointer-events-auto"
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
                <div className="mt-2">
                  {floorPlans[currentImageIndex].areas.map((area, index) => (
                    <p key={index} className="mt-1 font-medium text-green-600">
                      <span className="text-gray-500">{area.label}:</span>{" "}
                      {area.value}
                    </p>
                  ))}
                </div>
                <p className="mt-2 text-gray-600">
                  {floorPlans[currentImageIndex].description}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-white transition-colors"
                  onClick={() => toast("This feature is not accessible.❗❗")}
                >
                  <MdOutlineLibraryAdd size={20} />
                  AddToCart
                </button>
                <button
                  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-white transition-colors"
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

      {showModal && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 p-4">
          <div className="relative bg-white shadow-xl mx-auto rounded-lg w-full max-w-4xl">
            <div className="p-4 border-b">
              <h2 className="font-semibold text-gray-800 text-2xl">
                {floorPlans[currentImageIndex].title}
              </h2>
              <div className="mt-2">
                {floorPlans[currentImageIndex].areas.map((area, index) => (
                  <p key={index} className="mt-1 font-medium text-green-600">
                    <span className="text-gray-500">{area.label}:</span>{" "}
                    {area.value}
                  </p>
                ))}
              </div>
              <p className="mt-1 text-gray-600">
                {floorPlans[currentImageIndex].description}
              </p>
            </div>

            <button
              onClick={() => {
                setShowModal(false);
                setModalZoom(1);
                setPanPosition({ x: 0, y: 0 });
              }}
              className="top-2 right-2 z-10 absolute bg-gray-800/70 hover:bg-gray-800 p-2 rounded-full text-white"
            >
              <X size={20} />
            </button>

            <div
              ref={modalRef}
              className="relative rounded-lg h-[70vh] overflow-hidden cursor-move"
              onMouseDown={handleModalMouseDown}
              onMouseMove={handleModalMouseMove}
              onMouseUp={handleModalMouseUp}
              onMouseLeave={handleModalMouseUp}
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

export default FloorPlanShowcasefai;
