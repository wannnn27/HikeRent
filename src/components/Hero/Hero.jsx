import React from "react";
import Image1 from "../../assets/hero/gunung.jpeg";

const Hero = ({ handleOrderPopup }) => {
  return (
    <div className="relative min-h-[650px] group">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Image1})`
        }}
      />
      
      {/* Semi-permanent dark overlay */}
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-300" />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8">
        <h2 className="text-6xl sm:text-7xl font-bold text-white mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center">
          Selamat Datang di
          <span className="block mt-2 text-yellow-400 text-center">HikeRent</span>
        </h2>
        <p className="text-white text-xl text-center max-w-3xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
          Sewa peralatan outdoor berkualitas untuk petualangan tak terlupakan. 
          Kami menyediakan berbagai peralatan pendakian dengan harga terjangkau.
        </p>
      </div>
    </div>
  );
};

export default Hero;