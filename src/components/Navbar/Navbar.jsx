import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../Cart/CartContext";
import { useAuth } from "../../contexts/AuthContext";
import { auth } from "../../firebaseconfig";
import { signOut } from "firebase/auth";

const Menu = [
  { id: 1, name: "Home", link: "/home" },
  { id: 2, name: "Products", link: "/all-products" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Blog", link: "/blog" },
  { id: 5, name: "Contact", link: "/contact" },
];

export default function Navbar({ handleOrderPopup }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { isAuthenticated, user } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef(null);

  const cartCount = cartItems.reduce((t, i) => t + i.quantity, 0);
  const initials = (user?.displayName || user?.email || "U")[0].toUpperCase();
  const displayName = user?.displayName || user?.email?.split("@")[0] || "";

  const isHome = location.pathname === "/" || location.pathname === "/home";
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target))
        setAccountOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setAccountOpen(false);
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        .nav-link {
          position: relative;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 0;
          height: 2px;
          background: #5cb384;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: transparent;
          border: 1px solid #ebebeb;
          border-radius: 8px;
          color: #1a1a1a;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }

        .nav-icon-btn:hover {
          background: #f5f5f5;
          border-color: #d6d6d6;
        }

        .cart-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          min-width: 20px;
          height: 20px;
          background: #5cb384;
          color: white;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .account-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 12px;
          background: transparent;
          border: 1px solid #ebebeb;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .account-btn:hover {
          background: #f5f5f5;
          border-color: #d6d6d6;
        }

        .avatar {
          width: 28px;
          height: 28px;
          background: #5cb384;
          color: white;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
        }

        .dropdown-menu {
          position: absolute;
          right: 0;
          top: calc(100% + 8px);
          width: 220px;
          background: white;
          border: 1px solid #ebebeb;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          z-index: 1000;
          animation: slideDown 0.2s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          color: #1a1a1a;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          background: white;
          border: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
          transition: all 0.2s ease;
        }

        .dropdown-item:hover {
          background: #f5f5f5;
          color: #5cb384;
        }

        .dropdown-item.logout {
          color: #ef4444;
        }

        .dropdown-item.logout:hover {
          background: #fef2f2;
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          background: white;
          border-bottom: 1px solid #ebebeb;
          padding: 16px;
          animation: slideDown 0.3s ease;
          z-index: 199;
        }

        .mobile-menu.open {
          display: block;
        }

        .mobile-link {
          display: block;
          padding: 12px 12px;
          color: #1a1a1a;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
          border-radius: 6px;
          margin-bottom: 4px;
          transition: all 0.2s ease;
        }

        .mobile-link:hover,
        .mobile-link.active {
          background: #e8f5f1;
          color: #5cb384;
        }

        @media (max-width: 1023px) {
          .desktop-menu {
            display: none !important;
          }
          .account-name {
            display: none !important;
          }
        }
      `}</style>

      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-200 transition-all duration-300 ${
          scrolled
            ? "bg-white border-b border-neutral-200 shadow-xs"
            : isTransparent
            ? "bg-transparent"
            : "bg-white border-b border-neutral-200"
        }`}
        style={{ height: "70px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/home"
            className="flex items-center gap-2 text-neutral-900 hover:text-accent-DEFAULT transition-colors"
          >
            <div className="w-9 h-9 bg-accent-DEFAULT rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
              <img
                src={Logo}
                alt="HikeRent"
                className="w-5 h-5"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ letterSpacing: "0.05em" }}
            >
              HIKE
              <span className="text-accent-DEFAULT">RENT</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 desktop-menu">
            {Menu.map((item) => {
              const active = location.pathname === item.link;
              return (
                <Link
                  key={item.id}
                  to={item.link}
                  className={`nav-link ${active ? "active text-accent-DEFAULT" : "text-neutral-600"}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              onClick={handleOrderPopup}
              className="nav-icon-btn"
              title="Shopping Cart"
            >
              <FaShoppingCart size={16} />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount > 9 ? "9+" : cartCount}</span>
              )}
            </button>

            {/* Account Button */}
            {isAuthenticated ? (
              <div ref={accountRef} className="relative">
                <button
                  onClick={() => setAccountOpen(!accountOpen)}
                  className="account-btn"
                >
                  <div className="avatar">{initials}</div>
                  <span className="account-name hidden sm:inline text-xs font-medium text-neutral-700 max-w-xs truncate">
                    {displayName}
                  </span>
                </button>

                {accountOpen && (
                  <div className="dropdown-menu">
                    <div className="px-4 py-3 bg-neutral-50 border-b border-neutral-200">
                      <p className="text-xs text-neutral-500 uppercase tracking-wide">Logged in as</p>
                      <p className="text-sm font-semibold text-neutral-900 truncate mt-1">
                        {user?.email}
                      </p>
                    </div>
                    <div className="p-2">
                      <Link
                        to="/account-settings"
                        onClick={() => setAccountOpen(false)}
                        className="dropdown-item"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                        </svg>
                        Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="dropdown-item logout"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                          <polyline points="16 17 21 12 16 7" />
                          <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden sm:inline px-4 py-2 text-sm font-medium text-accent-DEFAULT border border-neutral-200 rounded-lg hover:bg-accent-light transition-colors"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden nav-icon-btn"
            >
              {mobileOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {Menu.map((item) => {
          const active = location.pathname === item.link;
          return (
            <Link
              key={item.id}
              to={item.link}
              className={`mobile-link ${active ? "active" : ""}`}
            >
              {item.name}
            </Link>
          );
        })}

        {!isAuthenticated && (
          <Link
            to="/login"
            className="mobile-link mt-3 pt-3 border-t border-neutral-200"
          >
            Login
          </Link>
        )}
      </div>

      {/* Spacer */}
      <div style={{ height: "70px" }} />
    </>
  );
}
