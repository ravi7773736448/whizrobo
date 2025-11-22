import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

// ✅ Robotics Products data with discount %
const roboticsProducts = [
  {
    id: 1,
    title: "Arduino Starter Kit",
    price: 3499,
    discount: 20, // 20% off
    image: "https://images.unsplash.com/photo-1596566430365-55867e5ccaca?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Raspberry Pi 4 Kit",
    price: 5999,
    discount: 15,
    image: "https://imgs.search.brave.com/Kjqd-6U2BVfTvEYpZdZY2L2mkefWLUvOOwTO7kYCFuk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDEzUGJWZkthRkwu/anBn",
  },
  {
    id: 3,
    title: "Robotic Arm Kit",
    price: 6250,
    discount: 25,
    image: "https://imgs.search.brave.com/B5iiVOt6VEXjew_xJaXCgGO9GuFholmSgcvIKoM1hkk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFPM0tjbFlXZUwu/anBn",
  },
  {
    id: 4,
    title: "Smart Car Kit",
    price: 4499,
    discount: 30,
    image: "https://imgs.search.brave.com/pYWlx5eqpmkbUmpQBDyyOTetcik1cGm4LySKHKOZwjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzEzcEtMcjM1TEwu/anBn",
  },
  {
    id: 5,
    title: "Drone Kit",
    price: 7999,
    discount: 40,
    image: "https://imgs.search.brave.com/w1yOT_TAWditdtcqsMPXi_ftmzovQNQhNVAb3OsDz6M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFJLXlJVUZRQ0wu/anBn",
  },
  {
    id: 6,
    title: "Sensor Kit",
    price: 2799,
    discount: 10,
    image: "https://imgs.search.brave.com/0iZ_RQdiywDWxx5FnHtRQXn3hk1YttsU4vQMC8wT_5Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFhTE4rV1hSY0wu/anBn",
  },
  {
    id: 7,
    title: "Line Follower Robot Kit",
    price: 3999,
    discount: 35,
    image: "https://imgs.search.brave.com/N9d7lUvLiZAOW8gxfH6cmrvY6T82CKkXs8C5wBfU2VM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2t5bmV0cm9ib3Rp/Y3MuaW4vY2RuL3No/b3AvZmlsZXMvYXJk/dW5vX2xpbmUucG5n/P3Y9MTcyNDAxMzEy/MiZ3aWR0aD0xNDQ1",
  },
  {
    id: 8,
    title: "Bluetooth Robot Kit",
    price: 4599,
    discount: 20,
    image: "https://imgs.search.brave.com/MNayiyDfbd_-CpDTw4V6iQNYgduDQ--54bMciJW4oBM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTEwLTJhWFBXUkwu/anBn",
  },
];

// Reusable Product Card Component
const ProductCard = ({ product, add }) => {
  const discountedPrice = Math.round(product.price * (1 - product.discount / 100));

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 flex flex-col overflow-hidden relative">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-md z-10">
          {product.discount}% OFF
        </div>
      )}
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
          <p className="text-orange-500 font-bold text-xl mt-2">
            ₹{discountedPrice}{" "}
            {product.discount > 0 && (
              <span className="text-gray-400 line-through text-base ml-2">
                ₹{product.price}
              </span>
            )}
          </p>
        </div>
        <button
          className="mt-6 w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-200"
          onClick={() =>
            add({
              id: product.id,
              title: product.title,
              price: discountedPrice,
              image: product.image,
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  const { addItem } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = roboticsProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Title + Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center sm:text-left">
            Robotics Kits & Accessories
          </h1>

          {/* Search Input */}
          <div className="relative w-full sm:w-1/3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} add={addItem} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="mt-6 text-center text-gray-600">No items found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
