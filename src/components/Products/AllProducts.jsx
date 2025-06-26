import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  const categories = ["", "Tenda", "Tas", "Tidur", "Alas Kaki", "Dapur", "Lampu", "Pakaian", "Paket"];

  const sortOptions = [
    { value: "", label: "Default" },
    { value: "price-low", label: "Harga Terendah" },
    { value: "price-high", label: "Harga Tertinggi" },
    { value: "name-asc", label: "Nama (A-Z)" },
    { value: "name-desc", label: "Nama (Z-A)" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Ganti URL ini dengan endpoint API Anda
        const response = await fetch('src/data/data.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (error) {
        console.error("Fetching products failed:", error);
        setError('Gagal memuat data produk. Silakan coba lagi nanti.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products
  const getFilteredAndSortedProducts = () => {
    let filtered = products;

    // Apply category filter
    if (category) {
      filtered = filtered.filter((product) =>
        product.category?.toLowerCase() === category.toLowerCase()
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "name-asc":
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return [...filtered].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return filtered;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Rest of your component remains the same */}
    </div>
  );
};

export default AllProducts;