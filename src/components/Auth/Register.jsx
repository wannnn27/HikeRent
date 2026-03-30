import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebaseconfig";

import registerBg from "../../assets/hero/pemandangan.jpg";

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
    {" "}
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />{" "}
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
    {" "}
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />{" "}
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />{" "}
    <line x1="1" y1="1" x2="23" y2="23" />{" "}
  </svg>
);

const CheckIcon = ({ size = 13 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <polyline points="20 6 9 17 4 12" />{" "}
  </svg>
);

const XIcon = ({ size = 13 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />{" "}
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
    style={{
      flexShrink: 0,
    }}
  >
    {" "}
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />{" "}
  </svg>
);

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

  /* Password strength */
  const getStrength = () => {
    if (!password) return null;

    const len = password.length;

    const hasUpper = /[A-Z]/.test(password);

    const hasNum = /[0-9]/.test(password);

    const score =
      (len >= 8 ? 1 : 0) +
      (len >= 12 ? 1 : 0) +
      (hasUpper ? 1 : 0) +
      (hasNum ? 1 : 0);

    if (score <= 1)
      return {
        pct: 33,
        label: "Lemah",
        color: "#e53e3e",
      };

    if (score <= 2)
      return {
        pct: 66,
        label: "Sedang",
        color: "#d97706",
      };

    return {
      pct: 100,
      label: "Kuat",
      color: "#3ecf6c",
    };
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
      if (e.code === "auth/email-already-in-use")
        setMessage("Email sudah terdaftar.");
      else if (e.code === "auth/invalid-email")
        setMessage("Format email tidak valid.");
      else setMessage("Pendaftaran gagal. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {" "}
      <style>
        {` @
import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;
400;
500;
600;
700&display=swap');
 *, *::before, *::after {
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 
}
 .rx-root {
 min-height: 100vh;
 display: grid;
 grid-template-columns: 1fr;
 font-family:'Plus Jakarta Sans', sans-serif;
 background: #fff;
 
}
 @media(min-width: 900px) {
 /* Form left, visual right */ .rx-root {
 grid-template-columns: 480px 1fr;
 
}
 
}
 /* ── Form panel (left) ── */ .rx-form-panel {
 display: flex;
 flex-direction: column;
 justify-content: center;
 padding: 48px 44px;
 background: #fff;
 order: 2;
 
}
 @media(min-width: 900px) {
 .rx-form-panel {
 order: 1;
 padding: 48px 44px;
 
}
 
}
 @media(max-width: 600px) {
 .rx-form-panel {
 padding: 40px 24px;
 
}
 
}
 .rx-form-inner {
 width: 100%;
 max-width: 360px;
 margin: 0 auto;
 
}
 /* Brand */ .rx-brand {
 display: flex;
 align-items: center;
 gap: 9px;
 margin-bottom: 44px;
 
}
 .rx-brand-mark {
 width: 32px;
 height: 32px;
 background: #3ecf6c;
 border-radius: 8px;
 display: flex;
 align-items: center;
 justify-content: center;
 
}
 .rx-brand-name {
 font-size: 18px;
 font-weight: 700;
 color: #111;
 letter-spacing: -0.03em;
 
}
 .rx-h1 {
 font-size: 26px;
 font-weight: 700;
 color: #111;
 letter-spacing: -0.03em;
 margin-bottom: 6px;
 line-height: 1.2;
 
}
 .rx-h1-sub {
 font-size: 14px;
 color: #8f8f8f;
 margin-bottom: 32px;
 line-height: 1.5;
 
}
 /* Field */ .rx-field {
 margin-bottom: 15px;
 
}
 .rx-label {
 display: block;
 font-size: 13px;
 font-weight: 600;
 color: #333;
 margin-bottom: 7px;
 letter-spacing: -0.01em;
 
}
 .rx-wrap {
 position: relative;
 
}
 .rx-input {
 width: 100%;
 padding: 11px 14px;
 border: 1.5px solid #e4e4e4;
 border-radius: 10px;
 font-size: 14px;
 font-family:'Plus Jakarta Sans', sans-serif;
 font-weight: 400;
 color: #111;
 background: #fafafa;
 outline: none;
 transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
 -webkit-appearance: none;
 
}
 .rx-input::placeholder {
 color: #bbb;
 
}
 .rx-input:hover {
 border-color: #ccc;
 
}
 .rx-input:focus {
 border-color: #3ecf6c;
 background: #fff;
 box-shadow: 0 0 0 3px rgba(62,207,108,0.12);
 
}
 .rx-input.pw {
 padding-right: 44px;
 
}
 .rx-input.ok {
 border-color: #3ecf6c;
 
}
 .rx-input.err {
 border-color: #e53e3e;
 
}
 .rx-eye {
 position: absolute;
 right: 12px;
 top: 50%;
 transform: translateY(-50%);
 background: none;
 border: none;
 cursor: pointer;
 color: #bbb;
 display: flex;
 align-items: center;
 padding: 2px;
 transition: color 0.15s;
 
}
 .rx-eye:hover {
 color: #555;
 
}
 /* Strength */ .rx-strength {
 display: flex;
 align-items: center;
 gap: 10px;
 margin-top: 8px;
 
}
 .rx-strength-track {
 flex: 1;
 height: 3px;
 background: #f0f0f0;
 border-radius: 99px;
 overflow: hidden;
 
}
 .rx-strength-fill {
 height: 100%;
 border-radius: 99px;
 transition: width 0.3s ease, background 0.3s ease;
 
}
 .rx-strength-label {
 font-size: 11px;
 font-weight: 600;
 min-width: 38px;
 text-align: right;
 
}
 /* Match hint */ .rx-hint {
 display: flex;
 align-items: center;
 gap: 5px;
 margin-top: 7px;
 font-size: 12px;
 font-weight: 500;
 
}
 /* Submit */ .rx-submit {
 width: 100%;
 margin-top: 6px;
 padding: 12px;
 background: #111;
 color: #fff;
 border: none;
 border-radius: 10px;
 font-family:'Plus Jakarta Sans', sans-serif;
 font-size: 14px;
 font-weight: 600;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 8px;
 letter-spacing: -0.01em;
 transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
 
}
 .rx-submit:hover:not(:disabled) {
 background: #222;
 box-shadow: 0 4px 16px rgba(0,0,0,0.16);
 
}
 .rx-submit:active:not(:disabled) {
 transform: scale(0.99);
 
}
 .rx-submit:disabled {
 opacity: 0.5;
 cursor: not-allowed;
 
}
 .rx-submit.done {
 background: #2ab75a;
 
}
 .rx-spinner {
 width: 15px;
 height: 15px;
 border: 2px solid rgba(255,255,255,0.25);
 border-top-color: #fff;
 border-radius: 50%;
 animation: rxspin 0.6s linear infinite;
 flex-shrink: 0;
 
}
 @keyframes rxspin {
 to {
 transform: rotate(360deg);
 
}
 
}
 /* Banners */ .rx-error {
 margin-top: 14px;
 padding: 11px 14px;
 border-radius: 8px;
 background: #fff5f5;
 border: 1px solid #ffd5d5;
 font-size: 13px;
 color: #c53030;
 display: flex;
 align-items: center;
 gap: 8px;
 font-weight: 500;
 
}
 .rx-success {
 margin-top: 14px;
 padding: 11px 14px;
 border-radius: 8px;
 background: #f0fdf6;
 border: 1px solid #bbf0d5;
 font-size: 13px;
 color: #1a7a42;
 display: flex;
 align-items: center;
 gap: 8px;
 font-weight: 500;
 
}
 /* Divider */ .rx-sep {
 display: flex;
 align-items: center;
 gap: 12px;
 margin: 22px 0;
 
}
 .rx-sep hr {
 flex: 1;
 border: none;
 border-top: 1px solid #efefef;
 
}
 .rx-sep span {
 font-size: 12px;
 color: #ccc;
 
}
 /* Footer */ .rx-footer {
 text-align: center;
 font-size: 13.5px;
 color: #999;
 
}
 .rx-footer a {
 color: #111;
 font-weight: 600;
 text-decoration: none;
 border-bottom: 1.5px solid #3ecf6c;
 padding-bottom: 1px;
 transition: color 0.15s;
 
}
 .rx-footer a:hover {
 color: #3ecf6c;
 
}
 /* ── Visual panel (right) ── */ .rx-visual {
 display: none;
 position: relative;
 overflow: hidden;
 background: #0a0a0a;
 order: 1;
 
}
 @media(min-width: 900px) {
 .rx-visual {
 display: block;
 order: 2;
 
}
 
}
 .rx-visual-img {
 position: absolute;
 inset: 0;
 width: 100%;
 height: 100%;
 object-fit: cover;
 object-position: center 35%;
 opacity: 0.42;
 
}
 .rx-visual-vignette {
 position: absolute;
 inset: 0;
 background: radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,0,0,0.75) 0%, transparent 70%), linear-gradient(to left, transparent 60%, rgba(0,0,0,0.3) 100%);
 
}
 .rx-visual-content {
 position: absolute;
 bottom: 52px;
 left: 52px;
 right: 52px;
 
}
 .rx-tag {
 display: inline-flex;
 align-items: center;
 gap: 7px;
 margin-bottom: 20px;
 
}
 .rx-tag-dot {
 width: 8px;
 height: 8px;
 border-radius: 50%;
 background: #3ecf6c;
 box-shadow: 0 0 0 3px rgba(62,207,108,0.2);
 
}
 .rx-tag-text {
 font-size: 11px;
 font-weight: 600;
 letter-spacing: 0.1em;
 text-transform: uppercase;
 color: rgba(255,255,255,0.5);
 
}
 .rx-visual-title {
 font-size: clamp(1.8rem, 2.6vw, 2.7rem);
 font-weight: 700;
 color: #fff;
 line-height: 1.18;
 letter-spacing: -0.03em;
 margin-bottom: 16px;
 
}
 .rx-visual-title span {
 color: #3ecf6c;
 
}
 .rx-visual-desc {
 font-size: 14px;
 color: rgba(255,255,255,0.4);
 line-height: 1.8;
 max-width: 300px;
 
}
 /* Feature checklist */ .rx-checklist {
 list-style: none;
 margin-top: 36px;
 padding-top: 32px;
 border-top: 1px solid rgba(255,255,255,0.08);
 display: flex;
 flex-direction: column;
 gap: 14px;
 
}
 .rx-check-item {
 display: flex;
 align-items: center;
 gap: 11px;
 font-size: 13.5px;
 font-weight: 400;
 color: rgba(255,255,255,0.55);
 
}
 .rx-check-circle {
 width: 22px;
 height: 22px;
 flex-shrink: 0;
 border-radius: 50%;
 background: rgba(62,207,108,0.15);
 border: 1px solid rgba(62,207,108,0.3);
 display: flex;
 align-items: center;
 justify-content: center;
 color: #3ecf6c;
 
}
`}
      </style>{" "}
      <div className="rx-root">
        {" "}
        {/* Form Panel */}{" "}
        <div className="rx-form-panel">
          {" "}
          <div className="rx-form-inner">
            {" "}
            <div className="rx-brand">
              {" "}
              <div className="rx-brand-mark">
                {" "}
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
                  {" "}
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />{" "}
                </svg>{" "}
              </div>{" "}
              <span className="rx-brand-name">HikeRent</span>{" "}
            </div>{" "}
            <h1 className="rx-h1">Buat akun baru</h1>{" "}
            <p className="rx-h1-sub">
              Gratis selamanya. Mulai dalam hitungan detik.
            </p>{" "}
            {/* Email */}{" "}
            <div className="rx-field">
              {" "}
              <label className="rx-label">Email</label>{" "}
              <div className="rx-wrap">
                {" "}
                <input
                  className="rx-input"
                  type="email"
                  placeholder="kamu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleRegister()}
                  autoComplete="email"
                />{" "}
              </div>{" "}
            </div>{" "}
            {/* Password */}{" "}
            <div className="rx-field">
              {" "}
              <label className="rx-label">Password</label>{" "}
              <div className="rx-wrap">
                {" "}
                <input
                  className="rx-input pw"
                  type={showPw ? "text" : "password"}
                  placeholder="Minimal 6 karakter"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleRegister()}
                  autoComplete="new-password"
                />{" "}
                <button
                  className="rx-eye"
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  tabIndex={-1}
                >
                  {" "}
                  {showPw ? <EyeOffIcon /> : <EyeIcon />}{" "}
                </button>{" "}
              </div>{" "}
              {strength && (
                <div className="rx-strength">
                  {" "}
                  <div className="rx-strength-track">
                    {" "}
                    <div
                      className="rx-strength-fill"
                      style={{
                        width: `${strength.pct}
%`,
                        background: strength.color,
                      }}
                    />{" "}
                  </div>{" "}
                  <span
                    className="rx-strength-label"
                    style={{
                      color: strength.color,
                    }}
                  >
                    {strength.label}
                  </span>{" "}
                </div>
              )}{" "}
            </div>{" "}
            {/* Confirm */}{" "}
            <div className="rx-field">
              {" "}
              <label className="rx-label">Konfirmasi Password</label>{" "}
              <div className="rx-wrap">
                {" "}
                <input
                  className={`rx-input pw${
                    matched ? " ok" : mismatched ? " err" : ""
                  }
`}
                  type={showCPw ? "text" : "password"}
                  placeholder="Ulangi password"
                  value={confirmPassword}
                  onChange={(e) => setConfirm(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleRegister()}
                  autoComplete="new-password"
                />{" "}
                <button
                  className="rx-eye"
                  type="button"
                  onClick={() => setShowCPw((v) => !v)}
                  tabIndex={-1}
                >
                  {" "}
                  {showCPw ? <EyeOffIcon /> : <EyeIcon />}{" "}
                </button>{" "}
              </div>{" "}
              {matched && (
                <div
                  className="rx-hint"
                  style={{
                    color: "#2ab75a",
                  }}
                >
                  <CheckIcon />
                  Password cocok
                </div>
              )}{" "}
              {mismatched && (
                <div
                  className="rx-hint"
                  style={{
                    color: "#e53e3e",
                  }}
                >
                  <XIcon />
                  Password tidak cocok
                </div>
              )}{" "}
            </div>{" "}
            {/* Submit */}{" "}
            <button
              className={`rx-submit${success ? " done" : ""}
`}
              onClick={handleRegister}
              disabled={loading || success}
              type="button"
            >
              {" "}
              {loading ? (
                <>
                  <div className="rx-spinner" />
                  Mendaftarkan...
                </>
              ) : success ? (
                <>
                  <CheckIcon size={15} />
                  Berhasil didaftarkan!
                </>
              ) : (
                "Buat Akun"
              )}{" "}
            </button>{" "}
            {message && (
              <div className="rx-error">
                <AlertIcon />
                {message}
              </div>
            )}{" "}
            {success && (
              <div className="rx-success">
                <CheckIcon size={14} />
                Akun berhasil dibuat. Mengalihkan...
              </div>
            )}{" "}
            <div className="rx-sep">
              {" "}
              <hr />
              <span>atau</span>
              <hr />{" "}
            </div>{" "}
            <p className="rx-footer">
              {" "}
              Sudah punya akun? <Link to="/login">Masuk di sini</Link>{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        {/* Visual Panel */}{" "}
        <div className="rx-visual">
          {" "}
          <img src={registerBg} alt="" className="rx-visual-img" />{" "}
          <div className="rx-visual-vignette" />{" "}
          <div className="rx-visual-content">
            {" "}
            <div className="rx-tag">
              {" "}
              <span className="rx-tag-dot" />{" "}
              <span className="rx-tag-text">Mulai Sekarang</span>{" "}
            </div>{" "}
            <h2 className="rx-visual-title">
              {" "}
              Raih puncakmu
              <br /> dengan <span>percaya diri</span>{" "}
            </h2>{" "}
            <p className="rx-visual-desc">
              {" "}
              Bergabung bersama ribuan pendaki yang sudah mempercayakan
              persiapan gear mereka ke HikeRent.{" "}
            </p>{" "}
            <ul className="rx-checklist">
              {" "}
              {[
                "Perlengkapan berkualitas, terawat, siap pakai",
                "Proses sewa cepat, tanpa deposit ribet",
                "Layanan pelanggan siap membantu 7 hari",
              ].map((text, i) => (
                <li key={i} className="rx-check-item">
                  {" "}
                  <span className="rx-check-circle">
                    {" "}
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <polyline points="20 6 9 17 4 12" />{" "}
                    </svg>{" "}
                  </span>{" "}
                  {text}{" "}
                </li>
              ))}{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
