import React from "react";
import Image1 from "../../assets/hero/gunung.jpeg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-neutral-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${Image1})`,
          }}
        />
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40" />
      </div>

      {/* Content Container */}
      <div className="section-container relative z-10 py-32">
        <div className="max-w-2xl" data-aos="fade-up" data-aos-duration="800">
          {/* Overline */}
          <div className="mb-6">
            <span className="inline-block text-xs font-semibold text-accent-DEFAULT uppercase tracking-widest border-l-2 border-accent-DEFAULT pl-3">
              Adventure Awaits
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight mb-6 tracking-tight">
            Experience the
            <br />
            <span className="text-accent-DEFAULT">Mountains</span> Your Way
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl leading-relaxed font-light">
            Rent premium camping and hiking gear from world-class brands. Your perfect adventure starts with the right equipment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => navigate("/all-products")}
              className="px-8 py-3 bg-accent-DEFAULT text-white rounded-lg font-semibold text-sm hover:bg-accent-dark transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Explore Gear
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("products");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-white text-neutral-900 rounded-lg font-semibold text-sm border-2 border-neutral-300 hover:border-accent-DEFAULT hover:text-accent-DEFAULT transition-colors duration-200"
            >
              View Popular
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-16 pt-8 border-t border-neutral-300 grid grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-neutral-900 mb-2">500+</p>
              <p className="text-sm text-neutral-600">Premium Items</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-neutral-900 mb-2">2K+</p>
              <p className="text-sm text-neutral-600">Happy Hikers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-neutral-900 mb-2">4.9★</p>
              <p className="text-sm text-neutral-600">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
