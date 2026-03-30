import React from "react";

import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Agus",
    text: "Pengalaman berbelanja yang luar biasa! Perlengkapan hiking yang disewakan benar-benar berkualitas dan sangat nyaman digunakan.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Rohman",
    text: "Layanan HikeRent sangat memuaskan. Saya bisa mendapatkan semua perlengkapan yang saya butuhkan untuk berkemah tanpa repot.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Joko",
    text: "Harga yang ditawarkan sangat terjangkau, dan kualitas perlengkapannya tidak mengecewakan. Saya sangat merekomendasikan HikeRent.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Taufik",
    text: "Proses penyewaan di HikeRent sangat mudah dan cepat. Perlengkapan yang saya dapatkan pun dalam kondisi prima.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="py-32 bg-white">
      <div className="container px-[clamp(24px,6vw,96px)] mx-auto">
        {/* header section */}
        <div className="text-center mb-24 max-w-[600px] mx-auto">
          <p className="text-primary font-bold text-xs uppercase tracking-[0.25em] mb-4">
            Community Love
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-black tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            TESTIMONI <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(62,207,108,0.6)" }}>PENDAKI</span>
          </h2>
          <div className="w-16 h-1 bg-primary mt-6 mx-auto rounded-full"></div>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in" className="testimonial-slider">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="py-12 px-5">
                <div className="relative bg-white rounded-2xl p-10 shadow-[0_24px_48px_rgba(0,0,0,0.08)] border border-gray-100 hover:border-primary/30 transition-all duration-500 group h-full flex flex-col justify-between">
                  <div className="absolute -top-10 left-10">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-xl transition-transform group-hover:scale-110 duration-500">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-10 space-y-6">
                    <p className="text-gray-500 italic leading-relaxed text-lg font-medium">
                      "{data.text}"
                    </p>
                    <div>
                      <h4 className="text-xl font-bold text-black uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {data.name}
                      </h4>
                      <div className="flex items-center gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg key={s} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-10 right-10 text-primary opacity-[0.05]">
                    <svg width="60" height="60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3C14.017 2.44772 14.4647 2 15.017 2H21.017C21.5693 2 22.017 2.44772 22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H5C3.89543 8 3 7.10457 3 6V3C3 2.44772 3.44772 2 4 2H10C10.5523 2 11 2.44772 11 3V15C11 18.3137 8.31371 21 5 21H3Z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      <style>{`
        .testimonial-slider .slick-dots li button:before { color: #3ecf6c; opacity: 0.2; font-size: 8px; }
        .testimonial-slider .slick-dots li.slick-active button:before { color: #3ecf6c; opacity: 1; }
      `}</style>
    </div>
  );
};

export default Testimonials;
