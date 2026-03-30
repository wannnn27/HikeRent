import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Hero/Hero";

import Products from "./components/Products/Products";

import AOS from "aos";

import "aos/dist/aos.css";

import TopProducts from "./components/TopProducts/TopProducts";

import Banner from "./components/Banner/Banner";

import Testimonials from "./components/Testimonials/Testimonials";

import Footer from "./components/Footer/Footer";

import ProductDetail from "./components/ProductDetail/ProductDetail";

import PackageDetail from "./components/ProductDetail/PackageDetail";

import About from "./components/About/About";

import CartProvider from "./components/Cart/CartContext";

import CartPopup from "./components/Cart/CartPopup";

import BlogPage from "./components/Blog/BlogPage";

import BlogDetail from "./components/Blog/BlogDetail";

import ContactPage from "./components/Contact/ContactPage";

import Login from "./components/Auth/Login";

import Register from "./components/Auth/Register";

import Landing from "./components/Landing/Landing";

import AccountSettings from "./pages/AccountSettings";

import CheckoutPage from "./components/Checkout/CheckoutPage";

import { AuthProvider, useAuth } from "./contexts/AuthContext";

import AllProducts from "./components/Products/AllProducts";

const AppContent = () => {
  const [cartPopup, setCartPopup] = React.useState(false);

  const { isAuthenticated, isLoading } = useAuth();

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });

    AOS.refresh();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-stone-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };
  return (
    <Router>
      <div className="bg-stone-50 min-h-screen duration-200 transition-colors">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/home"
            element={
              <>
                <Navbar handleOrderPopup={() => setCartPopup(true)} />
                <Hero handleOrderPopup={() => setCartPopup(true)} />
                <Products />
                <TopProducts handleOrderPopup={() => setCartPopup(true)} />
                <Banner />
                <Testimonials />
                <Footer />
              </>
            }
          />

          <Route
            path="/products/:id"
            element={
              <>
                <Navbar handleOrderPopup={() => setCartPopup(true)} />
                <ProductDetail />
                <Footer />
              </>
            }
          />
          <Route
            path="/package-detail/:id"
            element={
              <>
                <Navbar handleOrderPopup={() => setCartPopup(true)} />
                <PackageDetail />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar handleOrderPopup={() => setCartPopup(true)} />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Navbar handleOrderPopup={() => setCartPopup(true)} />
                <BlogPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <>
                <Navbar handleOrderPopup={() => setCartPopup(true)} />
                <BlogDetail />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar handleOrderPopup={() => setCartPopup(true)} />
                <ContactPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/all-products"
            element={
              <>
                <Navbar handleOrderPopup={() => setCartPopup(true)} />
                <AllProducts />
                <Footer />
              </>
            }
          />

          <Route
            path="/account-settings"
            element={
              <>
                <Navbar handleOrderPopup={() => setCartPopup(true)} />
                <ProtectedRoute element={<AccountSettings />} />
                <Footer />
              </>
            }
          />
          <Route
            path="/checkout"
            element={<ProtectedRoute element={<CheckoutPage />} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <CartPopup isOpen={cartPopup} setIsOpen={setCartPopup} />
      </div>
    </Router>
  );
};
const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
};
export default App;
