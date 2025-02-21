/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid.jsx";
import { assets } from "../../assets/assets";

const selectedProduct = {
  name: "3D Floorplan",
  price: 120,
  originalPrice: 150,
  description: "Here's a cool 3D Floorplan that's perfect for any occasion.",
  brand: "MP2FP Brand",
  material: "Paper",
  types: ["FF", "UF", "FAI", "FIF", "SP"],
  colors: ["White", "Black"],
  images: [
    {
      url: assets.PLAN_9,
      altText: "3D Floorplan 1",
    },
    {
      url: assets.PLAN_10,
      altText: "3D Floorplan 2",
    },
    {
      url: assets.PLAN_11,
      altText: "3D Floorplan 3",
    },
    {
      url: assets.PLAN_12,
      altText: "3D Floorplan 4",
    },
  ],
};

const similarProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: assets.PLAN_13 }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 120,
    images: [{ url: assets.PLAN_14 }],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 150,
    images: [{ url: assets.PLAN_15 }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 190,
    images: [{ url: assets.PLAN_16 }],
  },
];

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color before adding to cart.", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart!", {
        duration: 1000,
      });

      setIsButtonDisabled(false);
    }, 1000);
  };

  return (
    <div className="p-6 border-b-2">
      <div className="bg-white mx-auto p-8 rounded-lg max-w-6xl">
        <h2 className="mb-16 font-semibold text-2xl text-black text-center md:text-3xl">
          Choose a style
        </h2>
        <div className="flex md:flex-row flex-col">
          {/* Left Thumbnails */}
          <div className="md:flex flex-col space-y-4 hidden mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`border rounded-lg w-20 h-20 cursor-pointer object-cover ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              {mainImage && (
                <img
                  src={mainImage}
                  alt="Main Product"
                  className="shadow-lg rounded-lg w-full h-auto object-cover"
                />
              )}
            </div>
          </div>
          {/* Mobile Thumbnails */}
          <div className="flex space-x-4 md:hidden mb-4 overflow-x-scroll">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`border rounded-lg w-20 h-20 cursor-pointer object-cover ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Right Side */}
          <div className="md:ml-10 md:w-1/2">
            <h1 className="mb-2 font-semibold text-2xl md:text-3xl">
              {selectedProduct.name}
            </h1>

            <p className="mb-1 text-gray-600 text-lg line-through">
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>
            <p className="mb-2 text-gray-500 text-xl">
              $ {selectedProduct.price}
            </p>
            <p className="mb-4 text-gray-600">{selectedProduct.description}</p>

            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`border rounded-full w-8 h-8 ${
                      selectedColor === color
                        ? "border-4 border-red-400"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">Type:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedSize(type)}
                    className={`px-4 py-2 border rounded ${
                      selectedSize === type ? "bg-black text-white" : ""
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="bg-gray-200 px-2 py-1 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="bg-gray-200 px-2 py-1 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-orange-400 mb-4 px-6 py-2 rounded w-full text-white hover:text-white ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-900"
              }`}
            >
              {isButtonDisabled ? "Adding..." : "ADD TO CART"}
            </button>

            <div className="mt-10 text-gray-700">
              <h3 className="mb-4 font-bold text-xl">Characteristics:</h3>
              <table className="w-full text-gray-600 text-left text-sm">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="mb-4 font-medium text-2xl text-center">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
