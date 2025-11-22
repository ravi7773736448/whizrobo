import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext) || [];
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.qty || 1),
    0
  );

  const placeOrder = () => {
    if (!cartItems || cartItems.length === 0) return;

    const order = {
      id: "ORD" + Math.floor(Math.random() * 1000000),
      items: cartItems,
      total,
      date: new Date().toLocaleString(),
    };

    clearCart();
    navigate("/order-confirmation", { state: { order } });
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Your cart is empty</h2>
        <Link
          to="/products"
          className="text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-md transition"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-lg"
                />
              )}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mt-1">
                  Quantity: <span className="font-medium">{item.qty || 1}</span>
                </p>
                <p className="text-gray-600">
                  Price: ₹{(item.price || 0).toFixed(2)}
                </p>
                <p className="text-gray-800 font-semibold mt-1">
                  Subtotal: ₹{((item.price || 0) * (item.qty || 1)).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md h-fit sticky top-20">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Order Summary</h2>
          <div className="flex justify-between mb-2 text-gray-700">
            <span>Items:</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="flex justify-between mb-2 text-gray-700">
            <span>Total:</span>
            <span className="font-semibold text-gray-900">₹{total.toFixed(2)}</span>
          </div>
          <button
            onClick={placeOrder}
            className="mt-6 w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
