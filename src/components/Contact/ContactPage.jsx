import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { db } from '../../firebaseconfig'; 
import { collection, addDoc } from 'firebase/firestore'; 

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
        timestamp: new Date() // Tambahkan waktu pengiriman
      });

      console.log("Pesan berhasil dikirim dengan ID: ", docRef.id);

      // Reset form setelah sukses
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      alert('Pesan telah terkirim!');
    } catch (error) {
      console.error("Error mengirim pesan: ", error);
      alert('Gagal mengirim pesan, coba lagi.');
    }
    setLoading(false);
  };

  const contactInfo = [
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Telepon",
      content: "+62 274 123 456",
      link: "tel:+62274123456"
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      content: "info@hikerent.com",
      link: "mailto:info@hikerent.com"
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Lokasi",
      content: "Jl. Malioboro No. 123, Yogyakarta",
      link: "https://maps.google.com"
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: "Jam Operasional",
      content: "Senin - Minggu: 08:00 - 20:00",
      link: null
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Hubungi Kami
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Punya pertanyaan atau butuh bantuan? Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-primary">{info.icon}</div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {info.title}
                  </h3>
                </div>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary"
                    target={info.title === "Lokasi" ? "_blank" : undefined}
                    rel={info.title === "Lokasi" ? "noopener noreferrer" : undefined}
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
                )}
              </div>
            ))}
          </div>

          <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8314021524174!2d110.36341227573823!3d-7.797915677574185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5796db06c7ef%3A0x395271cf052bc0cc!2sMalioboro%20Street!5e0!3m2!1sen!2sid!4v1703869720252!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HikeRent Location Yogyakarta"
            ></iframe>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Kirim Pesan
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                placeholder="Masukkan email"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Subjek
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                placeholder="Masukkan subjek pesan"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                placeholder="Tuliskan pesan Anda"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/80 transition duration-300"
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
