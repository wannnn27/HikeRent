import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../Cart/CartContext";
import Img1 from "../../assets/alat/Tenda.png";
import Img2 from "../../assets/alat/Careel.png";
import Img3 from "../../assets/alat/sleeping bag.png";
import Img4 from "../../assets/alat/Matras.png";
import Img5 from "../../assets/alat/sepatu.png";
import Img6 from "../../assets/alat/Kompor.png";
import Img7 from "../../assets/alat/headlamp.png";
import Img8 from "../../assets/alat/backpack.png";
import PaketImg1 from "../../assets/paket/paket.png";
import PaketImg2 from "../../assets/paket/paket.png";
import PaketImg3 from "../../assets/paket/paket.png";
import PaketImg4 from "../../assets/paket/paket.png";

const productDetails = {
  1: {
    id: "1",
    img: Img1,
    name: "Tenda Dome Ultralight",
    price: 40000,
    availability: true,
    description: "Tenda dome ultralight dengan teknologi double layer waterproof. Ideal untuk pendakian dan camping dengan desain yang mudah didirikan.",
    specs: [
      "Bahan: Polyester ripstop waterproof",
      "Inner layer: Breathable nylon mesh",
      "Frame: Aluminum 7001-T6",
      "Berat: 2.3 kg",
      "Dimensi: 210x140x110 cm"
    ],
    colors: ["Hijau Army", "Biru Navy", "Orange"],
    sizes: ["2 Orang", "4 Orang"],
    includes: [
      "Tenda utama",
      "Flysheet",
      "Frame lengkap",
      "Pasak 10 pcs",
      "Tali pengikat",
      "Tas penyimpanan"
    ]
  },
  2: {
    id: "2",
    img: Img2,
    name: "Carrier Mountain Pro",
    price: 45000,
    availability: true,
    description: "Carrier ergonomis dengan sistem back-support premium. Dilengkapi raincover dan kompartemen terpisah untuk sleeping bag.",
    specs: [
      "Bahan: Cordura 1000D",
      "Frame: Aluminum internal frame",
      "Hip belt: Padded with quick-release",
      "Chest strap: Adjustable dengan whistle",
      "Berat kosong: 1.8 kg"
    ],
    colors: ["Merah", "Hitam", "Biru"],
    sizes: ["45L", "50L", "60L"],
    includes: [
      "Carrier utama",
      "Raincover",
      "Organizer pocket",
      "Hip belt pocket",
      "Manual perawatan"
    ]
  },
  3: {
    id: "3",
    img: Img3,
    name: "Sleeping Bag Polar",
    price: 30000,
    availability: true,
    description: "Sleeping bag dengan isolasi thermal premium, cocok untuk suhu hingga 5°C. Dilengkapi dengan compression bag untuk kemudahan penyimpanan.",
    specs: [
      "Bahan luar: Nylon ripstop",
      "Bahan dalam: Polar fleece", 
      "Isolasi: Hollow fiber 200gsm",
      "Suhu optimal: 5-15°C",
      "Berat: 1.2 kg"
    ],
    colors: ["Merah", "Biru Navy", "Hitam"],
    sizes: ["Regular", "Large", "XLarge"],
    includes: [
      "Sleeping bag",
      "Compression bag",
      "Kantong dalam",
      "Panduan perawatan"
    ]
  },
  4: {
    id: "4",
    img: Img4,
    name: "Matras Camping Premium",
    price: 20000,
    availability: true,
    description: "Matras self-inflating dengan ketebalan optimal. Nyaman digunakan dan mudah dikemas dalam ukuran kompak.",
    specs: [
      "Tebal: 3.8 cm",
      "Bahan: TPU coated fabric",
      "Dimensi: 183x51cm",
      "Berat: 850g",
      "R-Value: 4.2"
    ],
    colors: ["Biru", "Hijau", "Orange"],
    sizes: ["Regular", "Large", "XLarge"],
    includes: [
      "Matras",
      "Repair kit",
      "Compression strap",
      "Tas penyimpanan"
    ]
  },
  5: {
    id: "5",
    img: Img5,
    name: "Sepatu Hiking Pro",
    price: 25000,
    availability: true,
    description: "Sepatu hiking waterproof dengan grip premium untuk medan berbatu. Dilengkapi sistem ventilasi dan perlindungan kaki maksimal.",
    specs: [
      "Upper: Suede leather & cordura",
      "Outsole: Vibram rubber",
      "Waterproof membrane",
      "Sistem ventilasi aktif",
      "Berat: 450g/sepatu"
    ],
    colors: ["Hitam-Abu", "Coklat", "Olive"],
    sizes: ["39", "40", "41", "42", "43", "44"],
    includes: [
      "Sepatu sepasang",
      "Tali cadangan",
      "Tas sepatu",
      "Panduan perawatan"
    ]
  },
  6: {
    id: "6",
    img: Img6,
    name: "Kompor Camping Ultra",
    price: 15000,
    availability: true,
    description: "Kompor portable ultra-ringan dengan sistem anti-angin. Cocok untuk memasak di berbagai kondisi cuaca dengan efisiensi bahan bakar tinggi.",
    specs: [
      "Material: Titanium alloy",
      "Output: 3000W",
      "Berat: 146g",
      "Waktu didih: 3.5 menit (1L)",
      "Sistem anti-angin"
    ],
    colors: ["Silver", "Hitam", "Orange"],
    sizes: ["Standard"],
    includes: [
      "Kompor",
      "Piezo igniter",
      "Stand pot",
      "Tas penyimpanan",
      "Manual penggunaan"
    ]
  },
  7: {
    id: "7",
    img: Img7,
    name: "Headlamp LED Pro",
    price: 10000,
    availability: true,
    description: "Headlamp LED dengan 5 mode pencahayaan dan baterai tahan lama. Ideal untuk aktivitas outdoor malam hari dengan jangkauan sinar hingga 100 meter.",
    specs: [
      "LED: CREE XP-G3",
      "Lumens: 300lm max",
      "Baterai: Li-ion 1800mAh",
      "Durasi: 4-60 jam",
      "Water resistant IPX4"
    ],
    colors: ["Hitam", "Hijau", "Biru"],
    sizes: ["Universal"],
    includes: [
      "Headlamp",
      "Baterai rechargeable",
      "USB charging cable",
      "Head strap",
      "Manual"
    ]
  },
  8: {
    id: "8",
    img: Img8,
    name: "Backpack Adventure 30L",
    price: 35000,
    availability: true,
    description: "Backpack multifungsi dengan sistem kompartemen cerdas. Ideal untuk hiking ringan atau daypack dengan fitur laptop sleeve dan raincover.",
    specs: [
      "Material: Polyester 600D",
      "Kapasitas: 30 Liter",
      "Laptop sleeve 15\"",
      "Water resistant",
      "Berat: 850g"
    ],
    colors: ["Hitam", "Navy", "Maroon"],
    sizes: ["30L"],
    includes: [
      "Backpack",
      "Raincover",
      "Chest strap",
      "Internal organizer",
      "Manual perawatan"
    ],
    "package-6": {
      id: "package-6",
      img: PaketImg1,
      name: "Paket 1",
      price: 150000,
      availability: true,
      description: "Paket lengkap yang mencakup berbagai perlengkapan outdoor dengan harga hemat.",
      specs: [
        "Tenda dome 4 orang",
        "Sleeping bag (2 pcs)",
        "Matras camping (2 pcs)",
        "Kompor portable",
        "Headlamp (2 pcs)"
      ],
      duration: ["3 Hari", "5 Hari", "7 Hari"],
      includes: [
        "Semua peralatan dalam kondisi prima",
        "Tas penyimpanan untuk setiap item",
        "Panduan penggunaan",
        "Gratis ongkos kirim radius 5km",
        "Asuransi kerusakan"
      ]
    },
    "package-7": {
      id: "package-7",
      img: PaketImg2,
      name: "Paket 2",
      price: 200000,
      availability: true,
      description: "Paket medium dengan perlengkapan berkualitas tinggi untuk kenyamanan outdoor.",
      specs: [
        "Tenda dome 4 orang premium",
        "Sleeping bag (4 pcs)",
        "Matras camping (4 pcs)",
        "Kompor portable + gas",
        "Headlamp (4 pcs)",
        "Carrier 60L (2 pcs)"
      ],
      duration: ["3 Hari", "5 Hari", "7 Hari"],
      includes: [
        "Semua peralatan dalam kondisi prima",
        "Tas penyimpanan untuk setiap item",
        "Panduan penggunaan lengkap",
        "Gratis ongkos kirim radius 10km",
        "Asuransi kerusakan dan kehilangan"
      ]
    },
    "package-8": {
      id: "package-8",
      img: PaketImg3,
      name: "Paket 3",
      price: 250000,
      availability: false,
      description: "Paket eksklusif dengan perlengkapan premium untuk pengalaman terbaik.",
      specs: [
        "Tenda dome 6 orang premium",
        "Sleeping bag premium (6 pcs)",
        "Matras self-inflating (6 pcs)",
        "Kompor portable + gas",
        "Headlamp rechargeable (6 pcs)",
        "Carrier 60L (3 pcs)",
        "Trekking pole (3 pairs)"
      ],
      duration: ["3 Hari", "5 Hari", "7 Hari"],
      includes: [
        "Semua peralatan premium grade",
        "Tas penyimpanan waterproof",
        "Panduan penggunaan lengkap",
        "Gratis ongkos kirim radius 15km",
        "Asuransi all-risk",
        "Support teknis 24/7"
      ]
    },
    "package-9": {
      id: "package-9",
      img: PaketImg4,
      name: "Paket 4",
      price: 250000,
      availability: true,
      description: "Paket outdoor ekonomis dengan perlengkapan esensial untuk kegiatan alam.",
      specs: [
        "Tenda dome 2 orang",
        "Sleeping bag (2 pcs)",
        "Matras camping (2 pcs)",
        "Kompor portable mini",
        "Headlamp (2 pcs)",
        "Carrier 45L (1 pc)"
      ],
      duration: ["3 Hari", "5 Hari", "7 Hari"],
      includes: [
        "Semua peralatan dalam kondisi baik",
        "Tas penyimpanan basic",
        "Panduan penggunaan singkat",
        "Pengambilan di tempat",
        "Asuransi kerusakan basic"
      ]
    }
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = productDetails[id];
  
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-red-500">Produk tidak ditemukan</h2>
        <button onClick={() => navigate(-1)} className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-700">
          Kembali
        </button>
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
      quantity
    });
    alert("Produk berhasil ditambahkan ke keranjang!");
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
          Kembali 
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Image */}
          <div className="md:w-1/2">
            <img src={product.img} alt={product.name} className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Details */}
          <div className="md:w-1/2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl text-blue-400">Rp{product.price.toLocaleString()}/hari</p>
            </div>
            
            <p className="text-gray-300">{product.description}</p>

            {/* Colors */}
            <div>
              <h3 className="font-semibold mb-2">Pilihan Warna</h3>
              <div className="flex gap-2">
                {product.colors?.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full border ${
                      selectedColor === color ? 'border-blue-500 bg-blue-500/20' : 'border-gray-600'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="font-semibold mb-2">Pilihan Ukuran</h3>
              <div className="flex gap-2">
                {product.sizes?.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full border ${
                      selectedSize === size ? 'border-blue-500 bg-blue-500/20' : 'border-gray-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-2">Jumlah</h3>
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

            {/* Specifications */}
            <div>
              <h3 className="font-semibold mb-2">Spesifikasi</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {product.specs?.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            {/* Included Items */}
            <div>
              <h3 className="font-semibold mb-2">Kelengkapan</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {product.includes?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.availability}
              className={`w-full py-3 px-4 rounded-full font-semibold transition duration-300 ${
                product.availability 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-500 cursor-not-allowed'
              }`}
            >
              {product.availability ? 'Sewa Sekarang' : 'Stok Habis'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;