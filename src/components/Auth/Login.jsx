import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import loginBg from "../../assets/hero/pemandangan.jpg";

const EyeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const AlertIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

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
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          .lx-root { min-height: 100vh; display: grid; grid-template-columns: 1fr; font-family: 'Plus Jakarta Sans', sans-serif; background: #fff; }
          @media(min-width: 900px) { .lx-root { grid-template-columns: 1fr 480px; } }
          .lx-visual { display: none; position: relative; overflow: hidden; background: #0a0a0a; }
          @media(min-width: 900px) { .lx-visual { display: block; } }
          .lx-visual-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 20%; opacity: 0.45; }
          .lx-visual-vignette { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,0,0,0.7) 0%, transparent 70%), linear-gradient(to right, transparent 60%, rgba(0,0,0,0.35) 100%); }
          .lx-visual-content { position: absolute; bottom: 52px; left: 52px; right: 52px; }
          .lx-tag { display: inline-flex; align-items: center; gap: 7px; margin-bottom: 20px; }
          .lx-tag-dot { width: 8px; height: 8px; border-radius: 50%; background: #3ecf6c; box-shadow: 0 0 0 3px rgba(62,207,108,0.2); }
          .lx-tag-text { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.55); }
          .lx-visual-title { font-size: clamp(1.8rem, 2.8vw, 2.8rem); font-weight: 700; color: #fff; line-height: 1.18; letter-spacing: -0.03em; margin-bottom: 16px; }
          .lx-visual-title span { color: #3ecf6c; }
          .lx-visual-desc { font-size: 14px; font-weight: 400; color: rgba(255,255,255,0.42); line-height: 1.8; max-width: 320px; }
          .lx-stats { display: flex; gap: 32px; margin-top: 40px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.08); }
          .lx-stat-num { font-size: 22px; font-weight: 700; color: #fff; letter-spacing: -0.03em; line-height: 1; margin-bottom: 4px; }
          .lx-stat-label { font-size: 11.5px; color: rgba(255,255,255,0.38); font-weight: 400; }
          .lx-form-panel { display: flex; flex-direction: column; justify-content: center; padding: 48px 44px; background: #fff; position: relative; }
          @media(max-width: 600px) { .lx-form-panel { padding: 40px 24px; } }
          .lx-form-inner { width: 100%; max-width: 360px; margin: 0 auto; }
          .lx-brand { display: flex; align-items: center; gap: 9px; margin-bottom: 52px; }
          .lx-brand-mark { width: 32px; height: 32px; background: #3ecf6c; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
          .lx-brand-name { font-size: 18px; font-weight: 700; color: #111; letter-spacing: -0.03em; }
          .lx-h1 { font-size: 26px; font-weight: 700; color: #111; letter-spacing: -0.03em; margin-bottom: 6px; line-height: 1.2; }
          .lx-h1-sub { font-size: 14px; color: #8f8f8f; font-weight: 400; margin-bottom: 36px; line-height: 1.5; }
          .lx-field { margin-bottom: 16px; }
          .lx-field-label { display: block; font-size: 13px; font-weight: 600; color: #333; margin-bottom: 7px; letter-spacing: -0.01em; }
          .lx-field-wrap { position: relative; }
          .lx-input { width: 100%; padding: 11px 14px; border: 1.5px solid #e4e4e4; border-radius: 10px; font-size: 14px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 400; color: #111; background: #fafafa; outline: none; transition: border-color 0.15s, box-shadow 0.15s, background 0.15s; }
          .lx-input:focus { border-color: #3ecf6c; background: #fff; box-shadow: 0 0 0 3px rgba(62,207,108,0.12); }
          .lx-input.pw { padding-right: 44px; }
          .lx-eye { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; color: #bbb; display: flex; align-items: center; }
          .lx-submit { width: 100%; margin-top: 8px; padding: 12px; background: #111; color: #fff; border: none; border-radius: 10px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: background 0.15s, transform 0.1s, box-shadow 0.15s; }
          .lx-submit:hover:not(:disabled) { background: #222; box-shadow: 0 4px 16px rgba(0,0,0,0.16); }
          .lx-submit:active:not(:disabled) { transform: scale(0.99); }
          .lx-submit:disabled { opacity: 0.5; cursor: not-allowed; }
          .lx-spinner { width: 15px; height: 15px; border: 2px solid rgba(255,255,255,0.25); border-top-color: #fff; border-radius: 50%; animation: lxspin 0.6s linear infinite; }
          @keyframes lxspin { to { transform: rotate(360deg); } }
          .lx-error { margin-top: 14px; padding: 11px 14px; border-radius: 8px; background: #fff5f5; border: 1px solid #ffd5d5; font-size: 13px; color: #c53030; display: flex; align-items: center; gap: 8px; font-weight: 500; }
          .lx-sep { display: flex; align-items: center; gap: 12px; margin: 24px 0; }
          .lx-sep hr { flex: 1; border: none; border-top: 1px solid #efefef; }
          .lx-sep span { font-size: 12px; color: #ccc; }
          .lx-footer { text-align: center; font-size: 13.5px; color: #999; }
          .lx-footer a { color: #111; font-weight: 600; text-decoration: none; border-bottom: 1.5px solid #3ecf6c; padding-bottom: 1px; transition: color 0.15s; }
          .lx-footer a:hover { color: #3ecf6c; }
        `}
      </style>

      <div className="lx-root">
        <div className="lx-visual">
          <img src={loginBg} alt="" className="lx-visual-img" />
          <div className="lx-visual-vignette" />
          <div className="lx-visual-content">
            <div className="lx-tag">
              <span className="lx-tag-dot" />
              <span className="lx-tag-text">Penyewaan Alat Hiking</span>
            </div>
            <h2 className="lx-visual-title">
              Gear yang tepat
              <br />
              untuk <span>setiap puncak</span>
            </h2>
            <p className="lx-visual-desc">
              Sewa perlengkapan hiking berkualitas kapan saja, di mana saja —
              tanpa ribet, tanpa khawatir.
            </p>
            <div className="lx-stats">
              <div>
                <div className="lx-stat-num">10+</div>
                <div className="lx-stat-label">Item tersedia</div>
              </div>
              <div>
                <div className="lx-stat-num">100+</div>
                <div className="lx-stat-label">Pendaki terbantu</div>
              </div>
              <div>
                <div className="lx-stat-num">4.8★</div>
                <div className="lx-stat-label">Rating layanan</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lx-form-panel">
          <div className="lx-form-inner">
            <div className="lx-brand">
              <div className="lx-brand-mark">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <span className="lx-brand-name">HikeRent</span>
            </div>
            <h1 className="lx-h1">Masuk ke akun</h1>
            <p className="lx-h1-sub">
              Selamat datang kembali — masukkan detail akunmu.
            </p>
            <div className="lx-field">
              <label className="lx-field-label">Email</label>
              <div className="lx-field-wrap">
                <input
                  className="lx-input"
                  type="email"
                  placeholder="kamu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="lx-field">
              <label className="lx-field-label">Password</label>
              <div className="lx-field-wrap">
                <input
                  className="lx-input pw"
                  type={showPw ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  autoComplete="current-password"
                />
                <button
                  className="lx-eye"
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  tabIndex={-1}
                >
                  {showPw ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>
            <button
              className="lx-submit"
              onClick={handleLogin}
              disabled={loading}
              type="button"
            >
              {loading ? (
                <>
                  <div className="lx-spinner" /> Memproses...
                </>
              ) : (
                "Masuk"
              )}
            </button>
            {message && (
              <div className="lx-error">
                <AlertIcon /> {message}
              </div>
            )}
            <div className="lx-sep">
              <hr />
              <span>atau</span>
              <hr />
            </div>
            <p className="lx-footer">
              Belum punya akun? <Link to="/register">Daftar gratis</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
