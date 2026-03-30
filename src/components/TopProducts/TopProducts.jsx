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
    description:
      "Paket lengkap yang mencakup berbagai perlengkapan outdoor dengan harga hemat.",
  },
  {
    id: "7",
    img: PaketImg2,
    name: "Paket 2",
    price: 200000,
    availability: true,
    aosDelay: 200,
    description:
      "Paket medium dengan perlengkapan berkualitas tinggi untuk kenyamanan outdoor.",
  },
  {
    id: "8",
    img: PaketImg3,
    name: "Paket 3",
    price: 250000,
    availability: false,
    aosDelay: 300,
    description:
      "Paket eksklusif dengan perlengkapan premium untuk pengalaman terbaik.",
  },
  {
    id: "9",
    img: PaketImg4,
    name: "Paket 4",
    price: 250000,
    availability: true,
    aosDelay: 300,
    description:
      "Paket outdoor ekonomis dengan perlengkapan esensial untuk kegiatan alam.",
  },
];

const TopProducts = () => {
  const navigate = useNavigate();
  // Untuk navigasi
  const handleNavigate = (id) => {
    navigate(`/package-detail/${id}
`);
  };
  return (
    <div className="py-32 bg-white" id="packages">
      {/* Header section */}
      <div className="text-center mb-24 px-[clamp(24px,6vw,96px)]">
        <p className="text-primary font-bold text-xs uppercase tracking-[0.25em] mb-4">
          Hot Deals
        </p>
        <h2 className="text-5xl md:text-6xl font-black text-black tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          MAU LEBIH <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(62,207,108,0.6)" }}>HEMAT?</span>
        </h2>
        <p className="text-gray-500 mt-6 max-w-xl mx-auto font-medium leading-relaxed">
          Dapatkan paket bundling pilihan dengan harga yang lebih terjangkau
          untuk petualangan grup Anda.
        </p>
        <div className="w-16 h-1 bg-primary mt-8 mx-auto rounded-full"></div>
      </div>

      {/* Products grid */}
      <div className="container px-[clamp(24px,6vw,96px)] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {productsData.map((data) => (
            <div
              key={data.id}
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_24px_48px_rgba(0,0,0,0.08)] hover:-translate-y-2 border border-gray-100 hover:border-primary/20"
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
            >
              {/* Product image */}
              <div className="relative h-64 flex items-center justify-center bg-gray-50 p-10">
                <img
                  src={data.img}
                  alt={data.name}
                  style={{ filter: data.availability ? "drop-shadow(0 10px 15px rgba(0,0,0,0.1))" : "grayscale(1) opacity(0.4)" }}
                  className="max-h-44 object-contain transition-transform duration-700 group-hover:scale-110"
                />
                {!data.availability && (
                  <span className="absolute top-6 left-6 bg-red-500/90 text-white text-[9px] font-bold px-3 py-1 rounded-md uppercase tracking-widest shadow-sm">
                    Habis
                  </span>
                )}
                <span className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-[9px] font-bold text-primary uppercase tracking-widest border border-gray-200 shadow-sm">
                  Paket Hemat
                </span>
              </div>

              {/* Product details */}
              <div className="p-8">
                <h2 className="text-xl font-bold text-black group-hover:text-primary transition-colors mb-3 leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {data.name}
                </h2>
                
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
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Total Harga</p>
                    <p className="text-xl md:text-2xl font-black text-black tracking-tight">
                      Rp{data.price.toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleNavigate(data.id)}
                    style={{ 
                      background: data.availability ? "#3ecf6c" : "#f5f5f4",
                      color: data.availability ? "#111" : "#a8a29e"
                    }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-primary/20"
                    disabled={!data.availability}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
