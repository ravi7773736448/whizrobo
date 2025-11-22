// src/pages/OrderConfirmation.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const { order } = location.state || {}; // Get order details from navigation state

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">No order found</h2>
        <Link
          to="/products"
          className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Go to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <div className="bg-white shadow-xl rounded-lg max-w-4xl w-full p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-600 mb-2">Thank You!</h1>
          <p className="text-gray-700 mb-2">Your order has been placed successfully.</p>
          <p className="text-gray-800 font-semibold">Order ID: <span className="text-indigo-600">{order.id}</span></p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
          <ul className="divide-y divide-gray-200">
            {order.items.map((item) => (
              <li key={item.id} className="flex justify-between py-3 items-center">
                <div className="flex items-center gap-3">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                  <span className="text-gray-700 font-medium">{item.title} x {item.qty}</span>
                </div>
                <span className="text-gray-900 font-semibold">₹{(item.price * item.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center mb-6 text-lg font-bold text-gray-800">
          <span>Total</span>
          <span className="text-indigo-600 text-xl">₹{order.total.toFixed(2)}</span>
        </div>

        <div className="text-center">
          <Link
            to="/products"
            state={{ message: "Thank you for shopping!" }}
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
