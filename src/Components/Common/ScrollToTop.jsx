/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { AiFillCaretUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="right-4 bottom-4 z-50 fixed bg-orange-400 hover:bg-orange-600 shadow-lg p-3 rounded-full text-white transition-all animate-bounce duration-300"
          aria-label="Scroll to top"
        >
          <AiFillCaretUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
