const checkout = {
  _id: "abcw5842dswi23",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "3D",
      color: "pink",
      type: "FF",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "2D",
      color: "pink",
      type: "UF",
      price: 120,
      quantity: 2,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "Sai 2 Pattaya Street",
    city: "Thailand",
    country: "TH",
  },
};

const OrderConfirmationPage = () => {
  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };
  return (
    <div className="bg-white mx-auto p-6 max-w-4xl">
      <h1 className="mb-8 font-bold text-4xl text-center text-emerald-700">
        Thank you for Your Order!😀
      </h1>
      {checkout && (
        <div className="p-6 border rounded-lg">
          <div className="flex justify-between mb-20">
            {/* Order Id and Date */}
            <div>
              <h2 className="font-semibold text-xl">
                Order Id: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* Estimated Delivery */}
            <div>
              <p className="text-emerald-700 text-sm">
                Estimated Delivery:{" "}
                {calculateEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
          {/* Ordered Items */}
          <div className="mb-20">
            {checkout.checkoutItems.map((item) => (
              <div className="flex items-center mb-4" key={item.productId}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="mr-4 rounded-md w-16 h-16 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-md">{item.name}</h4>
                  <p className="text-gray-500 text-sm">
                    {item.color} : {item.type}
                  </p>
                </div>
                <div className="text-right ml-auto">
                  <p className="text-md">${item.price}</p>
                  <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Payment and Delivery Info */}
          <div className="gap-8 grid grid-cols-2">
            {/* Payment Info */}
            <div>
              <h4 className="mb-2 font-semibold text-lg">Payment</h4>
              <p className="text-gray-600">PayPal</p>
            </div>
            {/* Delivery Info */}
            <div>
              <h4 className="mb-2 font-semibold text-lg">Delivery</h4>
              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600">
                {checkout.shippingAddress.city},{" "}
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
