import MyOrderPage from "./MyOrderPage";

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow mx-auto p-4 md:p-6 container">
        <div className="flex md:flex-row flex-col md:space-x-6 space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="shadow-md p-6 rounded-lg w-full md:w-1/3 lg:w-1/4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mt-10 mb-10">
              <div className="shrink-0">
                <img
                  className="rounded-full w-14 h-14"
                  src="https://img.lovepik.com/png/20231110/black-cat-face-black-cats-cartoon-sticker_554984_wh860.png"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 dark:text-white text-2xl truncate">
                  John Doe
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm truncate">
                  john@mp2fp.com
                </p>
              </div>
              <span className="inline-flex items-center bg-green-100 dark:bg-green-900 px-2.5 py-0.5 rounded-full font-medium text-green-800 dark:text-green-300 text-xs">
                <span className="bg-green-500 me-1 rounded-full w-2 h-2"></span>
                Available
              </span>
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded w-full text-white">
              Logout
            </button>
          </div>
          {/* Right Section: Orders table*/}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrderPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
