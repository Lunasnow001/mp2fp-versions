import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const NewArrivals = () => {
  const scrollRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: "1",
      name: "Floorplan 3D",
      price: 120,
      images: [
        {
          url: assets.PLAN_1,
          altText: "Floorplan 3D",
        },
      ],
    },
    {
      _id: "2",
      name: "Floorplan 3D",
      price: 120,
      images: [
        {
          url: assets.PLAN_2,
          altText: "Floorplan 3D",
        },
      ],
    },
    {
      _id: "3",
      name: "Floorplan 3D",
      price: 120,
      images: [
        {
          url: assets.PLAN_3,
          altText: "Floorplan 3D",
        },
      ],
    },
    {
      _id: "4",
      name: "Floorplan 3D",
      price: 120,
      images: [
        {
          url: assets.PLAN_4,
          altText: "Floorplan 3D",
        },
      ],
    },
    {
      _id: "5",
      name: "Floorplan 3D",
      price: 120,
      images: [
        {
          url: assets.PLAN_5,
          altText: "Floorplan 3D",
        },
      ],
    },
    {
      _id: "6",
      name: "Floorplan 3D",
      price: 120,
      images: [
        {
          url: assets.PLAN_6,
          altText: "Floorplan 3D",
        },
      ],
    },
    {
      _id: "7",
      name: "Floorplan 3D",
      price: 120,
      images: [
        {
          url: assets.PLAN_7,
          altText: "Floorplan 3D",
        },
      ],
    },
    {
      _id: "8",
      name: "Floorplan 3D",
      price: 120,
      images: [
        {
          url: assets.PLAN_8,
          altText: "Floorplan 3D",
        },
      ],
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
  };

  // Update Scroll Buttons
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }

    // console.log({
    //   scrollLeft: container.scrollLeft,
    //   clientWidth: container.clientWidth,
    //   containerScrollWidth: container.scrollWidth,
    //   offsetLeft: scrollRef.current.offsetLeft,
    // });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section className="bg-gray-700/40 px-4 lg:px-0 py-16">
      <div className="relative mx-auto mb-6 py-6 text-center container">
        <h2 className="mb-4 font-bold text-3xl">Explore New Arrivals</h2>
        <p className="mb-2 text-gray-600 text-lg">
          Discover our latest styles, adding fresh touches to keep your floor
          plan looking modern.
        </p>

        {/* Scroll Buttons */}
        <div className="right-0 bottom-[-30px] absolute flex space-x-3 pb-4">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 border rounded ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl hover:text-orange-400" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`p-2 border rounded ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl hover:text-orange-400" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className={`relative flex space-x-6 mx-auto overflow-x-scroll container ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="relative min-w-[100%] sm:min-w-[50%] lg:min-w-[30%]"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="border-1 shadow-xl rounded-lg w-full h-[500px] object-cover"
              draggable="false"
            />
            <div className="right-0 bottom-0 left-0 absolute bg-black bg-opacity-50 backdrop-blur-md p-4 rounded-b-lg text-white">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
