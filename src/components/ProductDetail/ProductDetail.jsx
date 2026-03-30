import React, { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { useCart } from "../Cart/CartContext";

import { useAuth } from "../../contexts/AuthContext";

import Img1 from "../../assets/alat/Tenda.png";

import Img2 from "../../assets/alat/Careel.png";

import Img3 from "../../assets/alat/sleeping bag.png";

import Img4 from "../../assets/alat/Matras.png";

import Img5 from "../../assets/alat/sepatu.png";

import Img6 from "../../assets/alat/Kompor.png";

import Img7 from "../../assets/alat/headlamp.png";

import Img8 from "../../assets/alat/backpack.png";

const productDetails = {
  1: {
    id: "1",
    img: Img1,
    name: "Tenda Dome Ultralight",
    price: 40000,
    availability: true,
    category: "Tenda",
    description:
      "Tenda dome ultralight dengan teknologi double layer waterproof. Ideal untuk pendakian dan camping dengan desain yang mudah didirikan.",
    specs: [
      "Bahan: Polyester ripstop waterproof",
      "Inner layer: Breathable nylon mesh",
      "Frame: Aluminum 7001-T6",
      "Berat: 2.3 kg",
      "Dimensi: 210x140x110 cm",
    ],
    colors: ["Hijau Army", "Biru Navy", "Orange"],
    sizes: ["2 Orang", "4 Orang"],
    includes: [
      "Tenda utama",
      "Flysheet",
      "Frame lengkap",
      "Pasak 10 pcs",
      "Tali pengikat",
    ],
  },
  2: {
    id: "2",
    img: Img2,
    name: "Carrier Mountain Pro",
    price: 45000,
    availability: true,
    category: "Tas",
    description:
      "Carrier ergonomis dengan sistem back-support premium. Dilengkapi raincover dan kompartemen terpisah untuk sleeping bag.",
    specs: [
      "Bahan: Cordura 1000D",
      "Frame: Aluminum internal frame",
      "Hip belt: Padded",
      "Berat kosong: 1.8 kg",
    ],
    colors: ["Merah", "Hitam", "Biru"],
    sizes: ["45L", "50L", "60L"],
    includes: ["Carrier utama", "Raincover", "Organizer pocket"],
  },
  3: {
    id: "3",
    img: Img3,
    name: "Sleeping Bag Polar",
    price: 30000,
    availability: true,
    category: "Tidur",
    description:
      "Sleeping bag dengan isolasi thermal premium, cocok untuk suhu hingga 5°C. Dilengkapi dengan compression bag.",
    specs: [
      "Bahan luar: Nylon ripstop",
      "Bahan dalam: Polar fleece",
      "Suhu optimal: 5-15°C",
      "Berat: 1.2 kg",
    ],
    colors: ["Merah", "Biru Navy", "Hitam"],
    sizes: ["Regular", "Large"],
    includes: ["Sleeping bag", "Compression bag"],
  },
  4: {
    id: "4",
    img: Img4,
    name: "Matras Camping Premium",
    price: 20000,
    availability: true,
    category: "Tidur",
    description:
      "Matras self-inflating dengan ketebalan optimal. Nyaman digunakan dan mudah dikemas dalam ukuran kompak.",
    specs: [
      "Tebal: 3.8 cm",
      "Bahan: TPU coated fabric",
      "Dimensi: 183x51cm",
      "R-Value: 4.2",
    ],
    colors: ["Biru", "Hijau", "Orange"],
    sizes: ["Regular", "Large"],
    includes: ["Matras", "Repair kit", "Tas penyimpanan"],
  },
  5: {
    id: "5",
    img: Img5,
    name: "Sepatu Hiking Pro",
    price: 25000,
    availability: true,
    category: "Alas Kaki",
    description:
      "Sepatu hiking waterproof dengan grip premium untuk medan berbatu. Dilengkapi sistem ventilasi maksimal.",
    specs: [
      "Upper: Suede leather",
      "Outsole: Vibram rubber",
      "Waterproof membrane",
      "Berat: 450g/sepatu",
    ],
    colors: ["Hitam-Abu", "Coklat", "Olive"],
    sizes: ["40", "41", "42", "43"],
    includes: ["Sepatu sepasang", "Tali cadangan", "Tas sepatu"],
  },
  6: {
    id: "6",
    img: Img6,
    name: "Kompor Camping Ultra",
    price: 15000,
    availability: true,
    category: "Dapur",
    description:
      "Kompor portable ultra-ringan dengan sistem anti-angin. Efisiensi bahan bakar tinggi.",
    specs: [
      "Material: Titanium alloy",
      "Output: 3000W",
      "Berat: 146g",
      "Waktu didih: 3.5 menit (1L)",
    ],
    colors: ["Silver", "Hitam", "Orange"],
    sizes: ["Standard"],
    includes: ["Kompor", "Piezo igniter", "Tas penyimpanan"],
  },
  7: {
    id: "7",
    img: Img7,
    name: "Headlamp LED Pro",
    price: 10000,
    availability: true,
    category: "Lampu",
    description:
      "Headlamp LED dengan 5 mode pencahayaan dan baterai tahan lama. Jangkauan sinar hingga 100 meter.",
    specs: [
      "LED: CREE XP-G3",
      "Lumens: 300lm max",
      "Baterai: Li-ion 1800mAh",
      "IPX4 Water resistant",
    ],
    colors: ["Hitam", "Hijau", "Biru"],
    sizes: ["Universal"],
    includes: ["Headlamp", "Baterai", "Head strap"],
  },
  8: {
    id: "8",
    img: Img8,
    name: "Backpack Adventure 30L",
    price: 35000,
    availability: true,
    category: "Tas",
    description:
      "Backpack multifungsi dengan sistem kompartemen cerdas. Ideal untuk hiking ringan dengan laptop sleeve.",
    specs: [
      "Material: Polyester 600D",
      "Kapasitas: 30 Liter",
      'Laptop sleeve 15"',
      "Berat: 850g",
    ],
    colors: ["Hitam", "Navy", "Maroon"],
    sizes: ["30L"],
    includes: ["Backpack", "Raincover", "Chest strap"],
  },
};
const ProductDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } = useCart();

  const { isAuthenticated } = useAuth();

  const product = productDetails[id];

  const [selectedColor, setSelectedColor] = useState("");

  const [selectedSize, setSelectedSize] = useState("");

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white">
        {" "}
        <h2 className="text-3xl font-bold mb-6">Produk tidak ditemukan</h2>{" "}
        <button
          onClick={() => navigate("/home")}
          className="px-8 py-3 bg-primary text-white font-bold rounded-2xl"
        >
          {" "}
          Kembali ke Katalog{" "}
        </button>{" "}
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Pilih warna dan ukuran terlebih dahulu!");

      return;
    }

    addToCart({
      ...product,
      selectedColor,
      selectedSize,
      quantity,
    });

    alert("Produk berhasil ditambahkan ke keranjang!");
  };
  return (
    <div className="bg-white pt-32 pb-24 min-h-screen">
      {" "}
      <div className="container">
        {" "}
        {/* Back Navigation */}{" "}
        <button
          onClick={() => navigate("/home")}
          className="mb-10 flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group"
        >
          {" "}
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M15 19l-7-7 7-7"
            />{" "}
          </svg>{" "}
          <span className="text-sm font-bold uppercase tracking-widest">
            Back to Catalog
          </span>{" "}
        </button>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {" "}
          {/* Left Side: Product Gallery */}{" "}
          <div className="space-y-6" data-aos="fade-right">
            {" "}
            <div className="bg-[#F8F9FA] rounded-[48px] p-12 aspect-square flex items-center justify-center overflow-hidden border border-gray-100">
              {" "}
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply transform hover:scale-110 transition-transform duration-700"
              />{" "}
            </div>{" "}
            <div className="grid grid-cols-4 gap-4">
              {" "}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-50 rounded-2xl border border-gray-100"
                />
              ))}{" "}
            </div>{" "}
          </div>{" "}
          {/* Right Side: Product Details */}{" "}
          <div data-aos="fade-left">
            {" "}
            <div className="mb-8">
              {" "}
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
                {" "}
                {product.category}{" "}
              </span>{" "}
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tighter mb-4 leading-tight">
                {" "}
                {product.name}{" "}
              </h1>{" "}
              <div className="flex items-center gap-4">
                {" "}
                <div className="flex items-center gap-1">
                  {" "}
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className="w-4 h-4 text-yellow-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      {" "}
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />{" "}
                    </svg>
                  ))}{" "}
                  <span className="text-sm font-bold text-gray-400 ml-1">
                    5.0 (124)
                  </span>{" "}
                </div>{" "}
                <div className="w-[1px] h-4 bg-gray-200" />{" "}
                <span className="text-sm font-bold text-green-500 uppercase tracking-widest">
                  In Stock
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="p-8 bg-gray-50 rounded-[32px] border border-gray-100 mb-10">
              {" "}
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                Price per day
              </p>{" "}
              <p className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tighter">
                {" "}
                Rp{product.price.toLocaleString()}
                <span className="text-sm font-medium text-gray-400">
                  {" "}
                  / day
                </span>{" "}
              </p>{" "}
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                {" "}
                {product.description}{" "}
              </p>{" "}
              {/* Selection */}{" "}
              <div className="space-y-6 mb-10">
                {" "}
                <div>
                  {" "}
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Color Variation
                  </h4>{" "}
                  <div className="flex flex-wrap gap-2">
                    {" "}
                    {product.colors?.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-6 py-2 rounded-xl text-sm font-bold transition-all border ${
                          selectedColor === color
                            ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                            : "bg-white text-gray-500 border-gray-200 hover:border-primary"
                        }
`}
                      >
                        {" "}
                        {color}{" "}
                      </button>
                    ))}{" "}
                  </div>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Size / Version
                  </h4>{" "}
                  <div className="flex flex-wrap gap-2">
                    {" "}
                    {product.sizes?.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-2 rounded-xl text-sm font-bold transition-all border ${
                          selectedSize === size
                            ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                            : "bg-white text-gray-500 border-gray-200 hover:border-primary"
                        }
`}
                      >
                        {" "}
                        {size}{" "}
                      </button>
                    ))}{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              {/* Specs & Includes */}{" "}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                {" "}
                <div>
                  {" "}
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    Specifications
                  </h4>{" "}
                  <ul className="space-y-2">
                    {" "}
                    {product.specs?.map((spec, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm font-medium text-gray-600"
                      >
                        {" "}
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />{" "}
                        {spec}{" "}
                      </li>
                    ))}{" "}
                  </ul>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    Included
                  </h4>{" "}
                  <ul className="space-y-2">
                    {" "}
                    {product.includes?.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm font-medium text-gray-600"
                      >
                        {" "}
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />{" "}
                        {item}{" "}
                      </li>
                    ))}{" "}
                  </ul>{" "}
                </div>{" "}
              </div>{" "}
              {/* Action */}{" "}
              <div className="flex items-center gap-4">
                {" "}
                <div className="flex items-center bg-white border border-gray-200 rounded-2xl p-1">
                  {" "}
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center font-bold hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    -
                  </button>{" "}
                  <span className="w-12 text-center font-bold">{quantity}</span>{" "}
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center font-bold hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    +
                  </button>{" "}
                </div>{" "}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all active:scale-95"
                >
                  {" "}
                  Add to Cart{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default ProductDetail;
