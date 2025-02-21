import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: { city: "Pattaya", country: "TH" },
      orderItems: [
        {
          productId: "1",
          name: "3D",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/150?random=1",
        },
        {
          productId: "2",
          name: "2D",
          price: 120,
          quantity: 2,
          image: "https://picsum.photos/150?random=2",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className="mx-auto p-4 sm:p-6 max-w-7xl">
      <h2 className="mb-6 font-bold text-2xl md:text-3xl">Order Details</h2>
      {!orderDetails ? (
        <p>No Order details found</p>
      ) : (
        <div className="p-4 sm:p-6 border rounded-lg">
          {/* Order Info */}
          <div className="flex sm:flex-row flex-col justify-between mb-8">
            <div>
              <h3 className="font-semibold text-lg md:text-xl">
                Order ID: #{orderDetails._id}
              </h3>
              <p className="text-gray-500">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isDelivered ? "Delivery" : "Pending Delivery"}
              </span>
            </div>
          </div>
          {/* Customer, Payment, Shipping Info */}
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">
            <div className="">
              <h4 className="mb-2 font-semibold text-lg">Payment Info</h4>
              <p>Payment Method: {orderDetails.paymentMethod}</p>
              <p>Status: {orderDetails.isPaid ? "Paid" : "Unpaid"}</p>
            </div>
            <div className="">
              <h4 className="mb-2 font-semibold text-lg">Shipping Info</h4>
              <p>Shipping Method: {orderDetails.paymentMethod}</p>
              <p>
                Address:{" "}
                {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
              </p>
            </div>
          </div>
          {/* Product List */}
          <div className="overflow-x-auto">
            <h4 className="mb-4 font-semibold text-lg">Products</h4>
            <table className="mb-4 min-w-full text-gray-600">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Unit Price</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item) => (
                  <tr key={item.productId}>
                    <td className="flex items-center px-4 py-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="mr-4 rounded-lg w-12 h-12 object-cover"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className="text-blue-500 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="px-4 py-2">${item.price}</td>
                    <td className="px-4 py-2">${item.quantity}</td>
                    <td className="px-4 py-2">${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/my-orders" className="text-blue-500 hover:underline">Back To My Oreders</Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
