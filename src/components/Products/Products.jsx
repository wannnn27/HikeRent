import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/alat/Tenda.png";
import Img2 from "../../assets/alat/Careel.png";
import Img3 from "../../assets/alat/sleeping bag.png";
import Img4 from "../../assets/alat/Matras.png";
import Img5 from "../../assets/alat/sepatu.png";
import Img6 from "../../assets/alat/Kompor.png";
import Img7 from "../../assets/alat/headlamp.png";
import Img8 from "../../assets/alat/backpack.png";

const initialProductsData = [
  {
    id: 1,
    img: Img1,
    name: "Tenda Dome 2 Orang",
    price: 40000,
    availability: true,
    category: "Tenda",
    aosDelay: 100,
  },
  {
    id: 2,
    img: Img2,
    name: "Carrier 50L",
    price: 45000,
    availability: true,
    category: "Tas",
    aosDelay: 200,
  },
  {
    id: 3,
    img: Img3,
    name: "Sleeping Bag",
    price: 30000,
    availability: false,
    category: "Tidur",
    aosDelay: 300,
  },
  {
    id: 4,
    img: Img4,
    name: "Matras",
    price: 20000,
    availability: true,
    category: "Tidur",
    aosDelay: 400,
  },
  {
    id: 5,
    img: Img5,
    name: "Sepatu",
    price: 25000,
    availability: true,
    category: "Alas Kaki",
    aosDelay: 500,
  },
  {
    id: 6,
    img: Img6,
    name: "Kompor Portable",
    price: 15000,
    availability: true,
    category: "Dapur",
    aosDelay: 600,
  },
  {
    id: 7,
    img: Img7,
    name: "Headlamp",
    price: 10000,
    availability: true,
    category: "Lampu",
    aosDelay: 700,
  },
  {
    id: 8,
    img: Img8,
    name: "Backpack 30L",
    price: 35000,
    availability: true,
    category: "Tas",
    aosDelay: 800,
  },
];

const Products = () => {
  const [products, setProducts] = useState(initialProductsData);
  const [category, setCategory] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    category === "" || product.category.toLowerCase() === category.toLowerCase()
  );

  const categories = ["", "Tenda", "Tas", "Tidur", "Alas Kaki", "Dapur", "Lampu"];

  return (
    <div className="mt-14 mb-12 px-6 lg:px-16">
      {/* Header section */}
      <div className="text-center mb-12">
        <h1
          className="text-4xl font-bold text-gray-800 dark:text-gray-100"
          data-aos="fade-up"
        >
          Sewa Barang Petualangan
        </h1>
        <p
          className="text-gray-500 dark:text-gray-300 mt-4 max-w-xl mx-auto"
          data-aos="fade-up"
        >
          Pilih dari berbagai perlengkapan berkualitas untuk menunjang petualangan Anda. Temukan yang sesuai dengan kebutuhan Anda.
        </p>
      </div>

      {/* Search dropdown */}
      <div className="mb-6 flex items-center justify-start">
        <select
          value={category}
          onChange={handleCategoryChange}
          className="p-2 border rounded-md shadow w-1/4 max-w-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat === "" ? "Semua Kategori" : cat}
            </option>
          ))}
        </select>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay={product.aosDelay}
          >
            {/* Product image */}
            <div className="relative h-48 flex items-center justify-center">
              <img
                src={product.img}
                alt={product.name}
                className="max-h-40 drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              {!product.availability && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  Habis
                </span>
              )}
            </div>

            {/* Product details */}
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                {product.name}
              </h2>
              <p className="text-primary text-xl font-bold mt-2">
                Rp{product.price}/hari
              </p>
              <Link
                to={`/products/${product.id}`}
                className="inline-block mt-4 px-4 py-2 bg-primary text-white dark:text-gray-800 dark:bg-gray-300 rounded-full shadow hover:bg-primary-dark hover:dark:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Detail Produk
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All Products */}
      <div className="text-center mt-12">
        <Link
          to="/all-products"
          className="inline-block px-6 py-3 bg-primary text-white text-lg font-semibold rounded-full shadow hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default Products;
