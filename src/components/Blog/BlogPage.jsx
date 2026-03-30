
import React from "react";
 
import {
 Link 
}
 from "react-router-dom";
 
import naikGunungImg from "../../assets/hero/naik gunung.jpg";
 
import pemandanganImg from "../../assets/hero/pemandangan.jpg";
 
const BlogPage = () => {
  // Sample blog data - replace with your actual data/API call
  const blogPosts = [
    {
      id: 1,
      title: "Tips Mendaki Gunung untuk Pemula",
      excerpt:
        "Panduan lengkap bagi pemula yang ingin memulai petualangan mendaki gunung...",
      image: naikGunungImg,
      date: "2024-01-15",
      author: "Adi",
    },
    {
      id: 2,
      title: "Peralatan Wajib untuk Camping",
      excerpt:
        "Daftar lengkap peralatan camping yang harus dibawa untuk pengalaman outdoor yang aman...",
      image: pemandanganImg,
      date: "2024-01-10",
      author: "Adi",
    },
    // Tambahkan lebih banyak blog jika diperlukan
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-stone-50 pt-[120px] pb-16">
      <div className="container mx-auto px-[clamp(24px,6vw,96px)]">
        <div className="flex justify-between items-center mb-10 border-b border-stone-200 pb-6">
          <h1 className="text-4xl font-black text-emerald-950 tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Blog <span className="text-emerald-600">HikeRent</span>
          </h1>
          <Link
            to="/blog/create"
            className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-500 transition duration-300 shadow-lg shadow-emerald-900/10 text-sm font-medium uppercase tracking-widest"
          >
            Tulis Blog
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(4,120,87,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="overflow-hidden aspect-[4/3] bg-stone-100 relative group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-3 text-emerald-950 leading-snug font-serif">
                  {post.title}
                </h2>
                <p className="text-stone-500 mb-6 line-clamp-3 text-[15px] leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center text-[13px] font-medium text-stone-400 mb-4 pb-4 border-b border-stone-100">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    {post.author}
                  </span>
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-500 font-bold text-[13px] uppercase tracking-wider group-hover:gap-3 transition-all"
                >
                  Baca Selengkapnya
                  <span className="text-lg leading-none">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
 