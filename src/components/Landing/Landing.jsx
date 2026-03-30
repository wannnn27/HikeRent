import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginBg from "../../assets/hero/pemandangan.jpg";
import { useAuth } from "../../contexts/AuthContext";
import { ArrowRight, LogIn } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center font-sans">
      {/* Background Image & Overlay */}
      <img
        src={loginBg}
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        alt="Mountain view"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%),linear-gradient(to_bottom,transparent_60%,rgba(0,0,0,0.9)_100%)] z-0" />
      
      {/* Floating Blobs */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(62,207,108,0.15)_0%,transparent_70%)] rounded-full blur-[40px] z-0 pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(62,207,108,0.15)_0%,transparent_70%)] rounded-full blur-[40px] z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[800px] px-6" data-aos="fade-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-6 relative hover:bg-white/10 transition-colors duration-300">
          <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_#3ecf6c] relative">
            <span className="animate-ping absolute inset-0 rounded-full bg-primary opacity-75" />
          </span>
          <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
            Adventure Awaits
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold text-white leading-tight tracking-tight mb-6">
          Jelajahi Alam
          <br /> Tanpa <span className="text-primary drop-shadow-[0_0_15px_rgba(62,207,108,0.4)]">Batas</span>
        </h1>

        {/* Description */}
        <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/60 leading-relaxed mb-10 max-w-[600px]">
          Sewa perlengkapan kemping dan pendakian kualitas premium. Mulai
          petualanganmu hari ini dengan proses yang mudah dan cepat.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => navigate("/home")}
            className="group flex flex-1 sm:flex-none items-center justify-center gap-2.5 px-8 py-4 bg-primary hover:bg-[#36c060] text-black font-bold text-base rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(62,207,108,0.4)] w-full sm:w-auto"
          >
            Lihat Dulu
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => navigate("/login")}
            className="group flex flex-1 sm:flex-none items-center justify-center gap-2.5 px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-semibold text-base rounded-xl transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Sign In
            <LogIn className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
