import React, { useState } from "react";

import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

import { db } from "../../firebaseconfig";

import { collection, addDoc } from "firebase/firestore";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Kirim data ke Firestore
      const docRef = await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date(), // Tambahkan waktu pengiriman
      });
      console.log("Pesan berhasil dikirim dengan ID:", docRef.id);
      // Reset form setelah sukses
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      alert("Pesan telah terkirim!");
    } catch (error) {
      console.error("Error mengirim pesan:", error);
      alert("Gagal mengirim pesan, coba lagi.");
    }
    setLoading(false);
  };
  const contactInfo = [
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Telepon",
      content: "+62 274 123 456",
      link: "tel:+62274123456",
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      content: "info@hikerent.com",
      link: "mailto:info@hikerent.com",
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Lokasi",
      content: "Jl. Malioboro No. 123, Yogyakarta",
      link: "https://maps.google.com",
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: "Jam Operasional",
      content: "Senin - Minggu: 08:00 - 20:00",
      link: null,
    },
  ];
  return (
    <div className="container mx-auto px-[clamp(24px,6vw,96px)] py-16 pt-[120px] min-h-screen bg-white">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black text-black mb-4 tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          Hubungi <span className="text-primary">Kami</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Punya pertanyaan atau butuh bantuan? Jangan ragu untuk menghubungi
          kami. Tim kami siap membantu Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-[0_20px_40px_rgba(62,207,108,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-50 text-primary rounded-xl flex items-center justify-center">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-black text-lg">
                    {info.title}
                  </h3>
                </div>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-500 hover:text-primary font-medium transition-colors"
                    target={info.title === "Lokasi" ? "_blank" : undefined}
                    rel={info.title === "Lokasi" ? "noopener noreferrer" : undefined}
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-500 font-medium">{info.content}</p>
                )}
              </div>
            ))}
          </div>

          <div className="w-full h-[320px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8314021524174!2d110.36341227573823!3d-7.797915677574185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5796db06c7ef%3A0x395271cf052bc0cc!2sMalioboro%20Street!5e0!3m2!1sen!2sid!4v1703869720252!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HikeRent Location Yogyakarta"
              className="grayscale-[50%] group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-lg shadow-gray-200/40 border border-gray-100">
          <h2 className="text-2xl font-bold text-black mb-8 border-b border-gray-100 pb-4">
            Kirim Pesan
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-200"
                placeholder="Masukkan nama lengkap"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-200"
                placeholder="Masukkan email"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                Subjek
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-200"
                placeholder="Masukkan subjek pesan"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-200 resize-none"
                placeholder="Tuliskan pesan Anda"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-black font-bold py-4 px-6 rounded-xl hover:bg-primary-light hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/20 transition-all duration-300 uppercase tracking-widest text-sm"
              disabled={loading}
            >
              {loading ? "Mengirim..." : "Kirim Pesan"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
