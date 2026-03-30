// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#70df92",
          DEFAULT: "#3ecf6c", // Vibrant neon green from the Login image
          dark: "#2ba151",
        },
        secondary: "#000000",
        accent: "#3ecf6c",
        lightBackground: "#ffffff",
        darkBackground: "#050505",
        textLight: "#ffffff",
        textMuted: "#a1a1aa", // gray-400 for neutral readability on black
        darkGray: "#121212",
        black: "#000000",
        white: "#ffffff",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
