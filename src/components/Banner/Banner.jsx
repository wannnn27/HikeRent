import React from "react";
import BannerImg from "../../assets/hero/naik gunung.jpg";
import { FaShieldAlt, FaClock, FaWallet, FaTags } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="py-32 bg-stone-50 overflow-hidden">
      <div className="container px-[clamp(24px,6vw,96px)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* image section */}
          <div data-aos="zoom-in" className="relative group">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.1)] transition-transform duration-1000 group-hover:scale-[1.02]">
              <img
                src={BannerImg}
                alt="Hiking Trip"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-emerald-600/5 rounded-3xl -z-0 blur-2xl"></div>
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-10">
            <div data-aos="fade-left">
              <p className="text-emerald-600 font-bold text-xs uppercase tracking-[0.25em] mb-4">
                Why Choose Us
              </p>
              <h2 className="text-5xl md:text-6xl font-black text-emerald-950 tracking-tight leading-[0.95]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                SIAPKAN <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(4,120,87,0.5)" }}>PETUALANGANMU</span> <br />
                <span className="text-amber-500 italic font-serif" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.6em" }}>dengan Kepercayaan.</span>
              </h2>
              <p className="text-lg text-stone-500 mt-8 leading-relaxed font-medium">
                Kami menyediakan perlengkapan pendakian alam premium dengan standar
                sterilisasi tinggi untuk kenyamanan dan keamanan eksplorasi Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <FaShieldAlt />, text: "Kualitas Premium" },
                { icon: <FaClock />, text: "Cepat & Tepat" },
                { icon: <FaWallet />, text: "Pembayaran Mudah" },
                { icon: <FaTags />, text: "Harga Bersahabat" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="flex items-center gap-4 bg-white p-5 rounded-xl border border-stone-200 hover:border-emerald-600/30 transition-all group cursor-default shadow-sm hover:shadow-md"
                >
                  <div className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <p className="font-bold text-stone-800 text-xs uppercase tracking-widest leading-none">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
