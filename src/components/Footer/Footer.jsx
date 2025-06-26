import React from "react";
import { useLocation } from "react-router-dom";
import footerLogo from "../../assets/Logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const socialLinks = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com",
  },
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com",
  },
  {
    icon: <FaWhatsapp />,
    link: "https://wa.me/62812345678", // Format nomor WhatsApp
  },
];

const contactInfo = [
  {
    icon: <FaLocationArrow />,
    text: "Yogyakarta, Indonesia",
  },
  {
    icon: <FaMobileAlt />,
    text: "+62 81274123456",
  },
];

const Footer = () => {
  const location = useLocation();

  // Tidak merender footer kecuali pada menu utama (/)
  if (location.pathname !== "/") {
    return null;
  }

  return (
    <div style={BannerImg} className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Details */}
          <div className="space-y-4 pl-6">
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <img src={footerLogo} alt="HikeRent Logo" className="w-12 h-12" />
              HikeRent
            </h1>
            <p className="text-gray-400 text-sm">
              HikeRent adalah platform penyewaan perlengkapan outdoor terpercaya yang menyediakan berbagai pilihan perlengkapan berkualitas tinggi untuk mendukung semua kebutuhan petualangan Anda di alam bebas.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 justify-self-center text-lg font-semibold mb-4">
            <h2 className="text-lg font-semibold mb-4">Link</h2>
            <ul className="space-y-2">
              {FooterLinks.map((link) => (
                <li
                  key={link.title}
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social and Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Connect with Us</h2>
            <div className="flex items-center gap-4 mb-6">
              {socialLinks.map((link, index) => (
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="text-gray-400 hover:text-primary text-2xl transition duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div className="flex items-center gap-3 text-gray-400" key={index}>
                  {info.icon}
                  <p className="text-sm">{info.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-12">
          &copy; {new Date().getFullYear()} HikeRent. Semua hak dilindungi.
        </div>
      </div>
    </div>
  );
};

export default Footer;
