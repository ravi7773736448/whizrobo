import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

// Robotics Product data
const products = [
  {
    id: 1,
    name: "Arduino Starter Kit",
    price: "₹3,499",
    image:
      "https://images.unsplash.com/photo-1596566430365-55867e5ccaca?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Raspberry Pi 4 Kit",
    price: "₹5,999",
    image:
      "https://imgs.search.brave.com/Kjqd-6U2BVfTvEYpZdZY2L2mkefWLUvOOwTO7kYCFuk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDEzUGJWZkthRkwu/anBn",
  },
  {
    id: 3,
    name: "Robotic Arm Kit",
    price: "₹6,250",
    image:
      "https://imgs.search.brave.com/B5iiVOt6VEXjew_xJaXCgGO9GuFholmSgcvIKoM1hkk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFPM0tjbFlXZUwu/anBn",
  },
  {
    id: 4,
    name: "Smart Car Kit",
    price: "₹4,499",
    image:
      "https://imgs.search.brave.com/pYWlx5eqpmkbUmpQBDyyOTetcik1cGm4LySKHKOZwjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzEzcEtMcjM1TEwu/anBn",
  },
];

// Slider images
const sliderImages = [
  "https://whizrobo.com/wp-content/uploads/2024/11/IBR11-scaled.jpg",
  "https://whizrobo.com/wp-content/uploads/2024/11/whizfest1.jpeg",
  "https://whizrobo.com/wp-content/uploads/2024/10/kit1-768x459.jpg",
];

const Home = () => {
  const { addToCart, addItem } = useContext(CartContext);
  const add = addToCart || addItem;

  const parsePrice = (price) => Number(price.replace(/[^0-9.-]+/g, ""));

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen px-6 text-center overflow-hidden bg-gradient-to-r from-indigo-50 to-white">
        <div className="max-w-3xl z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 font-poppins animate-fadeIn">
            Explore Robotics & Innovation
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-700 font-roboto">
            Cutting-edge robotics kits and educational tools for young innovators.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-3 rounded-full font-medium hover:scale-105 hover:shadow-lg transition-transform">
            Shop Now
          </button>
        </div>
        {/* Decorative shapes */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-100 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -right-10 w-56 h-56 bg-indigo-100 opacity-20 rounded-full blur-3xl"></div>
      </section>

      {/* Slider Section */}
      <section className="relative max-w-7xl mx-auto px-4 mt-12 rounded-lg shadow-lg overflow-hidden">
        <img
          src={sliderImages[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg transition-transform duration-700"
        />
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white p-3 rounded-full hover:scale-105 transition"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white p-3 rounded-full hover:scale-105 transition"
        >
          &#10095;
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
          {sliderImages.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${
                idx === currentSlide ? "bg-orange-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </section>

      {/* Featured Robotics Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 font-poppins">
            Featured Robotics Kits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 flex flex-col items-center p-5 font-roboto"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  {product.name}
                </h3>
                <p className="text-orange-500 font-bold text-lg mb-4">
                  {product.price}{" "}
                  <span className="text-red-500 text-sm ml-2">50% OFF</span>
                </p>
                <button
                  onClick={() =>
                    add({
                      id: product.id,
                      name: product.name,
                      price: parsePrice(product.price),
                      image: product.image,
                      quantity: 1,
                    })
                  }
                  className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-3 rounded-full font-medium hover:scale-105 hover:shadow-lg transition-transform duration-200"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center font-roboto">
          <h3 className="text-2xl font-bold mb-2 text-white font-poppins">
            WhizRobo
          </h3>
          <p className="text-sm mb-4">
            Quality robotics kits. Trusted service. Delivered with care.
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-white transition">Facebook</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} WhizRobo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
