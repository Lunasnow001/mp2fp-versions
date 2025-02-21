import { useState } from "react";
import { assets } from "../../assets/assets";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    types: [],
    colors: [],
    collections: "",
    material: "",
    employee: "",
    images: [
      {
        url: assets.PLAN_30,
      },
      {
        url: assets.PLAN_31,
      },
      {
        url: assets.PLAN_32,
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  }

  return (
    <div className="shadow-md mx-auto p-6 rounded-md max-w-5xl">
      <h2 className="mb-6 font-bold text-3xl">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md w-full"
            rows={4}
            required
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Count In Stock */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Count In Stock</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* SKU */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Types */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">
            Types (comma-separated)
          </label>
          <input
            type="text"
            name="types"
            value={productData.types.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                types: e.target.value.split(",").map((type) => type.trim()),
              })
            }
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Colors */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">
            Colors (comma-separated)
          </label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Upload Image</label>
          <input type="file" onChange={handleImageUpload} />
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "Product Image"}
                  className="shadow-md rounded-md w-20 h-20 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 py-2 rounded-md w-full text-white transition-colors"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
