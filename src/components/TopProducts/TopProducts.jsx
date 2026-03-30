import React from "react";
import { useNavigate } from "react-router-dom";
import PaketImg1 from "../../assets/paket/paket.png";
import PaketImg2 from "../../assets/paket/paket.png";
import PaketImg3 from "../../assets/paket/paket.png";
import PaketImg4 from "../../assets/paket/paket.png";

const productsData = [
  {
    id: "6",
    img: PaketImg1,
    name: "Paket 1",
    price: 150000,
    availability: true,
    aosDelay: 100,
    description: "Complete package with various outdoor equipment at an affordable price.",
  },
  {
    id: "7",
    img: PaketImg2,
    name: "Paket 2",
    price: 200000,
    availability: true,
    aosDelay: 200,
    description: "Premium equipment package for comfortable outdoor experiences.",
  },
  {
    id: "8",
    img: PaketImg3,
    name: "Paket 3",
    price: 250000,
    availability: false,
    aosDelay: 300,
    description: "Exclusive package with premium gear for the best experience.",
  },
  {
    id: "9",
    img: PaketImg4,
    name: "Paket 4",
    price: 250000,
    availability: true,
    aosDelay: 300,
    description: "Budget-friendly outdoor package with essential equipment.",
  },
];

const TopProducts = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/package-detail/${id}`);
  };

  return (
    <section className="py-20 md:py-28 bg-neutral-50" id="packages">
      {/* Header */}
      <div className="section-container mb-16">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent-DEFAULT rounded-full"></div>
            <span className="text-xs font-semibold text-accent-DEFAULT uppercase tracking-widest">
              Special Offers
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
            Save More with Packages
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Bundle deals designed to help you save on everything you need for your next outdoor adventure.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsData.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="group card overflow-hidden flex flex-col h-full bg-white"
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

                {/* Badge */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <span className="inline-flex px-3 py-1 bg-accent-light text-accent-DEFAULT text-xs font-semibold rounded-md shadow-sm">
                    Bundle
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
                <h3 className="text-base font-semibold text-neutral-900 mb-2 group-hover:text-accent-DEFAULT transition-colors">
                  {data.name}
                </h3>

                <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                  {data.description}
                </p>

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
                      Total Price
                    </p>
                    <p className="text-xl font-bold text-neutral-900">
                      Rp{data.price.toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleNavigate(data.id)}
                    disabled={!data.availability}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-200 ${
                      data.availability
                        ? "bg-accent-light text-accent-DEFAULT hover:bg-accent-DEFAULT hover:text-white"
                        : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                    }`}
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
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
