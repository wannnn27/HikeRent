// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        DEFAULT: '#1a202c', // Warna untuk mode terang
        dark: '#f7fafc', 
      },
      colors: {
        lightBackground: "#f8f9fa", // Warna abu-abu muda untuk mode terang
        lightText: "#212529", // Warna teks untuk mode terang
        darkBackground: "#1f2937", // Warna latar belakang gelap
        darkText: "#e5e7eb", // Warna teks untuk mode gelap
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
