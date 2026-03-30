import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, LinkIcon } from "lucide-react";
import BlogImage from "../../assets/hero/naik gunung.jpg";

export default function BlogDetail() {
  const { id } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const post = {
    id: id,
    title: "Panduan Lengkap Mendaki Gunung untuk Pemula",
    category: "Tips & Trik",
    date: "12 Maret 2024",
    author: "Rangga J.",
    image: BlogImage,
    content: `
      <p class="lead">Memutuskan untuk memulai hobi mendaki gunung adalah langkah awal menuju ratusan petualangan tak terlupakan. Namun, tanpa panduan yang tepat, ekspektasi pemandangan indah bisa berubah menjadi pengalaman buruk dan berbahaya.</p>
      
      <h2>1. Persiapan Fisik dan Mental Jauh Hari</h2>
      <p>Mendaki gunung bukanlah sekadar berjalan jauh. Medan yang menanjak, cuaca ekstrem, dan beban keril menuntut kebugaran tubuh secara menyeluruh. Minimal 3 minggu sebelum keberangkatan, rutinkan olahraga kardio seperti <em>jogging</em>, berenang, atau sekadar naik-turun tangga gedung.</p>
      <blockquote>"Kemenangan terbesar seorang pendaki bukanlah takluknya puncaknya, melainkan pulangnya ia ke rumah dengan selamat."</blockquote>
      <p>Jangan lupakan mental. Alam tidak pernah bisa diprediksi. Belajarlah untuk sabar, menekan ego, dan siap untuk skenario menunda ke puncak jika cuaca memburuk.</p>

      <h2>2. Peralatan Wajib (Jangan Ada yang Terlewat!)</h2>
      <p>Banyak pemula salah kaprah membawa barang-barang tidak penting yang hanya menambah beban. Fokuslah pada <span class="highlight">The Ten Essentials</span> jika Anda berniat bertahan hidup di cuaca tak menentu:</p>
      <ul>
        <li><strong>Navigasi:</strong> Peta topografi, kompas, atau GPS (bukan sekadar HP).</li>
        <li><strong>Penerangan:</strong> Headlamp dengan baterai cadangan.</li>
        <li><strong>Perlindungan Matahari:</strong> Topi, kacamata hitam, sunblock.</li>
        <li><strong>P3K:</strong> Plester, antiseptik, obat pribadi.</li>
        <li><strong>Pisau Lipat/Multitool:</strong> Sangat penting untuk perbaikan tenda darurat.</li>
        <li><strong>Perapian:</strong> Pemantik atau korek gas kedap air.</li>
        <li><strong>Shelter Darurat:</strong> Tenda ultralight atau bivak bivy sack.</li>
        <li><strong>Nutrisi Ekstra:</strong> Makanan tinggi kalori (cokelat, energi bar).</li>
        <li><strong>Hidrasi Ekstra:</strong> Membawa persediaan air yang lebih dari estimasi.</li>
        <li><strong>Pakaian Ekstra:</strong> Sistem layering (Base layer, Insulating layer, Shell jacket). Jangan pakai bahan jeans!</li>
      </ul>

      <h2>3. Etika di Gunung (Leave No Trace)</h2>
      <p>Gunung bukanlah tempat pembuangan sampah atau ajang coret-coret. Konsep <em>Leave No Trace (LNT)</em> wajib dijunjung tinggi oleh siapa pun. Bawa turun kembali semua sampah logistik Anda, bahkan sampai puntung rokok sekalipun. Jangan memotong pepohonan hidup untuk membuat api unggun, dan hargailah pejalan lain dengan tidak menyetel musik kerasa dan berisik.</p>
      
      <h2>Sewa Gear Sebagai Jalan Tengah</h2>
      <p>Jika Anda ragu apakah hobi ini akan bertahan lama, <strong>jangan buru-buru membeli</strong> semua perlengkapan di atas secara langsung. Alat <em>outdoor</em> berkualitas sangat mahal harganya dan membutuhkan perawatan konstan. Cobalah untuk menyewa set lengkap pertama Anda dari profesional. Selain jauh lebih hemat, Anda memakai gear premium yang jaminan kualitas dan perawatannya sangat terjaga.</p>
      
      <p>Sudah siap melangkah ke atas awan? Pastikan rencana perjalanan dikomunikasikan dengan keluarga, dan selalu mendaki dengan teman yang handal / pemandu profesional untuk pengalaman pendakian pertama Anda.</p>
    `
  };

  return (
    <div className="bg-white min-h-screen pt-[120px] font-sans pb-24">
      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-stone-400 hover:text-primary font-bold text-xs uppercase tracking-widest transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Indeks Blog
        </Link>
        
        <div className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-[11px] font-black uppercase tracking-wider rounded-lg mb-6">
          {post.category}
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black text-black leading-[1.15] mb-8 tracking-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-stone-400 uppercase tracking-widest border-t border-stone-100 pt-6">
          <span className="flex items-center gap-2"><User className="w-4 h-4 text-primary" /> OLEH {post.author}</span>
          <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {post.date}</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-[1400px] mx-auto px-6 mb-20">
        <div className="aspect-[21/9] w-full bg-stone-100 rounded-[2rem] overflow-hidden shadow-2xl">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content wrapper */}
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-16">
        
        {/* Main Content using custom prose styling */}
        <article 
          className="text-[17px] md:text-[18px] leading-relaxed text-stone-700
            [&>p.lead]:text-xl [&>p.lead]:font-medium [&>p.lead]:text-black [&>p.lead]:line-height-[1.8] [&>p.lead]:mb-10
            [&>p]:mb-6
            [&>h2]:text-[28px] [&>h2]:font-extrabold [&>h2]:text-black [&>h2]:mt-14 [&>h2]:mb-6 [&>h2]:tracking-tight [&>h2]:leading-snug
            [&>ul]:list-none [&>ul]:space-y-4 [&>ul]:mb-10 [&>ul>li]:relative [&>ul>li]:pl-6
            [&>ul>li]:opacity-90
            [&>ul>li::before]:content-[''] [&>ul>li::before]:absolute [&>ul>li::before]:w-2 [&>ul>li::before]:h-2 [&>ul>li::before]:bg-primary [&>ul>li::before]:rounded-full [&>ul>li::before]:left-0 [&>ul>li::before]:top-2.5
            [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-10 [&>blockquote]:text-xl [&>blockquote]:md:text-2xl [&>blockquote]:italic [&>blockquote]:font-serif [&>blockquote]:text-stone-500 [&>blockquote]:leading-relaxed
            [&>p>span.highlight]:bg-primary/20 [&>p>span.highlight]:px-2 [&>p>span.highlight]:py-0.5 [&>p>span.highlight]:rounded-md [&>p>span.highlight]:font-bold [&>p>span.highlight]:text-black
            [&>p>strong]:text-black [&>p>strong]:font-bold
            [&>p>a]:text-primary [&>p>a]:font-bold [&>p>a]:underline [&>p>a]:underline-offset-4 hover:[&>p>a]:text-black
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Sidebar / Share Strip */}
        <div className="lg:border-l border-stone-200 lg:pl-10">
          <div className="sticky top-32">
            <h3 className="text-xs font-black uppercase tracking-widest text-stone-400 mb-6 flex items-center gap-2">
              <Share2 className="w-4 h-4" /> Bagikan
            </h3>
            <div className="flex lg:flex-col gap-4">
              <button className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all shadow-sm">
                <Facebook className="w-5 h-5 fill-current" />
              </button>
              <button className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-sky-500 hover:border-sky-500 hover:bg-sky-50 transition-all shadow-sm">
                <Twitter className="w-5 h-5 fill-current" />
              </button>
              <button className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-black hover:border-black hover:bg-stone-50 transition-all shadow-sm">
                <LinkIcon className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-stone-100">
              <h3 className="text-xs font-black uppercase tracking-widest text-stone-400 mb-5 flex items-center gap-2">
                <Tag className="w-4 h-4" /> Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-stone-100 text-stone-600 text-[11px] uppercase tracking-wider font-bold rounded-lg hover:bg-stone-200 cursor-pointer transition-colors">Pemula</span>
                <span className="px-3 py-1.5 bg-stone-100 text-stone-600 text-[11px] uppercase tracking-wider font-bold rounded-lg hover:bg-stone-200 cursor-pointer transition-colors">Tips</span>
                <span className="px-3 py-1.5 bg-stone-100 text-stone-600 text-[11px] uppercase tracking-wider font-bold rounded-lg hover:bg-stone-200 cursor-pointer transition-colors">Alat</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
