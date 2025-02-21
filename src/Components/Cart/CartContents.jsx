import { RiDeleteBin3Line } from "react-icons/ri"

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "3D",
      type: "FF",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "2D",
      type: "UF",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=2",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex justify-between items-start py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="mr-4 rounded w-20 h-24 object-cover"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-gray-500 text-sm">
                type: {product.type} | color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="px-2 py-1 border rounded font-medium text-xl">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="px-2 py-1 border rounded font-medium text-xl">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>$ {product.price.toLocaleString()}</p>
            <button>
            <RiDeleteBin3Line className="mt-2 w-6 h-6 text-red-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
