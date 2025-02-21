import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-mp2fp-red text-white">
      <div className="flex justify-between items-center mx-auto px-4 py-3 container">
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="w-5 h-5" />
          </a>
        </div>
        <div className="flex-grow text-center text-sm">
            <span className="">From February 29 to March 1, holidays</span>
        </div>
        <div className="md:block hidden text-sm">
            <a href="tel:+1234567890" className="hover:text-gray-300">+1 (234) 567-890</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
