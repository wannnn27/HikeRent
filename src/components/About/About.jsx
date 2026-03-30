import { useEffect, useRef, useState } from "react";

const TOPO_PATHS = [
  "M0,120 Q80,80 160,110 Q240,140 320,100 Q400,60 480,95 Q560,130 640,105 Q720,80 800,110 L800,200 L0,200Z",
  "M0,145 Q90,115 180,135 Q270,155 360,125 Q450,95 540,120 Q630,145 720,120 Q760,108 800,115 L800,200 L0,200Z",
  "M0,165 Q100,148 200,158 Q300,168 400,148 Q500,128 600,150 Q700,172 800,155 L800,200 L0,200Z",
];

const PILLARS = [
  { num: "01", title: "Gear Tanpa Beli", body: "Ratusan perlengkapan premium dari brand dunia — sewa hanya untuk perjalanan Anda, tanpa investasi besar." },
  { num: "02", title: "Selalu Prima", body: "Setiap item diperiksa, dibersihkan, dan dirawat setelah setiap penggunaan. Kondisi terbaik, selalu." },
  { num: "03", title: "Pesan Dalam Menit", body: "Sistem pemesanan yang dirancang untuk kecepatan. Pilih, jadwalkan, ambil — sesederhana itu." },
  { num: "04", title: "Untuk Semua Level", body: "Dari pendaki pertama hingga petualang veteran. Kami punya pilihan yang tepat untuk setiap kebutuhan." },
];

