/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    toggleCartDrawer();
    navigate("/checkout")
  }

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      {/* Cart Content area */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="mb-4 font-semibold text-xl">Your Cart</h2>
        {/* Components for Cart Contents */}
        <CartContents />
      </div>

      {/* Check Out Button */}
      <div className="bottom-0 sticky bg-white p-4">
        <button
          onClick={handleCheckout}
          className="bg-black hover:bg-gray-800 py-3 rounded-lg w-full font-semibold text-white transition"
        >
          Checkout
        </button>
        <p className="mt-2 text-center text-gray-500 text-sm tracking-tighter">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
