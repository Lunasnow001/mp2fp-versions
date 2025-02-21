import { Link } from "react-router-dom";

const AdminHomePage = () => {
  const orders = [
    {
      _id: "saswx123123ffds",
      user: {
        name: "John Doe",
      },
      totalPrice: 110,
      status: "Processing",
    },
    {
      _id: "saswx123123ffds",
      user: {
        name: "Jame Doe",
      },
      totalPrice: 110,
      status: "Processing",
    },
    {
      _id: "saswx123123ffds",
      user: {
        name: "Iron Doe",
      },
      totalPrice: 110,
      status: "Processing",
    },
    {
      _id: "saswx123123ffds",
      user: {
        name: "Alex Doe",
      },
      totalPrice: 110,
      status: "Processing",
    },
    {
      _id: "saswx123123ffds",
      user: {
        name: "Contro Doe",
      },
      totalPrice: 110,
      status: "Processing",
    },
  ];
  return (
    <div className="mx-auto p-6 max-w-7xl">
      <h1 className="mb-6 font-bold text-3xl">Admin Dashboard</h1>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="shadow-md p-4 rounded-lg">
          <h2 className="font-semibold text-xl">Revenue</h2>
          <p className="text-2xl">$10000</p>
        </div>
        <div className="shadow-md p-4 rounded-lg">
          <h2 className="font-semibold text-xl">Total Orders</h2>
          <p className="text-2xl">200</p>
          <Link to="/admin/orders" className="text-blue-500 hover:underline">
            Manage Orders
          </Link>
        </div>
        <div className="shadow-md p-4 rounded-lg">
          <h2 className="font-semibold text-xl">Total Products</h2>
          <p className="text-2xl">100</p>
          <Link to="/admin/products" className="text-blue-500 hover:underline">
            Manage Products
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="mb-4 font-bold text-2xl">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-gray-500 text-left">
            <thead className="bg-gray-100 text-gray-700 text-xs uppercase">
              <tr>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Total Price</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="hover:bg-gray-50 border-b cursor-pointer"
                  >
                    <td className="p-4">{order._id}</td>
                    <td className="p-4">{order.user.name}</td>
                    <td className="p-4">{order.totalPrice}</td>
                    <td className="p-4">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-4 text-gray-500 text-center">
                    No recent orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
