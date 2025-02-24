/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductGrid = ({ products, darkMode }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mb-10 ${
        darkMode ? "" : ""
      }`}
    >
      {products.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className="block">
          <div className="bg-white hover:shadow-lg p-4 hover:border hover:border-orange-400 rounded-lg text-black hover:text-orange-400">
            <div className="mb-4 w-full h-96">
              <img
                src={product.images[0].url}
                alt={product.images[0].url || product.name}
                className="shadow-lg rounded-lg w-full h-full object-cover"
              />
            </div>
            <h3 className="mb-2 text-sm">{product.name}</h3>
            <p className="font-medium text-gray-500 text-sm tracking-tighter">
              $ {product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
