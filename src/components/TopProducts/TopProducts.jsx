import React from "react";
import { useNavigate } from "react-router-dom";
import PaketImg1 from "../../assets/paket/paket.png";
import PaketImg2 from "../../assets/paket/paket.png";
import PaketImg3 from "../../assets/paket/paket.png";
import PaketImg4 from "../../assets/paket/paket.png";

const productsData = [
  {
    id: "6",
    img: PaketImg1,
    name: "Paket 1",
    price: 150000,
    availability: true,
    aosDelay: 100,
    description:
      "Paket lengkap yang mencakup berbagai perlengkapan outdoor dengan harga hemat.",
  },
  {
    id: "7",
    img: PaketImg2,
    name: "Paket 2",
    price: 200000,
    availability: true,
    aosDelay: 200,
    description:
      "Paket medium dengan perlengkapan berkualitas tinggi untuk kenyamanan outdoor.",
  },
  {
    id: "8",
    img: PaketImg3,
    name: "Paket 3",
    price: 250000,
    availability: false,
    aosDelay: 300,
    description:
      "Paket eksklusif dengan perlengkapan premium untuk pengalaman terbaik.",
  },
  {
    id: "9",
    img: PaketImg4,
    name: "Paket 4",
    price: 250000,
    availability: true,
    aosDelay: 300,
    description:
      "Paket outdoor ekonomis dengan perlengkapan esensial untuk kegiatan alam.",
  },
];

const TopProducts = () => {
  const navigate = useNavigate(); // Untuk navigasi

  const handleNavigate = (id) => {
    navigate(`/package-detail/${id}`);
  };

  return (
    <div className="mt-14 mb-12 px-6 lg:px-16">
      {/* Header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold" data-aos="fade-up">
          Mau Lebih Hemat?
        </h1>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto" data-aos="fade-up">
          Sewa Paketan Aja
        </p>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productsData.map((data) => (
          <div
            key={data.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
          >
            {/* Product image */}
            <div className="relative h-48 flex items-center justify-center">
              <img
                src={data.img}
                alt={data.name}
                className="max-h-40 drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              {!data.availability && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  Habis
                </span>
              )}
            </div>

            {/* Product details */}
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                {data.name}
              </h2>
              <p className="text-primary text-xl font-bold mt-2">
                Rp{data.price}/paket
              </p>
              <button
                onClick={() => handleNavigate(data.id)}
                className={`mt-4 px-4 py-2 rounded-full shadow text-white ${
                  data.availability
                    ? "bg-primary hover:bg-primary-dark"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
                disabled={!data.availability}
              >
                Sewa Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
