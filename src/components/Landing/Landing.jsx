import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import loginBg from "../../assets/hero/pemandangan.jpg";

import { useAuth } from "../../contexts/AuthContext";

const Landing = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", {
        replace: true,
      });
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      {" "}
      <style>
        {` @
import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;
400;
500;
600;
700;
800&display=swap');
 .landing-root {
 min-height: 100vh;
 font-family:'Plus Jakarta Sans', sans-serif;
 background: #0a0a0a;
 overflow: hidden;
 position: relative;
 display: flex;
 align-items: center;
 justify-content: center;
 
}
 .landing-bg {
 position: absolute;
 inset: 0;
 width: 100%;
 height: 100%;
 object-fit: cover;
 opacity: 0.6;
 
}
 .landing-overlay {
 position: absolute;
 inset: 0;
 background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%), linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.9) 100%);
 
}
 .landing-content {
 position: relative;
 z-index: 10;
 text-align: center;
 max-width: 800px;
 padding: 0 24px;
 
}
 .landing-badge {
 display: inline-flex;
 align-items: center;
 gap: 8px;
 padding: 6px 14px;
 background: rgba(255,255,255,0.05);
 backdrop-filter: blur(8px);
 border: 1px solid rgba(255,255,255,0.1);
 border-radius: 99px;
 margin-bottom: 24px;
 animation: fadeInDown 0.8s ease-out;
 
}
 .landing-badge-dot {
 width: 6px;
 height: 6px;
 background: #3ecf6c;
 border-radius: 50%;
 box-shadow: 0 0 10px #3ecf6c;
 
}
 .landing-badge-text {
 font-size: 12px;
 font-weight: 500;
 color: rgba(255,255,255,0.8);
 letter-spacing: 0.05em;
 text-transform: uppercase;
 
}
 .landing-title {
 font-size: clamp(2.5rem, 6vw, 5rem);
 font-weight: 800;
 color: #fff;
 line-height: 1.1;
 letter-spacing: -0.04em;
 margin-bottom: 24px;
 animation: fadeInUp 1s ease-out;
 
}
 .landing-title span {
 color: #3ecf6c;
 
}
 .landing-desc {
 font-size: clamp(1rem, 2vw, 1.25rem);
 color: rgba(255,255,255,0.6);
 line-height: 1.6;
 margin-bottom: 40px;
 max-width: 600px;
 margin-left: auto;
 margin-right: auto;
 animation: fadeInUp 1s ease-out 0.2s both;
 
}
 .landing-actions {
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 16px;
 animation: fadeInUp 1s ease-out 0.4s both;
 
}
 .btn-primary {
 padding: 16px 36px;
 background: #3ecf6c;
 color: #000;
 font-weight: 700;
 font-size: 16px;
 border-radius: 12px;
 border: none;
 cursor: pointer;
 transition: all 0.2s ease;
 display: flex;
 align-items: center;
 gap: 10px;
 
}
 .btn-primary:hover {
 background: #36c060;
 transform: translateY(-2px);
 box-shadow: 0 8px 24px rgba(62, 207, 108, 0.4);
 
}
 .btn-secondary {
 padding: 16px 36px;
 background: rgba(255,255,255,0.05);
 backdrop-filter: blur(8px);
 color: #fff;
 font-weight: 600;
 font-size: 16px;
 border-radius: 12px;
 border: 1px solid rgba(255,255,255,0.1);
 cursor: pointer;
 transition: all 0.2s ease;
 
}
 .btn-secondary:hover {
 background: rgba(255,255,255,0.1);
 transform: translateY(-2px);
 
}
 @keyframes fadeInUp {
 from {
 opacity: 0;
 transform: translateY(30px);
 
}
 to {
 opacity: 1;
 transform: translateY(0);
 
}
 
}
 @keyframes fadeInDown {
 from {
 opacity: 0;
 transform: translateY(-20px);
 
}
 to {
 opacity: 1;
 transform: translateY(0);
 
}
 
}
 .floating-element {
 position: absolute;
 width: 400px;
 height: 400px;
 background: radial-gradient(circle, rgba(62,207,108,0.1) 0%, transparent 70%);
 border-radius: 50%;
 filter: blur(40px);
 z-index: 1;
 
}
 .f-1 {
 top: -100px;
 right: -100px;
 
}
 .f-2 {
 bottom: -100px;
 left: -100px;
 
}
`}
      </style>{" "}
      <div className="landing-root">
        {" "}
        <img src={loginBg} className="landing-bg" alt="" />{" "}
        <div className="landing-overlay" />{" "}
        <div className="floating-element f-1" />{" "}
        <div className="floating-element f-2" />{" "}
        <div className="landing-content">
          {" "}
          <div className="landing-badge">
            {" "}
            <span className="landing-badge-dot" />{" "}
            <span className="landing-badge-text">Adventure Awaits</span>{" "}
          </div>{" "}
          <h1 className="landing-title">
            {" "}
            Jelajahi Alam
            <br /> Tanpa <span>Batas</span>{" "}
          </h1>{" "}
          <p className="landing-desc">
            {" "}
            Sewa perlengkapan kemping dan pendakian kualitas premium. Mulai
            petualanganmu hari ini dengan proses yang mudah dan cepat.{" "}
          </p>{" "}
          <div className="landing-actions">
            {" "}
            <button className="btn-primary" onClick={() => navigate("/home")}>
              {" "}
              Lihat Dulu{" "}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <line x1="5" y1="12" x2="19" y2="12"></line>{" "}
                <polyline points="12 5 19 12 12 19"></polyline>{" "}
              </svg>{" "}
            </button>{" "}
            <button
              className="btn-secondary"
              onClick={() => navigate("/login")}
            >
              {" "}
              Sign In{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default Landing;
