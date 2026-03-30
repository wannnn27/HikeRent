import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import loginBg from "../../assets/hero/pemandangan.jpg";
import { Eye, EyeOff, AlertCircle } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/home";

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("Masukkan email dan password.");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(from, { replace: true });
    } catch (e) {
      setMessage(
        e.code === "auth/user-not-found" ||
          e.code === "auth/wrong-password" ||
          e.code === "auth/invalid-credential"
          ? "Email atau password tidak valid."
          : "Terjadi kesalahan. Coba lagi.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_480px] font-sans bg-white">
      {/* Visual Left Side */}
      <div className="hidden lg:block relative overflow-hidden bg-black">
        <img src={loginBg} alt="Hiking Landscape" className="absolute inset-0 w-full h-full object-cover object-[center_20%] opacity-45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(0,0,0,0.7)_0%,transparent_70%),linear-gradient(to_right,transparent_60%,rgba(0,0,0,0.35)_100%)]" />
        
        <div className="absolute bottom-[52px] left-[52px] right-[52px]">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_3px_rgba(62,207,108,0.2)]" />
            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/55">Penyewaan Alat Hiking</span>
          </div>
          
          <h2 className="text-[clamp(1.8rem,2.8vw,2.8rem)] font-bold text-white leading-[1.18] tracking-[-0.03em] mb-4">
            Gear yang tepat <br /> untuk <span className="text-primary drop-shadow-[0_0_10px_rgba(62,207,108,0.3)]">setiap puncak</span>
          </h2>
          
          <p className="text-sm font-normal text-white/40 leading-[1.8] max-w-[320px]">
            Sewa perlengkapan hiking berkualitas kapan saja, di mana saja — tanpa ribet, tanpa khawatir.
          </p>

          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            <div>
              <div className="text-[22px] font-bold text-white tracking-[-0.03em] leading-none mb-1.5">10+</div>
              <div className="text-[11.5px] text-white/40 font-normal">Item tersedia</div>
            </div>
            <div>
              <div className="text-[22px] font-bold text-white tracking-[-0.03em] leading-none mb-1.5">100+</div>
              <div className="text-[11.5px] text-white/40 font-normal">Pendaki terbantu</div>
            </div>
            <div>
              <div className="text-[22px] font-bold text-white tracking-[-0.03em] leading-none mb-1.5">4.8★</div>
              <div className="text-[11.5px] text-white/40 font-normal">Rating layanan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Right Side */}
      <div className="flex flex-col justify-center px-6 py-10 md:px-11 bg-white relative">
        <div className="w-full max-w-[360px] mx-auto">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 mb-14 cursor-pointer outline-none group w-fit text-black no-underline">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <span className="text-lg font-bold text-[#111] tracking-[-0.03em]">HikeRent</span>
          </Link>

          <h1 className="text-[26px] font-extrabold text-[#111] tracking-[-0.03em] mb-1.5 leading-[1.2]">Masuk ke akun</h1>
          <p className="text-sm text-[#8f8f8f] font-normal mb-9 leading-relaxed">Selamat datang kembali — masukkan detail akunmu.</p>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[13px] font-bold text-[#333] mb-2 tracking-[-0.01em]">Email</label>
              <input
                className="w-full px-4 py-3 border-2 border-[#e4e4e4] rounded-xl text-sm text-[#111] bg-[#fafafa] outline-none transition-all focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(62,207,108,0.1)] hover:border-[#d4d4d4]"
                type="email"
                placeholder="kamu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-[13px] font-bold text-[#333] mb-2 tracking-[-0.01em]">Password</label>
              <div className="relative">
                <input
                  className="w-full px-4 py-3 pr-12 border-2 border-[#e4e4e4] rounded-xl text-sm text-[#111] bg-[#fafafa] outline-none transition-all focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(62,207,108,0.1)] hover:border-[#d4d4d4]"
                  type={showPw ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  tabIndex={-1}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#a1a1aa] hover:text-[#52525b] transition-colors p-1"
                >
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full mt-6 py-3.5 bg-black text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all hover:bg-[#222] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.16)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Memproses...
              </>
            ) : "Masuk"}
          </button>

          {message && (
            <div className="mt-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-[13px] text-red-600 flex items-center gap-2.5 font-semibold">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {message}
            </div>
          )}

          <div className="flex items-center gap-4 my-8">
            <hr className="flex-1 border-none border-t border-[#efefef]" />
            <span className="text-xs font-medium text-[#ccc]">atau</span>
            <hr className="flex-1 border-none border-t border-[#efefef]" />
          </div>

          <p className="text-center text-[13.5px] text-[#999] font-medium">
            Belum punya akun? <Link to="/register" className="text-black font-bold no-underline border-b-2 border-primary pb-0.5 hover:text-primary transition-colors ml-1">Daftar gratis</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
