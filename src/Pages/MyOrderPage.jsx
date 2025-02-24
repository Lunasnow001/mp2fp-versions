import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyOrderPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching orders
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "ad6958ses1153540264",
          createAt: new Date(),
          shippingAddress: { city: "Pattaya", country: "TH" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "ad6958scws134765642",
          createAt: new Date(),
          shippingAddress: { city: "Pattaya", country: "TH" },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 120,
          isPaid: false,
        },
        {
          _id: "ad6958scws135684118",
          createAt: new Date(),
          shippingAddress: { city: "Bangkok", country: "TH" },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=3",
            },
          ],
          totalPrice: 120,
          isPaid: true,
        },
        {
          _id: "ad6958scws147475112",
          createAt: new Date(),
          shippingAddress: { city: "ChiangMai", country: "TH" },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=4",
            },
          ],
          totalPrice: 120,
          isPaid: false,
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  }, []);

  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  return (
    <div className="mx-auto p-4 sm:p-6 max-w-7xl">
      <h2 className="mb-6 font-bold text-xl sm:text-2xl">My Order</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-gray-500 text-left">
          <thead className="bg-gray-100 text-gray-700 text-xs uppercase">
            <tr>
              <th className="px-4 py-2 sm:py-3">Image</th>
              <th className="px-4 py-2 sm:py-3">Order ID</th>
              <th className="px-4 py-2 sm:py-3">Created</th>
              <th className="px-4 py-2 sm:py-3">Saipping Address</th>
              <th className="px-4 py-2 sm:py-3">Items</th>
              <th className="px-4 py-2 sm:py-3">Price</th>
              <th className="px-4 py-2 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  onClick={() => handleRowClick(order._id)}
                  className="hover:border-gray-50 border-b cursor-pointer"
                >
                  <td className="px-2 sm:px-4 py-2 sm:py-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="rounded-lg w-10 h-10 sm:h-12 object-cover"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-4">
                    {new Date(order.createAt).toLocaleDateString()}{" "}
                    {new Date(order.createAt).toLocaleTimeString()}
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-4">
                    {order.orderItems.length}
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-4">
                    ${order.totalPrice}
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-4">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-100 text-green-700 "
                          : "bg-red-100 text-red-700 "
                      } px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-4 py-4 text-gray-500 text-center">
                  You have no orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderPage;
