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
    link: "https://wa.me/62812345678",
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
    <footer className="bg-white border-t border-neutral-200">
      {/* Main Footer */}
      <div className="section-container py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-DEFAULT rounded-lg flex items-center justify-center flex-shrink-0">
                <img
                  src={footerLogo}
                  alt="HikeRent"
                  className="w-6 h-6"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
                HIKE<span className="text-accent-DEFAULT">RENT</span>
              </h2>
            </div>

            <p className="text-neutral-600 mb-8 leading-relaxed max-w-md">
              Your trusted partner for outdoor adventures. We provide premium gear with the highest hygiene and safety standards.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-accent-DEFAULT hover:text-white transition-colors duration-200 flex items-center justify-center"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-widest mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {FooterLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.link}
                    className="text-neutral-600 text-sm hover:text-accent-DEFAULT transition-colors duration-200"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-widest mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div className="flex items-start gap-3" key={index}>
                  <div className="w-8 h-8 rounded-md bg-accent-light text-accent-DEFAULT flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                    {info.icon}
                  </div>
                  <p className="text-neutral-600 text-sm">{info.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-200 bg-neutral-50">
        <div className="section-container py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-neutral-600 font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} HikeRent. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-neutral-600 font-medium uppercase tracking-widest">
            <a href="#" className="hover:text-accent-DEFAULT transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-DEFAULT transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
