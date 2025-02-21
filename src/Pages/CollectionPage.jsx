import { useEffect, useRef, useState } from "react";
import { FiFilter } from "react-icons/fi";
import FilterSidebar from "../Components/Products/FilterSidebar";
import SortOptions from "../Components/Products/SortOptions";
import ProductGrid from "../Components/Products/ProductGrid";
import { assets } from "../assets/assets";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    // Close sidebar if click outside
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Add Event listner for clicks
    document.addEventListener("mousedown", handleClickOutside);
    // clean event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [{ url: assets.PLAN_2 }],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 120,
          images: [{ url: assets.PLAN_11 }],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 150,
          images: [{ url: assets.PLAN_24 }],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 190,
          images: [{ url: assets.PLAN_25 }],
        },
        {
          _id: 5,
          name: "Product 1",
          price: 350,
          images: [{ url: assets.PLAN_27 }],
        },
        {
          _id: 6,
          name: "Product 2",
          price: 180,
          images: [{ url: assets.PLAN_28 }],
        },
        {
          _id: 7,
          name: "Product 3",
          price: 200,
          images: [{ url: assets.PLAN_29 }],
        },
        {
          _id: 8,
          name: "Product 4",
          price: 190,
          images: [{ url: assets.PLAN_30 }],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex lg:flex-row flex-col">
      {/* Mobile Filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden flex justify-center items-center p-2 border"
      >
        <FiFilter className="mr-2" /> Filters
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>

      {/* Filter Content */}
      <div className="flex-grow p-4">
        <h2 className="mb-4 text-2xl uppercase">All Collection</h2>
        {/* Sort Option */}
        <SortOptions />
        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
