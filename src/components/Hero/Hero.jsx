import React from "react";
import Image1 from "../../assets/hero/gunung.jpeg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#000000]">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-[1.02]"
        style={{
          backgroundImage: `url(${Image1})`,
        }}
      />
      
      {/* Premium Dark Gradient Overlay matching Login page vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/85 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-[#000000]/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#ffffff] to-transparent" />

      {/* Content Container */}
      <div className="container relative z-10 px-[clamp(24px,6vw,96px)] mx-auto pt-[140px] pb-24 flex-grow flex flex-col justify-center">
        <div
          className="max-w-3xl"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            PUNCAK <br />
            <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>PETUALANGAN</span> <br />
            <span className="text-primary italic font-serif leading-none" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.55em", verticalAlign: "baseline", letterSpacing: "normal" }}>
              Mulai dari Sini.
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed font-light">
            Sewa perlengkapan kemping dan pendakian berkualitas tinggi dari brand dunia. 
            Petualangan luar biasa dimulai dengan persiapan yang sempurna.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6 items-center">
            <button
              onClick={() => {
                const element = document.getElementById("products");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary text-[#111] px-8 py-3.5 text-[12px] md:text-[13px] tracking-[0.15em] uppercase font-bold rounded-lg hover:bg-primary-light hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/20 transition-all duration-300"
            >
              Lihat Katalog
            </button>
            <button
              onClick={() => navigate("/all-products")}
              className="bg-transparent text-white px-8 py-3.5 text-[12px] md:text-[13px] tracking-[0.15em] uppercase font-bold rounded-lg border border-white/30 hover:bg-white/10 hover:border-white active:scale-95 transition-all duration-300"
            >
              Sewa Sekarang
            </button>
          </div>

          {/* Quick Stats Block - Matching Login page visual language */}
          <div className="mt-12 md:mt-16 flex gap-8 md:gap-16 border-t border-white/10 pt-8 md:pt-10">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">10+</p>
              <p className="text-[11px] text-gray-400 font-medium">Item tersedia</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">100+</p>
              <p className="text-[11px] text-gray-400 font-medium">Pendaki terbantu</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">4.8★</p>
              <p className="text-[11px] text-gray-400 font-medium">Rating layanan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
