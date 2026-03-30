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
    name: "Carrier 50L Premium",
    price: 45000,
    availability: true,
    category: "Tas",
    aosDelay: 200,
  },
  {
    id: 3,
    img: Img3,
    name: "Sleeping Bag Polar",
    price: 30000,
    availability: false,
    category: "Tidur",
    aosDelay: 300,
  },
  {
    id: 4,
    img: Img4,
    name: "Matras Camping",
    price: 20000,
    availability: true,
    category: "Tidur",
    aosDelay: 400,
  },
  {
    id: 5,
    img: Img5,
    name: "Sepatu Hiking Pro",
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
    name: "Headlamp LED",
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

const categories = [
  "Semua Kategori",
  "Tenda",
  "Tas",
  "Tidur",
  "Alas Kaki",
  "Dapur",
  "Lampu",
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("Semua Kategori");

  const filteredProducts = initialProductsData.filter(
    (product) =>
      activeCategory === "Semua Kategori" ||
      product.category === activeCategory,
  );

  return (
    <div className="py-32 bg-white" id="products">
      <div className="container px-[clamp(24px,6vw,96px)] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div data-aos="fade-right">
            <p className="text-primary font-bold text-xs uppercase tracking-[0.25em] mb-4">
              Our Equipment
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-black tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              KATALOG <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(62,207,108,0.6)" }}>SEWA</span> TERBAIK
            </h2>
            <div className="w-16 h-1 bg-primary mt-6 rounded-full"></div>
          </div>
          <div className="flex flex-wrap gap-2" data-aos="fade-left">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-lg text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-black text-white shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-primary/40 hover:text-primary shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredProducts.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_24px_48px_rgba(0,0,0,0.08)] hover:-translate-y-2 border border-gray-100 hover:border-primary/20"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden bg-gray-50 p-12 flex items-center justify-center">
                <img
                  src={data.img}
                  alt={data.name}
                  style={{ filter: data.availability ? "drop-shadow(0 10px 15px rgba(0,0,0,0.1))" : "grayscale(1) opacity(0.4)" }}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-[9px] font-bold text-primary uppercase tracking-widest border border-gray-200 shadow-sm">
                    {data.category}
                  </span>
                  {!data.availability && (
                    <span className="bg-red-500/90 text-white px-3 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest shadow-sm">
                      Habis
                    </span>
                  )}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-black group-hover:text-primary transition-colors mb-4 truncate leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {data.name}
                </h3>
                
                <div className="flex items-center gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="text-[10px] font-bold text-gray-400 ml-2 tracking-widest">5.0</span>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Harga / Hari</p>
                    <p className="text-xl md:text-2xl font-black text-black tracking-tight">
                      Rp{data.price.toLocaleString()}
                    </p>
                  </div>
                  <Link
                    to={`/products/${data.id}`}
                    style={{ background: "#3ecf6c", color: "#111" }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-primary/20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Footer */}
        <div className="mt-24 flex flex-col items-center">
          <Link
            to="/all-products"
            className="group relative inline-flex items-center gap-4 px-12 py-5 bg-transparent border border-black/10 text-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:bg-black hover:text-white"
          >
            <span className="text-xs uppercase tracking-[0.2em]">Jelajahi Produk Tambahan</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-gray-400 text-[11px] uppercase tracking-[0.15em] mt-8 font-semibold">
            Koleksi Lengkap Menanti Petualangan Anda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