const COUNTER_TARGETS = [
  { value: 15, suffix: "+", label: "Produk" },
  { value: 400, suffix: "+", label: "Petualang" },
  { value: 99, suffix: "%", label: "Kondisi Prima" },
  { value: 48, suffix: "H", label: "Durasi Maks Sewa" },
];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function AnimCounter({ target, suffix, active }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const dur = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target]);
  return <>{val.toLocaleString("id")}{suffix}</>;
}

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [statsRef, statsInView] = useInView(0.3);
  const [pillarsRef, pillarsInView] = useInView(0.1);

  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", overflowX: "hidden", paddingTop: "90px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;700&display=swap');
        .hr-fade { opacity: 0; transform: translateY(28px); transition: opacity 0.8s cubic-bezier(.22,1,.36,1), transform 0.8s cubic-bezier(.22,1,.36,1); }
        .hr-fade.in { opacity: 1; transform: none; }
        .hr-d1 { transition-delay: 0.1s; }
        .hr-d2 { transition-delay: 0.22s; }
        .hr-d3 { transition-delay: 0.36s; }
        .pillar-card { transition: border-color 0.25s, background 0.25s, box-shadow 0.25s, transform 0.25s; }
        .pillar-card:hover { border-color: rgba(62,207,108,0.2) !important; background: #ffffff !important; box-shadow: 0 24px 48px rgba(0,0,0,0.06); transform: translateY(-4px) !important; }
        .pillar-card:hover .p-num { color: #3ecf6c !important; }
        .cta-btn { transition: background 0.2s, color 0.2s, letter-spacing 0.2s; }
        .cta-btn:hover { background: #3ecf6c !important; color: #ffffff !important; letter-spacing: 0.14em !important; box-shadow: 0 10px 25px rgba(62,207,108,0.3); }
      `}</style>

      {/* HERO */}
      <section style={{ position: "relative", paddingTop: "100px" }}>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "200px", overflow: "hidden", pointerEvents: "none" }}>
          <svg viewBox="0 0 800 200" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            {TOPO_PATHS.map((d, i) => (
              <path key={i} d={d} fill={`rgba(62,207,108,${0.03 + i * 0.02})`} />
            ))}
          </svg>
        </div>
        <div style={{ position: "absolute", left: "clamp(24px,5vw,80px)", top: "40px", bottom: 0, width: "1px", background: "linear-gradient(to bottom, transparent, rgba(62,207,108,0.2) 30%, transparent)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(24px,6vw,96px)" }}>
          <p className={`hr-fade hr-d1 ${mounted ? "in" : ""}`} style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3ecf6c", marginBottom: "36px" }}>
            HikeRent — Platform Penyewaan Outdoor
          </p>

          <div className={`hr-fade hr-d2 ${mounted ? "in" : ""}`}>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(72px, 16vw, 180px)", lineHeight: 0.88, letterSpacing: "0.02em", color: "#000000", margin: "0", userSelect: "none" }}>
              HIKE
            </h1>
            <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(12px,2vw,32px)", marginTop: "-4px" }}>
              <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(72px, 16vw, 180px)", lineHeight: 0.88, letterSpacing: "0.02em", color: "#000000", margin: 0, userSelect: "none" }}>
                WITHOUT
              </h1>
              <span style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic", fontSize: "clamp(22px, 4vw, 52px)", color: "#3ecf6c", lineHeight: 1, paddingBottom: "8px", whiteSpace: "nowrap" }}>
                beli dulu.
              </span>
            </div>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(72px, 16vw, 180px)", lineHeight: 0.88, letterSpacing: "0.02em", color: "#000000", margin: "0", userSelect: "none" }}>
              LIMITS
            </h1>
          </div>

          <div className={`hr-fade hr-d3 ${mounted ? "in" : ""}`} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "24px", marginTop: "48px", paddingBottom: "80px" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(14px,1.8vw,17px)", color: "#78716c", maxWidth: "380px", lineHeight: 1.75, margin: 0 }}>
              Perlengkapan outdoor terpercaya — tenda, carrier, sleeping bag, sepatu hiking — siap disewa kapan pun Anda butuhkan.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "32px", height: "1px", background: "rgba(4,120,87,0.35)" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.18em", color: "#44403c", textTransform: "uppercase" }}>Est. 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} style={{ borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(62,207,108,0.03)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(24px,6vw,96px)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {COUNTER_TARGETS.map((c, i) => (
            <div key={i} style={{ padding: "40px 0", borderRight: i < 3 ? "1px solid rgba(0,0,0,0.06)" : "none", paddingLeft: i > 0 ? "clamp(16px,3vw,40px)" : 0 }}>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px,6vw,64px)", color: "#000000", margin: "0 0 4px", letterSpacing: "0.04em", lineHeight: 1 }}>
                <AnimCounter target={c.value} suffix={c.suffix} active={statsInView} />
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#3ecf6c", letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px clamp(24px,6vw,96px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,2fr)", gap: "clamp(32px,6vw,96px)", alignItems: "start" }}>
          <div style={{ position: "sticky", top: "80px" }}>
            <div style={{ width: "32px", height: "3px", background: "#3ecf6c", marginBottom: "24px", borderRadius: "10px" }} />
            <p style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic", fontSize: "clamp(20px,2.5vw,28px)", color: "#000000", lineHeight: 1.35, marginBottom: "24px" }}>
              "Alam adalah tempat terbaik untuk menemukan kebebasan."
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#78716c", letterSpacing: "0.14em", textTransform: "uppercase" }}>— Filosofi HikeRent</p>
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(15px,1.6vw,18px)", lineHeight: 1.85, color: "#57534e", marginBottom: "28px" }}>
              HikeRent lahir dari satu keyakinan sederhana: <span style={{ color: "#3ecf6c", fontWeight: 500 }}>petualangan di alam terbuka seharusnya bisa dinikmati semua orang</span>, bukan hanya mereka yang punya budget besar untuk membeli perlengkapan lengkap.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(15px,1.6vw,18px)", lineHeight: 1.85, color: "#57534e", marginBottom: "28px" }}>
              Kami menyediakan ratusan pilihan perlengkapan berkualitas tinggi — dipilih cermat dari merek-merek terpercaya yang telah teruji di berbagai kondisi alam. Setiap item kami rawat dengan standar ketat: diperiksa, dibersihkan, dan dipastikan dalam kondisi prima sebelum tiba di tangan Anda.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(15px,1.6vw,18px)", lineHeight: 1.85, color: "#57534e" }}>
              Dengan sistem pemesanan yang dirancang untuk kecepatan dan kemudahan, Anda bisa fokus pada hal yang paling penting — <span style={{ color: "#3ecf6c", fontWeight: 500 }}>merencanakan petualangan berikutnya.</span>
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section ref={pillarsRef} style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "80px", paddingBottom: "96px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(24px,6vw,96px)" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "56px", gap: "24px" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3ecf6c", margin: 0, whiteSpace: "nowrap" }}>Kenapa Memilih Kami</p>
            <div style={{ height: "1px", flex: 1, background: "rgba(0,0,0,0.06)" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "rgba(0,0,0,0.04)" }}>
            {PILLARS.map((p, i) => (
              <div key={i} className="pillar-card" style={{ background: "#ffffff", padding: "clamp(24px,3vw,40px)", border: "1px solid transparent", display: "flex", flexDirection: "column", gap: "20px", opacity: pillarsInView ? 1 : 0, transform: pillarsInView ? "none" : "translateY(24px)", transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${i * 0.12}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${i * 0.12}s, border-color 0.25s, background 0.25s, box-shadow 0.25s` }}>
                <span className="p-num" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "52px", color: "#d6d3d1", lineHeight: 1, transition: "color 0.25s" }}>{p.num}</span>
                <div>
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "20px", color: "#000000", marginBottom: "10px", fontWeight: 400 }}>{p.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "14px", color: "#78716c", lineHeight: 1.75, margin: 0 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: "1px solid rgba(0,0,0,0.06)", padding: "96px clamp(24px,6vw,96px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "40px" }}>
          <div>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px,6vw,72px)", color: "#000000", lineHeight: 0.95, letterSpacing: "0.04em", margin: "0 0 16px" }}>SIAP MENDAKI?</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "15px", color: "#78716c", margin: 0, letterSpacing: "0.04em" }}>Perlengkapan Anda menunggu.</p>
          </div>
          <a href="#" className="cta-btn" style={{ display: "inline-block", border: "1px solid rgba(62,207,108,0.4)", color: "#3ecf6c", background: "transparent", padding: "16px 48px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", borderRadius: "4px", whiteSpace: "nowrap" }}>
            Mulai Sewa Sekarang
          </a>
        </div>
      </section>

      {/* Footer */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", padding: "24px clamp(24px,6vw,96px)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px", color: "#78716c", letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>HikeRent © 2024</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "11px", color: "#78716c", letterSpacing: "0.08em", margin: 0 }}>Jakarta, Indonesia</p>
      </div>
    </div>
  );
}