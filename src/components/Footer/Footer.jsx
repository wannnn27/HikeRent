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
  return (
    <div className="bg-black border-t border-white/5 py-32">
      <div className="container px-[clamp(24px,6vw,96px)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          {/* Company Details */}
          <div className="col-span-1 md:col-span-2 space-y-10">
            <h1 className="text-3xl font-black flex items-center gap-4 text-white tracking-widest" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <img
                  src={footerLogo}
                  alt="HikeRent Logo"
                  className="w-8 h-8 brightness-0"
                />
              </div>
              HIKE<span className="text-primary">RENT</span>
            </h1>
            <p className="text-gray-400 leading-relaxed max-w-md text-lg font-light">
              Partner terpercaya untuk setiap petualangan outdoor Anda.
              Menyediakan perlengkapan premium dengan standar sterilisasi tinggi
              untuk keamanan petualangan Anda.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary hover:text-white hover:border-primary/50 hover:bg-primary/20 transition-all duration-300"
                >
                  {link.icon || link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="space-y-10">
            <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.25em]">
              Quick Navigation
            </h2>
            <ul className="space-y-5">
              {FooterLinks.map((link) => (
                <li key={link.title}>
                  <a
                     href={link.link}
                     className="text-gray-400 font-medium text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.25em]">
              Contact Info
            </h2>
            <div className="space-y-8">
               {contactInfo.map((info, index) => (
                 <div className="flex items-start gap-4" key={index}>
                    <div className="w-10 h-10 rounded-lg bg-white/5 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10">
                      {info.icon}
                    </div>
                    <p className="text-gray-400 font-medium leading-relaxed text-sm">
                      {info.text}
                    </p>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold">
             &copy; {new Date().getFullYear()} HikeRent Platform. Crafted for Explorer.
           </p>
           <div className="flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600">
             <a href="#" className="hover:text-primary transition-colors">
               Privacy Policy
             </a>
             <a href="#" className="hover:text-primary transition-colors">
               Terms of Service
             </a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
