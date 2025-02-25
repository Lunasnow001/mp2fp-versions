// Home.jsx
import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import ScrollToTop from "../Components/Common/ScrollToTop";
import FAQs from "../Components/Layout/FAQs";
import Hero from "../Components/Layout/Hero";
import FloorplanOrder from "../Components/Products/FloorplanOrder";
import FloorplanViewer from "../Components/Products/FloorplanViewer";
import NewArrivals from "../Components/Products/NewArrivals";
import ProcessTimeline from "../Components/Products/ProcessTimeline";
import ProductGrid from "../Components/Products/ProductGrid";
import { Moon, Sun } from "lucide-react";

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: assets.PLAN_17 }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 120,
    images: [{ url: assets.PLAN_18 }],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 150,
    images: [{ url: assets.PLAN_19 }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 190,
    images: [{ url: assets.PLAN_20 }],
  },
  {
    _id: 5,
    name: "Product 5",
    price: 330,
    images: [{ url: assets.PLAN_21 }],
  },
  {
    _id: 6,
    name: "Product 6",
    price: 400,
    images: [{ url: assets.PLAN_22 }],
  },
  {
    _id: 7,
    name: "Product 7",
    price: 350,
    images: [{ url: assets.PLAN_23 }],
  },
  {
    _id: 8,
    name: "Product 8",
    price: 220,
    images: [{ url: assets.PLAN_16 }],
  },
];

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`transition-colors duration-200 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#f4f7f9] text-gray-900"
      }`}
    >
      <ScrollToTop />

      <button
        onClick={toggleDarkMode}
        className="hidden md:block top-3 right-4 z-50 fixed p-1 border border-gray-500 hover:border-orange-400 rounded-full transition-all duration-200"
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-orange-500" />
        ) : (
          <Moon className="w-6 h-6 text-orange-300" />
        )}
      </button>

      <Hero darkMode={darkMode} />
      <FloorplanViewer darkMode={darkMode} />
      <ProcessTimeline darkMode={darkMode} />
      <FloorplanOrder darkMode={darkMode} />
      <NewArrivals darkMode={darkMode} />

      <div className="mx-auto container">
        <h2 className="mt-16 mb-4 font-bold text-3xl text-center">
          All house model examples
        </h2>
        <ProductGrid products={placeholderProducts} darkMode={darkMode} />
      </div>

      <FAQs darkMode={darkMode} />
    </div>
  );
};

export default Home;
