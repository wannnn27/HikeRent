import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Compass, ShieldCheck, Clock, Mountain, ArrowRight, Activity, Users } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const PILLARS = [
  {
    icon: <Compass className="w-8 h-8 text-primary" />,
    title: "Sewa Tanpa Ribet",
    body: "Ratusan perlengkapan premium dari brand dunia — sewa hanya untuk perjalanan Anda, tanpa perlu investasi besar diawal.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Kondisi Selalu Prima",
    body: "Setiap peralatan selalu diperiksa ketat, dibersihkan menyeluruh, dan dirawat sebelum disewakan kembali ke Anda.",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Proses Cepat & Mudah",
    body: "Sistem pemesanan yang dirancang untuk kecepatan. Pilih barang, tentukan tanggal, ambil di toko — sesederhana itu.",
  },
  {
    icon: <Mountain className="w-8 h-8 text-primary" />,
    title: "Untuk Semua Level",
    body: "Dari pendaki pemula yang baru memulai mencoba hingga petualang veteran. Kami memiliki pilihan gear yang akurat.",
  },
];

const STATS = [
  { value: 50, suffix: "+", label: "Pilihan Gear" },
  { value: 2000, suffix: "+", label: "Pendaki Terbantu" },
  { value: 100, suffix: "%", label: "Kualitas Terjamin" },
  { value: 24, suffix: "/7", label: "Dukungan Support" },
];

function AnimCounter({ target, suffix, active }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const dur = 2000;
    const start = performance.now();
    let animationFrame;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };
    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [active, target]);
  return <>{val.toLocaleString("id")}{suffix}</>;
}

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function About() {
  const [statsRef, statsInView] = useInView(0.3);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0); // Ensure scrolled to top on mount
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 font-sans text-stone-800">
      {/* ===== HERO SECTION ===== */}
      <section className="relative px-6 lg:px-20 mx-auto max-w-7xl pt-12 lg:pt-24 pb-16 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vh] h-[40vh] bg-stone-300/30 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        <div className="flex flex-col items-center text-center">
          <div data-aos="fade-down" className="inline-flex items-center gap-3 px-4 py-2 border border-stone-200 rounded-full bg-stone-50 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-xs font-extrabold tracking-widest text-stone-600 uppercase">
              Tentang HikeRent
            </span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-[1.05] mb-8 tracking-tighter max-w-6xl"
          >
            Mendaki Tanpa Batas, <br />
            <span className="text-primary italic font-serif tracking-normal">Tanpa Beli Dulu.</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
          >
            Hadir untuk mendobrak penghalang antara Anda dan puncak impian. 
            Menyediakan perlengkapan outdoor secanggih aslinya, dirawat sempurna, 
            dan siap menemani langkah petualangan Anda.
          </p>
        </div>
      </section>

      {/* ===== STORY SECTION ===== */}
      <section className="bg-stone-50 py-20 lg:py-32 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">Cerita Kami</h2>
            <div className="h-1.5 w-20 bg-primary rounded-full mb-8" />
            
            <div className="space-y-6 text-stone-600 text-[17px] leading-relaxed font-medium">
              <p>
                HikeRent lahir dari satu keyakinan sederhana: <strong>petualangan di alam terbuka seharusnya bisa dinikmati oleh siapa saja</strong>, 
                bukan hanya mereka yang memiliki anggaran besar untuk membeli perlengkapan lengkap secara spesifik.
              </p>
              <p>
                Akses pada peralatan pendakian gunung yang baik seringkali sangat mahal dan menuntut banyak tempat perawatan di rumah.
                Oleh sebab itu, kami menghadirkan solusi persewaan yang sangat higienis, mutakhir, dengan koleksi peralatan terbaik yang dijamin originalitasnya.
              </p>
              <p>
                Kami bukan sekedar tempat peminjaman tenda sementara. Kami adalah pelindung perjalanan Anda untuk memastikan di saat curah hujan tinggi, suhu dingin menerpa, peralatan kami menjadi rumah paling hangat di puncak gunung.
              </p>
            </div>
          </div>
          
          <div data-aos="fade-left" className="relative group perspective">
            <div className="absolute inset-0 bg-primary rounded-3xl transform rotate-3 scale-105 opacity-20 transition-transform duration-500 group-hover:rotate-6" />
            <div className="relative bg-white p-10 md:p-14 rounded-3xl border border-stone-100 shadow-xl">
              <div className="mb-8 opacity-20">
                <Mountain className="w-20 h-20 text-black fill-current" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 italic font-serif leading-snug">
                "Alam adalah manifestasi kebebasan paling murni. Nikmati perjalanannya, tanpa terbeban persiapannya."
              </h3>
              <p className="font-extrabold text-sm tracking-widest uppercase text-primary">
                — Filosofi HikeRent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section ref={statsRef} className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 text-center divide-x-0 md:divide-x divide-white/10">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <h4 className="text-5xl md:text-7xl font-black text-primary mb-4 tracking-tighter">
                  <AnimCounter target={stat.value} suffix={stat.suffix} active={statsInView} />
                </h4>
                <p className="text-sm font-bold tracking-widest uppercase text-stone-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PILLARS SECTION ===== */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-16 md:mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-5 tracking-tight">Menyediakan Yang Terbaik</h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg font-medium tracking-wide">Filosofi operasional kami dirancang ketat hanya untuk keamanan dan ekspedisi memukau Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((pillar, idx) => (
            <div 
              key={idx} 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
              className="bg-stone-50 border border-stone-200 rounded-[2rem] p-8 hover:bg-white hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-stone-200 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-extrabold text-black mb-3 tracking-tight">{pillar.title}</h3>
              <p className="text-stone-600 leading-relaxed text-[15px] font-medium">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-primary py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-[80px] -z-0 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="zoom-in">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight leading-[1.1]">
            Gunung Sudah Memanggil. <br /> Siap Berangkat?
          </h2>
          <p className="text-black/80 text-lg md:text-xl mb-12 font-semibold max-w-2xl mx-auto">
            Booking sekarang, ambil atau jadwalkan, lalu mulailah penjelajahan abadi luar biasa tersebut tanpa perlu ragu lagi.
          </p>
          <Link 
            to="/all-products" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-extrabold text-lg rounded-full hover:bg-stone-800 transition-colors hover:scale-[1.03] duration-300 shadow-2xl"
          >
            Pilih Gear Sekarang <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
        
        {/* Decorative background icons */}
        <Activity className="absolute -top-10 -left-10 w-64 h-64 text-black/5 -rotate-12 pointer-events-none z-0" />
        <Users className="absolute -bottom-10 -right-10 w-64 h-64 text-black/5 rotate-12 pointer-events-none z-0" />
      </section>

    </div>
  );
}