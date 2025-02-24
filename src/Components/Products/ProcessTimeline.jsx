// import { assets } from "../../assets/assets";
import {
  FaShoppingCart,
  FaCreditCard,
  FaUpload,
  FaClock,
  FaCheck,
} from "react-icons/fa";

const ProcessTimeline = () => {
  const steps = [
    { icon: <FaShoppingCart />, title: "ORDER" },
    { icon: <FaCreditCard />, title: "PAYMENT" },
    { icon: <FaUpload />, title: "UPLOAD LOGO" },
    { icon: <FaClock />, title: "DELIVERY" },
    { icon: <FaCheck /> },
  ];
  return (
    <div className={`flex flex-col items-center bg-gray-700/90 px-4 py-20 text-white `}>
    <h2 className="mb-8 font-semibold text-xl md:text-2xl text-center">How does it work?</h2>
    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 w-full max-w-4xl">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col items-center text-center">
            <div className="flex justify-center items-center bg-white shadow-md rounded-full w-12 md:w-14 h-12 md:h-14 text-orange-500 text-xl md:text-2xl">
              {step.icon}
            </div>
            <span className="mt-2 font-semibold text-xs md:text-sm">{step.title}</span>
          </div>
          {index < steps.length - 1 && (
            <div className="bg-white mx-1 md:mx-2 w-10 md:w-16 lg:w-20 h-1"></div>
          )}
        </div>
      ))}
      {/* <div className="flex justify-center items-center bg-orange-500 shadow-md rounded-full w-12 md:w-14 h-12 md:h-14 text-gray-900 text-xl md:text-2xl">
        <FaCheck />
      </div> */}
    </div>
  </div>
  );
};

export default ProcessTimeline;
