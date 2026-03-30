import React from "react";

import { useParams, Link } from "react-router-dom";

import BlogImage from "../../assets/hero/santai.jpg";

const BlogDetail = () => {
  const { id } = useParams();
  // Sample blog post data - replace with your actual data/API call
  const post = {
    id: id,
    title: "Tips Mendaki Gunung untuk Pemula",
    content: ` <p>Gunung adalah salah satu destinasi wisata alam yang banyak diminati oleh para pencinta petualangan. Namun, bagi pemula, mendaki gunung bisa menjadi pengalaman yang menantang. Artikel ini akan memberikan beberapa tips yang dapat membantu Anda mempersiapkan diri sebelum mendaki gunung.</p> <h2>Persiapan Sebelum Mendaki</h2> <p>Sebelum melakukan pendakian, penting untuk mempersiapkan tubuh dan mental. Pastikan Anda dalam kondisi fisik yang baik, karena mendaki gunung memerlukan stamina yang kuat. Lakukan olahraga ringan seperti lari atau jalan cepat beberapa minggu sebelum pendakian untuk meningkatkan daya tahan tubuh Anda. Selain itu, pastikan Anda memiliki mental yang siap untuk menghadapi segala tantangan yang mungkin terjadi di perjalanan.</p> <h2>Peralatan yang Diperlukan</h2> <p>Sebelum berangkat, pastikan Anda membawa perlengkapan yang tepat untuk mendaki gunung. Beberapa peralatan yang perlu Anda bawa antara lain adalah sepatu pendakian yang nyaman dan tahan lama, tas ransel dengan kapasitas yang cukup, jaket atau pakaian hangat, perlengkapan tidur, dan makanan serta air yang cukup. Jangan lupa untuk membawa alat navigasi seperti kompas atau GPS, serta perlengkapan medis dasar seperti perban dan obat-obatan yang dibutuhkan.</p> <h2>Keamanan dan Etika Selama Pendakian</h2> <p>Keamanan adalah hal yang paling penting selama pendakian. Selalu ikuti petunjuk dan jalur yang sudah ditentukan oleh pihak pengelola. Jangan tergoda untuk mencoba jalur lain yang tidak terjamin keamanannya. Selain itu, selalu bawa sampah Anda kembali dan jangan meninggalkan jejak di alam. Sebagai pendaki, Anda memiliki tanggung jawab untuk menjaga kelestarian alam sekitar.</p> <h2>Pemulihan Setelah Pendakian</h2> <p>Setelah mencapai puncak dan kembali turun, tubuh Anda membutuhkan waktu untuk pemulihan. Istirahat yang cukup dan makan makanan bergizi akan membantu proses pemulihan tubuh Anda. Jangan langsung melanjutkan aktivitas berat setelah pendakian, beri waktu tubuh Anda untuk beradaptasi kembali.</p> <h2>Tips Mendaki Gunung di Musim Hujan</h2> <p>Di musim hujan, pendakian gunung menjadi lebih berisiko, namun bukan berarti tidak bisa dilakukan. Anda harus mempersiapkan diri lebih matang, mulai dari membawa perlengkapan anti air, memilih jalur yang aman, hingga memeriksa cuaca dengan teliti sebelum berangkat. Selain itu, penting untuk selalu waspada terhadap perubahan cuaca yang cepat, karena hujan deras dapat menyebabkan jalanan licin dan berbahaya.</p> <h2>Keuntungan Mendaki Gunung Secara Berkala</h2> <p>Mendaki gunung secara berkala tidak hanya memberikan tantangan fisik, tetapi juga meningkatkan kesehatan mental. Aktivitas fisik yang dilakukan di alam bebas dapat membantu mengurangi stres, meningkatkan kualitas tidur, dan meningkatkan suasana hati secara keseluruhan. Selain itu, sering mendaki gunung akan memperkuat stamina tubuh, membuat Anda lebih tahan terhadap cuaca ekstrem, dan meningkatkan rasa percaya diri.</p> <h2>Mendaki Gunung: Mengapa Mental Lebih Penting dari Fisik</h2> <p>Walaupun fisik yang prima sangat penting, mental yang kuat jauh lebih berpengaruh dalam mendaki gunung. Ketika Anda menghadapi kesulitan di tengah perjalanan, mental yang positif akan membantu Anda untuk terus maju. Kekuatan mental akan membantu Anda mengatasi rasa lelah, rasa takut, atau bahkan saat cuaca buruk. Latihlah mental Anda dengan meditasi, visualisasi positif, atau berbicara dengan teman pendaki untuk menjaga semangat dan fokus selama perjalanan.</p>`,
    image: BlogImage,
    date: "2024-01-15",
    author: "Adi",
  };
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {" "}
      <Link
        to="/blog"
        className="text-primary hover:text-primary/80 mb-6 inline-block"
      >
        {" "}
        ← Kembali ke Blog{" "}
      </Link>{" "}
      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        {" "}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover"
        />{" "}
        <div className="p-8">
          {" "}
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {" "}
            {post.title}
          </h1>{" "}
          <div className="flex items-center text-gray-500 mb-6">
            {" "}
            <span>{new Date(post.date).toLocaleDateString()}</span>{" "}
            <span className="mx-2">•</span> <span>{post.author}</span>{" "}
          </div>{" "}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />{" "}
        </div>{" "}
      </article>{" "}
    </div>
  );
};
export default BlogDetail;
