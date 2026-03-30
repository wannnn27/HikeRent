// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Neutral palette - primary colors
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          150: "#f0f0f0",
          200: "#ebebeb",
          300: "#d6d6d6",
          400: "#999999",
          500: "#666666",
          600: "#444444",
          700: "#333333",
          800: "#1a1a1a",
          900: "#000000",
        },
        // Light green accent - restrained and modern
        accent: {
          light: "#e8f5f1",
          lighter: "#c8e6df",
          DEFAULT: "#5cb384", // Soft, professional green
          dark: "#4a9370",
        },
        // Semantic colors
        success: "#4ade80",
        warning: "#facc15",
        error: "#ef4444",
        info: "#0ea5e9",
      },
      fontFamily: {
        sans: ["'Inter'", "'system-ui'", "sans-serif"],
        serif: ["'Merriweather'", "serif"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "16px", letterSpacing: "0.5px" }],
        sm: ["13px", { lineHeight: "18px", letterSpacing: "0.3px" }],
        base: ["15px", { lineHeight: "24px", letterSpacing: "0.2px" }],
        lg: ["17px", { lineHeight: "26px", letterSpacing: "0.1px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["32px", { lineHeight: "40px" }],
        "4xl": ["40px", { lineHeight: "48px" }],
        "5xl": ["48px", { lineHeight: "56px" }],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "64px",
      },
      borderRadius: {
        none: "0",
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
        sm: "0 2px 4px rgba(0, 0, 0, 0.06)",
        md: "0 4px 12px rgba(0, 0, 0, 0.08)",
        lg: "0 8px 24px rgba(0, 0, 0, 0.10)",
        xl: "0 12px 32px rgba(0, 0, 0, 0.12)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "4rem",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
