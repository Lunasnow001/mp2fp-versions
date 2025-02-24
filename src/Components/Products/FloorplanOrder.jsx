/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { assets } from "../../assets/assets";
import { IoCloseSharp } from "react-icons/io5";
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { FaCartShopping } from "react-icons/fa6";

const createStyleConfig = (style, basePrice2D, basePrice3D) => {
  const plan2D = [
    assets[`Plan2D1_${style}`] || assets.No_image,
    assets[`Plan2D2_${style}`] || assets.No_image,
  ];
  const plan3D = [
    assets[`Plan3D1_${style}`] || assets.No_image,
    assets[`Plan3D2_${style}`] || assets.No_image,
  ];

  // Check if all images in plan2D are No_image
  const has2DImages = plan2D.some((img) => img !== assets.No_image);
  // Check if all images in plan3D are No_image
  const has3DImages = plan3D.some((img) => img !== assets.No_image);

  return {
    name: style,
    plan2D,
    plan3D,
    price2D: has2DImages ? basePrice2D : 0,
    price3D: has3DImages ? basePrice3D : 0,
  };
};

const FloorplanOrder = ({ darkMode }) => {
  const [modelLink, setModelLink] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [selectedStyle, setSelectedStyle] = useState("UF");
  const [currentImageIndex, setCurrentImageIndex] = useState({
    "2D": 0,
    "3D": 0,
  });

  const styleConfigs = {
    UF: createStyleConfig("UF", 425, 1299),
    FF: createStyleConfig("FF", 799, 1599),
    FAI: createStyleConfig("FAI", 685, 1313),
    SP: createStyleConfig("SP", 985, 1613),
    FIF: createStyleConfig("FIF", 735, 1363),
  };

  const handleImageChange = (type, direction) => {
    const config = getCurrentConfig();
    const images = type === "2D" ? config.plan2D : config.plan3D;
    setCurrentImageIndex((prev) => ({
      ...prev,
      [type]: (prev[type] + direction + images.length) % images.length,
    }));
  };

  const handleAddToCart = () => {
    toast("The system is not ready yet ❗❗");
  };

  const handleViewCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsCartOpen(true);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsDisabled(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setCurrentImageIndex({
      "2D": 0,
      "3D": 0,
    });
  }, [selectedStyle]);

  const getCurrentConfig = () => styleConfigs[selectedStyle];

  const ImageControls = ({ type, currentIndex, images }) => (
    <div className="absolute inset-0 flex justify-between items-center px-2">
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleImageChange(type, -1);
        }}
        className="bg-black/30 hover:bg-black/50 p-1 rounded-full text-white"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <div className="bg-black/30 px-4 py-2 rounded-full text-white text-xs">
        {currentIndex + 1}/{images.length}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleImageChange(type, 1);
        }}
        className="bg-black/30 hover:bg-black/50 p-1 rounded-full text-white"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );

  const getFloorplans = () => {
    const config = getCurrentConfig();
    return [
      {
        id: 1,
        title: "2D W MEASUREMENTS",
        price: `${config.price2D}`,
        image: config.plan2D[currentImageIndex["2D"]],
        type: "2D",
        images: config.plan2D,
      },
      {
        id: 2,
        title: "3D FURNISHED",
        price: `${config.price3D}`,
        image: config.plan3D[currentImageIndex["3D"]],
        type: "3D",
        images: config.plan3D,
      },
      {
        id: 3,
        title: "2D W MEASUREMENTS + 3D FURNISHED",
        price: `${Math.round((config.price2D + config.price3D) * 0.85)}`,
        discount: "(-15% DISCOUNT)",
        combinedImages: [
          config.plan2D[currentImageIndex["2D"]],
          config.plan3D[currentImageIndex["3D"]],
        ],
      },
    ];
  };

  return (
    <div className={`${darkMode ? "" : "bg-[#f4f7f9]"}`}>
      <h1 className="mt-10 mb-4 p-4 font-semibold text-2xl text-center">
        Order a floorplan now!
      </h1>
      <div className="flex flex-col items-start bg-[#f4f7f9] mx-auto px-4 py-10 rounded-lg container">
        <p className="mt-2 text-gray-600">
          1. Insert MP or BP link here before selecting a product below:
        </p>
        <input
          type="text"
          className="mt-2 p-2 border border-gray-300 rounded w-full max-w-full"
          placeholder="Model id or URL"
          value={modelLink}
          onChange={(e) => setModelLink(e.target.value)}
        />

        <p className="mt-4 text-gray-600">2. Select floorplan style:</p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {Object.entries(styleConfigs).map(([key, config]) => (
            <button
              key={key}
              onClick={() => setSelectedStyle(key)}
              className={`px-4 py-2 rounded ${
                selectedStyle === key
                  ? "bg-orange-500 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {config.name}
            </button>
          ))}
        </div>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mt-4">
          {getFloorplans().map((plan) => (
            <div
              key={plan.id}
              className="bg-white shadow-lg p-4 rounded-lg text-center"
            >
              {plan.combinedImages ? (
                <div className="flex justify-center space-x-2 w-full">
                  <div className="w-1/2">
                    <img
                      src={plan.combinedImages[0]}
                      alt={`${plan.title} 2D`}
                      className="shadow-sm rounded w-full h-40 object-cover"
                    />
                  </div>
                  <div className="w-1/2">
                    <img
                      src={plan.combinedImages[1]}
                      alt={`${plan.title} 3D`}
                      className="shadow-sm rounded w-full h-40 object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="mx-auto rounded w-full md:w-3/4 h-40 object-cover"
                  />
                  {plan.type && (
                    <ImageControls
                      type={plan.type}
                      currentIndex={currentImageIndex[plan.type]}
                      images={plan.images}
                    />
                  )}
                </div>
              )}
              <h2 className="mt-2 font-semibold text-black text-lg">
                {plan.title}
              </h2>
              <p className="font-bold text-orange-500 text-xl">
                ฿{plan.price}{" "}
                <span className="mt-1 text-red-600 text-sm">
                  {plan.discount}
                </span>{" "}
              </p>
              <button
                className="bg-orange-400 hover:bg-orange-600 mt-4 mb-4 px-6 rounded h-10 text-white"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <p className="mt-6 text-gray-500 text-sm text-center">
          <span className="text-red-600">*</span> Template floorplans produced
          with textures and objects as in selected reference image. Contact us
          for a quotation for a custom style or any BIM or CAD file formats from
          your Matterport or other input!
        </p>
      </div>
      <div className="flex justify-center items-center pb-10">
        <button
          className="flex justify-center items-center gap-2 bg-gray-700 hover:bg-gray-800 mt-6 px-6 py-2 rounded text-white"
          onClick={handleViewCart}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="text-orange-400 animate-spin" />{" "}
              <span>Loading....</span>
            </>
          ) : (
            <>
              <FaCartShopping className="w-4 h-4" /> <span>View Cart</span>
            </>
          )}
        </button>
      </div>

      {isCartOpen && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="px-6 py-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg">Your Orders Details</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <IoCloseSharp className="w-5 h-6" />
                </button>
              </div>
            </div>
            <div className="p-6 text-center">
              <p className="text-gray-600">Your cart is empty</p>
            </div>
            <div className="flex justify-end space-x-2 bg-gray-50 px-6 py-4 rounded-b-lg">
              <button
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white"
                onClick={() => setIsCartOpen(false)}
                disabled={isDisabled}
              >
                CHECK OUT
              </button>
              <button
                className="bg-white hover:bg-gray-50 px-4 py-2 border border-gray-300 rounded text-gray-700"
                onClick={() => setIsCartOpen(false)}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorplanOrder;
