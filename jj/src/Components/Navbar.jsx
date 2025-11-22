import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleUserChange = () => {
      const updatedUser = JSON.parse(localStorage.getItem("user"));
      setUser(updatedUser);
    };
    window.addEventListener("userChanged", handleUserChange);
    return () => {
      window.removeEventListener("userChanged", handleUserChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("userChanged"));
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 fixed top-0 w-full z-50 transition-all">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://whizrobo.com/wp-content/uploads/2023/07/logo.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-black font-semibold hover:text-gray-700 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-black font-semibold hover:text-gray-700 transition duration-300"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-black font-semibold hover:text-gray-700 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-black font-semibold hover:text-gray-700 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <span className="text-black font-medium">{user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-4 py-2 rounded-lg font-medium hover:scale-105 hover:shadow-lg transition-transform duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-4 py-2 rounded-lg font-medium hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-white p-4 shadow-md rounded-md">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-black font-semibold hover:text-gray-700 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setIsMenuOpen(false)}
            className="text-black font-semibold hover:text-gray-700 transition duration-300"
          >
            Products
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-black font-semibold hover:text-gray-700 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-black font-semibold hover:text-gray-700 transition duration-300"
          >
            Contact
          </Link>

          {user ? (
            <>
              <span className="text-black font-medium">{user.name}</span>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-4 py-2 rounded-lg font-medium hover:scale-105 hover:shadow-lg transition-transform duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-4 py-2 rounded-lg font-medium hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
