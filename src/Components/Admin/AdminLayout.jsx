import { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSidebarOpen, setIssidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIssidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex md:flex-row flex-col min-h-screen">
      {/* Mobile Toggle Button */}
      <div className="md:hidden z-20 flex bg-gray-900 p-4 text-white">
        <button onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 font-medium text-xl">Admin Dashboard</h1>
      </div>
      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="md:hidden z-10 fixed inset-0 bg-black bg-opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* sidebar */}
      <div
        className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}
      >
        {/* Side bar */}
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
