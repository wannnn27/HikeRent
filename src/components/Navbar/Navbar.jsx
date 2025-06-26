import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { FaShoppingCart, FaCaretDown, FaBars, FaTimes } from "react-icons/fa"; // Ganti FaCartShopping dengan FaShoppingCart
import DarkMode from "./DarkMode";
import { useCart } from "../Cart/CartContext";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Blog", link: "/blog" },
  { id: 4, name: "Contact", link: "/contact" },
];

const DropdownLinks = [
  { id: 1, name: "Paket", link: "/paket" },
  { id: 2, name: "Satuan", link: "/satuan" },
];

const Navbar = ({ handleOrderPopup }) => {
  const location = useLocation();
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Menambahkan kondisi untuk memeriksa apakah path adalah '/'
  if (location.pathname !== '/') {
    return null; 
  }

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src={Logo} alt="Logo" className="w-10" />
            HikeRent
          </Link>

          {/* Navbar Links */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-4">
              {Menu.map((data) => (
                <Link
                  key={data.id}
                  to={data.link}
                  className={`inline-block px-4 py-2 transition-all duration-200 ease-in-out hover:text-primary hover:bg-primary/10 ${
                    location.pathname === data.link ? "text-primary font-bold" : ""
                  }`}
                >
                  {data.name}
                </Link>
              ))}
            </div>

            {/* Cart Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group relative transition-all duration-200 ease-in-out hover:bg-gradient-to-l hover:from-secondary hover:to-primary"
              aria-label="Cart"
            >
              <span className="group-hover:block hidden">Keranjang</span>
              <FaShoppingCart className="text-xl text-white drop-shadow-sm" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Dark Mode Switch */}
            <DarkMode />

            {/* User Account Dropdown */}
            {isUserLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setAccountMenuOpen(!accountMenuOpen)}
                  className="flex items-center gap-2 py-1 px-3 border rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 transition-all duration-200 ease-in-out hover:bg-primary/10"
                  aria-label="Account"
                >
                  <span>Adi Arwan Syah</span>
                  <FaCaretDown />
                </button>
                {accountMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-md rounded-md w-48">
                    <ul>
                      <li>
                        <Link
                          to="/account-settings"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                          onClick={() => setAccountMenuOpen(false)}
                        >
                          Account Settings
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setIsUserLoggedIn(false);
                            setAccountMenuOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="py-1 px-4 border rounded-md border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 ease-in-out"
              >
                Login
              </Link>
            )}

            {/* Hamburger Menu */}
            <button
              className="sm:hidden text-primary dark:text-white text-2xl transition-all duration-200 ease-in-out hover:text-primary/80"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <ul className="flex flex-col items-center py-2">
            {Menu.map((data) => (
              <li key={data.id} className="w-full text-center py-2">
                <Link
                  to={data.link}
                  className="inline-block w-full hover:text-primary transition-all duration-200 ease-in-out"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {data.name}
                </Link>
              </li>
            ))}
            {/* Dropdown for Mobile */}
            <li className="group relative w-full text-center py-2">
              <span className="flex justify-center items-center gap-2">
                Category
                <FaCaretDown />
              </span>
              <div className="absolute z-50 w-full bg-white dark:bg-gray-800 p-2 shadow-md">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <Link
                        to={data.link}
                        className="block p-2 hover:bg-primary/20 transition-all duration-200 ease-in-out"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {data.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
