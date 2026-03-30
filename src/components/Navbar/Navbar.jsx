import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../Cart/CartContext";
import { useAuth } from "../../contexts/AuthContext";
import { auth } from "../../firebaseconfig";
import { signOut } from "firebase/auth";

const Menu = [
  { id: 1, name: "Home",    link: "/home"    },
  { id: 2, name: "About",   link: "/about"   },
  { id: 3, name: "Blog",    link: "/blog"    },
  { id: 4, name: "Contact", link: "/contact" },
];

/* ── Chevron icon (no extra dep) ── */
const ChevronIcon = ({ open }) => (
  <svg
    width="12" height="12" viewBox="0 0 12 12" fill="none"
    style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
  >
    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Cart icon ── */
const CartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

export default function Navbar({ handleOrderPopup }) {
  const location   = useLocation();
  const navigate   = useNavigate();
  const { cartItems }          = useCart();
  const { isAuthenticated, user } = useAuth();

  const [scrolled,        setScrolled]        = useState(false);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [accountOpen,     setAccountOpen]     = useState(false);
  const accountRef = useRef(null);

  const cartCount = cartItems.reduce((t, i) => t + i.quantity, 0);
  const initials  = (user?.displayName || user?.email || "U")[0].toUpperCase();
  const displayName = user?.displayName || user?.email?.split("@")[0] || "";

  const isHome = location.pathname === "/" || location.pathname === "/home";
  const isTransparent = isHome && !scrolled;

  /* scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close account menu on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target))
        setAccountOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* close mobile on route change */
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setAccountOpen(false);
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  /* ── styles ── */
  const navBase = {
    position:   "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 200,
    transition: "background 0.45s cubic-bezier(.22,1,.36,1), border-color 0.45s, padding 0.35s",
    fontFamily: "'DM Sans', sans-serif",
  };

  const navScrolled = {
    background:   "rgba(255,255,255,0.98)", // pure white
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
    padding:      "0",
  };

  const navTop = {
    background:   "transparent",
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
    borderBottom: "1px solid transparent",
    padding:      "0",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap');

        .hr-nav-link { position: relative; }
        .hr-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: var(--nav-text-hover);
          transition: width 0.3s cubic-bezier(.22,1,.36,1);
        }
        .hr-nav-link:hover::after,
        .hr-nav-link.active::after { width: 100%; }

        .hr-cart-btn:hover { border-color: var(--nav-border-hover) !important; color: var(--nav-text-hover) !important; background: var(--nav-btn-bg-hover) !important; transform: translateY(-1px); }
        .hr-mobile-link:hover { background: rgba(62,207,108,0.08) !important; color: #3ecf6c !important; }
        .hr-mobile-link.active-mobile { color: #3ecf6c !important; background: rgba(62,207,108,0.08) !important; }

        .hr-dropdown-item:hover { background: rgba(62,207,108,0.08) !important; color: #3ecf6c !important; }
        .hr-logout:hover { background: rgba(239,68,68,0.08) !important; color: #dc2626 !important; }

        .hr-sign-in { color: var(--nav-icon) !important; border-color: var(--nav-border) !important; }
        .hr-sign-in:hover { background: var(--nav-text-hover) !important; color: var(--nav-bg) !important; border-color: var(--nav-text-hover) !important; }
        
        .mobile-hamburger:hover { color: var(--nav-text-hover) !important; background: var(--nav-btn-bg-hover) !important;}

        @keyframes hr-fade-down {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hr-dropdown-anim { animation: hr-fade-down 0.22s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes hr-slide-down {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hr-mobile-anim { animation: hr-slide-down 0.3s cubic-bezier(.22,1,.36,1) forwards; }
      `}</style>

      <nav style={{ 
        ...navBase, 
        ...(isTransparent ? navTop : navScrolled),
        '--nav-text': isTransparent ? 'rgba(255,255,255,0.7)' : '#333333',
        '--nav-text-hover': isTransparent ? '#ffffff' : '#3ecf6c',
        '--nav-icon': isTransparent ? '#ffffff' : '#000000',
        '--nav-border': isTransparent ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.1)',
        '--nav-border-hover': isTransparent ? 'rgba(255,255,255,0.6)' : 'rgba(62,207,108,0.5)',
        '--nav-btn-bg': isTransparent ? 'rgba(0,0,0,0.2)' : 'transparent',
        '--nav-btn-bg-hover': isTransparent ? 'rgba(255,255,255,0.15)' : 'rgba(62,207,108,0.08)',
        '--nav-bg': isTransparent ? '#000000' : '#ffffff'
      }}>
        {/* Subtle dynamic backdrop when transparent for pure text contrast */}
        {isTransparent && (
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)", pointerEvents: "none", zIndex: -1, height: "140px" }} />
        )}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(24px,6vw,96px)", display: "flex", alignItems: "center", justifyContent: "space-between", height: scrolled ? "70px" : "100px", transition: "height 0.35s cubic-bezier(.22,1,.36,1)" }}>

          {/* ── LOGO ── */}
          <Link to="/home" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <div style={{ width: "38px", height: "38px", background: "#3ecf6c", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: isTransparent ? "0 4px 16px rgba(0,0,0,0.4)" : "0 4px 12px rgba(62,207,108,0.2)", transition: "all 0.4s" }}>
              <img src={Logo} alt="HikeRent" style={{ width: "22px", height: "22px", filter: "brightness(0) invert(1)", objectFit: "contain", transition: "all 0.4s" }} />
            </div>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "28px", letterSpacing: "0.04em", color: "var(--nav-icon)", lineHeight: 1, transition: "color 0.4s" }}>
              HIKE<span style={{ color: "var(--nav-text-hover)", transition: "color 0.4s" }}>RENT</span>
            </span>
          </Link>

          {/* ── DESKTOP MENU ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }} className="desktop-menu">
            {Menu.map((item) => {
              const active = location.pathname === item.link;
              return (
                <Link
                  key={item.id}
                  to={item.link}
                  className={`hr-nav-link ${active ? "active" : ""}`}
                  style={{ textDecoration: "none", fontSize: "12.5px", letterSpacing: "0.15em", fontWeight: 700, color: active ? "var(--nav-text-hover)" : "var(--nav-text)", transition: "color 0.3s", textTransform: "uppercase" }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* ── ACTIONS ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>

            {/* Cart */}
            <button
              onClick={handleOrderPopup}
              className="hr-cart-btn"
              style={{ width: "42px", height: "42px", display: "flex", alignItems: "center", justifyContent: "center", background: scrolled || !isHome ? "transparent" : "rgba(0,0,0,0.2)", border: "1.5px solid var(--nav-border)", borderRadius: "10px", color: "var(--nav-icon)", cursor: "pointer", position: "relative", transition: "all 0.3s backdrop-filter 0.3s", backdropFilter: isTransparent ? "blur(8px)" : "none" }}
            >
              <CartIcon />
              {cartCount > 0 && (
                <span style={{ position: "absolute", top: "-5px", right: "-5px", background: "#3ecf6c", color: "#fff", fontSize: "10px", fontWeight: 800, width: "18px", height: "18px", borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: isTransparent ? "0 2px 4px rgba(0,0,0,0.3)" : "none" }}>
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </button>

            {/* Account */}
            {isAuthenticated ? (
              <div ref={accountRef} style={{ position: "relative" }}>
                <button
                  onClick={() => setAccountOpen(!accountOpen)}
                  style={{ display: "flex", alignItems: "center", gap: "10px", background: scrolled || !isHome ? "transparent" : "rgba(0,0,0,0.2)", backdropFilter: isTransparent ? "blur(8px)" : "none", border: "1.5px solid var(--nav-border)", borderRadius: "10px", padding: "6px 12px 6px 6px", cursor: "pointer", transition: "all 0.3s", color: "var(--nav-icon)" }}
                >
                  <div style={{ width: "30px", height: "30px", background: "var(--nav-text-hover)", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue', sans-serif", fontSize: "16px", color: "var(--nav-bg)", flexShrink: 0, transition: "background 0.3s, color 0.3s" }}>
                    {initials}
                  </div>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--nav-icon)", maxWidth: "100px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "none", transition: "color 0.3s" }} className="account-name">
                    {displayName}
                  </span>
                  <ChevronIcon open={accountOpen} />
                </button>

                {/* Dropdown */}
                {accountOpen && (
                  <div className="hr-dropdown-anim" style={{ position: "absolute", right: 0, top: "calc(100% + 12px)", width: "240px", background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "12px", overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.12)" }}>
                    <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(0,0,0,0.05)", background: "#fafafa" }}>
                      <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888", margin: "0 0 6px" }}>Masuk sebagai</p>
                      <p style={{ fontSize: "13px", fontWeight: 700, color: "#3ecf6c", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{user?.email}</p>
                    </div>
                    <div style={{ padding: "8px" }}>
                      <Link
                        to="/account-settings"
                        onClick={() => setAccountOpen(false)}
                        className="hr-dropdown-item"
                        style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px", borderRadius: "8px", textDecoration: "none", fontSize: "13.5px", fontWeight: 600, color: "#222", transition: "all 0.2s" }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                        Pengaturan Akun
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="hr-logout"
                        style={{ width: "100%", display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px", borderRadius: "8px", fontSize: "13.5px", fontWeight: 600, color: "#e11d48", background: "transparent", border: "none", cursor: "pointer", transition: "all 0.2s", textAlign: "left" }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                        Keluar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="hr-sign-in"
                style={{ padding: "10px 24px", background: isTransparent ? "rgba(0,0,0,0.2)" : "transparent", backdropFilter: isTransparent ? "blur(8px)" : "none", border: "1.5px solid var(--nav-border)", color: "var(--nav-icon)", fontSize: "12.5px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, borderRadius: "10px", textDecoration: "none", transition: "all 0.3s", whiteSpace: "nowrap" }}
              >
                Masuk
              </Link>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ width: "42px", height: "42px", display: "flex", alignItems: "center", justifyContent: "center", background: isTransparent ? "rgba(0,0,0,0.2)" : "transparent", backdropFilter: isTransparent ? "blur(8px)" : "none", border: "1px solid var(--nav-border)", borderRadius: "10px", color: "var(--nav-icon)", cursor: "pointer", transition: "all 0.3s" }}
              className="mobile-hamburger"
            >
              {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        {mobileOpen && (
          <div className="hr-mobile-anim mobile-menu" style={{ background: "#ffffff", borderTop: "1px solid rgba(4,120,87,0.05)", padding: "16px clamp(24px,6vw,96px) 32px", boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}>
            {Menu.map((item) => {
              const active = location.pathname === item.link;
              return (
                <Link
                  key={item.id}
                  to={item.link}
                  className={`hr-mobile-link ${active ? "active-mobile" : ""}`}
                  style={{ display: "block", padding: "14px 16px", borderRadius: "8px", textDecoration: "none", fontSize: "13.5px", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, color: active ? "#047857" : "#57534e", marginBottom: "4px", transition: "all 0.2s" }}
                >
                  {item.name}
                </Link>
              );
            })}

            <div style={{ height: "1px", background: "rgba(4,120,87,0.05)", margin: "16px 0" }} />

            {isAuthenticated ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "36px", height: "36px", background: "#047857", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue', sans-serif", fontSize: "18px", color: "#fff" }}>
                    {initials}
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#44403c" }}>{displayName}</span>
                </div>
                <button
                  onClick={handleLogout}
                  style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, color: "#ef4444", background: "transparent", border: "none", cursor: "pointer" }}
                >
                  Keluar
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                style={{ display: "block", textAlign: "center", padding: "14px", border: "1px solid rgba(4,120,87,0.3)", borderRadius: "8px", textDecoration: "none", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, color: "#047857" }}
              >
                Masuk
              </Link>
            )}
          </div>
        )}
      </nav>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-menu { display: flex !important; }
          .mobile-hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
          .account-name { display: inline-block !important; }
        }
        @media (max-width: 1023px) {
          .desktop-menu { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}