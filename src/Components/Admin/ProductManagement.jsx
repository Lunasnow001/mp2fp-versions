import { Link } from "react-router-dom";

const ProductManagement = () => {
  const products = [
    {
      _id: 123321,
      name: "3D with 2D",
      price: 250,
      sku: "ads234segh",
    },
  ];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log("Delete Product with ID", id);
    }
  };

  return (
    <div className="mx-auto p-6 max-w-7xl">
      <h2 className="mb-6 font-bold text-2xl">Product Management</h2>
      <div className="shadow-md sm:rounded-lg overflow-x-auto">
        <table className="min-w-full text-gray-500 text-left">
          <thead className="bg-gray-100 text-gray-500 text-xs uppercase">
            <tr>
              <td className="px-4 py-3">Name</td>
              <td className="px-4 py-3">Price</td>
              <td className="px-4 py-3">SKU</td>
              <td className="px-4 py-3">Actions</td>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  className="hover:bg-gray-50 border-b cursor-pointer"
                  key={product._id}
                >
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="p-4">${product.price}</td>
                  <td className="p-4">{product.sku}</td>
                  <td className="p-4">
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="bg-yellow-500 hover:bg-yellow-600 mr-2 px-2 py-2 rounded text-white"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 hover:bg-red-600 px-2 py-2 rounded text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-gray-500 text-center">
                  No Products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
