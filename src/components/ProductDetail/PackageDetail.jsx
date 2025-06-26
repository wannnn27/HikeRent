import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../Cart/CartContext";
import PaketImg1 from "../../assets/paket/paket.png";
import PaketImg2 from "../../assets/paket/paket.png";
import PaketImg3 from "../../assets/paket/paket.png";
import PaketImg4 from "../../assets/paket/paket.png";

const packageDetails = {
  "6": {
    id: "6",
    img: PaketImg1,
    name: "Paket 1",
    price: 150000,
    availability: true,
    description: "Paket lengkap yang mencakup berbagai perlengkapan outdoor dengan harga hemat.",
    items: [
      "Tenda Dome 4 Orang",
      "Sleeping Bag (2 pcs)",
      "Matras Camping (2 pcs)",
      "Kompor Portable",
      "Headlamp (2 pcs)"
    ],
    specifications: [
      "Durasi sewa: 3 hari",
      "Kapasitas: 2-4 orang",
      "Termasuk tas pembawa",
      "Gratis pengambilan dan pengembalian"
    ],
    terms: [
      "Deposit Rp300.000 (dikembalikan setelah pengecekan)",
      "Booking minimal H-3 keberangkatan",
      "Kondisi alat harus dikembalikan sesuai saat pengambilan",
      "Kerusakan akan dikenakan biaya sesuai kerusakan"
    ]
  },
  "7": {
    id: "7",
    img: PaketImg2,
    name: "Paket 2",
    price: 200000,
    availability: true,
    description: "Paket medium dengan perlengkapan berkualitas tinggi untuk kenyamanan outdoor.",
    items: [
      "Tenda Dome 4 Orang Double Layer",
      "Sleeping Bag Premium (2 pcs)",
      "Matras Self-Inflating (2 pcs)",
      "Kompor Camping + Windshield",
      "Headlamp LED Pro (2 pcs)",
      "Carrier 45L"
    ],
    specifications: [
      "Durasi sewa: 3 hari",
      "Kapasitas: 2-4 orang",
      "Termasuk tas pembawa premium",
      "Gratis pengambilan dan pengembalian"
    ],
    terms: [
      "Deposit Rp400.000 (dikembalikan setelah pengecekan)",
      "Booking minimal H-3 keberangkatan",
      "Kondisi alat harus dikembalikan sesuai saat pengambilan",
      "Kerusakan akan dikenakan biaya sesuai kerusakan"
    ]
  },
  "8": {
    id: "8",
    img: PaketImg3,
    name: "Paket 3",
    price: 250000,
    availability: false,
    description: "Paket eksklusif dengan perlengkapan premium untuk pengalaman terbaik.",
    items: [
      "Tenda Dome 4 Orang Double Layer Premium",
      "Sleeping Bag Premium (4 pcs)",
      "Matras Self-Inflating Premium (4 pcs)",
      "Kompor Camping Ultra + Windshield",
      "Headlamp LED Pro (4 pcs)",
      "Carrier 60L (2 pcs)"
    ],
    specifications: [
      "Durasi sewa: 4 hari",
      "Kapasitas: 4-6 orang",
      "Termasuk tas pembawa premium",
      "Gratis pengambilan dan pengembalian"
    ],
    terms: [
      "Deposit Rp500.000 (dikembalikan setelah pengecekan)",
      "Booking minimal H-3 keberangkatan",
      "Kondisi alat harus dikembalikan sesuai saat pengambilan",
      "Kerusakan akan dikenakan biaya sesuai kerusakan"
    ]
  },
  "9": {
    id: "9",
    img: PaketImg4,
    name: "Paket 4",
    price: 250000,
    availability: true,
    description: "Paket outdoor ekonomis dengan perlengkapan esensial untuk kegiatan alam.",
    items: [
      "Tenda Dome 2 Orang",
      "Sleeping Bag (2 pcs)",
      "Matras Camping (2 pcs)",
      "Kompor Portable Mini",
      "Headlamp (2 pcs)"
    ],
    specifications: [
      "Durasi sewa: 2 hari",
      "Kapasitas: 1-2 orang",
      "Termasuk tas pembawa",
      "Gratis pengambilan dan pengembalian"
    ],
    terms: [
      "Deposit Rp250.000 (dikembalikan setelah pengecekan)",
      "Booking minimal H-3 keberangkatan",
      "Kondisi alat harus dikembalikan sesuai saat pengambilan",
      "Kerusakan akan dikenakan biaya sesuai kerusakan"
    ]
  }
};

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const packageData = packageDetails[id];
  
  const [quantity, setQuantity] = useState(1);

  if (!packageData) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-red-500">Paket tidak ditemukan</h2>
        <button onClick={() => navigate(-1)} className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-700">
          Kembali
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      ...packageData,
      quantity,
      type: 'package' // Menandai ini sebagai paket
    });
    alert("Paket berhasil ditambahkan ke keranjang!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-4">
        {/* Undo Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Kembali ke Home
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Image */}
          <div className="md:w-1/2">
            <img src={packageData.img} alt={packageData.name} className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Details */}
          <div className="md:w-1/2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{packageData.name}</h1>
              <p className="text-2xl text-blue-400">Rp{packageData.price.toLocaleString()}/paket</p>
            </div>
            
            <p className="text-gray-300">{packageData.description}</p>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-2">Jumlah Paket</h3>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
                >
                  -
                </button>
                <span className="px-4 text-xl">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
                >
                  +
                </button>
              </div>
            </div>

            {/* Items Included */}
            <div>
              <h3 className="font-semibold mb-2">Isi Paket</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {packageData.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="font-semibold mb-2">Spesifikasi Paket</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {packageData.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            {/* Terms and Conditions */}
            <div>
              <h3 className="font-semibold mb-2">Syarat dan Ketentuan</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {packageData.terms.map((term, index) => (
                  <li key={index}>{term}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!packageData.availability}
              className={`w-full py-3 px-4 rounded-full font-semibold transition duration-300 ${
                packageData.availability 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-500 cursor-not-allowed'
              }`}
            >
              {packageData.availability ? 'Sewa Paket Sekarang' : 'Paket Tidak Tersedia'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;