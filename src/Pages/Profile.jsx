import MyOrderPage from "./MyOrderPage";

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow mx-auto p-4 md:p-6 container">
        <div className="flex md:flex-row flex-col md:space-x-6 space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="shadow-md p-6 rounded-lg w-full md:w-1/3 lg:w-1/4">
            <h1 className="mb-4 font-bold text-2xl md:text-3xl">John Doe</h1>
            <p className="mb-4 text-gray-600 text-lg">John@mp2fp.com</p>
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
