import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import imgGunung from "../../assets/hero/naik gunung.jpg";
import imgPemandangan from "../../assets/hero/pemandangan.jpg";
import imgSantai from "../../assets/hero/santai.jpg";

const MOCK_POSTS = [
  {
    id: 1,
    title: "Panduan Lengkap Mendaki Gunung untuk Pemula",
    excerpt: "Persiapan fisik, mental, hingga perlengkapan dasar apa saja yang wajib Anda bawa sebelum melakukan pendakian pertama.",
    image: imgGunung,
    date: "12 Mar 2024",
    author: "Rangga J.",
    category: "Tips & Trik"
  },
  {
    id: 2,
    title: "10 Perlengkapan Rahasia yang Sering Dilupakan Pendaki",
    excerpt: "Banyak pendaki membawa tenda mahal tapi sering melupakan 10 barang kecil namun krusial ini saat berada dalam kondisi darurat.",
    image: imgPemandangan,
    date: "05 Mar 2024",
    author: "Dian S.",
    category: "Gear"
  },
  {
    id: 3,
    title: "Review Tenda Ultralight: Apakah Layak Dibeli?",
    excerpt: "Menguji ketahanan cuaca ekstrim menggunakan tenda ultralight berbobot kurang dari 1.5kg di musim hujan Tropis.",
    image: imgSantai,
    date: "28 Feb 2024",
    author: "Bima A.",
    category: "Review"
  },
  {
    id: 4,
    title: "Manajemen Logistik Makanan di Atas Awan",
    excerpt: "Cara cerdas menyusun menu makanan harian saat mendaki agar tetap bergizi tanpa membuat keril terasa seberat batu.",
    image: imgGunung,
    date: "15 Feb 2024",
    author: "Chef Alam",
    category: "Survival"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans pt-24 pb-20">
      {/* Header */}
      <div className="bg-black text-white py-16 px-6 lg:px-20 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <BookOpen className="w-4 h-4" /> Jurnal Pendaki
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Blog <span className="text-primary">HikeRent</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl font-medium">
            Kumpulan artikel, cerita petualangan, ulasan perlengkapan, hingga tips rahasia bertahan hidup di alam bebas langsung dari para ahlinya.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 mt-16">
        <div className="flex justify-between items-end border-b border-stone-200 pb-6 mb-12">
          <h2 className="text-3xl font-extrabold text-black tracking-tight">Postingan Terbaru</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MOCK_POSTS.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] bg-stone-200 relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-sm text-black text-[11px] font-black uppercase tracking-wider rounded-lg shadow-sm">
                  {post.category}
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[12px] font-bold text-stone-400 mb-4 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-primary" /> {post.author}</span>
                </div>
                
                <h3 className="text-2xl font-black text-black mb-4 leading-[1.3] group-hover:text-primary transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                
                <p className="text-stone-500 mb-8 line-clamp-3 leading-relaxed flex-grow font-medium text-[15px]">
                  {post.excerpt}
                </p>

                <div className="mt-auto border-t border-stone-100 pt-5">
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-black font-extrabold text-[13px] uppercase tracking-widest group-hover:text-primary transition-colors"
                  >
                    Baca Artikel <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}