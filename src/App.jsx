import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import AccountSettings from "./pages/AccountSettings";
import CheckoutPage from "./components/Checkout/CheckoutPage";
import { auth } from "./firebaseconfig";
import AllProducts from "./components/Products/AllProducts"; 

const App = () => {
  const [cartPopup, setCartPopup] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    AOS.init({ offset: 100, duration: 800, easing: "ease-in-sine", delay: 100 });
    AOS.refresh();
  }, []);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <CartProvider>
      <Router>
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
          <Navbar handleOrderPopup={() => setCartPopup(true)} />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <ProtectedRoute
                  element={
                    <>
                      <Hero handleOrderPopup={() => setCartPopup(true)} />
                      <Products />
                      <TopProducts handleOrderPopup={() => setCartPopup(true)} />
                      <Banner />
                      <Testimonials />
                    </>
                  }
                />
              }
            />
            <Route
              path="/account-settings"
              element={<ProtectedRoute element={<AccountSettings />} />}
            />
            <Route
              path="/products/:id"
              element={<ProtectedRoute element={<ProductDetail />} />}
            />
            <Route
              path="/package-detail/:id"
              element={<ProtectedRoute element={<PackageDetail />} />}
            />
            <Route path="/about" element={<ProtectedRoute element={<About />} />} />
            <Route path="/blog" element={<ProtectedRoute element={<BlogPage />} />} />
            <Route
              path="/blog/:id"
              element={<ProtectedRoute element={<BlogDetail />} />}
            />
            <Route
              path="/contact"
              element={<ProtectedRoute element={<ContactPage />} />}
            />
            <Route
              path="/checkout"
              element={<ProtectedRoute element={<CheckoutPage />} />}
            />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/all-products" element={<ProtectedRoute element={<AllProducts />} />} />
          </Routes>

          <Footer />
          <CartPopup isOpen={cartPopup} setIsOpen={setCartPopup} />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;