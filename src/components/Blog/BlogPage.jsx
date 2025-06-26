import React from "react";
import { Link } from "react-router-dom";
import naikGunungImg from "../../assets/hero/naik gunung.jpg";
import pemandanganImg from "../../assets/hero/pemandangan.jpg";

const BlogPage = () => {
  // Sample blog data - replace with your actual data/API call
  const blogPosts = [
    {
      id: 1,
      title: "Tips Mendaki Gunung untuk Pemula",
      excerpt: "Panduan lengkap bagi pemula yang ingin memulai petualangan mendaki gunung...",
      image: naikGunungImg,
      date: "2024-01-15",
      author: "Adi",
    },
    {
      id: 2,
      title: "Peralatan Wajib untuk Camping",
      excerpt: "Daftar lengkap peralatan camping yang harus dibawa untuk pengalaman outdoor yang aman...",
      image: pemandanganImg,
      date: "2024-01-10",
      author: "Adi",
    },
    // Tambahkan lebih banyak blog jika diperlukan
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Blog HikeRent
          </h1>
          <Link
            to="/blog/create"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition duration-300"
          >
            Tulis Blog
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>{post.author}</span>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="mt-4 inline-block text-primary hover:text-primary/80 font-medium"
                >
                  Baca Selengkapnya →
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
