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
    <section className="py-20 md:py-28 bg-white" id="products">
      <div className="section-container">
        {/* Header Section */}
        <div className="mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent-DEFAULT rounded-full"></div>
            <span className="text-xs font-semibold text-accent-DEFAULT uppercase tracking-widest">
              Collection
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
            Premium Hiking &amp; Camping Gear
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Curated selection of high-quality equipment from trusted brands. Everything you need for your next adventure.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-accent-DEFAULT text-white shadow-md"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="group card overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 bg-neutral-100 overflow-hidden flex items-center justify-center">
                <img
                  src={data.img}
                  alt={data.name}
                  className={`w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105 ${
                    !data.availability && "opacity-40 grayscale"
                  }`}
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="inline-flex px-3 py-1 bg-white/95 text-accent-DEFAULT text-xs font-semibold rounded-md shadow-sm">
                    {data.category}
                  </span>
                  {!data.availability && (
                    <span className="inline-flex px-3 py-1 bg-error/90 text-white text-xs font-semibold rounded-md shadow-sm">
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-base font-semibold text-neutral-900 mb-3 line-clamp-2 group-hover:text-accent-DEFAULT transition-colors">
                  {data.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-neutral-500 font-medium">5.0</span>
                </div>

                {/* Price and CTA */}
                <div className="mt-auto pt-4 border-t border-neutral-200 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-500 font-medium uppercase tracking-widest mb-1">
                      Per Day
                    </p>
                    <p className="text-xl font-bold text-neutral-900">
                      Rp{data.price.toLocaleString()}
                    </p>
                  </div>
                  <Link
                    to={`/products/${data.id}`}
                    className="w-10 h-10 flex items-center justify-center bg-accent-light text-accent-DEFAULT rounded-lg hover:bg-accent-DEFAULT hover:text-white transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Section */}
        <div className="mt-16 flex justify-center" data-aos="fade-up">
          <Link
            to="/all-products"
            className="px-8 py-3 bg-accent-DEFAULT text-white rounded-lg font-semibold text-sm hover:bg-accent-dark transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Explore All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
