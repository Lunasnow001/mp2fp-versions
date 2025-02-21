import { Link } from "react-router-dom";
import FFBrownandOrange2D from "../../assets/2DFFBrownandOrange.jpg";
import FFGreyGreenRelax2D from "../../assets/2DFFGreyGreenRelax.jpg";

const GenderCollectionSection = () => {
  return (
    <section className="bg-gray-700/10 px-4 lg:px-0 py-16">
      <div className="flex md:flex-row flex-col gap-8 mx-auto container">
        <div className="relative flex-1">
          <h2 className="mt-6 ml-4 font-bold text-2xl text-gray-900">Floorplan 1</h2>
          <img
            src={FFBrownandOrange2D}
            alt="FFBrownandOrange2D"
            className="shadow-lg rounded-lg w-full h-[700px] object-cover"
          />
          <div className="bottom-2 left-2 absolute bg-opacity-90 p-4">
            <Link
              to="/collections/all?gender=FloorplanFFB"
              className="bg-orange-400 hover:bg-orange-600 p-3 rounded-full text-white"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* 2 Col */}
        <div className="relative flex-1">
          <h2 className="mt-6 ml-4 font-bold text-2xl text-gray-900">Floorplan 2</h2>
          <img
            src={FFGreyGreenRelax2D}
            alt="FFGreyGreenRelax2D"
            className="shadow-lg rounded-lg w-full h-[700px] object-cover"
          />
          <div className="bottom-2 left-2 absolute bg-opacity-90 p-4">
            <Link
              to="/collections/all?gender=FloorplanFFG"
              className="bg-orange-400 hover:bg-orange-600 p-3 rounded-full text-white"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
