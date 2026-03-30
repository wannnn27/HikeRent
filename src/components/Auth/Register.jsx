import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import registerBg from "../../assets/hero/pemandangan.jpg";
import { Eye, EyeOff, AlertCircle, Check, X } from "lucide-react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [showCPw, setShowCPw] = useState(false);
  const navigate = useNavigate();

  const getStrength = () => {
    if (!password) return null;
    const len = password.length;
    const hasUpper = /[A-Z]/.test(password);
    const hasNum = /[0-9]/.test(password);
    const score = (len >= 8 ? 1 : 0) + (len >= 12 ? 1 : 0) + (hasUpper ? 1 : 0) + (hasNum ? 1 : 0);

    if (score <= 1) return { pct: 33, label: "Lemah", color: "#e53e3e", trackClass: "w-1/3 bg-[#e53e3e]" };
    if (score <= 2) return { pct: 66, label: "Sedang", color: "#d97706", trackClass: "w-2/3 bg-[#d97706]" };
    return { pct: 100, label: "Kuat", color: "#3ecf6c", trackClass: "w-full bg-[#3ecf6c]" };
  };

  const strength = getStrength();
  const matched = confirmPassword.length > 0 && password === confirmPassword;
  const mismatched = confirmPassword.length > 0 && password !== confirmPassword;

  const handleRegister = async () => {
    setMessage("");
    if (!email) {
      setMessage("Email tidak boleh kosong.");
      return;
    }
    if (password.length < 6) {
      setMessage("Password minimal 6 karakter.");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Password tidak cocok.");
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      setTimeout(() => navigate("/home"), 2200);
    } catch (e) {
      if (e.code === "auth/email-already-in-use") setMessage("Email sudah terdaftar.");
      else if (e.code === "auth/invalid-email") setMessage("Format email tidak valid.");
      else setMessage("Pendaftaran gagal. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[480px_1fr] font-sans bg-white flex-col-reverse lg:flex-row">
      {/* Form Panel (Left on Desktop, Bottom on Mobile) */}
      <div className="flex flex-col justify-center px-6 py-10 md:px-11 bg-white relative order-2 lg:order-1">
        <div className="w-full max-w-[360px] mx-auto">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 mb-11 cursor-pointer outline-none group w-fit text-black no-underline">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <span className="text-lg font-bold text-[#111] tracking-[-0.03em]">HikeRent</span>
          </Link>

          <h1 className="text-[26px] font-extrabold text-[#111] tracking-[-0.03em] mb-1.5 leading-[1.2]">Buat akun baru</h1>
          <p className="text-sm text-[#8f8f8f] font-normal mb-8 leading-relaxed">Gratis selamanya. Mulai dalam hitungan detik.</p>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[13px] font-bold text-[#333] mb-2 tracking-[-0.01em]">Email</label>
              <input
                className="w-full px-4 py-3 border-2 border-[#e4e4e4] rounded-xl text-sm text-[#111] bg-[#fafafa] outline-none transition-all placeholder:text-[#bbb] hover:border-[#d4d4d4] focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(62,207,108,0.1)]"
                type="email"
                placeholder="kamu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleRegister()}
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-[13px] font-bold text-[#333] mb-2 tracking-[-0.01em]">Password</label>
              <div className="relative">
                <input
                  className="w-full px-4 py-3 pr-12 border-2 border-[#e4e4e4] rounded-xl text-sm text-[#111] bg-[#fafafa] outline-none transition-all placeholder:text-[#bbb] hover:border-[#d4d4d4] focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_rgba(62,207,108,0.1)]"
                  type={showPw ? "text" : "password"}
                  placeholder="Minimal 6 karakter"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleRegister()}
                  autoComplete="new-password"
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
              {strength && (
                <div className="flex items-center gap-2.5 mt-2.5">
                  <div className="flex-1 h-[4px] bg-[#f0f0f0] rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-300 ${strength.trackClass}`} />
                  </div>
                  <span className="text-[11px] font-bold min-w-[38px] text-right uppercase tracking-wider" style={{ color: strength.color }}>
                    {strength.label}
                  </span>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col">
              <label className="text-[13px] font-bold text-[#333] mb-2 tracking-[-0.01em]">Konfirmasi Password</label>
              <div className="relative">
                <input
                  className={`w-full px-4 py-3 pr-12 border-2 rounded-xl text-sm text-[#111] bg-[#fafafa] outline-none transition-all placeholder:text-[#bbb] focus:bg-white focus:shadow-[0_0_0_4px_rgba(62,207,108,0.1)] ${matched ? "border-primary" : mismatched ? "border-[#e53e3e]" : "border-[#e4e4e4] hover:border-[#d4d4d4]"}`}
                  type={showCPw ? "text" : "password"}
                  placeholder="Ulangi password"
                  value={confirmPassword}
                  onChange={(e) => setConfirm(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleRegister()}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowCPw(!showCPw)}
                  tabIndex={-1}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#a1a1aa] hover:text-[#52525b] transition-colors p-1"
                >
                  {showCPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {matched && (
                <div className="flex items-center gap-1.5 mt-2.5 text-xs font-bold text-[#2ab75a]">
                  <Check className="w-3.5 h-3.5" /> Password cocok
                </div>
              )}
              {mismatched && (
                <div className="flex items-center gap-1.5 mt-2.5 text-xs font-bold text-[#e53e3e]">
                  <X className="w-3.5 h-3.5" /> Password tidak cocok
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handleRegister}
            disabled={loading || success}
            className={`w-full mt-7 py-3.5 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${success ? "bg-[#2ab75a]" : "bg-black hover:bg-[#222] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.16)]"}`}
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Memproses...
              </>
            ) : success ? (
              <>
                <Check className="w-4 h-4" /> Berhasil!
              </>
            ) : "Daftar Akun"}
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
            Sudah punya akun? <Link to="/login" className="text-black font-bold no-underline border-b-2 border-primary pb-0.5 hover:text-primary transition-colors ml-1">Masuk di sini</Link>
          </p>
        </div>
      </div>

      {/* Visual Right Side */}
      <div className="hidden lg:block relative overflow-hidden bg-[#0a0a0a] order-1 lg:order-2">
        <img src={registerBg} alt="Hiking Landscape" className="absolute inset-0 w-full h-full object-cover object-[center_35%] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(0,0,0,0.75)_0%,transparent_70%),linear-gradient(to_left,transparent_60%,rgba(0,0,0,0.3)_100%)]" />
        
        <div className="absolute bottom-[52px] left-[52px] right-[52px]">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_3px_rgba(62,207,108,0.2)]" />
            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/50">Penyewaan Alat Hiking</span>
          </div>
          
          <h2 className="text-[clamp(1.8rem,2.6vw,2.7rem)] font-bold text-white leading-[1.18] tracking-[-0.03em] mb-4">
            Mulai petualanganmu <br /> dalam <span className="text-primary drop-shadow-[0_0_10px_rgba(62,207,108,0.3)]">hitungan menit</span>
          </h2>
          
          <p className="text-sm font-normal text-white/40 leading-[1.8] max-w-[300px]">
            Registrasi mudah dan aman. Dapatkan akses ke koleksi lengkap perlengkapan hiking kami.
          </p>

          {/* Feature checklist */}
          <ul className="flex flex-col gap-4 mt-10 pt-8 border-t border-white/10 list-none">
            <li className="flex items-center gap-3 text-sm font-medium text-white/55">
              <div className="w-[22px] h-[22px] flex-shrink-0 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                <Check className="w-3.5 h-3.5" />
              </div>
              Booking instan & tanpa ribet
            </li>
            <li className="flex items-center gap-3 text-sm font-medium text-white/55">
              <div className="w-[22px] h-[22px] flex-shrink-0 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                <Check className="w-3.5 h-3.5" />
              </div>
              Kualitas alat terjamin
            </li>
            <li className="flex items-center gap-3 text-sm font-medium text-white/55">
              <div className="w-[22px] h-[22px] flex-shrink-0 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                <Check className="w-3.5 h-3.5" />
              </div>
              Dukungan pelanggan 24/7
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
